---
icon: pen-to-square
category:
  - UI自动化测试
  - selenium
tag:
  - selenium
  - 元素定位
  - pytest
  - plugin
order: 3
sticky: true
---

# pytest常用插件

以下是 **pytest 常用插件** 的详细解析，涵盖核心功能、使用场景及实战示例：

---

### **一、测试体验增强**
#### **1. pytest-sugar**
- **功能**：美化控制台输出，显示进度条和彩色结果。
- **安装**：
  ```bash
  pip install pytest-sugar
  ```
- **效果**：
  
  ```bash
  ✓ test_pass.py ✔
  ✗ test_fail.py ✘
  ```
- **特性**：
  
  - 自动隐藏冗长的 `Traceback` 信息（可配置）
  - 支持 `--plain` 参数恢复原始输出

#### **2. pytest-html**
- **功能**：生成 HTML 格式测试报告。
- **安装**：
  ```bash
  pip install pytest-html
  ```
- **使用**：
  ```bash
  pytest --html=report.html
  ```
- **定制**：
  ```python
  # conftest.py
  def pytest_html_report_title(report):
      report.title = "My Test Report"
  ```

::: tip

一般使用Allure的测试报告更多。

:::

---

### **二、测试执行控制**
#### **1. pytest-ordering**
- **功能**：控制测试用例执行顺序。
- **安装**：
  ```bash
  pip install pytest-ordering
  ```
- **用法**：
  ```python
  @pytest.mark.run(order=2)
  def test_second():
      pass
  
  @pytest.mark.run(order=1)
  def test_first():
      pass
  ```
- **注意**：
  - 滥用会破坏测试独立性
  - 推荐仅用于必要的顺序依赖（如状态机测试）

#### **2. pytest-xdist**
- **功能**：并行运行测试，加速执行。
- **安装**：
  ```bash
  pip install pytest-xdist
  ```
- **使用**：
  ```bash
  pytest -n 4  # 使用4个CPU核心
  pytest -n auto  # 自动检测CPU核心数
  ```
- **注意**：
  - 并行时避免共享资源冲突（如文件、数据库）
  - 结合 `pytest-dependency` 需谨慎处理测试依赖

#### **3. pytest-dependency**
- **功能**：管理测试用例间的依赖关系。
- **安装**：
  ```bash
  pip install pytest-dependency
  ```
- **用法**：
  ```python
  @pytest.mark.dependency()
  def test_login():
      pass
  
  @pytest.mark.dependency(depends=["test_login"])
  def test_profile():
      pass  # 仅在 test_login 通过后执行
  ```

---

### **三、代码质量检测**
#### **1. pytest-cov**
- **功能**：生成代码覆盖率报告。
- **安装**：
  ```bash
  pip install pytest-cov
  ```
- **使用**：
  ```bash
  pytest --cov=my_project --cov-report=html
  ```
- **配置**：
  ```ini
  # .coveragerc
  [run]
  omit = tests/*, venv/*
  ```

#### **2. pytest-flake8**
- **功能**：集成 flake8 代码风格检查。
- **安装**：
  
  ```bash
  pip install pytest-flake8
  ```
- **使用**：
  ```bash
  pytest --flake8
  ```

---

### **四、Web 测试支持**
#### **1. pytest-selenium**
- **功能**：简化 Selenium 测试集成。
- **安装**：
  ```bash
  pip install pytest-selenium
  ```
- **特性**：
  - 自动管理浏览器驱动
  - 支持多浏览器配置
  ```ini
  # pytest.ini
  [pytest]
  drivers = chrome
  ```

#### **2. pytest-play**
- **功能**：使用 YAML 文件编写行为驱动测试（BDD）。
- **安装**：
  ```bash
  pip install pytest-play
  ```
- **示例**：
  ```yaml
  # test_login.yaml
  - name: Login test
    actions:
      - go: "https://example.com/login"
      - fill:
          username: "testuser"
          password: "secret"
      - click: "submit"
      - assert_text_present: "Welcome"
  ```

---

### **五、Mock 与 Fixture 增强**
#### **1. pytest-mock**
- **功能**：简化 Python `unittest.mock` 的使用。
- **安装**：
  ```bash
  pip install pytest-mock
  ```
- **用法**：
  ```python
  def test_api_call(mocker):
      mock_get = mocker.patch("requests.get")
      mock_get.return_value.status_code = 200
      assert call_api() == 200
  ```

#### **2. pytest-factoryboy**
- **功能**：集成 factory_boy 测试数据工厂。
- **安装**：
  ```bash
  pip install pytest-factoryboy
  ```
- **用法**：
  ```python
  # factories.py
  class UserFactory(factory.Factory):
      class Meta:
          model = User
      name = "Alice"
  
  # test_models.py
  def test_user(user_factory):
      user = user_factory()
      assert user.name == "Alice"
  ```

---

### **六、插件对比与选型**
| **插件**            | **核心用途**         | **推荐场景**                 |
| ------------------- | -------------------- | ---------------------------- |
| `pytest-sugar`      | 提升控制台输出可读性 | 所有项目                     |
| `pytest-xdist`      | 加速测试执行         | 大型测试套件                 |
| `pytest-ordering`   | 控制测试顺序         | 有严格顺序需求的测试（少用） |
| `pytest-dependency` | 管理测试依赖         | 集成测试/流程测试            |
| `pytest-cov`        | 代码覆盖率分析       | 质量门禁/CI 集成             |
| `pytest-selenium`   | 简化浏览器自动化     | Web UI 测试                  |

---

### **七、最佳实践**
1. **按需选择插件**：避免过度增加依赖
2. **统一配置管理**：通过 `pytest.ini` 或 `conftest.py` 集中配置
   ```ini
   # pytest.ini
   [pytest]
   addopts = -v --tb=short -n auto
   ```
3. **隔离测试环境**：使用 `pytest-xdist` 时配合 Docker 或临时数据库

---

### **八、总结**
- **效率优先**：`pytest-xdist` + `pytest-sugar` 提升执行速度和可读性
- **质量保障**：`pytest-cov` + `pytest-flake8` 确保代码规范
- **复杂场景**：`pytest-dependency` + `pytest-mock` 处理依赖和 Mock

合理组合这些插件，可构建出 **高效、稳定、易维护** 的测试体系！ 🛠️🚀