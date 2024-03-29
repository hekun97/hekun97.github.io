---
title: web自动化（selenium）一
order: 1
tag: selenium
---

今日目标：

1. 要能分析当前项目是否适合做UI自动化
2. 熟练掌握web自动化测试环境搭建
3. 掌握元素定位的方法

------

## 一、UI自动化测试介绍

### 1、什么是自动化测试

概念：由程序代替人工进行系统校验的过程

#### 1.1自动化测试能解决的问题？

* 回归测试       (冒烟测试)

  * 针对之前老的功能进行测试     通过自动化的代码来实现。  
  * 针对上一个版本的问题的回归

* 兼容性测试

  web实例化不同的浏览器驱动相当于对不同的浏览器进行操作，从而解决浏览器的兼容性测试问题

* 性能测试

  通过一些工具来模拟多个用户实现并发操作

* 提高工作效率，保障产品质量   

#### 1.2自动化测试的优点

* 自动化测试能在较少的时间内执行更多的测试用例  

* 自动化测试能够减少人为的错误   

* 自动化测试能够克服手工的局限性    

* 自动化测试可以重复执行

  像注册用户需要考虑用户数据，避免出现同样的数据产生已注册不能重新执行。

#### 1.3自动化则试的误区

* 自动化测试可以完全代替手工测试

  针对某些功能（图片、页面架构）是没有办法通过自动化来实现

* 自动化测试一定比手工测试厉害

  金融行业更看重业务的积累

* 自动化测试可以发现更多的BUG

  不一定，主要是因为自动化测试主要用来做回归测试

* 自动化测试适用于所有的功能

  页面的架构、图片、文字，用户体验还是手动测试更好

  

#### 1.4自动化测试分类

| 编号 | 分类                            | 应用场景                                         |
| ---- | ------------------------------- | ------------------------------------------------ |
| 1    | web自动化测试（本阶段学习内容） | web系统                                          |
| 2    | 移动app自动化（本阶段学习内容） | app应用                                          |
| 3    | 接口自动化                      | 接口：用来给web或者app前端传输数据用的           |
| 4    | 单元测试-自动化测试             | 针对开发人员的代码进行测试。  是由开发自己来做的 |
| 5    | 安全测试（渗透测试）            | 针对系统、数据、应用等安全方面进行测试           |
| 6    | 桌面应用自动化测试              | 针对windows的桌面应用程序进行自动化测试          |
| 7    | 嵌入式设备自动化测试            | 针对嵌入式设备的应用程序进行自动化测试           |

### 2、什么是UI自动化测试

概念：UI(user interface)通过对web应用以及app应用进行自动化测试的过程。

####  <font color=red>2.1 什么项目适合做ui自动化测试？</font>

* 需求变动不频繁      前端代码变更维护不方便
* 项目周期长       项目短，上线之后不需要再去测试
* 项目需要回归测试    不用回归测试的也不需要写自动化

> 必须要满足上面三个条件才做UI自动化测试，不然浪费时间浪费精力。

#### 2.2 UI自动化测试在什么阶段开始？

手工测试完成之后才做自动化测试，相当于是编写自动化测试代码（通过手工测试能够清楚的知道自动化测试的步骤以及结果）

#### 2.3 UI自动化测试所属分类

* 黑盒测试（功能测试）

  UI自动化测试——模拟人工对web以及app页面进行操作的过程

* 白盒测试（单元测试）

* 灰盒测试（接口测试）

#### 2.4 UI测试步骤举例：

1. V1     通过手工测试完成之后，有十个功能。   
2. 针对V1版本的十个功能，进行自动化的代码编写
3. V2  增加了十个功能（总共有20个功能）， v2版本的测试过程当，新增的10个功能手工测试。针对老的10个功能就可以通过自动化来进行回归测试。

---

## 二、web自动化测试基础

### 1、web自动化框架

#### 1.1 主流的web自动化工具

| 工具           | 描述                                                         | 使用                         |
| -------------- | ------------------------------------------------------------ | ---------------------------- |
| QTP            | 由惠普公司开发的一款自动化工具，支持web、桌面的自动化测试。  收费的商用工具。 | 很少人用                     |
| selenium       | 主要用来做web自动化测试的，开源的免费的工具，中文名硒。      | 本阶段学习                   |
| root framework | 自动化测试平台。通过它可以实现web自动化测试、接口自动化测试、桌面的自动化测试。 | 后续工作可能遇到，遇到自己学 |

#### 1.2 selenium特点

1. 开源软件:  源代码开放，但是不一定免费，像Linux的不同版本；
2. 跨平台:    平台指操作系统。   linux、windows、 mac操作系统；
3. 支持多种浏览器：firefox、chrome、 ie、edge、opera、safari；
4. 支持多语言：python\java\C#\js\Ruby\PHP；
5. 成熟稳定功能强大：被大公司使用。google、华为、百度、腾讯。

后续大家在选择自动化工具的时，这几个特点就是选择工具的依据。

#### 1.3selenium发展史

* selenium 1.0

  * selenium IDE 

    * 是firefox的一款插件，通过它可以记录用户的操作并生成对应的自动化脚本。

  * selenium grid     通过grid可以将脚本下发到不同的电脑在不同的浏览器上面执行。

    ![image-20200621105146357](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514404.png)

  * selenium RC

    由JS封装的一个工具，用来对浏览器进行操作的。

* selenium 2.0 

  * selenium 1.0 + webdriver 
  * 针对浏览器的操作都是通过webdriver来实现的。
  * 支持的语言更多

* selenium 3.0 

  * 删除了selenium RC
  * 全面支持java8 
  * 支持macOS，支持safari浏览器
  * 支持微软最新的EDGE浏览器，支持更多的浏览器

### <font color=red>2、环境搭建</font>

#### 2.1 selenium工作原理

![ ](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514827.png)

### 2.2 selenium环境安装

#### 2.1 python开发工具安装(不需要安装，python阶段已经安装过了)

#### 2.2 浏览器安装（浏览器电脑已安装）

<font color=red>需要注意浏览器与浏览器驱动的版本， 不同的浏览器有不同的浏览器驱动，而且同一浏览器的不同版本也有不同的浏览器驱动</font>

#### 2.3selenium工具包安装

* 在线安装方式:   在dos命令行中输入:  pip install selenium

* 离线安装方式:   

  * 需要获取selenium离线安装包并解压
  * 在DOS命令行进入到解压的目录，然后执行python setup.py install 

* pycharm进行安装

  * 在file菜单中选择setting， 然后选择"project- interpreter"
  * ![image-20200621112636954](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514777.png)
  * ![image-20200621112852206](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519939.png)

* 如何确认selenium安装完成：可以通过pip show selenium进行查看

  ![CleanShot 2024-01-05 at 12.08.06@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051208122.png)

#### 2.4 浏览器驱动安装

* 安装浏览器驱动之前，一定要知道自己浏览器的版本。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051209428.png" alt="CleanShot 2024-01-05 at 12.09.26@2x" style="zoom:50%;" />

* 通过https://npm.taobao.org/mirrors/chromedriver/   获取对应的浏览器驱动

* 解压浏览器驱动文件，并将驱动文件复制到python的根目录就行了。

  查看python安装根目录：通过where python命令

  

#### 2.4 入门示例

1. 项目创建

   - 项目名称不要 与第三方的模块名同名；

   - 文件名称也不要与第三方的模块名或者是类名同名；

   - 项目创建时不要使用虚拟环境。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051211182.png" alt="CleanShot 2024-01-05 at 12.10.38@2x" style="zoom:50%;" />

2. 相关代码

   ```python
   # 导入selenium
   import time
   
   from selenium import webdriver
   # 实例化浏览器驱动对象（创建浏览器驱动对象）
   driver = webdriver.Chrome()  # 创建的是谷歌浏览器驱动对象   chrome后面有括号，而且第一个字母要大写
   # driver = webdriver.Firefox() # 创建火狐浏览器驱动对象
   # 打开百度网站
   driver.get("http://www.baidu.com")
   # 等待3s（代表业务操作）
   time.sleep(3)     # 通过快捷导包的方式导入time模块，  光标要在time后面再按alt+enter
   # 退出浏览器驱动(释放系统资源)
   driver.quit()
   ```

3. 运行python文件mac下成功后如图

   ![image-20231117171310779](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051212977.png)

## 三、元素定位

#### 3.1 如何进行元素定位？

##### 什么是元素

元素： 由标签头+标签尾+中间的文本内容

![CleanShot 2024-01-05 at 12.13.23@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051215533.png)

##### 举例

该图中就包含了三个元素。

![image-20231117180024784](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519498.png)

- 元素的信息：指元素的标签名以及元素的属性
- 元素的层级结构：指元素之间相互嵌套的层级结构
- 元素定位：通过元素的信息或者元素的层级结构来进行元素定位。

#### 3.2 浏览器开发者工具介绍

* 浏览器开发者工具主要用来查看元素的信息, 同时也可以查看接口的相关信息。

* 浏览器开发者工具不需要安装，浏览器自带.

* 浏览器开发者工具的启动:

  * 直接按F12  不区分浏览器
  * 通过右键的方式来启动浏览器开发者工具 (谷歌浏览器右键选择“检查”, 火狐浏览器右键选择“检查元素”）

* 浏览器开发者工具使用

  * 点击 浏览器开发者工具左上角的  元素查看器按钮
  * 再点击想要查看的元素

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519940.png" alt="image-20231121102022212" style="zoom:50%;" />

#### 3.3 元素定位

1. id定位
2. name定位
3. class_name定位
4. tag_name定位
5. link_text定位
6. partail_link_text定位
7. xpath定位
8. css定位

##### <font color=red>3.3.1 ID定位</font>

* 通过元素的ID属性值来进行元素定位（在html标准规范中 ID值是唯一的，因此可以定位到唯一的元素）

  说明： 元素要有ID属性

* 定位方法版本selenium4：find_element(By.ID,"value") # value参数表示的是id的属性值

###### 案例

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

###### 实现

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

selenium4

```python
# 导包
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
# 实例化浏览器驱动对象（创建浏览器驱动对象）
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 在用户名输入框输入admin
driver.find_element(By.ID,"userA").send_keys("admin")
# 在密码输入框输入123456
driver.find_element(By.ID,"passwordA").send_keys("123456")
# 等待3s
time.sleep(3)
# 退出浏览器
driver.quit()
```

定位方法版本selenium3：  find_element_by_id("value")   

```python
# 导包selenium
import time

from selenium import webdriver
# 创建浏览器驱动对象
driver = webdriver.Chrome()
# 打开测试网站
driver.get("file:///D:/software/UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%B7%A5%E5%85%B7/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 通过ID定位到用户名输入框并在用户名输入框中输入admin
driver.find_element_by_id("userA").send_keys("admin")
# 通过ID定位到密码输入框并在密码输入框中输入123456
driver.find_element_by_id("passwordA").send_keys("123456")
# 等待3s
time.sleep(3)
# 退出浏览器
driver.quit()
```

运行结果：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519942.png" alt="image-20231121111824556" style="zoom:50%;" />

> 后续结果全使用selenium4运行。

##### 3.3.2 name定位

* 通过元素的name属性值为进行元素定位   name属性值 在HTML页面中，是可以重复的。

  说明：元素要有name属性

* 定位方法:  find_element(By.NAME,"value")   # value参数表示的是name的属性值

###### 案例

```
使用name定位输入用户名admin和密码123456
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519943.png" alt="image-20231121113713268" style="zoom:50%;" />

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
# 输入用户名admin
driver.find_element(By.NAME,"userA").send_keys("admin")
# 输入密码123456
driver.find_element(By.NAME,"passwordA").send_keys("123456")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

运行结果和上面一样不再赘述

##### <font color=red>3.3.3 class_name定位</font>

* 通过元素的class属性值进行元素定位    class属性值是可重复的

  说明：元素必须要有class属性

* 定位方法： find_element(By.CLASS_NAME,"value")   #  value参数表示的是class的<font color=red>其中一个属性值</font>

###### 案例

```
使用class_name定位输入电话13323426898和邮箱123@google.com
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519944.png" alt="image-20231121114812682" style="zoom:50%;" />

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
# 输入电话13323426898
driver.find_element(By.CLASS_NAME,"telA").send_keys("13323426898")
# 输入邮箱123@google.com
driver.find_element(By.CLASS_NAME,"dzyxA").send_keys("123@google.com")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

###### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519945.png" alt="image-20231121115420913" style="zoom:50%;" />

##### 3.3.4 tag_name定位

* 通过元素的标签名称进行定位，   在同一个html页面当中，相同标签元素会有很多。

  这种定位元素的方式**不建议大家在工作当中使用**。

* 定位方法:  find_element(By.TAG_NAME,"value"))  # value表示的是元素的标签名称。

  如果有重复的元素，定位到的元素默认都是第一个元素

###### 案例

```
使用 tag_name定位输入用户名admin
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519946.png" alt="image-20231121115930508" style="zoom:50%;" />

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
# 输入用户名admin
driver.find_element(By.TAG_NAME,"input").send_keys("admin")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

###### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519947.png" alt="image-20231121120229163" style="zoom:50%;" />

##### 3.3.5  link_text定位

* 通过超链接的全部文本信息进行元素定位 ,主要用来定位a标签
* 定位方法：  find_element(By.LINK_TEXT,"value")   #  value参数代表的是a标签的<font color=red>全部</font>文本内容（精确查找）。

###### 案例

```
使用 link_text定位精确查找访问新浪网站，点击的超链接是“新浪”
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519948.png" alt="image-20231121121050379" style="zoom:50%;" />

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
# 精确查找访问新浪网站，点击的超链接是“新浪”
driver.find_element(By.LINK_TEXT,"新浪").click()
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

###### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519949.png" alt="image-20231121121332138" style="zoom:50%;" />

##### <font color=red>3.3.6 partial_link_text定位</font>

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
driver.get("file:///Users/hk/Documents/%E9%BB%91%E9%A9%AC2022%E5%B9%B4%E6%B5%8B%E8%AF%95/%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99/09%E3%80%81UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E5%8F%8A%E9%BB%91%E9%A9%AC%E5%A4%B4%E6%9D%A1%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/UI%E8%87%AA%E5%8A%A8%E5%8C%96/web%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88/pagetest/%E6%B3%A8%E5%86%8CA.html")
# 模糊查找访问新浪网站，点击的超链接是“访问 新浪 网站”
driver.find_element(By.PARTIAL_LINK_TEXT,"访问 新浪").click()
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

运行结果同上不再赘述

##### 3.3.7 定位一组元素

* 定位一组元素的方法:

  find_elements(By.ID,"value")

  find_elements(By.TAG_NAME,"value")

  ...

  其它方法也只需要将 find_element 替换为 find_elements

* 定位一组元素返回的值是一个列表

* 可以通过下标来使用列表中的元素

* 下标是从0开始。

###### 案例

```
使用tag_name定位密码输入框(第二个input标签)，并输入：123456
```

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
# 使用tag_name定位密码输入框(第二个input标签)，并输入：123456
elements = driver.find_elements(By.TAG_NAME,"input")
elements[1].send_keys("123456")
# 等待3秒
time.sleep(3)
# 退出
driver.quit()
```

运行结果

![image-20240103151711417](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519950.png)