---
icon: pen-to-square
category:
  - UI自动化测试
tag:
  - selenium
  - 操作元素
order: 2
sticky: true
---

# 操作元素

以下是 Selenium 中 **定位元素后的常用操作方法** 的详细解析，包含核心方法、实战场景及避坑指南：

---

## 一、基础交互操作

### 1. 点击元素：`click()`
#### 用途
触发元素的点击事件（如按钮、链接、复选框）。
```python
login_button = driver.find_element(By.ID, "login-btn")
login_button.click()
```

#### 注意事项
- **元素状态**：确保元素可点击（可见、未禁用）
- **异常处理**：捕获 `ElementNotInteractableException`
- **替代方案**：通过 JavaScript 强制点击（非推荐）：
  ```python
  driver.execute_script("arguments[0].click();", login_button)
  ```

---

### 2. 输入文本：`send_keys(text)`
#### 用途
向输入框、文本域等元素输入内容。
```python
username_field = driver.find_element(By.NAME, "username")
username_field.send_keys("admin")  # 输入文本
password_field.send_keys("123456\n")  # 末尾加 \n 模拟回车
```

#### 高级用法
- **组合键操作**（需导入 `Keys`）：
  ```python
  from selenium.webdriver.common.keys import Keys
  search_field.send_keys("selenium" + Keys.ENTER)  # 输入后按回车
  ```
- **清空后输入**：
  ```python
  search_field.clear()
  search_field.send_keys("new text")
  ```

---

### 3. 清空内容：`clear()`
#### 用途
清空输入框或文本域的现有内容。
```python
email_field = driver.find_element(By.ID, "email")
email_field.clear()  # 清空后再输入新内容
email_field.send_keys("new@example.com")
```

#### 注意
- 部分输入框可能需要触发事件（如 `change`）才能生效，可手动触发：
  ```python
  email_field.send_keys(Keys.BACKSPACE * 10)  # 退格键清空
  ```

---

## 二、信息获取方法

### 1. 获取元素文本：`text` 属性
#### 用途
提取元素的可见文本内容。
```python
error_message = driver.find_element(By.CLASS_NAME, "error").text
assert "无效密码" in error_message
```

#### 注意
- 返回 **可见文本**（隐藏元素返回空字符串）
- 包含子元素文本（如 `<div>Hello <span>World</span></div>` → `"Hello World"`）

---

### 2. 获取属性值：`get_attribute(name)`
#### 用途
获取元素的 HTML 属性值（如 `href`、`value`）。
```python
link = driver.find_element(By.LINK_TEXT, "详情")
url = link.get_attribute("href")  # 获取链接地址
value = input_field.get_attribute("value")  # 获取输入框的值
```

#### 高级用法
- 获取自定义属性：
  ```python
  data_id = element.get_attribute("data-testid")
  ```

---

### 3. 获取 CSS 属性：`value_of_css_property(name)`
#### 用途
获取元素计算后的 CSS 样式值。
```python
color = button.value_of_css_property("color")  # 返回 "rgba(255, 0, 0, 1)"
font_size = button.value_of_css_property("font-size")  # 返回 "16px"
```

---

## 三、状态判断方法

### 1. 是否可见：`is_displayed()`
#### 用途
判断元素是否在页面上可见。
```python
if element.is_displayed():
    element.click()
else:
    print("元素不可见")
```

---

### 2. 是否启用：`is_enabled()`
#### 用途
判断元素是否处于可交互状态（如表单字段未禁用）。
```python
submit_button = driver.find_element(By.ID, "submit")
if submit_button.is_enabled():
    submit_button.click()
```

---

### 3. 是否选中：`is_selected()`
#### 用途
判断复选框（Checkbox）或单选框（Radio）是否被选中。
```python
checkbox = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']")
if not checkbox.is_selected():
    checkbox.click()
```

---

## 四、高级交互操作

### 1. 悬停操作（Hover）
使用 `ActionChains` 模拟鼠标悬停：
```python
from selenium.webdriver.common.action_chains import ActionChains

menu = driver.find_element(By.ID, "dropdown-menu")
ActionChains(driver).move_to_element(menu).perform()
```

---

### 2. 拖放操作（Drag & Drop）
```python
source = driver.find_element(By.ID, "draggable")
target = driver.find_element(By.ID, "droppable")
ActionChains(driver).drag_and_drop(source, target).perform()
```

---

### 3. 文件上传
针对 `<input type="file">` 元素：
```python
file_input = driver.find_element(By.CSS_SELECTOR, "input[type='file']")
file_input.send_keys("/path/to/file.jpg")  # 直接发送文件路径
```

---

### 4. 执行 JavaScript
直接操作 DOM：
```python
driver.execute_script("arguments[0].scrollIntoView();", element)  # 滚动到元素
driver.execute_script("arguments[0].setAttribute('disabled', false);", input_field)
```

---

## 五、异常处理与最佳实践

### 1. 常见异常
- `ElementNotInteractableException`：元素存在但不可交互
- `NoSuchElementException`：元素未找到
- `StaleElementReferenceException`：元素引用已过期

### 2. 解决方案
- **显式等待**（等待元素可交互）：
  ```python
  from selenium.webdriver.support.ui import WebDriverWait
  from selenium.webdriver.support import expected_conditions as EC
  
  element = WebDriverWait(driver, 10).until(
      EC.element_to_be_clickable((By.ID, "dynamic-button"))
  )
  ```
- **刷新元素引用**：重新定位元素
- **重试机制**：捕获异常后重试操作

---

## 六、方法总结与对比

| **方法**          | **用途**         | **示例场景**             | **注意事项**                 |
| ----------------- | ---------------- | ------------------------ | ---------------------------- |
| `click()`         | 触发点击事件     | 按钮、链接、复选框       | 确保元素可点击               |
| `send_keys(text)` | 输入文本或组合键 | 表单填写、搜索框         | 清空旧内容需先调用 `clear()` |
| `clear()`         | 清空输入内容     | 重置表单字段             | 可能需手动触发事件           |
| `text`            | 获取可见文本     | 验证提示信息、数据提取   | 不包含隐藏文本               |
| `get_attribute()` | 获取 HTML 属性值 | 提取链接地址、自定义属性 | 属性名区分大小写             |
| `is_displayed()`  | 判断元素可见性   | 动态加载内容检查         | 不保证元素可交互             |
| `ActionChains`    | 复杂鼠标操作     | 悬停菜单、拖放元素       | 需调用 `perform()` 执行      |

---

掌握这些方法，可以覆盖 95% 的 Web 自动化操作需求！ 🚀