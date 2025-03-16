---
icon: pen-to-square
category:
  - UI自动化测试
  - selenium
tag:
  - selenium
  - 元素定位
  - pytest
  - cmd
order: 4
sticky: true
---

# 执行命令

以下是 **pytest 执行命令的详细指南**，涵盖目录、模块、用例筛选及常用参数组合，助你精准控制测试范围：

---

### **一、基础执行命令**

#### **1. 运行所有测试**
```bash
pytest
```
- **默认行为**：递归查找当前目录及子目录中所有 `test_*.py` 和 `*_test.py` 文件，执行其中以 `test_` 开头的函数/方法。

#### **2. 指定测试目录**
```bash
pytest tests/          # 执行 tests 目录下的所有测试
pytest src/tests/api  # 指定嵌套目录
```

#### **3. 指定测试模块**
```bash
pytest tests/test_login.py            # 单文件
pytest tests/test_*.py               # 通配符匹配多个文件
pytest "tests/old tests/test_api.py"  # 路径含空格时用引号包裹
```

#### **4. 指定测试类/方法**
```bash
pytest tests/test_user.py::TestUser            # 类中的所有测试
pytest tests/test_api.py::test_get_token       # 单个函数
pytest tests/db/test_models.py::TestUser::test_create  # 类中的特定方法
```

---

### **二、精准筛选测试用例**
#### **1. 按名称模糊匹配（`-k`）**
```bash
pytest -k "login and not admin"  # 名称包含 "login" 且不包含 "admin" 的测试
```

#### **2. 按标记过滤（`-m`）**
```bash
pytest -m "smoke and db"  # 运行同时有 @pytest.mark.smoke 和 @pytest.mark.db 标记的测试
```

#### **3. 按节点ID运行**
先获取完整节点ID：
```bash
pytest --collect-only -q  # 列出所有测试的节点ID
```
然后执行：
```bash
pytest tests/test_api.py::test_login[param1]  # 参数化测试的特定参数组合
```

---

### **三、常用参数组合**
#### **1. 基础组合**
```bash
pytest -v                  # 显示详细输出（每个测试用例名称）
pytest --tb=short          # 简化错误跟踪信息（可选: auto, long, line, native）
pytest --lf                # 仅运行上次失败的测试（--last-failed）
pytest --ff                # 先运行上次失败的测试，再执行其他（--failed-first）
```

#### **2. 并行加速**
```bash
pytest -n 4               # 使用4个进程并行（需安装 pytest-xdist）
pytest -n auto            # 自动检测 CPU 核心数
```

#### **3. 覆盖率报告**
```bash
pytest --cov=my_project --cov-report=html  # 生成 HTML 覆盖率报告（需安装 pytest-cov）
```

---

### **四、实战场景示例**
#### **场景 1：快速验证修复的 Bug**
```bash
pytest --lf -v  # 仅重跑上次失败的测试，并显示详细信息
```

#### **场景 2：CI/CD 中的指定模块测试**
```bash
pytest tests/db/ -m "not slow"  # 执行 db 目录下所有非慢速测试
```

#### **场景 3：参数化测试的特定用例**
```bash
pytest tests/test_api.py::test_search[case1]  # 仅运行参数化为 case1 的测试
```

---

### **五、配置文件预设**
在 `pytest.ini` 中预设常用参数：
```ini
# pytest.ini
[pytest]
addopts = -v --tb=short -n auto
python_files = test_*.py check_*.py  # 自定义测试文件匹配模式
markers =
    smoke: 冒烟测试
    db: 数据库相关测试
```

---

### **六、总结**
- **精准定位**：通过路径、节点ID、标记 (`-m`) 和名称 (`-k`) 快速筛选测试
- **高效执行**：并行 (`-n`) + 失败优先 (`--lf/--ff`) 加速反馈循环
- **结果分析**：结合 `--cov` 和 `-v` 获取详细质量反馈

灵活组合这些命令参数，可显著提升测试执行效率！ 🚀