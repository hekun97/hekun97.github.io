---
icon: pen-to-square
category: UI自动化测试
tag:
  - 介绍
  - selenium
order: 2
sticky: true
---

# UI自动化测试和Selenium介绍

## 一、UI自动化测试

### 1. 什么是UI自动化

通过程序脚本模拟人工操作对web应用以及app应用进行系统验证的过程（聚焦UI层）。

### 2. UI自动化测试在什么阶段开始

手工测试完成之后才做自动化测试，相当于是编写自动化测试代码（通过手工测试能够清楚的知道自动化测试的步骤以及结果）。

### 3. UI测试步骤举例

1. V1 通过手工测试完成之后，有10个功能。
2. 针对V1版本的10个功能，进行自动化的代码编写。
3. V2 增加了10个功能（总共有20个功能）， V2版本的测试过程中，新增的10个功能使用手工测试，老的10个功能通过自动化来进行回归测试。

## 二、常用自动化框架

### 1. 主流的web自动化工具

| 工具     | 描述                                                         | 使用       |
| -------- | ------------------------------------------------------------ | ---------- |
| QTP      | 由惠普公司开发的一款自动化工具，支持web、桌面的自动化测试。  收费的商用工具。 | 很少人用   |
| selenium | 主要用来做web自动化测试的，开源的免费的工具，中文名硒。      | 本阶段学习 |
| Cypress  | Cypress 经常和 Selenium 相提并论；然而，Cypress 在结构和基础上与之有所不同。Cypress 不受 Selenium 限制。 | 后续学习   |

## 三、selenium介绍

### 1. selenium特点

| 特点             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| 开源             | 源代码开放，但是不一定免费，像Linux的不同版本   |
| 跨平台           | 平台指操作系统。   linux、windows、 mac操作系统 |
| 支持多种浏览器   | firefox、chrome、 ie、edge、opera、safari       |
| 支持多语言       | python、java、C#、js、Ruby、PHP                 |
| 成熟稳定功能强大 | 被大公司使用。google、华为、百度、腾讯。        |

::: tip 提示

后续大家在选择自动化工具的时，这几个特点就是选择工具的重要依据。

:::

### 2. selenium发展史

* selenium 1.0

  * **selenium IDE**：是firefox的一款插件，通过它可以记录用户的操作并生成对应的自动化脚本。

  * **selenium grid**：通过grid可以将脚本下发到不同的电脑在不同的浏览器上面执行。

    ![image-20200621105146357](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514404.png)

  * **selenium RC**：由JS封装的一个工具，用来对浏览器进行操作的。

* selenium 2.0 

  * selenium 1.0 + webdriver 
  * 针对浏览器的操作都是通过webdriver来实现的。
  * 支持的语言更多

* selenium 3.0 

  * 删除了selenium RC
  * 全面支持java8 
  * 支持macOS，支持safari浏览器
  * 支持微软最新的EDGE浏览器，支持更多的浏览器

* selenium 4.0：参考文章 后续补充链接

### 3. selenium工作原理

![ ](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514827.png)

## 四、selenium环境搭建

### 1. python开发工具安装

不需要安装，python阶段已经安装过了，就是Pycharm软件。

### 2. 浏览器安装

浏览器可按需使用Chorme、Firefox等浏览器。

### 3. selenium安装

* 在线安装方式:   在终端输入  `pip install selenium`

* 离线安装方式:   

  * 获取selenium离线安装包并解压；
  * 在终端进入到解压的目录，然后执行`python setup.py install`。

  ::: info

  适用于内网环境使用。

  :::

* pycharm进行安装

  * 在file菜单中选择setting， 然后选择"project- interpreter"

    ![image-20200621112636954](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031514777.png)

    ![image-20200621112852206](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031519939.png)

* 如何确认selenium安装完成：可以通过pip show selenium进行查看

  ![CleanShot 2024-01-05 at 12.08.06@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051208122.png)

### 4. 浏览器驱动安装

* 安装浏览器驱动之前，一定要知道自己浏览器的版本。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051209428.png" alt="CleanShot 2024-01-05 at 12.09.26@2x" style="zoom:50%;" />

  ::: warning 注意

  需要注意浏览器与浏览器驱动的版本， 不同的浏览器有不同的浏览器驱动，而且同一浏览器的不同版本也有不同的浏览器驱动。

  :::

* 通过[Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/) 获取对应的浏览器驱动

* 解压浏览器驱动文件，并将驱动文件复制到python的根目录或项目下，然后指定chrome驱动。
查看python安装根目录：通过`where python`命令

## 五. 入门示例

### 1. 项目创建

- 项目名称不要 与第三方的模块名同名；

- 文件名称也不要与第三方的模块名或者是类名同名；

- 项目创建时不要使用虚拟环境。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051211182.png" alt="CleanShot 2024-01-05 at 12.10.38@2x" style="zoom:50%;" />

### 2. 相关代码

```python
import time
# 1.导入selenium
from selenium import webdriver
# 2.实例化浏览器驱动对象（创建浏览器驱动对象）
driver = webdriver.Chrome()  # 创建谷歌浏览器驱动对象
# driver = webdriver.Firefox()  # 创建火狐浏览器驱动对象
# 3.打开百度网站
driver.get("http://www.baidu.com")
# 4.等待3s（这里代表业务操作）
time.sleep(3)# 通过快捷导包的方式导入time模块，光标要在time后面按alt+enter
# 5.退出浏览器驱动(释放系统资源)
driver.quit()
```

### 3. 运行结果

运行python文件mac下成功后如图

![image-20231117171310779](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401051212977.png)



