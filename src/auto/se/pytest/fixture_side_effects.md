#  Fixture 副作用

### **一、为什么需要避免 Fixture 副作用？**

**副作用（Side Effects）** 指 Fixture 在测试过程中 **意外修改了共享资源的状态**，导致：
- **测试污染**：测试 A 修改了资源，影响测试 B 的结果
- **随机失败**：测试执行顺序不同导致结果不稳定
- **调试困难**：问题难以复现，尤其是并行测试时

---

### **二、`scope="session"` 的无状态设计**
#### **1. 无状态 Fixture 的定义**
- **不存储可变数据**：Session 级 Fixture 应作为 **只读配置** 或 **不可变资源**
- **可重复使用**：多次调用 Fixture 不会改变其行为或输出

#### **2. 错误示例（有状态）**
```python
@pytest.fixture(scope="session")
def counter():
    return {"count": 0}  # 可变字典，导致状态残留

def test_a(counter):
    counter["count"] += 1
    assert counter["count"] == 1  # 通过

def test_b(counter):
    counter["count"] += 1
    assert counter["count"] == 2  # 通过，但依赖 test_a 先执行
```

#### **3. 正确做法（无状态）**
```python
@pytest.fixture(scope="session")
def initial_count():
    return 0  # 返回不可变值

def test_a(initial_count):
    current = initial_count + 1
    assert current == 1  # 独立计算，不修改原始值

def test_b(initial_count):
    current = initial_count + 1
    assert current == 1  # 始终为1，不受其他测试影响
```

---

### **三、处理可变资源的策略**
#### **1. 资源加锁**
当多个测试进程/线程必须访问同一资源（如文件、数据库）时：
```python
import filelock

@pytest.fixture(scope="session")
def shared_file(tmp_path_factory):
    file_path = tmp_path_factory.getbasetemp() / "shared.log"
    lock = filelock.FileLock(file_path.with_suffix(".lock"))
    
    with lock:  # 加锁确保原子操作
        with open(file_path, "a") as f:
            f.write("initialized\n")
    
    yield file_path
    
    with lock:
        os.remove(file_path)  # 安全清理
```

#### **2. 资源隔离**
为每个测试生成唯一资源实例：
```python
@pytest.fixture
def temp_db(database):  # database 是 session 级连接池
    # 从连接池获取独立连接
    conn = database.get_connection()
    yield conn
    # 测试结束后归还连接，不修改连接池状态
    conn.rollback()
    database.release_connection(conn)
```

#### **3. 深拷贝可变对象**
防止共享对象被意外修改：
```python
import copy

@pytest.fixture
def config(default_config):  # default_config 是 session 级 Fixture
    return copy.deepcopy(default_config)  # 返回深拷贝副本

def test_config_update(config):
    config["timeout"] = 30  # 修改不影响其他测试
    assert config["timeout"] == 30
```

---

### **四、并行测试下的防护**
使用 **`pytest-xdist`** 并行执行时，需额外注意资源竞争：

#### **1. 进程级隔离**
```python
@pytest.fixture(scope="session")
def session_tmp_dir(tmp_path_factory):
    return tmp_path_factory.mktemp("data")  # 每个进程创建独立目录

@pytest.fixture
def test_file(session_tmp_dir):
    return session_tmp_dir / "test.txt"  # 进程内唯一
```

#### **2. 数据库事务回滚**
```python
@pytest.fixture
def db_transaction(database):
    conn = database.begin()  # 开启事务
    yield conn
    conn.rollback()  # 回滚，确保数据不变
```

---

### **五、最佳实践总结**
| **策略**            | **适用场景**         | **示例**                       |
| ------------------- | -------------------- | ------------------------------ |
| **返回不可变数据**  | 配置参数、常量       | 返回元组代替列表               |
| **资源池化 + 隔离** | 数据库连接、网络会话 | 每个测试获取独立连接           |
| **原子操作 + 锁**   | 文件操作、共享内存   | 使用 `filelock` 库             |
| **深拷贝**          | 复杂配置对象         | `copy.deepcopy()`              |
| **事务回滚**        | 数据库测试           | 每个测试在独立事务中执行并回滚 |

---

### **六、错误模式与修正**
#### **错误：直接修改 Session 级 Fixture**
```python
@pytest.fixture(scope="session")
def global_data():
    return []

def test_a(global_data):
    global_data.append(1)  # 污染其他测试

def test_b(global_data):
    assert len(global_data) == 0  # 失败！实际为1
```

#### **修正：防御性复制**
```python
@pytest.fixture(scope="session")
def global_data():
    return [1, 2, 3]  # 基础数据

@pytest.fixture
def safe_data(global_data):
    return list(global_data)  # 返回副本

def test_a(safe_data):
    safe_data.append(4)  # 不影响其他测试
```

---

### **七、总结**
- **Session 级 Fixture** 必须设计为 **无状态** 或 **只读**，避免成为测试污染的源头
- **可变资源** 应通过 **加锁、隔离、事务管理** 确保线程/进程安全
- **深拷贝** 和 **防御性编程** 是防止副作用的关键技巧

遵循这些原则，可大幅提升测试套件的 **稳定性和可维护性**！ 🔒🚀