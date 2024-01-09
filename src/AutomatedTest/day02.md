---
title: web自动化（selenium）二
order: 2
tag: selenium
---

## 今日目标

1. 掌握xpath和CSS元素定位方式
2. 掌握元素及浏览器操作

## 一、元素定位Xpath、CSS

为什么要使用Xpath或者CSS？

因为在页面当中，有一些元素无法通过元素的信息精准的定位到，所以需要借助于Xpath和CSS

示例：

```html
//通过name、class、tag_name无法定位到唯一的元素
<input type="submit" value="提交" />
```

### 1 、xpath元素定位

#### 1.1 什么是xpath

总结：xpath是用来在xml文件中进行元素定位的标记语言，html是一种特殊的xml，所以xpath也可以用在html中

#### <font color=red>1.2 Xpath定位策略</font>

1. 路径定位
2. 属性定位
3. 属性与逻辑结合
4. 属性与层级结合

定位方法:  find_element(By.XPATH,"value")  # xpath表达式

> 按Ctrl+F 可以在搜索框对xpath和css表达式进行校验
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509600.png" alt="image-20231121130704831" style="zoom:50%;" />

##### 1.2.1 路径定位

* 绝对路径   表达式是以  /html开头，元素的层级之间是以  / 分隔

  相同层级的元素可以使用下标，下标是从1开始.

  需要列出元素所经过的所有层级元素  ,  工作当中， 一般不使用绝对路径

  例：`/html/body/div/fieldset/form/p[1]/input`

* 相对路径   匹配任意层级的元素，  是以 ` //tag_name`或者`//* `开头

  也可以使用下标，下标是从1开始。

  例子：`//p[5]/button`

###### 案例

![image-20231121125713250](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509602.png)

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 使用绝对路径定位到输入用户名，并输入admin
driver.find_element(By.XPATH,"/html/body/div/fieldset/form/p/input").send_keys("admin")
# 使用相对路径定位到输入密码，并输入123
driver.find_element(By.XPATH,"//form/p[2]/input").send_keys("123")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509603.png" alt="image-20231121130436522" style="zoom:50%;" />

> 运行结果都比较简单，后续不再赘述。

##### 1.2.2 元素属性定位

* `//*`或者`//tag_name`      
* `//*[@attribute='value'] # attribute表示的是元素的属性名，value表示的是元素对应属性值`

###### 案例

```
利用元素的属性信息精确定位用户名输入框，并输入：admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509604.png" alt="CleanShot 2023-11-21 at 17.05.02@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 利用元素的属性信息精确定位用户名输入框，并输入：admin
# 其中的"//*[@placeholder='请输入用户名']"也可以写为"//input[@placeholder='请输入用户名']"
driver.find_element(By.XPATH,"//*[@placeholder='请输入用户名']").send_keys("admin")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

> 注意：<font color=red>如果使用class的属性进行元素定位，需要用到class里面所有的值</font>，不像使用CLASS_NAME时，只用其中一个即可。
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509605.png" alt="CleanShot 2023-11-22 at 11.53.05@2x" style="zoom:50%;" />

##### 1.2.3 属性与逻辑结合定位

* `//*` 或者`//tag_name`开头  
* `//*[@attribute1='value1' and @attribute2='value2'] #需要两个定位同时满足`

###### 案例

```
使用属性与逻辑结合定位策略，在test1对应的输入框里输入：admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509606.png" alt="CleanShot 2023-11-21 at 17.09.34@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 使用属性与逻辑结合定位策略，在test1对应的输入框里输入：hello
driver.find_element(By.XPATH, "//input[@name = 'user' and @class = 'login']").send_keys("hello")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

##### 1.2.4 属性与层级结合定位

* 是以`//*`或者`//tag_name`开头，如`//p[@id='p2']/input[1]`,意思是属性id值为p2的 p 元素中的第1个 input 子元素
* 在任意层给当中，都可以结合属性来使用

###### 案例

```
使用层级与属性结合定位策略，在test1对应的输入框里输入：hello
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509607.png" alt="CleanShot 2023-11-21 at 17.28.50@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 使用层级与属性结合定位策略，在test1对应的输入框里输入：hello
# 这里的"//p[@id='p1']/input"等同于"//p[@id='p1']/input[1]"
driver.find_element(By.XPATH, "//p[@id='p1']/input").send_keys("hello")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

##### 1.2.5 XPATH扩展

* `//*[text() = 'value']`   

  value表示的是要定位的元素的全部文本内容（精确查找）。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509608.png" alt="CleanShot 2023-11-21 at 17.52.42@2x" style="zoom:50%;" />

* `//*[contains(@attribute,'value')]`

  attribute表示的属性名称, value表示的是字符串，要定位的元素中，attribute属性的属性值包含了value的内容。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509609.png" alt="CleanShot 2023-11-22 at 11.28.43@2x" style="zoom:50%;" />

* `//*[starts-with(@attribute,'value')]`

  attribute表示的属性名称, value表示的是字符串，要定位的元素，attribute属性的属性值是以value开头
  
  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509610.png" alt="CleanShot 2023-11-22 at 11.31.21@2x" style="zoom:50%;" />

---

### 2、CSS定位

#### 2.1 什么是CSS

总结：css是可以用来在selenium中定位元素的

CSS定位元素的方法： `find_element(By.CSS_SELECTOR, 'value')   # value表示的是CSS选择器表达式`

> 虽然CSS比xpath定位更快，但在实际工作中，更推荐使用xpath定位，因为xpath在使用路径定位时可以支持元素下标，如：input[1]，但CSS不支持。

#### <font color=red>2.2 CSS定位策略</font>

1. id选择器
2. class选择器
3. 元素选择器
4. 属性选择器
5. 层级选择器

##### 2.2.1 id选择器

* 表达式： `#id`   （其中 # 表示通过元素的ID属性进行元素选择    id  表示的的id属性的属性值）

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509611.png" alt="CleanShot 2023-11-22 at 15.16.46@2x" style="zoom:50%;" />

##### 2.2.2 class选择器

* 表达式： `.class`   （其中.表示通过元素的class属性进行元素选择， class表示的class属性的<font color=red>其中一个属性值</font>）

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509612.png" alt="CleanShot 2023-11-22 at 15.19.02@2x" style="zoom:50%;" />

###### 案例

```
通过css的id选择器定位用户名输入框，输入admin
通过css的class选择器定位电子邮箱输入框，输入123@qq.com
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509613.png" alt="CleanShot 2023-11-22 at 16.08.23@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 通过css的id选择器定位用户名输入框，输入admin
driver.find_element(By.CSS_SELECTOR,"#userA").send_keys("admin")
# 通过css的class选择器定位电子邮箱输入框，输入123@qq.com
driver.find_element(By.CSS_SELECTOR,".dzyxA").send_keys("123@qq.com")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

##### 2.2.3 元素选择器

* 就是通过元素标签名称来选择元素 。
* 表达式： `tag_name` (相同名称的标签太多，不推荐使用)

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509614.png" alt="CleanShot 2023-11-22 at 15.27.42@2x" style="zoom:50%;" />

##### 2.2.4 属性选择器

* 就是通过元素的属性来选择元素。  

* 表达式：`[attribute='value']`（attribute 表示的是属性名称，value表示的是属性值 ）

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509615.png" alt="CleanShot 2023-11-22 at 15.35.17@2x" style="zoom:50%;" />
  
  > <font color=red>如果使用的是class属性，需要带上class的全部属性值</font>,像下面的电子邮箱，就要写为：`[class='emailA dzyxA']`

###### 案例

```
通过css的元素选择器定位用户名输入框，输入admin
通过css的属性选择器定位电子邮箱输入框，输入123@qq.com
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509616.png" alt="CleanShot 2023-11-22 at 16.06.40@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 通过css的元素选择器定位用户名输入框，输入admin
# 这里的input有很多个，多个时取第一个，也就是输入用户名的输入框
driver.find_element(By.CSS_SELECTOR,"input").send_keys("admin")
# 通过css的属性选择器定位电子邮箱输入框，输入123@qq.com
driver.find_element(By.CSS_SELECTOR,"[class='emailA dzyxA']").send_keys("123@qq.com")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

##### 2.2.5 层级选择器

###### 父子层级关系选择器 

* 表达式： `element1>element2`（通过element1来找element2，<font color=red>并且element2是element1的直接子元素</font>）

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509617.png" alt="CleanShot 2023-11-22 at 15.48.41@2x" style="zoom:50%;" />

> 这里的`p[id='pa']>input`也可以写为`#pa>input`。写法多种多样，我们多练习就好。

###### 隔代层级关系选择器

* 表达式： `element1 element2`（通过element1来找element2， <font color=red>并且element2是element1的后代元素</font>）

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509618.png" alt="CleanShot 2023-11-22 at 15.53.58@2x" style="zoom:50%;" />

> 中间可以隔别的层次元素，但是是他的后代元素就行。

###### 案例

```
通过css的层级选择器定位用户名输入框输入admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509620.png" alt="CleanShot 2023-11-22 at 16.04.07@2x" style="zoom:50%;" />

###### 实现代码

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建浏览器驱动
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 通过css的层级选择器定位用户名输入框输入admin
driver.find_element(By.CSS_SELECTOR,".zc #userA").send_keys("admin")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```



##### 2.2.6 CSS扩展

* input[type^='p']   input表示标签名称，type表示属性名称， p表示的文本内容

  查找元素type属性值是**以p开头的元素**

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031509621.png" alt="CleanShot 2023-11-22 at 16.11.34@2x" style="zoom:50%;" />

* input[type$='d']   input表示标签名称，type表示属性名称， d表示的文本内容

  查找元素type属性值**以d结尾的元素**

* input[type*='w']    input表示标签名称，type表示属性名称， w表示的文本内容

  查找元素type属性值**包含w的元素**

> 其它两种差不多，不再赘述。

## 3、XPath与CSS类似功能对比

| 定位方式 | XPath                                                        | css                                                          |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 元素名   | `//input`                                                    | `input`                                                      |
| id       | `//input[@id='userA']`                                       | `#userA`                                                     |
| class    | `//*[@class='telA']`                                         | `.telA`                                                      |
| 属性     | 1.`//*[text()="xxx"]`<br />2.`//input[starts-with(@attribute,'xxx')]`<br />3.`//input[contains(@attribute,'xxx')]` | 1.`input[type^='p']`<br />2.`input[type$='d']`<br />3.`input[type*='w']` |

---

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
