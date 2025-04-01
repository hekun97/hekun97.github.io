---
icon: pen-to-square
category:
  - UI自动化测试
  - selenium
tag:
  - pytest
  - fixture
  - case
order: 3
sticky: true
---

# 综合使用（fixture）

## 一、需求分析

同时使用 **class 级别**和 **function 级别** fixture，且 function 级别 fixture 依赖 class 级别 fixture。

## 二、示例代码

以下是完整示例，包含详细注释和执行顺序说明：

---

```python
import pytest

# ---------------------------
# 模拟业务逻辑（此部分非重点，只是模拟业务）
# ---------------------------
class Database:
    def __init__(self):
        self.tables = {}
    
    def create_table(self, name):
        self.tables[name] = []
    
    def drop_table(self, name):
        del self.tables[name]
    
    def insert_data(self, table, data):
        self.tables[table].append(data)

# ---------------------------
# class 级别 fixture (初始化数据库连接)
# ---------------------------
@pytest.fixture(scope="class")
def db_connection():
    """每个测试类共享的数据库连接"""
    print("\n[Class] 初始化数据库连接")
    db = Database()
    yield db  # 将数据库实例传递给测试类
    print("\n[Class] 关闭数据库连接")

# ---------------------------
# function 级别 fixture (依赖 class 级别的 db_connection)
# ---------------------------
@pytest.fixture
def temp_table(db_connection):  # 接收 class 级别 fixture 返回值
    """每个测试方法独立的临时表"""
    print("\n[Function] 创建临时表")
    table_name = "test_data"
    db_connection.create_table(table_name)
    yield table_name  # 传递表名给测试方法
    print("\n[Function] 删除临时表")
    db_connection.drop_table(table_name)

# ---------------------------
# 测试类
# ---------------------------
class TestDatabaseOperations:
    def test_insert_data(self, db_connection, temp_table):
        """测试数据插入"""
        db_connection.insert_data(temp_table, {"id": 1, "name": "Alice"})
        assert len(db_connection.tables[temp_table]) == 1
        print("\n执行 test_insert_data")

    def test_query_data(self, db_connection, temp_table):
        """测试数据查询"""
        assert temp_table in db_connection.tables
        print("\n执行 test_query_data")
```

---

## 三、执行输出及顺序说明
```bash
# 测试类初始化阶段
[Class] 初始化数据库连接

# 第一个测试方法执行流程
[Function] 创建临时表
执行 test_insert_data
[Function] 删除临时表

# 第二个测试方法执行流程
[Function] 创建临时表
执行 test_query_data
[Function] 删除临时表

# 测试类结束阶段
[Class] 关闭数据库连接
```

---

## 四、关键点解析
1. **依赖关系**：
   
   - `temp_table` (function级别) 依赖于 `db_connection` (class级别)
   - pytest 会自动处理依赖注入，确保 `db_connection` 在 `temp_table` 之前初始化
   
2. **生命周期对比**：
   | Fixture         | 初始化时机               | 清理时机                   |
   | --------------- | ------------------------ | -------------------------- |
   | `db_connection` | 类内第一个测试方法执行前 | 类内所有测试方法执行完成后 |
   | `temp_table`    | 每个测试方法执行前       | 每个测试方法执行完成后     |

3. **验证点**：
   - 两个测试方法共享**同一个**数据库连接 (`db_connection`)
   - 每个测试方法使用**独立的**临时表 (`temp_table`)

---

## 五、扩展模式：带参数注入
```python
@pytest.fixture(scope="class")
def db_config():
    return {"host": "localhost", "port": 5432}

@pytest.fixture(scope="class")
def db_connection(db_config):  # 依赖其他 class 级别 fixture
    print(f"连接数据库：{db_config['host']}:{db_config['port']}")
    # ...

@pytest.fixture
def temp_data(db_connection, request):  # 使用 request 参数获取动态数据
    table = request.param  # 从参数化测试获取表名
    db_connection.create_table(table)
    yield
    db_connection.drop_table(table)

@pytest.mark.parametrize("temp_data", ["users", "orders"], indirect=True)
class TestAdvancedOperations:
    def test_special_case(self, temp_data):
        # ...
```

---

## 六、最佳实践总结
1. **明确作用域**  
   
   - **class 级别**：用于昂贵资源（数据库、API 客户端）
   - **function 级别**：用于隔离数据（临时文件、测试账号）
   
2. **依赖顺序**  
   - 宽作用域（session/class）fixture → 窄作用域（function）fixture

3. **资源清理**  
   
   ```python
   @pytest.fixture
   def file_resource():
       with open("temp.txt", "w") as f:  # 使用 with 自动清理
           yield f
   ```
   
4. **类型提示**  
   ```python
   from typing import Generator
   
   @pytest.fixture(scope="class")
   def db_connection() -> Generator[Database, None, None]:
       db = Database()
       yield db
       db.close()
   ```

---

通过这种模式，可以高效管理分层级的测试资源，同时保证测试隔离性和执行性能。