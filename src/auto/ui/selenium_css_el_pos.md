---
icon: pen-to-square
category:
  - UI自动化测试
tag:
  - selenium
  - 元素定位
  - CSS
order: 5
sticky: true
---

# CSS元素定位

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
driver.get("www.test.com")
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
driver.get("www.test.com")
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
driver.get("www.test.com")
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



