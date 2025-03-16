---
icon: pen-to-square
category:
  - UI自动化测试
tag:
  - selenium
  - CSS Selector
  - XPath
order: 2
sticky: true
---

# **CSS Selector** 与 **XPath** 定位

以下是 **CSS Selector** 与 **XPath** 定位方式的全面对比解析，包含语法结构、典型场景及实战技巧：

---

## 一、CSS Selector 定位详解
### 1. 核心语法与优势
#### 基础结构
```python
driver.find_element(By.CSS_SELECTOR, "css_expression")
```

#### 优势
- **性能优异**：浏览器原生支持，解析速度快
- **简洁直观**：类似前端开发中的样式选择器
- **兼容性强**：现代浏览器统一支持

---

### 2. 典型场景与示例
#### 场景 1：精确匹配 ID
```html
<input id="search-box" type="text">
```
```python
# 定位
element = driver.find_element(By.CSS_SELECTOR, "#search-box")
```

#### 场景 2：多 Class 组合
```html
<button class="btn btn-primary disabled">提交</button>
```
```python
# 同时包含 btn 和 btn-primary
element = driver.find_element(By.CSS_SELECTOR, ".btn.btn-primary")
```

#### 场景 3：属性过滤
```html
<a href="https://example.com" target="_blank">链接</a>
```
```python
# 匹配 href 包含 "example" 的链接
element = driver.find_element(By.CSS_SELECTOR, "a[href*='example']")
```

#### 场景 4：层级关系定位
```html
<div class="container">
    <ul id="user-list">
        <li class="user">用户A</li>
        <li class="user active">用户B</li>
    </ul>
</div>
```
```python
# 定位激活用户
element = driver.find_element(By.CSS_SELECTOR, "div.container > ul#user-list li.user.active")
```

#### 场景 5：伪类选择
```html
<table>
    <tr><td>第一行</td></tr>
    <tr><td>第二行</td></tr>
</table>
```
```python
# 选择首行
element = driver.find_element(By.CSS_SELECTOR, "tr:nth-child(1)")
```

::: tip

伪类选择的详细内容请参考：[伪类选择器](../../sundry/CSS_Selector_pseudo.md)

:::

---

### 3. 高级技巧
#### 部分匹配
| **匹配类型** | **语法**        | **示例**              |
| ------------ | --------------- | --------------------- |
| 包含子串     | `[attr*=value]` | `input[name*='user']` |
| 开头匹配     | `[attr^=value]` | `a[href^='https']`    |
| 结尾匹配     | `[attr$=value]` | `img[src$='.png']`    |

#### 组合逻辑
```python
# AND 逻辑
"input.form-control.required"

# OR 逻辑（不支持直接语法，需逗号分隔）
"input.form-control, input.required"
```

---

## 二、XPath 定位详解
### 1. 核心语法与优势
#### 基础结构
```python
driver.find_element(By.XPATH, "xpath_expression")
```

#### 优势
- **灵活强大**：支持复杂逻辑和层级关系
- **文本定位**：可直接匹配元素文本内容
- **轴定位**：支持兄弟节点、父节点等关系

---

### 2. 典型场景与示例
#### 场景 1：文本精准匹配
```html
<span>验证码：</span>
```
```python
element = driver.find_element(By.XPATH, "//span[text()='验证码：']")
```

#### 场景 2：动态属性处理
```html
<div id="user-1689327967">...</div>
```
```python
# 匹配 ID 包含 "user-" 的元素
element = driver.find_element(By.XPATH, "//div[contains(@id, 'user-')]")
```

#### 场景 3：多条件组合
```html
<input type="text" name="email" required>
```
```python
element = driver.find_element(By.XPATH, "//input[@type='text' and @name='email']")
```

#### 场景 4：轴定位
```html
<table>
    <tr>
        <td>产品A</td>
        <td><button>购买</button></td>
    </tr>
</table>
```
```python
# 定位包含 "产品A" 的行的按钮
element = driver.find_element(By.XPATH, "//td[text()='产品A']/following-sibling::td/button")
```

#### 场景 5：索引定位
```html
<ul>
    <li>选项1</li>
    <li>选项2</li>
</ul>
```
```python
# 选择第二个列表项
element = driver.find_element(By.XPATH, "(//li)[2]")
```

::: warning

XPath定位的索引下标开始为1。

:::

---

### 3. 高级技巧
#### 函数使用
| **函数**            | **用途**     | **示例**                               |
| ------------------- | ------------ | -------------------------------------- |
| `contains()`        | 属性部分匹配 | `//div[contains(@class, 'error')]`     |
| `starts-with()`     | 属性开头匹配 | `//input[starts-with(@id, 'user_')]`   |
| `normalize-space()` | 去除文本空格 | `//p[normalize-space(text())='Hello']` |

#### 轴表达式
| **轴**              | **方向**         | **示例**                        |
| ------------------- | ---------------- | ------------------------------- |
| `ancestor`          | 所有祖先节点     | `//img/ancestor::div`           |
| `following`         | 文档顺序后续节点 | `//h1/following::p`             |
| `preceding-sibling` | 前序兄弟节点     | `//li[2]/preceding-sibling::li` |

---

## 三、CSS vs XPath 关键对比
| **维度**     | **CSS Selector**           | **XPath**                     |
| ------------ | -------------------------- | ----------------------------- |
| 性能         | ⚡️ 更快（浏览器原生优化）   | ⚡ 稍慢（需解析引擎处理）      |
| 文本定位     | ❌ 不支持                   | ✅ 支持（`text()`）            |
| 轴定位       | ❌ 不支持                   | ✅ 完整支持                    |
| 属性部分匹配 | ✅ 支持（`*=`, `^=`, `$=`） | ✅ 支持（`contains()` 等函数） |
| 动态元素处理 | ✅ 一般                     | ✅ 更灵活                      |
| 浏览器兼容性 | ✅ 统一                     | ⚠️ 不同浏览器实现略有差异      |
| 学习曲线     | 简单（类似 CSS 样式）      | 较陡峭（XML 路径语法）        |

---

## 四、选型决策指南
### 优先选择 CSS Selector 的场景
1. **性能敏感**：大规模测试套件
2. **简单定位**：ID/Class/属性匹配
3. **现代 Web 应用**：结构清晰的页面

### 优先选择 XPath 的场景
1. **复杂层级**：需要定位兄弟节点或父节点
2. **文本匹配**：根据可见文本定位
3. **动态属性**：部分匹配变化的属性值
4. **旧系统维护**：处理遗留的复杂 HTML 结构

---

## 五、最佳实践
1. **混合使用策略**：
   ```python
   # 使用 CSS 定位父元素，XPath 定位子元素
   parent = driver.find_element(By.CSS_SELECTOR, ".container")
   child = parent.find_element(By.XPATH, ".//span[contains(text(),'重要')]")
   ```

2. **维护定位器仓库**：
   ```python
   # locators.py
   class LoginPageLocators:
       USERNAME = (By.CSS_SELECTOR, "#username")
       PASSWORD = (By.XPATH, "//input[@name='password']")
   ```

3. **动态表达式优化**：
   ```python
   # 参数化定位器
   def get_locator(user_type):
       return (By.XPATH, f"//div[contains(@class, 'user-{user_type}')]")
   ```

4. **避免陷阱**：
   - 禁用绝对路径：`/html/body/div[1]/...`
   - 谨慎使用索引：`(//div)[3]`
   - 及时处理 Stale Element 异常

---

掌握这些技巧，您将能游刃有余地应对各种 Web 自动化定位挑战！ 🚀