---
icon: pen-to-square
category:
  - UI自动化测试
tag:
  - selenium
  - 元素定位
order: 3
sticky: true
---

# 浏览器控制

以下是 **Selenium 中浏览器控制** 的核心操作详解，包含前进/后退、窗口切换及 Cookie 管理的代码示例与最佳实践。

## **一、导航控制：前进/后退**

### **1. 核心方法**
- **后退**：`driver.back()`  
- **前进**：`driver.forward()`  
- **刷新**：`driver.refresh()`
- **关闭当前窗口**：`driver.close()`
- **关闭浏览器驱动对象**：`driver.quit()`

### **2. 使用场景**
- 验证浏览器历史记录功能是否正常。
- 测试多步骤操作后的回退逻辑（如购物车流程）。

### **3. 示例代码**
```python
driver.get("https://page1.com")  # 访问页面1
driver.get("https://page2.com")  # 访问页面2

driver.back()    # 返回页面1
driver.forward() # 前进到页面2
driver.refresh() # 刷新当前页面
```

---

## 二、获取信息

1. **获取页面title**：`driver.title()`
2. **获取当前页面URL**：`driver.current_url()`

## **三、窗口/标签页切换**

### **1. 核心方法**
- **获取所有窗口句柄**：`driver.window_handles`（返回列表）  
- **切换窗口**：`driver.switch_to.window(handle)`  
- **关闭当前窗口**：`driver.close()`  
- **获取当前窗口句柄**：`driver.current_window_handle`

### **2. 使用场景**
- 处理新标签页打开的链接（如社交分享、文件下载）。
- 多窗口数据交互测试。

### **3. 示例代码**
```python
# 点击打开新标签页
driver.find_element(By.LINK_TEXT, "Open New Window").click()

# 获取所有窗口句柄
all_handles = driver.window_handles
# 获取当前窗口句柄
original_handle = driver.current_window_handle

# 切换到新窗口
for handle in all_handles:
    if handle != original_handle:
        driver.switch_to.window(handle)
        break

# 在新窗口操作
print(driver.title)  # 输出新窗口标题

# 关闭新窗口并切回原窗口
driver.close()
driver.switch_to.window(original_handle)
```

### **4. 最佳实践**
- **显式等待新窗口**：避免因加载延迟导致切换失败。
  
  ```python
  WebDriverWait(driver, 10).until(lambda d: len(d.window_handles) > 1)
  ```
- **窗口句柄缓存**：在复杂场景中记录窗口用途（如 `login_handle`、`main_handle`）。

---

## 四、操作浏览器窗口

### **1.核心方法**
1. **窗口最大化**：确保测试在最大视口下运行，常用于响应式布局测试。

   ```python
   driver.get("https://example.com")
   driver.maximize_window()  # 窗口最大化
   ```

2. **设置窗口尺寸**：模拟移动端/平板端视口，测试自适应布局。

   ```python
   # 设置窗口为1280x720 ，单位为像素
   driver.set_window_size(1280, 720)
   ```

   ::: warning 注意

   - 移动端测试需使用 `ChromeOptions` 模拟设备，而非手动设置窗口大小。

   - 调整窗口大小后，页面元素可能重新排列，需配合显式等待确保稳定性：

     ```python
     driver.set_window_size(800, 600)
     # visibility_of_element_located（）：元素可见且宽高 > 0
     WebDriverWait(driver, 5).until(
         EC.visibility_of_element_located((By.ID, "responsive-element"))
     )
     ```

   :::

3. **设置窗口位置**：多窗口排列或测试多显示器场景。

   ```python
   # 将窗口移动到屏幕左上角，单位为像素
   driver.set_window_position(0, 0)
   ```

   ::: warning 注意

   - 屏幕左上角为坐标轴原点 (0, 0)，向右为 x 轴正方向，向下为 y 轴正方向。
   - 若系统有多个显示器，坐标可能超出主屏幕范围（如 x=3000 可能指向副屏）。

   :::

4. **同时设置位置和尺寸**：先设置位置后设置尺寸。

   ```python
   # 设置窗口位置 (100, 200) 且尺寸为 800x600，单位为像素
   driver.set_window_rect(100, 200, 800, 600)
   ```

5. **全屏模式**：全屏模式会隐藏浏览器工具栏和地址栏，和按`F11`效果一样。

   ```python
   driver.fullscreen_window()
   ```

6. **获取窗口信息**：可用于获取当前窗口的尺寸、位置、完整属性。

   - **当前尺寸**：`driver.get_window_size()`  
   - **当前位置**：`driver.get_window_position()`  
   - **完整属性**：`driver.get_window_rect()`（返回包含 `x`, `y`, `width`, `height` 的字典）

   ```python
   print(driver.get_window_size())  # 输出：{'width': 1280, 'height': 720}
   print(driver.get_window_rect())  # 输出：{'x': 100, 'y': 200, 'width': 800, 'height': 600}
   ```

---

### **2. 实战场景**
**场景 1：测试响应式布局**

```python
# 模拟手机竖屏
driver.set_window_size(375, 812)  # iPhone X 尺寸
# 断言型号是否是手机
assert "Mobile" in driver.find_element(By.ID, "layout-type").text

# 切换至平板横屏
driver.set_window_size(1024, 768)
# 断言型号是否是平板
assert "Tablet" in driver.find_element(By.ID, "layout-type").text
```

**场景 2：多窗口对齐对比**

```python
# 窗口1：左半屏
driver.set_window_rect(0, 0, 960, 1080)

# 新窗口：右半屏
driver.switch_to.new_window('window')
driver.set_window_rect(960, 0, 960, 1080)
```

**场景 3：截取全屏截图**

```python
driver.maximize_window()  # 确保窗口最大化
driver.save_screenshot("fullscreen.png")
```

::: warning 注意

**浏览器兼容性**：由于不同的浏览器驱动限制，部分方法在无头模式（Headless）下可能表现不同，具体参考 XX 文章。

:::

---

### **3. 最佳实践**
1. **测试初始化**：  
   在 `setUp` 方法中固定窗口尺寸，确保测试一致性：
   
   ```python
   def setUp(self):
       self.driver.set_window_size(1280, 720)
   ```
   
2. **恢复默认状态**：  
   在 `tearDown` 中重置窗口，避免影响后续用例：
   
   ```python
   def tearDown(self):
       self.driver.maximize_window()
   ```
   
3. **移动端模拟**：  
   使用设备预设参数（非手动设尺寸）：
   ```python
   from selenium.webdriver.chrome.options import Options
   
   mobile_emulation = {"deviceName": "iPhone 12 Pro"}
   options = Options()
   options.add_experimental_option("mobileEmulation", mobile_emulation)
   driver = webdriver.Chrome(options=options)
   ```

---

### **4. 总结**
- **窗口最大化**：`maximize_window()` 适合通用测试基线。
- **自定义尺寸**：`set_window_size()` 用于响应式布局验证。
- **精准控制**：`set_window_rect()` 实现复杂窗口布局。
- **全屏模式**：`fullscreen_window()` 适用于视觉测试或截图需求。

灵活运用这些方法，可覆盖从桌面到移动端的全方位界面测试！ 🖥️📱

## **五、Cookie 管理**

### **1. 核心方法**
| **方法**                         | **功能**              |
| -------------------------------- | --------------------- |
| `driver.get_cookies()`           | 获取所有 Cookie       |
| `driver.get_cookie(name)`        | 获取指定名称的 Cookie |
| `driver.add_cookie(cookie_dict)` | 添加 Cookie           |
| `driver.delete_cookie(name)`     | 删除指定 Cookie       |
| `driver.delete_all_cookies()`    | 删除所有 Cookie       |

### **2. 使用场景**
- 绕过登录：添加已认证用户的 Cookie。
- 测试权限控制：模拟不同角色的 Cookie。
- 清理测试环境：确保用例独立性。

### **3. 示例代码**
```python
# 添加 Cookie（需在访问域名后操作）
driver.get("https://example.com")
cookie = {
    'name': 'session_token',
    'value': 'abc123',
    'domain': 'example.com',
    'path': '/',
    'secure': True
}
driver.add_cookie(cookie)

# 获取并打印 Cookie
print(driver.get_cookie("session_token"))

# 删除单个 Cookie
driver.delete_cookie("session_token")

# 删除所有 Cookie
driver.delete_all_cookies()
```

### **4. 注意事项**
- **域名匹配**：添加 Cookie 前需先访问该域名，否则可能无效。
- **敏感信息**：避免在代码中硬编码敏感 Cookie 值，可通过配置文件或环境变量管理。
- **跨域限制**：浏览器安全策略禁止跨域设置 Cookie。

---

## **六、完整实战案例**
**场景**：测试多窗口购物流程，并保持用户登录状态  
```python
# 1. 登录并保存 Cookie
driver.get("https://shop.com/login")
driver.find_element(By.ID, "username").send_keys("testuser")
driver.find_element(By.ID, "password").send_keys("password123")
driver.find_element(By.ID, "login-btn").click()

# 获取登录后的 Cookie
login_cookies = driver.get_cookies()

# 2. 在新窗口复用 Cookie
driver.switch_to.new_window('tab')  # 打开新标签页
driver.get("https://shop.com")      # 必须访问域名

for cookie in login_cookies:
    driver.add_cookie(cookie)       # 添加 Cookie 保持登录状态

driver.refresh()  # 刷新页面生效

# 3. 执行购物操作
driver.find_element(By.LINK_TEXT, "商品详情").click()
driver.find_element(By.ID, "buy-now").click()

# 4. 清理环境
driver.close()                      # 关闭当前标签页
driver.switch_to.window(driver.window_handles[0])
driver.delete_all_cookies()         # 删除 Cookie
```

---

## **七、总结**
- **导航控制**：模拟用户浏览行为，验证历史记录功能。
- **获取信息**：可以获取页面标题和URL等信息。
- **窗口切换**：关键在多窗口环境下精准控制上下文。
- **操作窗口**：主要用于设置窗口的大小和位置，验证响应式布局、复杂窗口布局等。
- **Cookie 管理**：用于身份模拟和环境隔离，提升测试效率。

掌握这些技巧，可大幅增强自动化测试对真实用户场景的覆盖能力！ 🚀