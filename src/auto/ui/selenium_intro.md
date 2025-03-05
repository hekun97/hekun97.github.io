---
icon: pen-to-square
category: UI自动化测试
tag:
  - 介绍
  - selenium
order: 2
sticky: true
---

# selenium介绍和环境搭建

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

需要注意浏览器与浏览器驱动的版本， 不同的浏览器有不同的浏览器驱动，而且同一浏览器的不同版本也有不同的浏览器驱动

#### 2.3selenium工具包安装

* 在线安装方式:   在dos命令行中输入:  pip install selenium

* 离线安装方式:   

  * 需要获取selenium离线安装包并解压
  * 在DOS命令行进入到解压的目录，然后执行python setup.py install 

* pycharm进行安装

  * 在file菜单中选择setting， 然后选择"project- interpreter"

    ![image-20200621112636954](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514777.png)

    ![image-20200621112852206](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519939.png)

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



