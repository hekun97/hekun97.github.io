---
icon: pen-to-square
category:
  - UI自动化测试
  - selenium
tag:
  - selenium
  - 元素定位
  - pytest
  - base
order: 1
sticky: true
---

# pytest基础和断言

以下是 **pytest 测试框架** 的核心使用指南，涵盖基础用法、断言方法、Fixture（setup/teardown）机制和常用插件：

---

## **一、pytest 基础使用**

### 1. 特点

1. 非常容易上手，入门简单，文档丰富，文档中有很多参考实例；
2. 支持简单的单元测试和复杂的功能测试；
3. 支持参数化；
4. 执行测试用例过程中，支持跳过操作；
5. 支持重复执行失败的case；
6. 支持运行由Nose，unittest编写的测试case；
7. pytest支持很多第三方插件；
8. 方便的和持续集成工具集成。

::: tip

对pytest的更多学习参考：[Pytest文档](https://learning-pytest.readthedocs.io/zh/latest/index.html)。

:::

### **2. 安装**
```bash
pip install pytest
```

### **3. 编写测试用例**
- 测试文件命名：`test_*.py` 或 `*_test.py`
- 测试函数命名：以 `test_` 开头
- 测试类命名：以 `Test` 开头（不含 `__init__` 方法）

**示例**：

```python
# test_math.py
def test_addition():
    print("-------> test_addition <-------")
    # 断言
    assert 1 + 1 == 2

class TestMath:
    def test_subtraction(self):
        print("-------> test_subtraction <-------")
        # 断言
        assert 5 - 3 == 2
```

### **4. 运行测试**

- **命令行模式**：在终端窗口运行测试。

  ```python
  pytest                     # 运行所有测试
  pytest test_math.py        # 运行指定文件
  pytest -k "subtract"       # 按名称筛选测试用例
  pytest -v                  # 显示详细输出
  pytest -s                  # 支持控制台打印，如果不加，print 不会出现任何内容
  ```

- **主函数模式**：在需被测试的文件（`test_math.py`）中增加主函数。
  
  ```python
  if __name__ == '__main__':
    pytest.main(["-s", "test_math.py"])
  ```
  
- **pycharm直接运行**：在pycharm软件中点击左侧运行按钮直接执行对应测试类、测试方法或者右击方法名、类名选择执行。

### 5. 运行结果

命令行模式运行的结果中：

- `. `表示成功 ；
- `F `表示失败。

---

## **二、断言机制**
pytest 使用原生 `assert` 语句，并自动提供 **详细错误信息**。

### **1. 基础断言**
```python
assert func() == expected_value  # 判断相等，不相等用【!=】
assert "hello" in response.text  # 判断包含，不包含用【not in】
assert user.is_authenticated is True  # 判断为True，相反用【False】
assert result is None  # 判断为空，不为空用【is not None】
```

::: tip

像API自动化中，需要完整判断返回的响应结果是否相等时，可以用`deppdiff`包。

:::

### **2. 异常断言**

使用 `pytest.raises` 捕获预期异常：
```python
import pytest

def test_division_by_zero():
    with pytest.raises(ZeroDivisionError):
        result = 1 / 0
```

### **3. 浮点数近似断言**
```python
assert 0.1 + 0.2 == pytest.approx(0.3)
```

### **4. 集合断言**
```python
assert {"a": 1, "b": 2} == {"b": 2, "a": 1}  # 字典无序比较通过
assert [1, 2] != [2, 1]                      # 列表有序比较
```

---

## **五、高级技巧**
### **1. 跳过测试**
```python
@pytest.mark.skip(reason="Not implemented yet")
def test_beta_feature():
    ...
```

::: tip 提示

后续可以再补充。

:::

### **2. 标记预期失败**

```python
@pytest.mark.xfail
def test_experimental():
    ...
```

### **3. 临时目录**
```python
def test_create_file(tmp_path):
    file = tmp_path / "test.txt"
    file.write_text("Hello")
    assert file.read_text() == "Hello"
```

---

## **六、目录结构建议**
```
project/
├── src/                  # 项目源码
├── tests/                # 测试代码
│   ├── conftest.py       # 全局 Fixture
│   ├── test_api.py
│   └── test_models.py
├── pytest.ini            # 配置文件
└── requirements.txt
```

---

## **七、总结**
- **核心优势**：简洁的断言语法、强大的 Fixture 系统、丰富的插件生态。
- **适用场景**：单元测试、接口测试、UI 测试（配合 Selenium/Playwright）。
- **学习资源**：  
  - 官方文档：[https://docs.pytest.org](https://docs.pytest.org)  
  - `pytest --help` 查看命令行选项

掌握 pytest 可显著提升测试代码的 **可维护性和执行效率**！ 🚀