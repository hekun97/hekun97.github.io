---
icon: pen-to-square
category:
  - UI自动化测试
tag:
  - selenium
  - 元素定位
  - xpath
order: 4
sticky: true
---

# 元素定位Xpath、CSS

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
driver.get("www.test.com")
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
driver.get("www.test.com")
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
driver.get("www.test.com")
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
driver.get("www.test.com")
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
