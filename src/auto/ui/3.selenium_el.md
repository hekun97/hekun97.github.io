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

# 元素定位

## 3.1 如何进行元素定位？

### 什么是元素

标签头 +  中间的文本内容 + 标签尾

![元素组成](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051215533.png)

### 举例

该图中就包含了三个元素。

![image-20231117180024784](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519498.png)

| 名词           | 说明                         | 示例                                                         |
| -------------- | ---------------------------- | ------------------------------------------------------------ |
| 元素的信息     | 指元素的标签名以及元素的属性 | 标签名：`<input> </input>`、`<div> </div>`、`<span> </span>`等<br />属性：id、class、name、type等 |
| 元素的层级结构 | 指元素之间相互嵌套的层级结构 | `<input><div><span> </span></div></input>`                   |

### 如何进行元素定位

通过元素的信息或者元素的层级结构来进行元素定位。

## 3.2 浏览器开发者工具介绍

* 浏览器开发者工具主要用来查看元素的信息, 同时也可以查看接口的相关信息。

* 浏览器开发者工具不需要安装，浏览器自带。

* 浏览器开发者工具的启动：

  * 直接按F12（不区分浏览器）
  * 通过右键的方式来启动浏览器开发者工具 (谷歌浏览器右键选择“检查”，火狐浏览器右键选择“检查元素”）

* 浏览器开发者工具使用：

  * 点击 浏览器开发者工具左上角的  元素查看器按钮；
  * 再点击想要查看的元素；
  * 自动定位到该元素。
  
  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519940.png" alt="image-20231121102022212" style="zoom:50%;" />

## 3.3 元素定位

| 定位方式          | 说明                                                         | 是否唯一 | 定位方法                        |
| ----------------- | ------------------------------------------------------------ | -------- | ------------------------------- |
| id(推荐使用)      | 通过元素的id属性值来进行元素定位                             | ✅        | `find_element(By.ID,"value")`   |
| name              | 通过元素的name属性值为进行元素定位                           | ❌        | `find_element(By.NAME,"value")` |
| class_name        | 通过元素的class属性值进行元素定位                            | ❌        |                                 |
| tag_name          | 通过元素的标签名称进行定位， 在同一个html页面当中，相同标签元素会有很多。 | ❌        |                                 |
| link_text         | 通过超链接的全部文本信息进行元素定位 ，主要用来定位a标签     |          |                                 |
| partail_link_text | 通过超链接的局部文本信息进行元素定位，主要用来定位a标签      |          |                                 |
| xpath             |                                                              |          |                                 |
| css               | CSS 选择器通过匹配 HTML 元素的 **标签名**、**类名**、**ID**、**属性** 等定位元素，语法简洁且执行效率通常高于 XPath。 |          |                                 |

### 3.3.1 id定位

* 通过元素的id属性值来进行元素定位。

  ::: tip 提示

  - 元素必须要有id属性。
  - 在html标准规范中 id值是唯一的，因此可以定位到唯一的元素。

  :::


* 定位方法版本selenium4：find_element(By.ID,"value") # value参数表示的是id的属性值

#### 案例

```
案例演示环境说明：
受限于网络速度的影响，我们案例采用本地的html页面来演示。这样可以提高学习效率和脚本执行速率
。
需求：打开注册A.html页面，完成以下操作
1).使用id定位，输入用户名：admin
2).使用id定位，输入密码：123456
3).3秒后关闭浏览器窗口
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519941.png" alt="image-20231121113534544" style="zoom:50%;" />

#### 实现思路

```
1. 导入selenium包    --> from selenium import webdriver
2. 导入time包    --> import time
3. 实例化浏览器驱动对象    --> driver = webdriver.Firefox()
4. 打开注册A.html --> driver.get(url)
5. 调用id定位方法    --> element = driver.find_element_by_id("")
6. 使用send_keys()方法输入内容    --> element.send_keys("admin")
7. 暂停3秒    --> time.sleep(3)
8. 关闭浏览器驱动对象    --> driver.quit()
说明：为了更好的学习体验，我们先暂时使用下send_keys()方法来输入内容
```

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 实例化浏览器驱动对象（创建浏览器驱动对象）
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 在用户名输入框输入admin
driver.find_element(By.ID,"userA").send_keys("admin")
# 在密码输入框输入123456
driver.find_element(By.ID,"passwordA").send_keys("123456")
# 等待3s
time.sleep(3)
# 退出浏览器
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519942.png" alt="image-20231121111824556" style="zoom:50%;" />

> 后续结果全使用selenium4运行。

### 3.3.2 name定位

* 通过元素的name属性值为进行元素定位   name属性值 在HTML页面中，是可以重复的。

  说明：元素要有name属性

* 定位方法:  find_element(By.NAME,"value")   # value参数表示的是name的属性值

#### 案例

```
使用name定位输入用户名admin和密码123456
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519943.png" alt="image-20231121113713268" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 输入用户名admin
driver.find_element(By.NAME,"userA").send_keys("admin")
# 输入密码123456
driver.find_element(By.NAME,"passwordA").send_keys("123456")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

#### 运行结果

和上面ID定位运行结果一致，此处不再赘述。

### <font color=red>3.3.3 class_name定位</font>

* 通过元素的class属性值进行元素定位    class属性值是可重复的

  说明：元素必须要有class属性

* 定位方法： find_element(By.CLASS_NAME,"value")   #  value参数表示的是class的<font color=red>其中一个属性值</font>

#### 案例

```
使用class_name定位输入电话13323426898和邮箱123@google.com
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519944.png" alt="image-20231121114812682" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 输入电话13323426898
driver.find_element(By.CLASS_NAME,"telA").send_keys("13323426898")
# 输入邮箱123@google.com
driver.find_element(By.CLASS_NAME,"dzyxA").send_keys("123@google.com")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519945.png" alt="image-20231121115420913" style="zoom:50%;" />

### 3.3.4 tag_name定位

* 通过元素的标签名称进行定位，   在同一个html页面当中，相同标签元素会有很多。

  这种定位元素的方式**不建议大家在工作当中使用**。

* 定位方法:  find_element(By.TAG_NAME,"value"))  # value表示的是元素的标签名称。

  如果有重复的元素，定位到的元素默认都是第一个元素

#### 案例

```
使用 tag_name定位输入用户名admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519946.png" alt="image-20231121115930508" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 输入用户名admin
driver.find_element(By.TAG_NAME,"input").send_keys("admin")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519947.png" alt="image-20231121120229163" style="zoom:50%;" />

### 3.3.5  link_text定位

* 通过超链接的全部文本信息进行元素定位 ,主要用来定位a标签
* 定位方法：  find_element(By.LINK_TEXT,"value")   #  value参数代表的是a标签的<font color=red>全部</font>文本内容（精确查找）。

#### 案例

```
使用 link_text定位精确查找访问新浪网站，点击的超链接是“新浪”
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519948.png" alt="image-20231121121050379" style="zoom:50%;" />

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 精确查找访问新浪网站，点击的超链接是“新浪”
driver.find_element(By.LINK_TEXT,"新浪").click()
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519949.png" alt="image-20231121121332138" style="zoom:50%;" />

### <font color=red>3.3.6 partial_link_text定位</font>

* 通过超链接的局部文本信息进行元素定位，主要用来定位a标签 
* 定位方法：find_element(By.PARTIAL_LINK_TEXT,"value")   #  value表示的是a标签 的<font color=red>局部</font>文本内容（模糊查找）

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 模糊查找访问新浪网站，点击的超链接是“访问 新浪 网站”
driver.find_element(By.PARTIAL_LINK_TEXT,"访问 新浪").click()
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

运行结果同上不再赘述

### 3.3.7 定位一组元素

* 定位一组元素的方法:

  find_elements(By.ID,"value")

  find_elements(By.TAG_NAME,"value")

  ...

  其它方法也只需要将 find_element 替换为 find_elements

* 定位一组元素返回的值是一个列表

* 可以通过下标来使用列表中的元素

* 下标是从0开始。

#### 案例

```
使用tag_name定位密码输入框(第二个input标签)，并输入：123456
```

#### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("www.test.com")
# 使用tag_name定位密码输入框(第二个input标签)，并输入：123456
elements = driver.find_elements(By.TAG_NAME,"input")
elements[1].send_keys("123456")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

#### 运行结果

![image-20240103151711417](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519950.png)

## 二、元素常用操作及浏览器常用操作方法

### 1、元素常用操作

* 点击操作    `element.click()`      element表示的是元素对象
* 输入操作   `element.send_keys("value")`    element表示的是元素对象， value表示的是要输入的内容
* 清除操作   `element.clear()`     element表示的是元素对象. 将输入框里面的内容全部清除。

#### 案例

```
1).通过脚本执行输入用户名：admin；密码：123456；电话号码：18611111111；电子邮件：123@qq.com
2).间隔3秒，修改电话号码为：18600000000
```

#### 实现步骤

```python
# 导包
import time
from selenium import webdriver
# 创建浏览器驱动对象
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///D:/software/UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 1).通过脚本执行输入用户名：admin；密码：123456；电话号码：18611111111；电子邮件：123@qq.com
driver.find_element(By.ID, "userA").send_keys("admin")
driver.find_element(By.ID, "passwordA").send_keys("123456")
driver.find_element(By.CSS_SELECTOR, ".telA").send_keys("18611111111")
driver.find_element(By.XPATH, "//*[@class='emailA dzyxA']").send_keys("123@qq.com")
# 2).间隔3秒，修改电话号码为：18600000000
time.sleep(3)
driver.find_element(By.CSS_SELECTOR, ".telA").clear()
time.sleep(3)
driver.find_element(By.CSS_SELECTOR, ".telA").send_keys("18600000000")

# 等待3S
time.sleep(3)
# 退出
driver.quit()
```

### 2、浏览器常用操作方法

1. <font color=red>`maximize_window()` 最大化浏览器窗口 --> 模拟浏览器最大化按钮</font>  实例化浏览器驱动之后，就可以调用窗口最大化的方法

2. `set_window_size(width, height)` 设置浏览器窗口大小 --> 设置浏览器宽、高(像素点)

3. `set_window_position(x, y) `设置浏览器窗口位置 --> 设置浏览器位置

   x,y是一个坐标点，通过此坐标点确定浏览器最左上角的位置，以此确定浏览器在屏幕上的位置。

   x, y不能超过屏幕的分辨率大小

案例

```
1.窗口最大化
2.设置窗口大小
3.设置窗口位置
```

实现代码

```python
# 导包
import time
from selenium import webdriver

# 创建浏览器驱动
driver = webdriver.Chrome()

# 1.窗口最大化
driver.maximize_window()

# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

time.sleep(3)
# 2.设置窗口大小
driver.set_window_size(500, 500)
time.sleep(3)
# 3.设置窗口位置
driver.set_window_position(300, 300)

# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

运行结果

![CleanShot 2023-11-22 at 16.54.52](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509622.gif)

4. back() 后退 --> 模拟浏览器后退按钮
5. forward() 前进 --> 模拟浏览器前进按钮
6. refresh() 刷新 --> 模拟浏览器F5刷新
7. close() 关闭当前窗口 --> 模拟点击浏览器关闭按钮
8. quit() 关闭浏览器驱动对象 --> 关闭所有程序启动的窗口

案例

```
1.窗口最大化
2.在注册A页面中点击 新浪网站
3.调用浏览器的后退
4.再调用浏览器的前进
5.再调用浏览器的后退
6.点击访问新浪网站
7.再调用关闭按钮
```

实现代码

```python
import time

from selenium import webdriver
# 创建浏览器驱动对象
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
# 1.窗口最大化
driver.maximize_window()
# 打开测试网站
driver.get("file:///D:/software/UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 2.在注册A页面中点击 新浪网站
driver.find_element(By.CSS_SELECTOR, "#linkto>a").click()
# 3.调用浏览器的后退
time.sleep(3)
driver.back()
# 4.再调用浏览器的前进
time.sleep(3)
driver.forward()
# 5.再调用浏览器的后退
time.sleep(3)
driver.back()
# 6.点击访问新浪网站
driver.find_element(By.XPATH, "//*[text()='访问 新浪 网站']").click()
time.sleep(3)
# 7.再调用关闭按钮
driver.close()
time.sleep(3)
# 等待3S
time.sleep(3)
# 退出
driver.quit()
```

运行结果

![CleanShot 2023-11-22 at 17.06.25](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509623.gif)

9. title 获取页面title
10. current_url 获取当前页面URL

案例

```
1.窗口最大化
2.获取页面标题
3.获取页面的URL地址
```

实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()

# 1.窗口最大化
driver.maximize_window()

# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 2.获取页面标题
print(driver.title)
# 3.获取页面的URL地址
print(driver.current_url)

# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509624.png" alt="CleanShot 2023-11-22 at 17.11.38@2x" style="zoom:50%;" />

### 3、获取元素信息

这篇在第三天进行学习。

#### 为什么要学习获取元素信息的方法

主要为了获取相关的信息进行断言，判断自动化用例最终的执行结果。

#### 获取元素常用的方法

| 编号 | 方法                 | 说明                                                 |
| ---- | -------------------- | ---------------------------------------------------- |
| 1    | size                 | 返回元素大小                                         |
| 2    | text                 | 获取元素的文本                                       |
| 3    | get_attribute("xxx") | 获取属性值，传递的参数为元素的属性名                 |
| 4    | is_displayed()       | 判断元素是否可见                                     |
| 5    | is_enabled()         | 判断元素是否可用                                     |
| 6    | is_selected()        | 判断元素是否选中，用来检查复选框或单选按钮是否被选中 |

> 提示：
>
> size、text为属性时，调用不加括号；如：xxx.size

#### 使用

* size    获取元素的大小   返回的是一个字典，里面包含元素高度和宽度的值，通常用于图片，输入框等
* text    获取元素的文本内容
* get_attribute("attribute")  获取元素对应属性名称的属性值 ， attribute表示的是属性名

案例

```
1).获取用户名输入框的大小
2).获取页面上第一个超链接的文本内容
3).获取页面上第一个超链接的地址
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521590.png" alt="CleanShot 2023-11-23 at 15.40.02@2x" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521591.png" alt="CleanShot 2023-11-23 at 16.05.32@2x" style="zoom:50%;" />

实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By

# 实例化浏览器驱动
driver = webdriver.Chrome()
driver.maximize_window()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")

# 1).获取用户名输入框的大小
print(driver.find_element(By.ID, "userA").size)
# 2).获取页面上第一个超链接的文本内容
print(driver.find_element(By.LINK_TEXT, "新浪").text)
# 3).获取页面上第一个超链接的地址
print(driver.find_element(By.LINK_TEXT, "新浪").get_attribute("href"))
# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521592.png" alt="CleanShot 2023-11-23 at 15.53.10@2x" style="zoom:50%;" />

* is_displayed()       判断元素是否可见   返回值为true或者false
* is_enabled()          判断元素是否可用，返回值为true或者false
* is_selected()          判断复选框或者单选框是否被选中，返回值为true或者false

案例

```
1).判断页面中的span标签是否可见
2).判断页面中取消按钮是否可用
3).判断页面中'旅游'对应的复选框是否为选中的状态
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521593.png" alt="CleanShot 2023-11-23 at 16.02.49@2x" style="zoom:50%;" />

实现代码

```python
# 导包
import time
from selenium import  webdriver
from selenium.webdriver.common.by import By
# 实例化浏览器驱动
driver = webdriver.Chrome()
driver.maximize_window()
# 打开测试网站
driver.get("file:///D:/software/UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 1).判断页面中的span标签是否可见
print("判断元素是否可见，默认应该是False：", driver.find_element(By.NAME, "sp1").is_displayed())
# 2).判断页面中取消按钮是否可用
print("判断取消按钮是否可用，默认应该是False：", driver.find_element(By.ID, "cancelA").is_enabled())
# 3).判断页面中'旅游'对应的复选框是否为选中的状态
print("判断旅游复选框是否选中，默认应该是True:", driver.find_element(By.ID, "lyA").is_selected())
# 等待3S
time.sleep(3)
# 退出浏览器驱动
driver.quit()
```

运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031521594.png" alt="CleanShot 2023-11-23 at 15.58.27@2x" style="zoom:50%;" />

## 