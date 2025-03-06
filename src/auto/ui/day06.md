---
title: app自动化测试(appium)一
order: 61
tag: appAutomatedTest
---

## 一、app自动化框架介绍

### 1、常用自动化框架介绍

1. Robtium（一般Java语言下用）
   - 基于anroid的一款开源自动化测试框架
   - 适用平台：anroid
   - 支持语言：java
   - 缺点：不支持跨应用、跨平台
2. macaca（一般不用）
   - 由阿里巴巴公开开发的一套开源自动化解决方案
   - 适用平台：PC端、android、IOS
   - 支持的语言：java、python、nodejs
3. Appium（当前学习）
   - 是一款国外开源的自动化测试框架
   - 适用平台：android、IOS
   - 支持的语言：java、js、php、python、C#、ruby
   - 优点：社区活跃、资料丰富

### 2、appium介绍

#### 2.1 appium自动化框架特点

1. 开源

2. 支持Native App(全部android sdk的java代码生成)  原生的app如果页面有变更，就得发布一版本，提交到应用商城去审核 。

   > Web App（都是由HTML5生成的）  访问速度慢。H5的代码以及元素信息
   >
   > Hybird APP（既有native app也有H5的页面）混合app。（是当前工作中用得最多的）

3. 支持andorid  、IOS

4. 支持跨平台、支持windows、linux、macos

5. 支持多语言：java、js、php、python、C#、ruby（基本的主流语言都能支持）

#### 2.2 appium自动化原理

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524549.png" alt="image-20200628120246352" style="zoom:50%;" />

通过此图可以知道app的自动化环境需要以下工具：

* appium服务器
* 基于python的appium客户端(appium-client-python)
* adb(adb集成在android-sdk中)
* JDK

## 二、自动化测试环境搭建

详见Mac下app自动化测试环境搭建文档。

### 3、模拟器安装（略过）



### 4、appium服务器安装

#### 4.1 appium安装

已更新为appium2，旧版本1不再需要，参考安装配置教程。https://blog.csdn.net/penngo/article/details/132396930

### 5、appium-client-python安装

#### 安装

- 在线：Appium-Python-Client，python使用的appium库，我们后续做app自动化测试就靠它了，直接pip安装,在命令行输入

  ```shell
  pip Appium-Python-Client
  ```

  然后开始安装，会将依赖的selenium 、sockect都安装好，省心省力。

- 离线：如果是非联网的环境，则需要去 Pypi网址下载到本地，然后本地安装[Appium-Python-Client · PyPI](https://pypi.org/project/Appium-Python-Client/2.7.1/#files)），安装方法为解压下载的包，命令行进入对应的目录，然后运行如下命令

  ```bash
  python setup.py install 
  ```

#### 验证是否安装

- 命令行

  ```
  pip show Appium-Python-Client
  ```

- pycharm

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524550.png" alt="CleanShot 2023-12-12 at 10.53.54@2x" style="zoom:50%;" />

## 三、adb工具

### 1、adb工具构成及原理

* adb包含了三个部分
  * adb 客户端：用来下发adb的指令工具。像我们的终端窗口，就可以用来下发adb指令，就能被称为adb的客户端。
  
    <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524551.png" alt="CleanShot 2023-12-12 at 11.11.16@2x" style="zoom:50%;" />
  
  * Server 服务端：adb.exe（Mac下为Unix可执行文件的adb）执行之后的进程，表示adb的服务端，通过服务端与手机上的adb守护进程进行通信。
  
    <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524553.png" alt="CleanShot 2023-12-12 at 11.29.36@2x" style="zoom:50%;" />
  
  * adb 守护进程：随着android系统的启动而启动，当android系统关闭之后它才会关闭。（用来和adb的服务器进行通信）

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524554.png" alt="image-20200628143311081" style="zoom:50%;" />

### 2、adb常用命令

#### 2.1 adb常用命令(常看设备、启动关闭adb服务)

* adb devices：查看手机的设备ID名称以及状态 

  emulator-5554   device：emulator-5554表示的是手机设备的ID名称（唯一、随机）， device表示设备处于在线状态，如果不在线显示的是offline。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524555.png" alt="CleanShot 2023-12-12 at 11.42.46@2x" style="zoom:50%;" />

  > 注意：
  >
  > 1. 如果adb服务没有启动，下发该命令时，会自动的去启动adb的服务（也就是上面的adb的服务器），因此下面的"启动adb服务"命令很少用。
  >
  >    <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524556.png" alt="CleanShot 2023-12-12 at 11.51.04@2x" style="zoom:50%;" />
  >
  > 2. 如果是真机，不要使用**一带多接头的数据线**，否则找不到手机设备。
  >
  > 3. 如果连接的是模拟器，需要先执行`adb connect 127.0.0.1:62001 `，其中62001是模拟器运行端口，不同模拟器的端口号不一样，itools的是54001，夜神的是62001，mumu模拟器的端口号为7555，需要自行查找。
  >
  >    <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524557.png" alt="CleanShot 2023-12-12 at 12.14.26@2x" style="zoom:50%;" />

* adb start-server：启动adb服务

* adb kill-server：关闭adb 服务

#### 2.2 获取包名和界面名

##### 概念

* 包名：app包名，通过app的包名来区分不同的app，app包名是唯一的。

  比如：微信包名：`com.tencent.mm`，QQ包名：`com.tencent.mobileqq`

* 界面名（启动名）：相当于web页面当中的链接地址，在app当中，每个界面都有一个名字。

  > 界面名也可以像web页面的路径一样，确定唯一的页面。

##### 为什么要获取包名和界面名？

自动化测试的过程当中，需要通过app的包名和界面名来启动app。

##### 获取方法

###### adb命令

1. 在手机或者模拟器上面打开需要获取包名和界面名的app，这里的示例是打开GT工具；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524558.png" alt="CleanShot 2023-12-12 at 15.16.08@2x" style="zoom: 25%;" />

2. LINUX/MacOS下获取：

   - 命令一：

     ```shell
     adb shell dumpsys window windows | grep mFocusedApp
     ```

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524559.png" alt="CleanShot 2023-12-12 at 15.07.19@2x" style="zoom:50%;" />

     > `com.tencent.wstt.gt/.activity.GTMainActivity`：其中`com.tencent.wstt.gt`是包名，`.activity.GTMainActivity`是界面名

   - 命令二：

     ```shell
     adb shell dumpsys window | grep  "usedApp"
     ```

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524560.png" alt="CleanShot 2023-12-12 at 15.20.09@2x" style="zoom:50%;" />

3. windows下获取：

   - 命令一：`adb shell dumpsys window windows | findstr  mFocusedApp`

   - 命令二:   `adb shell dumpsys window | findstr "usedApp"`

     > 就是将命令行中的grep换为findstr。

###### 通过aapt命令获取app的包名和界面名

命令如下：

```shell
aapt dump badging  /Users/hk/Downloads/xuechebu.apk 
```

后面表示的是app安装包的路径及名称

1. 包名：

   `package: name='com.bjcsxq.chat.carfriend'` ，属性package:name的值表示的是app的包名。

2. 界面名：

   `launchable-activity: name='com.bjcsxq.chat.carfriend.module_main.activity.SplashActivity'`，属性launchable-activity: name的值是包名+界面名。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524561.png" alt="CleanShot 2023-12-12 at 16.35.03@2x" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524562.png" alt="CleanShot 2023-12-12 at 16.41.00@2x" style="zoom:50%;" />

> 通过adb命令和aapt命令获得的界面名可能不一样，对于学车不软件，这里adb命令界面名以MainActivity结尾，aapt命令的界面名以SplashActivity结尾，表示两个获取出来的界面不同。在自动化测试中，推荐使用aapt命令。
>
> ![CleanShot 2023-12-12 at 16.48.57@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524563.png)

#### 2.3 安装卸载app

* app安装：`adb install 路径/app安装包名称`

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524564.png" alt="CleanShot 2023-12-12 at 17.03.38@2x" style="zoom:50%;" />

* app卸载：`adb uninstall 包名`

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524565.png" alt="CleanShot 2023-12-12 at 17.06.33@2x" style="zoom:50%;" />

#### 2.4 上传下载文件

* 上传：将电脑上的文件上传到手机，命令规范：`adb push 电脑上的文件路径 手机的路径`

  例子：

  ```
  adb push ./monkey.txt /sdcard
  ```

* 下载文件：从手机上下载文件到本地，命令规范：`adb pull 手机的文件路径 电脑的文件夹路径`

  例子：

  ```bash
  adb pull /sdcard/monkey.txt D:\opt
  ```

#### 2.5 查看日志信息

为什么要获取日志信息：用来给开发定位问题。使用命令

```
adb  logcat
```

来查看相关的日志信息。

> 日志信息很多不方便查看的话，可以使用命令将日志信息保存到文件中。

#### 2.6 测试app的启动速度（性能测试）

命令规范:

`adb shell am start -W 包名/界面名`

例子：

```bash
adb shell am start -W com.bjcsxq.chat.carfriend/.module_main.activity.SplashActivity # 测试 学车不 的启动速度
```

运行结果：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524566.png" alt="CleanShot 2023-12-12 at 17.27.22@2x" style="zoom:50%;" />

分析：

1. 专业解释：
   - ThisTime：该界面(activity)启动耗时（毫秒）
   - TotalTime：应用自身启动耗时=ThisTime+应用application等资源启动时间（毫秒）
   - WaitTime：系统启动应用耗时=TotalTime+系统资源启动时间（毫秒）
2. 个人理解：
   - ThisTime：一般和TotalTime时间一样，除非在应用启动时开了一个透明的Activity预先处理一些事再显示出主Activity，这样将比TotalTime小。
   - TotalTime：应用的启动时间，包括创建进程+Application初始化+Activity初始化到界面显示。
   - WaitTime：一般比TotalTime大点，包括系统影响的耗时。

![img](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524567.png)

需要大家关注的是TotalTImie的时间值，那么在实际的测试过程当中，会进行多次测试，然后取平均值。

> 注意：测试前记得完全关闭被测软件，也就是杀掉后台。

---

### 3、稳定性测试  (8小时)

通过monkey工具来实现的。

* monkey：集成在adb工具当中,主要用来做稳定性测试用的， monkey是通过java语言编写的一种稳定性测试工具。

  主要用来测试app会不会出现crash（崩溃）的情况。

  相当于让一只猴子来随机操作app（乱点乱操作），所有的操作都有可能出现，长时间的操作来测试app会不会出现问题。

* monkey常用的参数

  * -p 参数：对指定的app进行随机操作（单击、双击、滑动、长按、滑屏等操作）

    ```shell
    adb shell monkey -p com.baidu.homework  100    # 对作业帮app操作100次随机事件（单击、双击、滑动、长按、滑屏等操作）
    ```

  * -v 参数：表示的是记录信息的级别

    ```shell
    adb shell monkey -p com.baidu.homework  -v 100   # level 0：默认级别
    
    adb shell monkey -p com.baidu.homework  -v  -v 100 # level 1：打印出来的信息会比较详细,只打印跟本程序相关的日志信息
    
    adb shell monkey -p com.baidu.homework  -v  -v -v 100  # level 2：打印出来的信息会更多，会显示出其他程序运行的信息
    ```

  * -s 参数：用于指定伪随机数。如果两次的伪随机数相同，那么两次的操作步骤、流程、操作事件完全一样。

    主要的作用，就是用来复现上次的问题

    ```shell
    adb shell monkey -p com.baidu.homework  -v  -v  -s 10  100
    ```

  * --throttle 用于指定随机事件的间隔时间, 单位是毫秒

    ```shell
    adb shell monkey -p com.baidu.homework  -v  -v  --throttle 3000 -s 10  100 #每隔三秒操作一次
    ```

  组合使用:

  ```shell
  adb shell monkey -p com.baidu.homework  --throttle 500 --pct--touch 10  --pct-motion 50  -v -v -s 100 300 > log.log
  # --pct--touch 10：触模(10表示的是整个随机同件中的百分比)
  # --pct-motion 50：滑屏(50表示的是整个随机同件中的百分比)
  # > log.log：保存日志文件位置
  ```

* 日志分析

  如果在日志文件里面搜索出现了 ANR（application not responsing），说明有bug，出现ANR，一般是主线程的响应超过5秒，或者BroadcastReceiver没有在10秒内作出响应。这个就是一个比较严重的缺陷。把耗时的操作另起线程来处理就可以了。

  如果日志中出现了Exception，可能程序崩溃。

  ![image-20200628165845854](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524568.png)

> 更多的学习参考：https://www.cnblogs.com/laoluoits/p/12750883.html

### 4、adb 手势操作命令

* 模拟点击事件

  ```shell
  adb shell input tap x y           #  x y表示的是坐标点，单位像素，参数之间用空格隔开
  adb shell input tap 200 300
  ```

* 模拟滑屏事件（参数之间用空格隔开）

  ```shell
  adb shell input swipe   startx starty  endx  endy    # startx, starty 表示的是起始点坐标，endx，endy表示的是终点坐标
  adb shell input swipe 200 300 500 600
  ```

* 模拟键盘操作

  ```shell
  adb shell input keyevent 键值   # (3   表示的HOME键    4 表示的返回键    66表示的回车键)
  adb shell input keyevent 3
  ```

* 模拟输入操作

  ```shell
  adb shell input text 内容    # 内容表示要输入的内容，另外输入的内容不能是中文
  adb shell input text hello
  ```

  ::: warning 注意

  1. 如果出现图中  offline的设备，记得重启一下adb服务

     ![image-20200630094950254](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525418.png)

  2. 如果电脑上面连接了多个模拟器或者是手机。那么需要加上一个参数 `-s  device_name` 

     ```shell
     adb -s emulator-5554 shell input keyevent 4
     ```

  :::