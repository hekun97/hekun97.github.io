# Pytest内置fixture-request

在 Selenium 中结合 pytest 使用 **`Fixture`** 时，`request` 是一个非常重要的内置 Fixture 参数。它允许你在 Fixture 中访问当前测试用例的上下文信息（如参数、测试函数名称、模块等），从而实现动态控制 Fixture 的行为。以下是 `request` 的详细解析和典型用法：

### **1. `request` 的核心作用**

`request` 是 pytest 提供的一个内置 Fixture，当你在自定义 Fixture 中声明 `request` 参数时，pytest 会自动注入当前测试请求的上下文对象。通过 `request`，你可以：
- 访问 Fixture 的参数化数据（例如参数化浏览器类型）
- 获取测试用例的元信息（如测试函数名称、模块名称）
- 动态控制 Fixture 的初始化逻辑
- 添加测试后的清理逻辑（如关闭浏览器）

---

### **2. `request` 的典型属性**
`request` 对象包含以下常用属性：

| 属性/方法                | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `request.param`          | 如果 Fixture 被参数化，返回当前参数值（例如不同的浏览器类型） |
| `request.module`         | 当前测试用例所在的模块对象（例如 `test_module.py`）          |
| `request.function`       | 当前测试函数对象（例如 `test_login()`）                      |
| `request.cls`            | 如果测试用例在类中，返回类对象                               |
| `request.config`         | 访问 pytest 配置对象（例如读取命令行参数）                   |
| `request.addfinalizer()` | 注册一个清理函数（替代 `yield`，更灵活但需要手动管理）       |

---

### **3. 在 Selenium Fixture 中的应用场景**

#### **场景 1：参数化浏览器驱动**
假设需要根据参数动态创建不同的浏览器驱动（如 Chrome 或 Firefox）：

```python
import pytest
from selenium import webdriver

@pytest.fixture(params=["chrome", "firefox"])
def browser(request):
    # 根据参数创建浏览器实例
    if request.param == "chrome":
        driver = webdriver.Chrome()
    elif request.param == "firefox":
        driver = webdriver.Firefox()
    else:
        raise ValueError("Unsupported browser")
    
    # 将浏览器实例传递给测试用例
    yield driver
    
    # 清理：关闭浏览器
    driver.quit()

def test_example(browser):
    browser.get("https://www.example.com")
    assert "Example" in browser.title
```

- **关键点**：`params=["chrome", "firefox"]` 定义参数化，`request.param` 获取当前参数值。

---

#### **场景 2：访问测试用例元信息**
在 Fixture 中根据测试用例名称动态调整行为：

```python
@pytest.fixture
def setup_browser(request):
    driver = webdriver.Chrome()
    
    # 获取当前测试用例名称
    test_name = request.node.name
    print(f"Running test: {test_name}")
    
    # 将 driver 传递给测试用例
    request.cls.driver = driver  # 如果测试在类中
    yield driver
    
    # 清理
    driver.quit()

class TestLogin:
    def test_valid_login(self, setup_browser):
        self.driver.get("https://example.com/login")
        # ...

    def test_invalid_login(self, setup_browser):
        self.driver.get("https://example.com/login")
        # ...
```

---

#### **场景 3：动态清理逻辑**
使用 `request.addfinalizer()` 注册清理函数（替代 `yield`）：

```python
@pytest.fixture
def browser(request):
    driver = webdriver.Chrome()
    
    # 注册清理函数
    def close_browser():
        driver.quit()
    request.addfinalizer(close_browser)
    
    return driver
```

- **注意**：`addfinalizer()` 会在测试结束后执行，即使 Fixture 初始化过程中发生异常也会触发清理。

---

#### **场景 4：结合命令行参数**
通过 `request.config` 读取 pytest 命令行参数：

```python
def pytest_addoption(parser):
    parser.addoption("--browser", action="store", default="chrome", help="Browser to run tests")

@pytest.fixture
def browser(request):
    browser_name = request.config.getoption("--browser")
    if browser_name == "chrome":
        driver = webdriver.Chrome()
    else:
        driver = webdriver.Firefox()
    yield driver
    driver.quit()
```

运行测试时指定浏览器：
```bash
pytest --browser=firefox
```

---

### **4. 常见问题与技巧**

#### **参数化 Fixture 的依赖传递**
若 Fixture 依赖其他参数化的 Fixture，可以通过 `request.param` 传递多参数：
```python
@pytest.fixture(params=[("chrome", "desktop"), ("firefox", "mobile")])
def browser_config(request):
    return request.param  # 返回元组 ("chrome", "desktop")

@pytest.fixture
def browser(browser_config):
    browser_type, device = browser_config
    # 根据参数初始化
    # ...
```

---

#### **动态跳过测试**
在 Fixture 中根据条件跳过测试：
```python
@pytest.fixture
def browser(request):
    if request.config.getoption("--browser") == "safari":
        pytest.skip("Safari is not supported")
    # ...
```

---

### **5. 总结**
- **`request` 是 Fixture 的“瑞士军刀”**：通过它，你可以实现高度动态的测试环境配置。
- **参数化与清理**：`request.param` 和 `addfinalizer()` 是核心工具。
- **上下文感知**：通过 `request.module`、`request.function` 等属性，可以基于测试用例的上下文调整 Fixture 行为。

通过灵活使用 `request`，你可以构建更强大、可维护的 Selenium 测试框架！