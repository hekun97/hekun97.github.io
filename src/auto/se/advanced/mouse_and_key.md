以下是 **Selenium 中鼠标和键盘操作** 的详细指南，涵盖常见场景、代码示例及最佳实践：

---

# 鼠标和键盘操作
Selenium 通过 `ActionChains` 类模拟复杂的用户交互（鼠标、键盘、触控），需导入：
```python
from selenium.webdriver.common.action_chains import ActionChains
```

---

## **一、鼠标操作**
### **1. 基础操作**
| **方法**          | **说明**                             | **代码示例**                                                 |
| ----------------- | ------------------------------------ | ------------------------------------------------------------ |
| **点击**          | 左键/右键/双击                       | `click(element)` / `context_click(element)` / `double_click(element)` |
| **悬停（Hover）** | 鼠标移动到元素上方，模拟鼠标悬停效果 | `move_to_element(element)`                                   |
| **拖放**          | 拖动元素到目标位置，模拟鼠标拖动效果 | `drag_and_drop(source, target)`                              |
| **偏移移动**      | 基于当前位置相对移动                 | `move_by_offset(x, y)`                                       |

### **2. 示例代码**
```python
# 实例化ActionChains()对象
actions = ActionChains(driver)

# 悬停后右键点击菜单项
actions.move_to_element(menu).context_click().perform()

# 拖放文件到上传区域
actions.drag_and_drop(file_element, upload_area).perform()

# 精确控制偏移（从元素中心偏移50px右，30px下）
actions.move_to_element_with_offset(element, 50, 30).click().perform()
```

::: info

`perform()`用来执行鼠标操作。

:::

### **3. 高级操作**

- **组合操作**：链式调用多个动作后执行 `perform()`。
  
  ```python
  # 按住滑块slider（不释放） → 向右拖动 100px → 释放
  actions.click_and_hold(slider)\
         .move_by_offset(100, 0)\
         .release()\
         .perform()
  ```
  
- **画笔轨迹模拟**（自动化绘图场景）：
  
  ```python
  # 移动到canvas到元素上方 → 按住不释放 → 向右上拖动 → 向左上拖动 → 释放
  actions.move_to_element(canvas)\
         .click_and_hold()\
         .move_by_offset(50, 20)\
         .move_by_offset(-30, 40)\
         .release()\
         .perform()
  ```

---

## **二、键盘操作**
### **1. 基础方法**
| **方法**     | **说明**            | **代码示例**                                                 |
| ------------ | ------------------- | ------------------------------------------------------------ |
| **按键发送** | 向焦点元素发送按键  | `send_keys("text")`                                          |
| **组合键**   | 如 Ctrl+C / Alt+Tab | `key_down(Keys.CONTROL).send_keys("c").key_up(Keys.CONTROL)` |
| **释放按键** | 松开已按下的键      | `key_up(Keys.SHIFT)`                                         |

::: warning 注意

`send_keys(Keys.CONTROL, 'c')` 和 `key_down(Keys.CONTROL).send_keys("c").key_up(Keys.CONTROL)` **看似功能相同**，但底层行为存在关键差异。推荐**显式修饰键控制**。

|                           **方法**                           |                         **底层行为**                         |           **适用场景**           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :------------------------------: |
|                `send_keys(Keys.CONTROL, 'c')`                |    **同时按下并释放**所有键（`CONTROL` + `c` 的瞬时组合）    | 简单组合键操作（非严格依赖顺序） |
| `key_down(Keys.CONTROL).send_keys("c").key_up(Keys.CONTROL)` | **显式控制修饰键状态**：按下 `CONTROL` → 按 `c` → 释放 `c` → 释放 `CONTROL` |   严格模拟用户操作或跨平台需求   |

:::

### **2. 示例代码**

```python
from selenium.webdriver.common.keys import Keys

# 输入文本并回车
actions.send_keys("搜索内容").send_keys(Keys.ENTER).perform()

# 复制粘贴操作
actions.key_down(Keys.CONTROL)\
       .send_keys("c")\
       .key_up(Keys.CONTROL)\
       .send_keys(Keys.TAB)\
       .key_down(Keys.CONTROL)\
       .send_keys("v")\
       .perform()
```

### **3. 特殊按键列表**
| **按键常量**                  | **对应键位** |
| ----------------------------- | ------------ |
| `Keys.ENTER`                  | 回车         |
| `Keys.BACK_SPACE`             | 退格         |
| `Keys.SHIFT` / `Keys.CONTROL` | 修饰键       |
| `Keys.ARROW_LEFT`             | 方向键左     |
| `Keys.F5`                     | 刷新键       |

---

## **三、实战场景**
### **场景 1：滑动验证码**
```python
slider = driver.find_element(By.ID, "slider")
track = driver.find_element(By.ID, "track")

# 按住元素slider并不释放 → 悬停到元素track上 → 向右拖动300px → 释放
actions.click_and_hold(slider)\
       .move_to_element(track)\
       .move_by_offset(300, 0)\
       .release()\
       .perform()
```

### **场景 2：快捷键保存网页**
```python
# 按下 CTRL + S 并释放
actions.key_down(Keys.CONTROL)\
       .send_keys("s")\
       .key_up(Keys.CONTROL)\
       .perform()

# 处理保存弹窗（需切换至系统弹窗，可能需用AutoIT/Pyautogui）
```

### **场景 3：多选列表项**
```python
item1 = driver.find_element(By.ID, "item1")
item2 = driver.find_element(By.ID, "item2")

# 通过CTRL多选列表项 item1、item2
actions.key_down(Keys.CONTROL)\
       .click(item1)\
       .click(item2)\
       .key_up(Keys.CONTROL)\
       .perform()
```

---

## **四、注意事项**
1. **执行动作**：所有操作需以 `perform()` 结尾才会生效。
2. **焦点控制**：键盘操作前确保目标元素已获得焦点（可先点击元素）。
3. **跨平台差异**：组合键行为可能因操作系统不同而变化（如 Mac 的 `Command` vs Windows 的 `Control`）。
4. **性能优化**：减少不必要的连续操作，合并动作为单个 `perform()` 调用。

---

## **五、常见问题排查**
| **问题**         | **解决方案**                               |
| ---------------- | ------------------------------------------ |
| 操作未生效       | 检查是否遗漏 `perform()` 或元素未正确聚焦  |
| 拖放失效         | 使用 `move_by_offset` 替代 `drag_and_drop` |
| 弹窗阻断操作     | 先处理弹窗（`switch_to.alert`）            |
| 浏览器兼容性问题 | 更新浏览器驱动至最新版本                   |

---

## **六、最佳实践**
- **优先使用简单方法**：如元素自带的 `click()` 或 `send_keys()`，仅在复杂交互时使用 `ActionChains`。
- **显式等待就绪**：操作前确保元素可交互（结合 `WebDriverWait`）。
- **封装复用**：将常用操作（如文件上传）封装为工具函数。

掌握这些技巧，可轻松应对 90% 的 Web 自动化交互需求！ 🚀