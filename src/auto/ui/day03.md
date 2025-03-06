---
title: web自动化（selenium）三
order: 31
tag: selenium
---

## 一、鼠标和键盘操作

### 1、鼠标操作

#### 1.1 鼠标操作实现方式

```
说明：在Selenium中将操作鼠标的方法封装在ActionChains类中 
首先实例化对象：
action = ActionChains(driver) 
```

| 编号 | 方法                          | 操作 | 实现内容                       |
| ---- | ----------------------------- | ---- | ------------------------------ |
| 1    | context_click(element)        | 右击 | 模拟鼠标右键点击效果           |
| 2    | double_click(element)         | 双击 | 模拟鼠标双击效果               |
| 3    | drag_and_drop(source, target) | 拖动 | 模拟鼠标拖动效果               |
| 4    | move_to_element(element)      | 悬停 | 模拟鼠标悬停效果               |
| 5    | perform()                     | 执行 | 此方法用来执行以上所有鼠标操作 |

> 为了更好的学习其他方法，我们先学习perform()执行方法,因为所有的方法都需要执行才能生效

selenium提供鼠标操作的方法及步骤

1. 导入ActionChains类

2. 通过ActionChains实例化鼠标对象

   ```python
   action = ActionChains(driver)  # driver表示的是浏览器驱动对象
   ```

3. 调用鼠标的事件方法

4. 调用鼠标的执行方法   action.perform()

#### 1.2 鼠标右击操作

##### 实现步骤

针对由html自定义的右键菜单。可以使用右击的方式来进行操作。

1. 创建鼠标对象 `action = ActionChains(driver)`

2. 调用右击事件方法  

   ```python
   action.context_click(element) # element表示的是一个元素对象
   ```

3. 调用鼠标执行方法  `action.perform()`

##### 实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains

# 实例化浏览器驱动
driver = webdriver.Chrome()
driver.maximize_window()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 在用户名文本框上点击鼠标右键
# 1.创建鼠标对象
action = ActionChains(driver)
# 2.调用鼠标右击的方法，右击输入框'输入用户名'
action.context_click(driver.find_element(By.ID, "userA"))
# 3.调用鼠标执行的方法
action.perform()

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

#### 1.3 鼠标双击操作

##### 实现步骤

1. 创建鼠标对象  `action=ActionChains(driver)`
2. 调用鼠标双击事件方法  `action.double_click(element)  # element表示是元素对象`
3. 调用鼠标的执行方法 `action.perform()`

##### 实现代码

```python
...
# 输入用户名admin，暂停3秒钟后，双击鼠标左键，选中admin
element = driver.find_element(By.ID, "userA")
element.send_keys("admin")
time.sleep(3)
# 创建鼠标对象
action = ActionChains(driver)
# 调用鼠标双击事件方法
action.double_click(element)
# 调用鼠标执行方法
action.perform()
...
```

> 只放关键代码，以下同不再赘述，其它代码和上面一样

#### 1.4 鼠标拖动操作

##### 实现步骤

1. 找到两个方框元素
2. 创建鼠标对象  `action = ActionChains(driver)`
3. 调用鼠标拖动事件方法  `action.drag_and_drop(source, target)  # source表示的是源元素，被拖动的元素，  target表示是目标源，也就是要拖动到哪个元素上。`
4. 调用鼠标执行方法  `action.perform()`

> 这里使用的是drag.html文件

##### 实现代码

```python
...
# 把红色方框拖拽到蓝色方框上
# 1.找到两个方框元素
source = driver.find_element(By.ID, "div1")
target = driver.find_element(By.ID, "div2")
# 2.实例化鼠标对象
action = ActionChains(driver)
# 3.调用鼠标拖动事件方法
action.drag_and_drop(source, target)
# 4.调用鼠标执行方法
action.perform()
...
```

##### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521595.png" alt="CleanShot 2023-11-23 at 17.45.17@2x" style="zoom:50%;" />

#### 1.5 <font color=red>鼠标悬停操作</font>

##### 实现步骤

1. 实例化鼠标对象   `action = ActionChains(driver)`
2. 调用鼠标悬停事件方法  `action.move_to_element(element)  # element表示的是元素对象`
3. 调用鼠标执行方法 `action.perform()`

##### 实现代码

```python
...
# 模拟鼠标悬停在‘注册’按钮上
element = driver.find_element(By.CSS_SELECTOR, "button")

# 创建鼠标对象
action = ActionChains(driver)
# 调用鼠标悬停事件方法
action.move_to_element(element)
# 调用鼠标执行方法
action.perform()
...
```

#### 1.6 鼠标单元素拖动操作

##### 实现步骤

1. 创建鼠标对象 `action=ActionChains(driver)`

2. 调用鼠标单元素拖动事件方法   `action.drag_and_drop_by_offset(element, x, y)` 

   其中x, y 表示的元素拖动时横向和纵向移动的距离，单位为像素， element表示的是元素对象  移动的像素最终要比在web页面中看到的移动像素值要大，最好大于5个像素或者10像素

3. 调用鼠标执行方法  `action.perform()`

   > 这里使用的是验证码中的index.html

##### 实现代码

```python
...
# 模拟鼠标实现滑块验证码的操作
element = driver.find_element(By.CSS_SELECTOR, '.handler_bg')
# 创建鼠标对象
action = ActionChains(driver)
# 调用鼠标单元素拖动事件方法
action.drag_and_drop_by_offset(element, 265, 0)
# 调用鼠标执行方法
action.perform()
...
```

---

### 2、键盘操作

* 模拟键盘上面的快捷键的操作

* 调用键盘操作的快捷键的方法：`element.send_keys(快捷键的键值)`

  需要导入Keys类, 第一个字母是大写

  ```python
  from selenium.webdriver.common.keys import Keys
  ```

  常用的快捷键

  | 编号 | 快捷键方法                     | 说明              |
  | ---- | ------------------------------ | ----------------- |
  | 1    | `send_keys(Keys.BACK_SPACE)`   | 删除键(BackSpace) |
  | 2    | `send_keys(Keys.SPACE)`        | 空格键(Space)     |
  | 3    | `send_keys(Keys.TAB)`          | 制表键(Tab)       |
  | 4    | `send_keys(Keys.ESCAPE)`       | 回退键(Esc)       |
  | 5    | `send_keys(Keys.ENTER)`        | 回车键(Enter)     |
  | 6    | `send_keys(Keys.CONTROL,'a')`  | 全选(Ctrl+A)      |
  | 7    | `send_keys(Keys.CONTROL,'c')`  | 复制(Ctrl+C)      |
  | 8    | `send_keys(Keys.CONTROL, 'v')` | 粘贴              |

  #### 案例
  
  ```
  1). 输入用户名：admin1，暂停2秒，删除1
  2). 全选用户名：admin，暂停2秒
  3). 复制用户名：admin，暂停2秒
  4). 粘贴到密码框
  ```
  
  #### 实现代码
  
  ```python
  ...(注意导入Keys类)
  # 1). 输入用户名：admin1，暂停2秒，删除1
  element = driver.find_element(By.ID, 'userA')
  element.send_keys("admin1")
  time.sleep(2)
  # 删除最后一个字符串，由'admin1'变为'admin'，清空输入框所有内容的操作是 clear()
  element.send_keys(Keys.BACK_SPACE)  
  # 2). 全选用户名：admin，暂停2秒
  element.send_keys(Keys.CONTROL, 'a')
  time.sleep(2)
  # 3). 复制用户名：admin，暂停2秒
  element.send_keys(Keys.CONTROL, 'c')
  time.sleep(2)
  # 4). 粘贴到密码框
  driver.find_element(By.ID, 'passwordA').send_keys(Keys.CONTROL, 'V')
  ...
  ```

---

## 二、元素等待

### 什么是元素等待？

概念：在定位页面元素时如果未找到，会在指定时间内一直等待的过程；

### 为什么要设置元素等待？

HTML加载需要时间，影响HTML加载的因素：

1. 服务器性能
2. 网络速度
3. 本身电脑的配置

### 1、隐式等待

#### 概念

**首先要等待整个页面加载完成**，再去进行元素定位，如果在定位过程中找到了元素，直接返回该元素，继续后面的操作，如果在指定的时间内没有找到该元素，那么每隔0.5秒再去找，如果超过了指定时间，就会抛出元素不存在的异常`NoSuchElementException`。

#### 方法名

```python
driver.implicitlty_wait(timeout)   # timeout表示的是最长的等待时间 单位为S
```

> 隐式等待只需要设置一次，对所有的元素定位的方法都是有效的。

#### 案例

```
1.隐式等待的时间，设置为5S
2.针对第一个延时框输入admin
3.针对第二个延时框输入admin2
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521596.png" alt="CleanShot 2023-11-24 at 11.39.46@2x" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521597.png" alt="CleanShot 2023-11-24 at 14.55.52@2x" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time

from selenium import  webdriver
# 实例化浏览器驱动
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
driver.maximize_window()

# 1.隐式等待的时间，设置为5S
driver.implicitly_wait(5)

# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 2.针对第一个延时框输入admin
print("开始时间：", time.strftime("%H:%M:%S"))
driver.find_element(By.XPATH, "//div[@id='wait']/input[1]").send_keys("admin")
print("找到第一个元素的时间:", time.strftime("%H:%M:%S"))
# 3.针对第二个延时框输入admin2
driver.find_element(By.XPATH, "//div[@id='wait']/input[2]").send_keys("admin2")
print("找到第二个元素的时间：", time.strftime("%H:%M:%S"))

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

#### 运行结果

![CleanShot 2023-11-24 at 11.43.05@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521598.png)

### 2、显示等待

#### 概念

定位指定元素时，如果能找到该元素，那么就直接返回该元素，如果找不到，那么每隔指定的时间再去定位该元素，如果超出最长等待时间，那么就抛出超时异常`TimeOutException`。

#### 方法名

```python
WebDriverWait(driver, timeout, poll_frequency=0.5).until(lambda x:x.find_element(By.ID, "userA"))
# driver指的是浏览器驱动对象
# timeout表示的是最长等待时间
# poll_frequency表示的是检测的间隔时间，默认是0.5秒
# 后面跟上until方法，在until方法跟上匿名函数来实现元素定位。
```

> 注意WebDriverWait等待类需要导入`from selenium.webdriver.support.wait import WebDriverWait`

#### 案例

```
通过显示等待的方式定位延时输入框输入admin
```

#### 实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait

# 实例化浏览器驱动
driver = webdriver.Chrome()
driver.maximize_window()
# driver.implicitly_wait(5)  # 隐式等待的时间，设置为5S
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 1.通过显示等待的方式定位第一个延时输入框输入admin
element = WebDriverWait(driver, 9, 1).until(lambda x: x.find_element(By.XPATH, "//*[@id='wait']/input[1]"))
element.send_keys("admin")
# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

### 两者区别

1. 抛出的异常不一样 ， 隐式等待超时，报的是找不到元素异常`NoSuchElementException`  ，显示等待超时，报的是超时异常`TimeOutException`
2. 作用域不一样， 隐式等待对所有元素定位的方法都有效，只需要定义一次， 显示等待只针对单个元素
3. 显示等待不需要等待整个页面的HTML的DOM树加载完成，显式等待的效率更高，工作当中一般使用显示等待。而隐式等待需整个HTML DOM树加载完成。

### 3、强制等待

#### 概念

强制等待就是让代码休眠，不做任何的操作

#### 实现方法

```python
time.sleep(time)     # 单位为秒
```

#### 常用的场景

* 当要获取元素的文本内容时，而元素的文本内容是需要通过后台接口请求并渲染的，此时，如果使用隐式等待或显示等待是没有办法获取到文本内容，所以需要使用强制等待

  > 如购物车中的数量是需要从后台数据库中去获取，需要用强制等待让测试代码休眠，让被测试系统的后台请求有时间去获取相关数据。

* 当要操作的元素已经存在，但是有其他的元素需要等待且与该操作的元素有业务关联，如果使用隐式等待或显示等待对该元素进行操作的话，是没有办法进行的，也需要使用强制等待。

  > 这种情况也类似后台请求，反正要留一段时间让被测试网站的代码去运行。

#### 案例

```
1.打开被测试网站"http://tpshop-test.itheima.net/"
2.先登录，从首页点击红色的登录按钮跳转到登录页面
3.输入用户名密码等信息
4.点击登录按钮登录
5.强制等待2秒，让被测试网站的请求有时间去获取购物车的商品数量
6.获取购物车中的商品数量
```

#### 实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait

# 实例化浏览器驱动
driver = webdriver.Chrome()
# 隐式等待5秒
driver.implicitly_wait(5)
# 1.打开被测试网站
driver.get("http://tpshop-test.itheima.net/")

# 2.先登录，从首页点击红色的登录按钮跳转到登录页面
driver.find_element(By.CSS_SELECTOR, '.red').click()
# 3.输入用户名密码等信息
driver.find_element(By.CSS_SELECTOR, "#username").send_keys("13012345678")
driver.find_element(By.CSS_SELECTOR, "#password").send_keys("12345678")
driver.find_element(By.CSS_SELECTOR, "#verify_code").send_keys("8888")
# 4.点击登录按钮登录
driver.find_element(By.CSS_SELECTOR, ".J-login-submit").click()

# 5.强制等待2秒，让被测试网站的请求有时间去获取购物车的商品数量
time.sleep(2)
# 6.获取购物车中的商品数量
print("购物车商品数量:", driver.find_element(By.CSS_SELECTOR, "#cart_quantity").text)

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

> 注意：如果不进行第5步的强制等待，那么在隐式等待的5秒内只要找到id为'cart_quantity'的元素，将直接去获取他的文本值，这时候的值将为'空'，因为被测试网址需要时间发起请求去后台获取数据库中的值。
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521599.png" alt="CleanShot 2023-11-28 at 11.57.17@2x" style="zoom:50%;" />

------

## 三、下拉选择框、弹出框、滚动条操作

### 1、下拉选择框操作

#### 实现步骤

1. 导入Select类

   ```python
   from selenium.webdriver.support.select import Select
   ```

2. 实例化select对象

   ```python
   select = Select(element)  # <font color=red>element对象表示的是select元素对象</font>
   ```

3. 通过select的相关方法选择option选项

   - `select.select_by_index(index)`    参数index表示的option索引
   - `select.select_by_value(value)`    参数value表示的是option元属中value的属性值
   - `select.select_by_visible_text(visible_text )` 参数visible_text表示的是option的文本内容。

#### 案例

```
1. 找到class为 selectA 的下拉选择框
2. 实例化select对象
3. 通过select对象的三种方法来选择option选项
	3.1 通过select对象的index来选择广州
	3.2 通过select对象的value来选择上海
	3.3 通过select对象的‘文本值’来选择深圳
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521600.png" alt="CleanShot 2023-11-29 at 10.35.32@2x" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By
# 导入 Select 包
from selenium.webdriver.support.select import Select

# 实例化浏览器驱动
driver = webdriver.Chrome()
driver.maximize_window()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 1. 找到class为 selectA 的下拉选择框
element = driver.find_element(By.CSS_SELECTOR, "#selectA")
# 2. 实例化select对象
select = Select(element)
# 3. 通过select对象的三种方法来选择option选项
# 3.1 通过select对象的index来选择广州
time.sleep(2)
select.select_by_index(2)
# 3.2 通过select对象的value来选择上海
time.sleep(2)
select.select_by_value("sh")
# 3.3 通过select对象的‘文本值’来选择深圳
time.sleep(2)
select.select_by_visible_text("深圳")

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

### 2、弹出框操作

#### 实现步骤

1. `driver.switch_to.alert`  获取弹出框对象
2. 处理弹出框    
   - `alert.text` 获取弹出框提示信息
   - `alert.accept()`    确定弹出框
   - `alert.dismiss() ` 取消弹出框 

#### 案例

```
1.点击alert按钮
2.获取弹出框对象
3.处理弹出框
	3.1打印信息，然后取消
	3.2取消弹出框
	3.3在用户名输入框中输入admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521602.png" alt="CleanShot 2023-11-29 at 10.53.19@2x" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time

from selenium import  webdriver
from selenium.webdriver.common.by import By

# 实例化浏览器驱动
driver = webdriver.Chrome()
# 浏览器窗口最大化
driver.maximize_window()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 1.点击alert按钮
driver.find_element(By.ID, "alerta").click()
time.sleep(3)
# 2.获取弹出框对象
alert = driver.switch_to.alert
# 3.处理弹出框
# 3.1打印信息，然后取消
print(alert.text)
# 3.2取消弹出框
alert.dismiss()
# 3.3在用户名输入框中输入admin
driver.find_element(By.ID, 'userA').send_keys("admin")

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

> 注意：1.虽然alert没有取消按钮，但是一样可以调用dismiss()来取消弹出框
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521603.png" alt="CleanShot 2023-11-29 at 10.58.18@2x" style="zoom: 25%;" />
>
> 2.如何区分普通弹出框（html代码）和特殊弹出框（js代码），右键能点击检查元素的就是普通弹出框，否则就是js代码的弹出框。

### 3、滚动条操作

#### 为什么要控制滚动条

1. 部分网页为了加载快，让用户使用体验更好，不是一下子加载所有内容的。而是滚动到相应位置后才开始加载。
2. 一些网站的协议条款，需要滚动条拉到最底部才可以点击同意或者下一步按钮。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521604.png" alt="CleanShot 2023-11-29 at 11.05.56@2x" style="zoom:50%;" />

#### 实现方式

selenium中并没有直接提供操作滚动条的方法，但是它提供了可执行JavaScript脚本的方法，所以我们可以通过JavaScript脚本来达到操作滚动条的目的。

#### 实现步骤

1. 设置JavaScript脚本控制滚动条
   `js = "window.scrollTo(0,1000)"`
   (0：左边距；1000：上边距。单位是像素)
2. selenium调用执行JavaScript脚本的方法 
   `driver.execute_script(js)`

#### 案例

```
控制滚动条到最下方
1. 定义js
2. 执行JS
```

#### 实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By

# 实例化浏览器驱动
driver = webdriver.Chrome()
# 浏览器窗口最大化
driver.maximize_window()
# 打开测试网站
driver.get("file:///D:/software/UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
time.sleep(3)
# 控制滚动条到最下方
# 1. 定义js,如果想要移动到最下方，y值给最大值2000就可以了。
js = "window.scrollTo(0, 2000)"
# 2. 执行JS
driver.execute_script(js)

# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

## 四、frame切换、多窗口切换

### 1、frame切换

#### 概念

frame：HTML页面中的一种框架，主要作用是在当前页面中指定区域显示另一页面元素；。
形式一：

```html
<!--frame_a.html占窗口4分之1，frame_b.html占窗口4分之3 -->
<frameset cols="25%,75%"> 
		<frame src="frame_a.html"> 
		<frame src="frame_b.html">
</frameset> 
```


形式二：

```html
<!-- 指定另一页面（demo_iframe.html）元素的宽和高占200个像素 -->
<iframe name="iframe_a" src="demo_iframe.html" width="200" height="200"></iframe>
```

> 一般使用形式二，形式一使用较少，了解即可。
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521410.png" alt="CleanShot 2023-11-29 at 17.03.57@2x" style="zoom:50%;" />

#### frame切换实现方法

* `driver.switch_to.frame(frame_reference)`

  切换到指定frame的方法。frame_reference：可以为frame框架的name、id或者定位到的frame元素

* `. driver.switch_to.default_content()`

  恢复默认页面方法，到主窗口。

#### 案例：注册实例

```
1. 针对主页的用户名输入admin
2. 针对注册用户A输入用户名adminA
3. 回到默认首页面,也就是主页面
4. 针对注册用户B输入用户名adminB
注意：这里使用的页面是'注册实例.html'
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521412.png" alt="CleanShot 2023-11-29 at 15.56.43@2x" style="zoom: 33%;" />

##### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 注册浏览器驱动
driver = webdriver.Chrome()
# 最大化浏览器窗口
driver.maximize_window()
# 隐式等待10秒
driver.implicitly_wait(10)
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8C%E5%AE%9E%E4%BE%8B.html")

# 1. 针对主页的用户名输入admin
driver.find_element(By.ID, "userA").send_keys("admin")
# 2. 针对注册用户a输入用户名adminA
driver.switch_to.frame(driver.find_element(By.ID, "idframe1"))
driver.find_element(By.ID, "AuserA").send_keys("adminA")
# 3. 回到默认首页面,也就是主页面
driver.switch_to.default_content()
# 4. 针对注册用户B输入用户名adminB
ele_frame = driver.find_element(By.ID, "idframe2")
driver.switch_to.frame(ele_frame)
driver.find_element(By.ID, "BuserA").send_keys("adminB")

time.sleep(3)
driver.quit()
```

##### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521413.png" alt="CleanShot 2023-11-29 at 16.45.19@2x" style="zoom:50%;" />

::: tip 提示

更贴近正常使用的情况可能如下：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401201156552.png" alt="CleanShot 2024-01-20 at 11.51.20@2x" style="zoom:50%;" />

:::

#### frame切换原理总结

* 针对同一层级的frame，如果要进行切换的话，需要切回到默认首页
* 针对所要进入的frame， 有多少个层级，就需要切换几次
* 不管当前在哪个层级，如果要回到默认首页，只需要调用一次回到默认首页的方法(`driver.switch_to.default_content()`)

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521414.png" alt="image-20200626101031448" style="zoom:50%;" />

### 2、多窗口切换

#### 概念

在HTML页面中，当点击超链接或者按钮时，有的会在新的窗口打开页面，就需要切换到新的窗口。

#### 窗口操作的三种方法

1. 获取当前窗口句柄：  `driver.current_window_handle`
2. 获取所有窗口句柄:    ` driver.window_handles`            返回的是一个列表
3. 切换窗口句柄:    `driver.switch_to.window(window_handle)`  window_handle表示的是要切换到哪个窗口句柄

> 窗口句柄：由操作系统生成的一串唯 一识别码，是一串字符。

#### 案例

```
1. 获取‘注册实例.html’当前窗口句柄
2. 点击‘注册实例.html’页面中的链接 注册A页面
3. 获取所有窗口句柄
4. 将操作切换到注册A页面对应的窗口
5. 操作注册A页面元素
注意：这里使用的是page目录下的注册实例.html
```

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 注册浏览器驱动
driver = webdriver.Chrome()
# 最大化浏览器窗口
driver.maximize_window()
# 隐式等待10秒
driver.implicitly_wait(10)
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/page/%E6%B3%A8%E5%86%8C%E5%AE%9E%E4%BE%8B.html")

# 1. 获取‘注册实例.html’当前窗口句柄
print("获取‘注册实例.html’当前窗口句柄:",driver.current_window_handle)
# 2. 点击‘注册实例.html’页面中的链接 注册A页面
driver.find_element(By.ID, "ZCA").click()
time.sleep(1)
# 3. 获取所有窗口句柄
print("获取所有窗口句柄:",driver.window_handles)
windows = driver.window_handles
# 4. 将操作切换到注册A页面对应的窗口
# 4.1 ‘注册A.html’的窗口句柄，其中windows[-1]是直接获取列表中的最后一个元素
print('获取‘注册A.html’的窗口句柄：',windows[-1])
# 4.2 切换窗口句柄到注册A
driver.switch_to.window(windows[-1])
# 5. 操作注册A页面元素
# 5.1 在注册A页中输入用户名和密码
driver.find_element(By.ID, "userA").send_keys("admin")

time.sleep(3)
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521415.png" alt="CleanShot 2023-11-29 at 18.10.20@2x" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521416.png" alt="CleanShot 2023-11-29 at 18.12.47@2x" style="zoom:50%;" />

#### 窗口切换与frame切换的区别

窗口切换是指针对浏览器窗口，  frame切换针对的是同一个窗口中的html代码。

> 窗口相当于是同一栋楼的某一套房子，frame相当于一套房子中的某一间房子

---

## 五、窗口截图、验证码处理

### 1、窗口截图

#### 为什么要窗口截图

自动化脚本是由程序去执行的，因此有时候打印的错误信息并不是十分明确。如果在执行出错的时候 
对当前窗口截图保存，那么通过图片就可以非常直观地看到出错的原因。

#### 窗口截图的方法

窗口截图就是指把出错的图片保存到指定位置。

载图方法：  `driver.get_screenshot_as_file(filename)`

* 截图的文件名必须是以PNG结尾
* filename中的文件目录必须手动创建

#### 案例

```
1. 输入用户名
2. 用找不到的错误id，输入密码
3.对错误进行截图
4.打印异常
```



#### 实现代码

```python
import time

from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.maximize_window()
driver.implicitly_wait(10)
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

try:
    # 1. 输入用户名
    driver.find_element(By.ID, "userA").send_keys("admin")
    # 2. 用找不到的错误id，输入密码
    driver.find_element(By.ID, "padd").send_keys("1234")
except Exception as e:
    # 3.对错误进行截图
    driver.get_screenshot_as_file("img/error.png")
    # 4.打印异常
    raise e

time.sleep(3)
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521417.png" alt="CleanShot 2023-11-29 at 18.38.53@2x" style="zoom:50%;" />

> 注意：这里的img文件夹必须存在才能正常截图，自动化代码运行的时候不会自动创建目录。

------

### 2、验证码处理

#### 2.1 什么是验证码？

验证码就是指一种随机生成的信息（数字、字母、汉字、图片、算术题）等为了防止恶意的请求行为，增加应用的
安全性。

自动化过程中也是需要进行注册或者登陆的操作，所以需要处理验证码。

#### 2.2 验证码处理方式

1. 去掉验证码——由开发操作 , 用在测试环境；
2. 设置万能验证码——由开发操作， 一般也只使用在测试环境；
3. 验证码识别技术——由于技术难度高，识别率很难达到100%， 一般不建议使用；
4. 记录COOKIE——通过记录cookie来跳过登陆的操作，使用普遍。

#### 2.3 Cookie原理

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521418.png" alt="CleanShot 2023-11-29 at 23.14.42@2x" style="zoom:50%;" />

1. Cookie是由Web服务器生成的，并且保存在用户浏览器上的小文本文件，它可以包含用户相关的信息。
2. Cookie数据格式：键值对组成（类似python中的字典）
3. Cookie产生：客户端请求服务器，如果服务器需要记录该用户状态，就向客户端浏览器颁发一个Cookie
   数据，也就是图片中的第二步
4. Cookie使用：当浏览器再次请求该网站时，浏览器把请求的数据和Cookie数据一同提交给服务器，服务
   器检查该Cookie，以此来辨认用户状态，也就是图片上的第三步。

#### 2.4 cookie的应用场景

1.  实现会话跟踪，记录用户登录状态
2.  实现记住密码和自动登录的功能
3.  用户未登录的状态下，记录购物车中的商品

#### 2.5 selenium操作cookie

* `driver.get_cookie(name)`： 获取指定名称的cookie信息  返回的是一个字典
* `driver.get_cookies()`：获取的是所有cookie的信息，  返回的是一个列表
* `driver.add_cookie(dict_cookie)`：往浏览器驱动增加cookie， dict_cookie是一字典

> 注意事项：如何确认哪个cookie是用来控制用户权限的
>
> 1. 可以问开发同学
> 2. 针对登陆的前后的cookie进行对比，比登陆之前多的cookie都可以用来使用控制用户权限。
> 3. 手动登陆之后不能退出，退出之后就相当于cookie无效了。

#### 2.6 案例

##### 需求

```
使用cookie实现跳过登录
1). 手动登录百度，获取cookie
2). 使用获取到的cookie，达到登录目的，然后就可以执行登录之后的操作
```

##### 实现步骤

1. 手动登录baidu，登录成功后找到cookie为BDUSS的键和值

   ![CleanShot 2023-11-29 at 23.28.03@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521419.png)

2. 在自动化测试代码中使用add_cookie()方法，添加找到的键和值

3. 调用刷新方法    `driver.refresh()`，然后确认登录状态是否登录成功

##### 实现代码

```python
# 导包
from selenium import webdriver 
import time
# 注册浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("https://www.baidu.com")
# 添加获取到的cookie
driver.add_cookie({'name':'BDUSS','value':'根据实际找到的填写'}) 
time.sleep(3)
# 刷新网址
driver.refresh() 
time.sleep(3) 
driver.quit()
```

---

## 六、扩展知识点

### 1、解决注册用例不能重复执行的问题？

1. 通过python代码编写一个生成手机号码的函数     (会生成比较多的垃圾数据)
2. 在注册之前，备份一处数据库（备份只需要做一次），执行注册的用例，每次执先完用例之后，再用备份数据去恢复数据库，这样子状态就还原了（如果数据库数据量大，那么恢复的时间会比较久，效率比较低）
3. 通过python脚本直接在数据库删除新注的用户（要熟悉底层的数据库业务，要知道注册用户是存在哪些表中）

#### 第一种方法使用

```python
import random
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 一个生成手机号码的函数
def get_mobile():
    mobiles = ['130', '131', '134', '135']  # 确定手机号码所需要格式
    number = str(int(time.time()))[2:]  # 通过时间戳获取手机号码的后8位数(一定不会重复)
    mobile = random.choice(mobiles)+number  # 把手机号码格式的三位数与后8位数相加
    return mobile


driver = webdriver.Chrome()
driver.maximize_window()
driver.implicitly_wait(10)

driver.get("http://tpshop-test.itheima.net/Home/user/reg.html")

# 这样确保每次注册都是一个随机的手机号码
driver.find_element(By.ID,  "username").send_keys(get_mobile())
driver.find_element(By.NAME,  "verify_code").send_keys("8888")
driver.find_element(By.ID, "password").send_keys("123456")
driver.find_element(By.ID, "password2").send_keys("123456")
driver.find_element(By.CSS_SELECTOR, ".J_btn_agree").click()
time.sleep(10)
driver.quit()
```

### 2、文件上传

* 安装![image-20200626152125802](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521420.png)这个工具。autoit V3工具是用来查看windows窗口信息及控件信息的

* 安装pyautoit模块。![image-20200626152243531](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521421.png)

  * 解压pyautoit-master.zip文件
  * 在windows窗口进入到解压目录之后，再在地址栏输入cmd
  * 执行以下命令  python setup.py install

  > PythonautolT是一个Python库，它提供了一个简单而有效的方式，使用Python脚本来控制Autolt。实现自动化任务和测试。

#### 案例

通过自动化代码访问百度网站，并使用图片搜索功能（需要对windows的窗口进行控制）

##### 实现步骤

1. 点击百度上面的照相机按钮

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521422.png" alt="CleanShot 2023-11-29 at 23.56.14@2x" style="zoom:50%;" />

2. 点击选择文件

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521423.png" alt="CleanShot 2023-11-29 at 23.56.50@2x" style="zoom:50%;" />

3. 针对windows操作

   1. 通过autoit来获取弹出的‘打开’窗口，实现对该窗口的操作

      <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521424.png" alt="CleanShot 2023-11-30 at 00.15.50@2x" style="zoom:50%;" />

   2. 在‘文件选择输入框’中输入 文件的地址及文件名称

      <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521425.png" alt="CleanShot 2023-11-30 at 00.04.36@2x" style="zoom:50%;" />

   3. 在弹出窗口中点击打开按钮

      <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521426.png" alt="CleanShot 2023-11-30 at 00.06.53@2x" style="zoom:50%;" />

##### 实现代码

```python
import time

import autoit
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.maximize_window()
driver.implicitly_wait(10)
driver.get("http://www.baidu.com")
# 1. 点击百度上面的照相机按钮
driver.find_element(By.CSS_SELECTOR, ".soutu-btn").click()
# 2. 点击选择文件
# 2.1 通过class值为upload-pic定位到选择文件按钮元素
ele = driver.find_element(By.CSS_SELECTOR, ".upload-pic")
# 2.2 定义鼠标对象
action = ActionChains(driver)
# 2.3 调用鼠标事件，点击选择文件按钮
action.click(ele)
# 2.4 执行鼠标事件方法
action.perform()
time.sleep(2)
# 3. 针对windows操作
# 3.1 通过autoit来获取弹出的‘打开’窗口
# 参数的值分别为 窗口名称，等待时间
autoit.win_wait_active("打开", 3)  # 3表示的是时间，秒为单位

# 3.2 在‘文件选择输入框’中输入 文件的地址及文件名称
# 参数的值分别是 窗口名称，输入框名称，文件的地址及文件名称（前面的r是禁止""内的字符串转义的）
autoit.control_send("打开", "Edit1", r"C:\Users\LiaoFei\Pictures\Saved Pictures\333.jpg")

# 3.3 在弹出窗口中点击打开按钮
# 参数的值分别为 窗口名称，按钮名称
autoit.control_click("打开", "Button1")

time.sleep(10)
driver.quit()
```

##### 运行结果

![CleanShot 2023-11-30 at 00.33.57](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521427.gif)

---

## 

