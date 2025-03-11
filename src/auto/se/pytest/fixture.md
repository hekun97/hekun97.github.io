---
icon: pen-to-square
category:
  - UI自动化测试
  - selenium
tag:
  - selenium
  - 元素定位
  - pytest
  - fixture
order: 2
sticky: true
---

# Fixture

### **一、Fixture 基础**

#### **1. 什么是 Fixture？**
- **定义**：Fixture 是 pytest 中用于 **封装测试依赖** 的机制，替代传统的 `setup/teardown` 方法。
- **功能**：
  - 提供测试数据
  - 初始化/清理资源（如数据库连接、临时文件）
  - 共享配置逻辑

#### **2. 基本语法**
```python
import pytest

@pytest.fixture
def database():
    # Setup 阶段：初始化资源
    conn = create_connection()
    yield conn  # 测试用例执行阶段，返回资源（conn）供测试用例使用
    # Teardown 阶段：释放资源
    conn.close()                
```

::: tip 提示
**执行顺序**：`Fixture Setup` → 测试用例执行 → `Fixture Teardown`

:::

#### **3. 使用 Fixture**

将 Fixture 名称作为测试函数的参数：
```python
def test_query(database):
    result = database.execute("SELECT 1")
    assert result == 1
```

#### 4.  复杂资源释放场景

1. 释放多个资源

   ```python
   @pytest.fixture
   def multi_resources():
       res1 = ResourceA()
       res2 = ResourceB()
       yield res1, res2
       res2.cleanup()  # 先释放 res2
       res1.cleanup()  # 后释放 res1
   ```

2. 依赖其他 Fixture 的资源

   ```python
   @pytest.fixture
   def log_file(database):  # 依赖 database Fixture
       file = open_log_file()
       yield file
       file.close()  # 先关闭文件
       database.commit()  # 再提交数据库（假设 database 是 session 作用域）
   ```

3. 异常处理

   ```python
   @pytest.fixture
   def safe_resource():
       res = None
       try:
           res = create_fragile_resource()
           yield res
       finally:
           if res:  # 确保即使 Setup 失败也尝试清理
               res.cleanup()
   ```

---

### **二、Fixture 作用域**
通过 `scope` 参数控制 Fixture 的生命周期：

| **作用域** | **说明**                     | **执行频率**         |
| ---------- | ---------------------------- | -------------------- |
| `function` | 默认，每个测试函数执行一次   | 每个测试函数调用时   |
| `class`    | 每个测试类执行一次           | 类中所有测试方法共享 |
| `module`   | 每个测试模块执行一次         | 模块内所有测试共享   |
| `package`  | 每个测试包执行一次           | 包内所有模块共享     |
| `session`  | 整个测试会话执行一次（全局） | 所有测试共享         |

**示例**：
```python
@pytest.fixture(scope="module")
def shared_config():
    config = load_config()  # Setup 阶段
    yield config  # 测试用例执行阶段，返回资源（conn）供测试用例使用
    config.cleanup() # Teardown 阶段
```

---

### **三、Fixture 依赖与嵌套**
#### **1. Fixture 依赖其他 Fixture**
直接在 Fixture 参数中引用：
```python
@pytest.fixture
def user(database):  # 依赖【database】Fixture
    return database.get_user(id=1)
```

#### **2. 多级嵌套**
```python
@pytest.fixture
def app(database, cache):# 依赖【database, cache】Fixture
    app = create_app(database, cache)
    yield app
    app.shutdown()
```

---

### **四、参数化 Fixture**
使用 `params` 参数动态生成多个 Fixture 实例：
```python
@pytest.fixture(params=["mysql", "postgresql"])
def database(request):
    conn = create_connection(request.param)
    yield conn
    conn.close()

def test_connection(database):
    assert database.is_connected()
```
- 此示例会生成两个测试：分别使用 MySQL 和 PostgreSQL 连接

---

### **五、自动使用 Fixture**
通过 `autouse=True` 让 Fixture **无需显式声明** 自动执行：
```python
@pytest.fixture(autouse=True)
def setup_logging():
    logging.basicConfig(level=logging.DEBUG)
```

::: warning

- 当`autouse=True`时，在一个session内的所有的用例（`test`）都会自动调用这个Fixture。权限大，责任也大，确保只在必要作用域内使用，应谨慎单独标记为 `autouse=True`。

- `autouse=True` + `scope="function"` 是安全的组合，适用于需要**每个测试函数独立初始化/清理**的场景。

:::

---

### **六、动态 Fixture**
#### **1. 使用 `request` 对象**
访问测试上下文信息：
```python
@pytest.fixture
def temp_dir(request):
    dir_name = request.node.name  # 获取测试名称作为目录名
    path = Path(dir_name)
    path.mkdir()
    yield path
    shutil.rmtree(path)
```

#### **2. 工厂模式**
返回生成资源的函数而非资源本身：
```python
@pytest.fixture
def user_factory():
    def _create_user(name):
        return User(name=name + '001')
    return _create_user

def test_user(user_factory):
    user = user_factory("Alice")
    assert user.name == "Alice001"
```

---

### **七、Fixture 建议**
#### **1. 共享 Fixture**
将通用 Fixture 放在 `conftest.py` 文件中，整个目录下的测试均可使用。

**目录结构**：
```
tests/
├── conftest.py
├── test_api.py
└── test_db.py
```

#### **2. 清理资源（yield、addfinalizer）**
确保使用 `yield` 或 `addfinalizer` 释放资源：
```python
@pytest.fixture
def temp_file():
    file = tempfile.NamedTemporaryFile()
    yield file.name
    file.close()

# 或使用 addfinalizer
@pytest.fixture
def temp_file(request):
    file = tempfile.NamedTemporaryFile()
    def cleanup():  # Teardown 清理函数（cleanup）
        file.close()
    request.addfinalizer(cleanup)  # 支持多个清理函数
    request.addfinalizer(cleanup_1)  # 支持多个清理函数
    return file.name  # 返回测试用例需使用的资源（file.name）
```

 `yield` 和 `addfinalizer` 核心区别：

|    **特性**    |        **`yield`**         | **`addfinalizer`** |
| :------------: | :------------------------: | :----------------: |
|   代码可读性   | 更直观（类似上下文管理器） |      稍显复杂      |
| 多清理函数支持 |   只能有一个 teardown 块   | 可注册多个清理函数 |
|    异常处理    |          自动处理          |   需手动处理异常   |

::: warning

如果fixture作用域为函数（`function`），且当前函数被标记跳过（`@pytest.mark.skip`）时，不会触发该测试的 Fixture 依赖链。不过即使 Fixture 未被触发，也要使用防御性清理（`try...finally`）确保代码能处理资源未初始化的情况。

 `request.addfinalizer()`在另一篇文章中提及。

:::

#### **3. 避免 Fixture 副作用**

1. 使用 `scope="session"` 的 Fixture 应保持无状态

   - **不存储可变数据**：Session 级 Fixture 应作为 **只读配置** 或 **不可变资源**
   - **可重复使用**：多次调用 Fixture 不会改变其行为或输出

2. 对可变资源加锁（如文件、数据库）

   当多个测试进程/线程必须访问同一资源（如文件、数据库）时，应避免共享资源被多个进程/线程同时访问和修改。

---

### **七、最佳实践**

1. **优先使用 `yield`**：代码更简洁，符合 Python 上下文管理习惯
2. **明确清理顺序**：后初始化的资源先释放（类似栈的 FILO 顺序）
3. **防御性编程**：在 teardown 中检查资源是否存在
4. **结合 `try...finally`**：处理 Setup 阶段可能出现的异常

```python
@pytest.fixture
def critical_resource():
    res1 = None
    res2 = None
    try:  # 结合 try...finally，处理 Setup 阶段可能出现的异常
        res1 = allocate1()
        res2 = allocate2()
        yield res1, res2
    finally:
        if res2:  # 在 teardown 中检查资源是否存在
            release(res2)  # 后初始化的资源先释放
        if res1:  # # 在 teardown 中检查资源是否存在
            release(res1)  # # 先初始化的资源后释放
```

### **八、常见问题排查**

#### 1. 如果 `yield` 前的代码报错，teardown 会执行吗？

**不会**！此时 Fixture 尚未完成初始化，因此没有资源需要释放。这也是推荐在 `try...finally` 块中初始化的原因。

#### 2. 多个 Fixture 的释放顺序是什么？

**反向依赖顺序**：最后使用的 Fixture 最先释放

```python
def test_order(fixture_a, fixture_b):
    pass
# 释放顺序：fixture_b → fixture_a
```

#### 3. 其它常见问题

| **问题**                                           | **解决方案**                                |
| -------------------------------------------------- | ------------------------------------------- |
| Fixture 未找到                                     | 检查是否定义在 `conftest.py` 或测试文件中   |
| 循环依赖                                           | 重构 Fixture 结构，减少依赖层级             |
| 作用域冲突（如 session 级 Fixture 修改了全局状态） | 使用 `autouse=False` + 显式依赖管理         |
| Teardown 未执行                                    | 确保 Fixture 使用 `yield` 或 `addfinalizer` |

---

### **九、高级用法示例**
#### **1. 结合参数化**
```python
@pytest.fixture(params=[(1, 2), (3, 4)])
def numbers(request):
    return request.param

def test_sum(numbers):
    a, b = numbers
    assert a + b == sum(numbers)
```

#### **2. 动态跳过 Fixture**
```python
@pytest.fixture
def skip_on_env(request):
    if os.getenv("SKIP_TESTS"):
        pytest.skip("Test disabled by environment variable")
```

---

### **十、总结**
- **核心价值**：通过 Fixture 实现 **资源复用** 和 **关注点分离**，提升测试可维护性。
- **适用场景**：
  - 数据库/API 连接管理
  - 测试数据生成
  - 环境配置（如切换测试/生产模式）
  - 性能优化（共享高开销资源）

掌握 Fixture 的灵活用法，可让测试代码 **更简洁、健壮且易于扩展**！ 🚀