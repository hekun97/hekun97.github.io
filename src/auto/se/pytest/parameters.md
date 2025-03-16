# 参数化

以下是关于 **pytest 参数化（`@pytest.mark.parametrize`）** 的详细指南，涵盖基础语法、高级用法及实战技巧：

---

## **一、参数化核心概念**
### **1. 作用**
通过 **多组输入数据驱动同一测试逻辑**，避免重复编写测试代码，提升覆盖率和可维护性。

### **2. 基本语法**
```python
import pytest

@pytest.mark.parametrize("参数名1, 参数名2", [(值1, 值2), (值3, 值4)])
def test_example(参数名1, 参数名2):
    assert 逻辑表达式
```

---

## **二、基础用法示例**
### **1. 单参数测试**
```python
@pytest.mark.parametrize("number", [1, 2, 3])
def test_is_positive(number):
    assert number > 0
```

### **2. 多参数组合**
```python
@pytest.mark.parametrize("a, b, expected", [
    (1, 2, 3),
    (5, -3, 2),
    (0, 0, 0)
])
def test_addition(a, b, expected):
    assert a + b == expected
```

### **3. 参数化类方法**
```python
class TestMath:
    @pytest.mark.parametrize("x, y", [(2, 3), (4, 5)])
    def test_multiply(self, x, y):
        assert x * y == 6  # 第二组 (4,5) 会失败
```

---

## **三、高级用法**
### **1. 动态参数生成**
```python
def generate_data():
    return [(i, i*2) for i in range(3)]

@pytest.mark.parametrize("input, output", generate_data())
def test_dynamic(input, output):
    assert input * 2 == output
```

### **2. 参数化与 Fixture 结合**
```python
@pytest.fixture
def db_conn():
    return Database.connect()

@pytest.mark.parametrize("user_id, name", [(1, "Alice"), (2, "Bob")])
def test_user_query(db_conn, user_id, name):
    assert db_conn.get_user(user_id).name == name
```

### **3. 嵌套参数化**
```python
@pytest.mark.parametrize("x", [0, 1])
@pytest.mark.parametrize("y", [2, 3])
def test_nested(x, y):
    assert x + y < 5  # (1,3) 的组合会失败
```

---

## **四、错误处理与标记**
### **1. 特定参数组合跳过测试**
```python
import sys

@pytest.mark.parametrize("input, expected", [
    pytest.param(1, 2, id="正常值"),
    pytest.param(
        "a", 
        3, 
        marks=pytest.mark.skipif(sys.platform == "win32", reason="Windows 不兼容")
    )
])
def test_with_skip(input, expected):
    assert input + 1 == expected
```

### **2. 标记预期失败**
```python
@pytest.mark.parametrize("a, b", [
    (2, 3),
    pytest.param(5, 5, marks=pytest.mark.xfail)
])
def test_compare(a, b):
    assert a < b  # 第二组 (5,5) 预期失败
```

---

## **五、参数化测试报告优化**
### **1. 自定义测试 ID（`ids` 参数）**
```python
def id_func(param):
    return f"输入：{param}"

@pytest.mark.parametrize(
    "number", 
    [1, 2, 3],
    ids=id_func  # 或直接使用 lambda: ids=lambda x: f"num_{x}"
)
def test_with_ids(number):
    assert number > 0
```
**报告显示**：

```
test_demo.py::test_with_ids[输入：1] 
test_demo.py::test_with_ids[输入：2] 
test_demo.py::test_with_ids[输入：3]
```

### **2. 自动生成 ID**
当参数为复杂对象时，pytest 会自动生成唯一 ID：
```python
@pytest.mark.parametrize("data", [
    {"user": "admin", "role": 1},
    {"user": "guest", "role": 0}
])
def test_roles(data):
    assert validate_role(data["user"], data["role"])
```
**报告显示**：
```
test_demo.py::test_roles[data0] 
test_demo.py::test_roles[data1]
```

---

## **六、最佳实践**
| **场景**                   | **推荐做法**                                                 |
| -------------------------- | ------------------------------------------------------------ |
| **可读性优先**             | 使用 `ids` 参数或 `pytest.param` 的 `id` 属性为参数组合命名  |
| **避免过度参数化**         | 单个测试函数参数组合不超过 10 组，复杂场景拆分为多个测试函数 |
| **参数类型安全**           | 确保每组参数类型与测试逻辑兼容，必要时添加类型检查           |
| **资源密集型参数化**       | 结合 `scope="session"` 的 Fixture 减少重复初始化开销         |
| **与 `pytest-xdist` 兼容** | 确保参数数据可序列化（如避免传递数据库连接对象）             |

---

## **七、常见问题**
### **Q1：参数数量不匹配**
```python
# 错误示例：参数名与数据维度不一致
@pytest.mark.parametrize("a, b", [(1,)])  # 缺少一个值
def test_error(a, b):
    pass
```
**解决方案**：确保每组数据的元素数量与参数名数量一致。

### **Q2：动态参数生成时的作用域问题**
```python
data = []

@pytest.mark.parametrize("x", data)
def test_dynamic(x): ...

data.append(1)  # 测试收集后修改 data 无效
```
**解决方案**：在测试收集阶段生成数据（如使用函数生成）。

---

## **八、综合实战**
**场景**：测试用户登录接口的不同输入组合  
```python
import pytest

login_cases = [
    # (username, password, expected_status, expected_message)
    ("admin", "secret", 200, "Login success"),
    ("admin", "wrong", 401, "Invalid password"),
    ("", "secret", 400, "Username required"),
    ("guest", "", 400, "Password required"),
]

@pytest.mark.parametrize(
    "username, password, status, msg",
    login_cases,
    ids=lambda case: f"{case[0]}-{case[1]}:{case[2]}"  # 自定义ID
)
def test_login_api(api_client, username, password, status, msg):
    response = api_client.post("/login", json={
        "username": username,
        "password": password
    })
    assert response.status_code == status
    assert response.json()["message"] == msg
```

---

## **九、总结**
- **核心优势**：通过数据驱动减少代码冗余，提升测试覆盖率。
- **适用场景**：
  - 多输入组合验证（如边界值、等价类划分）
  - API 接口的不同参数测试
  - 算法函数的多种用例验证
- **避坑指南**：
  - 保持参数简洁可读
  - 避免测试逻辑与参数数据过度耦合
  - 结合 `pytest.param` 管理复杂参数

掌握参数化技巧，可让测试代码更简洁、更强大！ 🚀