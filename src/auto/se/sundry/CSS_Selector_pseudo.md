# CSS Selector 伪类选择器

以下是 **Selenium 中 CSS Selector 伪类选择器** 的详细解析，涵盖常用伪类、适用场景及实战代码示例：

---

## 一、伪类选择器核心概念
### 1. 定义
伪类选择器用于 **定义元素的特殊状态** 或 **基于DOM结构的逻辑定位**，以 `:` 符号开头。

### 2. 与伪元素的区别
- **伪类**（Pseudo-classes）：描述元素状态（如悬停、焦点）
- **伪元素**（Pseudo-elements）：选择元素的特定部分（如 `::before`，`::first-line`）  
**注意**：Selenium 主要支持伪类选择器，不支持伪元素选择元素。

---

## 二、常用伪类选择器详解
以下伪类在 Selenium 中可直接用于元素定位：

---

### 1. 结构伪类（Structural）
#### `:nth-child(n)`
**用途**：选择父元素下的第 `n` 个子元素  
**示例**：
```css
/* 选择列表中的第3个 <li> */
ul li:nth-child(3)

/* 选择表格偶数行 */
tr:nth-child(even)

/* 选择前3个元素 */
div:nth-child(-n+3)
```

**实战代码**：
```python
# 定位表格第2行
row = driver.find_element(By.CSS_SELECTOR, "table tr:nth-child(2)")

# 选择所有偶数列表项
items = driver.find_elements(By.CSS_SELECTOR, "ul.list > li:nth-child(even)")
```

---

#### `:nth-of-type(n)`
**用途**：选择同级中第 `n` 个特定类型的元素  
**示例**：
```css
/* 选择第2个 <div> 子元素 */
div:nth-of-type(2)

/* 选择每组的第1个 <p> 元素 */
article p:nth-of-type(1)
```

**实战代码**：
```python
# 定位第二个按钮
button = driver.find_element(By.CSS_SELECTOR, "button:nth-of-type(2)")
```

---

#### `:first-child` / `:last-child`
**用途**：选择父元素的第一个/最后一个子元素  
**示例**：
```css
/* 列表首项 */
ul li:first-child

/* 表格最后一行 */
tr:last-child
```

**实战代码**：
```python
# 获取下拉菜单的最后一个选项
last_option = driver.find_element(By.CSS_SELECTOR, "select#colors option:last-child")
```

---

### 2. 状态伪类（State-based）
#### `:checked`
**用途**：选择被选中的复选框（Checkbox）或单选框（Radio）  
**示例**：
```css
input[type="checkbox"]:checked
```

**实战代码**：
```python
# 获取已选中的复选框
checked = driver.find_element(By.CSS_SELECTOR, "input:checked")
```

---

#### `:disabled` / `:enabled`
**用途**：选择禁用/启用的表单元素  
**示例**：
```css
input:disabled
button:enabled
```

**实战代码**：
```python
# 定位禁用的输入框
disabled_input = driver.find_element(By.CSS_SELECTOR, "#username:disabled")
```

---

#### `:required`
**用途**：选择必填字段  
**示例**：
```css
input:required
```

---

### 3. 交互伪类（需结合动作触发）
以下伪类需要 **手动触发元素状态** 后才能定位：

#### `:hover`
**用途**：匹配鼠标悬停状态的元素  
**注意**：Selenium 无法直接通过 `:hover` 定位，需使用 `ActionChains` 模拟悬停：
```python
from selenium.webdriver.common.action_chains import ActionChains

menu = driver.find_element(By.CSS_SELECTOR, ".dropdown")
ActionChains(driver).move_to_element(menu).perform()
submenu = driver.find_element(By.CSS_SELECTOR, ".dropdown-content:hover")
```

---

#### `:focus`
**用途**：选择获得焦点的元素  
**触发方式**：
```python
input_field = driver.find_element(By.CSS_SELECTOR, "#email")
input_field.click()  # 手动聚焦
focused = driver.find_element(By.CSS_SELECTOR, "input:focus")
```

---

## 三、组合使用技巧
### 1. 多重条件组合
```css
/* 选择第2个启用的按钮 */
button:enabled:nth-of-type(2)

/* 选择第一个被选中的复选框 */
input[type="checkbox"]:checked:first-child
```

### 2. 与属性选择器结合
```css
/* 选择必填的文本输入框 */
input[type="text"]:required

/* 选择第3个包含data-test属性的列表项 */
li[data-test]:nth-child(3)
```

---

## 四、注意事项与最佳实践
| **要点**           | **说明**                                                     |
| ------------------ | ------------------------------------------------------------ |
| 浏览器兼容性       | 不同浏览器对伪类的支持可能不同（如旧版IE）                   |
| 性能优化           | 避免过度复杂的组合选择器（如 `:nth-child(3n+2):not(:disabled)`） |
| 动态状态处理       | `:hover`, `:active` 等需通过 ActionChains 触发               |
| 优先使用简单选择器 | 当 `:nth-child` 可用时，避免使用 JavaScript 索引             |

---

## 五、实战场景示例
### 场景 1：处理动态表格
```python
# 定位表格中第5行的可编辑单元格
cell = driver.find_element(By.CSS_SELECTOR, "table tr:nth-child(5) td.editable:enabled")
```

### 场景 2：验证表单状态
```python
# 检查密码输入框是否处于错误状态
error_field = driver.find_element(By.CSS_SELECTOR, "input#password:invalid")
```

### 场景 3：批量操作列表
```python
# 选择前5个未完成的待办事项
todo_items = driver.find_elements(By.CSS_SELECTOR, "ul.todos li:not(.completed):nth-child(-n+5)")
```

---

掌握这些伪类选择器，可大幅提升复杂场景下的元素定位效率！ 🚀