---
title: app专项测试二
order: 51
tag: appTest
---

## 二、学车不app测试概览

结合`APP手工测试课程讲义V4-w.pdf`教程

### 1、模拟器安装及使用介绍

过程略，自己探索。

### 2、app测试要点

* 功能测试   ★
* 兼容性测试 ★
* 安装、卸载、升级测试 ★
* 交叉事件测试：如打游戏的时候电话进来 ★
* PUSH测试：消息推送测试
* 性能测试 ★
  * CPU
  * 内存
  * 流量
  * 电量
  * 流畅度
  * 启动速度
* 用户体验测试 ★
* 稳定性测试

> 打★的为重点测试内容，一定要掌握。

#### 2、业务功能测试

根据测试功能去拆分功能点，再根据功能点去分析测试点。



## 三、专项测试

### 1、兼容性测试（专项）

1. 系统

   - android
   - IOS

2. 手机系统的版本（覆盖主流）

   - android  对应的主流版本 9.0 \ 8.1  \10.0的版本
   - IOS     对应的主流版本  13.3.1 \ 13.4.1\ 13.3 

3. 品牌-机型（覆盖主流）

   - android   华为、小米、vivo
   - IOS 苹果

4. 屏幕尺寸、分辨率（覆盖主流）

5. 应用兼容性（软硬件兼容性）

   - 与手机硬件兼容

     home键、电源键、音量调节等

   - 与外部硬件设备兼容

     耳机、蓝牙等

   - 与操作系统软件兼容

     wlan设置、系统时间调节、LBS定位等

   - 与其他APP兼容

     后台在播放音乐时，进入动态页面点击动态视频的播放，系统如何处理

6. 网络兼容性

   2G\3G\4G\5G\WIFI

> 其中的覆盖主流之前可以看百度流量统计院的数据，现在下架了，测试的时候可以参考下其他的数据。

拓展：

- 不可能去做全兼容的测试。
- 做深度兼容测试需要借助于第三方云测试平台（如：testin云测），云测平台有很多手机。
- 流程：在云测平台注册账号，上传APP，给钱，拿报告 。

### 2、安装卸载升级测试（专项）

app是一个客户端程序，客户端在使用前是需要安装的，因此需要测试安装、卸载、升级的操作。

#### 安装测试点

只要大家能想到的点，都可以去进行测试，没有对错。

* 正常场景：
  1. 在不同的操作系统、不同的手机品版和版本上安装；
  2. 从不同的渠道下载app进行测试；
  3. 不同的安装路径，安装在手机的内存卡或者是SD卡（非必要）。
* 异常场景：
  1. 安装时出现异常（关机、断网），恢复后能否继续安装；
  2. 安装时存储空间不够或者内存不足；
  3. 安装时点击取消再安装；
  4. 安装之后再次覆盖安装；
  5. 低版本覆盖安装高版本。

#### 卸载测试点

- 正常卸载：长按app正常删除卸载、通过第三方工具进行卸载
- 异常卸载：app正在运行卸载、取消卸载、卸载关机、卸载之后数据是否保留

#### 升级测试点

- 正常升级: 从低版本升级到高版本，从app内部升级， 从app应用商城升级
- 异常升级：跨版本升级， 关机，内存不足，电量不足
- 正常异常都需要测的：升级提示，升级之后数据的检查

---

### 3、交叉测试

概念：交叉测试又称为冲突测试，或者干扰测试

交叉事件的关注点：

1. app运行时接打电话
2. app运行时收发短信
3. app运行时收到推送通知
4. app运行时接到视频通话
5. app运行连接蓝牙
6. app运行时切换网络、切换应用
7. app运行时旋转屏幕

---

### 4、push消息测试

* 消息推送的场景:
  * 新闻资讯类通知， 让用户实时获取到自己感兴趣的新闻，从而增加用户的粘性
  * 商城类通知，  让用户获取到商城的促销活动，提高用户的成交率
  * 流程类的通知， 让用户及时获取处理工作的内容。
* 推送原理：  是由服务器通过推送的服务将对应的消息推送到app端。 是一个长连接的状态。
* 推送服务器： 使用的是第三方的推送服务器。（极光或者信鸽）
* 手机厂商会搭建自己的推送服务器。
* 中小企业不会自己搭建推送服务器，一般使用的都是第三方的推送服务器
* push消息推送的关注点
  1. PUSH消息推送是否按指业务规则发送
  2. 当PUSH推送时，检查是否按特定用户去进行推送
  3. 设置不接收推送消息时，确认是否正常
  4. 推送通知的跳转是否正常
  5. 推送消息的打开及展示
  6. 包括app是否运行，都需要去关注推送消息能否收到。

---

### 3、性能测试

1. 打开开发者选项

   点击“系统应用”--“设置”， 在设置 的最下方选择“关于平板电脑”，在关于平板电脑中多次点击“版本号”直到提示开发者选项已打开。

2. 打开 USB调试  以及 指针位置

   返回到设置菜单页面时，可以看到新出现的 “开发者选项”这个菜单。点击进入到开发者选项， 打开 USB调试  以及指针位置  这两个选项。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522563.png" alt="CleanShot 2023-12-04 at 12.34.34@2x" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522564.png" alt="CleanShot 2023-12-04 at 12.35.00@2x" style="zoom:50%;" />

3. 开启超级管理员访问权限

   点击“系统应用”--“文件管理器”， 在文件管理器的左上方有三横杆的按钮，在弹出的页面中点击左下方的 齿轮 按钮，进入到设置页面之后，选择  “常规设置”---“访问模式”，将访问模式更改为超级管理员访问模式。或者直接同意‘超级管理员访问权限’
   
   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522565.png" alt="CleanShot 2023-12-04 at 12.36.18@2x" style="zoom:50%;" />

#### 3.1 性能工具介绍及安装

使用的主要工具是GT随身调。

##### GT随身调

android版是由腾讯公司开发的性能测试平台。直接运行在手机上面的。

##### 可测试内容

可以通过GT工具进行基础的性能测试：内存、CPU、电量、网络流量、流畅度，可以以绘制图表的形式显示出指标的相关数据

##### 其它功能

GT工具提供了查看日志的功能。可以通过查看相关日志来分析和定位app功能异常以及crash等问题

#### 3.2 性能工具使用

1. 打开GT工具，在AUT界面选择被测试的app以及对应的性能指标

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522566.png" alt="CleanShot 2023-12-04 at 17.23.53@2x" style="zoom:50%;" />

2. 设置参数，进入到参数页面，点击右上角的"编辑"按钮，拖动想要测试的参数到已关注区域，而且要勾选。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522567.png" alt="CleanShot 2023-12-04 at 17.48.58@2x" style="zoom:50%;" />

3. 勾选之后，点击上方的红色 录制按钮。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522568.png" alt="CleanShot 2023-12-04 at 17.53.46@2x" style="zoom:50%;" />

4. 执行测试之前，进入到日志界面，开启logcat的日志记录功能。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522569.png" alt="CleanShot 2023-12-04 at 17.35.28@2x" style="zoom:50%;" />

5. 如果要进行电量或流量的性能测试需要进入到插件页面进行设置。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522570.png" alt="CleanShot 2023-12-04 at 17.51.32@2x" style="zoom:50%;" />

6. 返回到AUT界面，在上面点击“启动”或者“running” 来启动被测试的app

7. 针对app进行相关的业务操作

8. 操作完成之后，再进入到GT工具，查看性能参数的数据。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522571.png" alt="CleanShot 2023-12-04 at 17.59.51@2x" style="zoom:50%;" />

9. 查看运行时日志

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522572.png" alt="CleanShot 2023-12-04 at 18.03.14@2x" style="zoom:50%;" />

#### 3.3 CPU测试

GT工具提供了两个CPU的监控指标：**CPU和jiffes**

CPU：指当前手机中cpu的整体使用率

jiffief：表示的是开机以来，程序消耗的CPU时间片的总数

##### CPU使用率计算公式

在Linux 系统下，CPU 利用率分为用户态、系统态和空闲态，

- 用户态：cpu处于应用程序执行的时间
- 系统态：表示的是系统内核执行的时间
- 空闲态：表示空闲系统进程执行的时间

`cpu使用率 = cpu空闲态/cpu的总的执行时间`

> 我们一般不需要自己计算，这个由计算机自己计算就行。

##### CPU问题的影响

1. CPU使用长时间处于90%以上  (70   80 )
2. 手机发热、耗电量增加
3. 反应变慢，引起ANR（Application Not Responding：假死状态）

##### 案例

###### 需求

打开学车不，进入驾考圈-最新tab，上下滑动动态，评论赞操作，CPU指标正常。 

###### 测试步骤

1. 打开GT工具，配置CPU监控指标（可配置告警阈值）

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522573.png" alt="CleanShot 2023-12-07 at 14.06.38@2x" style="zoom:50%;" /><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522574.png" alt="CleanShot 2023-12-07 at 14.07.46@2x" style="zoom:50%;" />

2. 进入学车不APP，操作上述业务，观察运行时的CPU指标（实际工作当中，操作时间会比较长）

   - APP运行时CPU是否有快速飙升
   - APP运行时CPU是否长时间处于90%以上

3. 查看CPU运行结果

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522575.png" alt="CleanShot 2023-12-07 at 14.11.10@2x" style="zoom: 25%;" />

4. 保存CPU详细数据后，可以查看CPU详细的数据统计。（后续可以将数据导入到电脑上，用于分析数据。）

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031522576.png" alt="CleanShot 2023-12-07 at 14.14.04@2x" style="zoom: 25%;" />

#### 3.4 内存测试

GT工具提供了两个内存的监控指标：**PSS**和**private dirty**

private dirty（私有内存）：进程独占的内存，也就是进程销毁时可以回收的内存容量.

PSS（实际使用内存）：将跨进程的共享内存也加入进来，进行按比列计算PSS。就能够准确的表示进程占用的实际物理内存。

##### 常见问题

1. 内存泄漏（memory leak）：当程序运行时申请了对应的内存空间，而当程序销毁时并没有释放对应的内存空间。
2. 内存溢出 (out of memory)：是指程序在申请内存空间时，没有足够的内存空间供其使用。

##### 内存问题产生的影响

1. 程序实际使用的内存PSS会不停的增长
2. 程序会出现闪退（crash）

> 注意：内存的指标根据不同的手机配置、以及不同的公司，指标值是不一样的。
>

##### 案例

###### 需求

打开学车不，进入驾考圈-最新tab，上下滑动动态，评论赞操作，内存指标正常。

###### 内存测试操作步骤

1. 打开GT工具，选择对应的被测app， 勾选内存指标（PSS和private dirty）
2. 进入到参数界面，编辑参数，勾选对应参数，并点击录制按钮
3. 进入到日志界面，开启logcat,记录日志信息
4. 回到AUT界面，点击 启动按钮，启动被测试的app
5. 针对启动的app进行相关的业务功能操作（时间一般也会在几个小时左右。）
6. 操作完成，回到GT工具的参数界面，查看获取到的参数数据

#### 3.5 流畅度测试

GT工具提供了流畅度的监控指标：**FPS**

FPS（Frames per second）：GPU在一秒内绘制的帧数，指人的肉眼能够看到的画面每一秒帧数。

> 动画片其实是由一张张画出来的图片连贯执行产生的效果，当一张张独立的图片切换速度足够快的时候，会欺骗我们的眼 
> 睛，以为这是连续的动作。反之类推，当你的图片切换不够快的时候，就会被人眼看穿，反馈给用户的就是所谓的卡顿现象。

##### 流畅度问题产生的影响

1. 想要让大脑觉得动作是连续的，至少是每秒10-12帧的速度；
2. 想达到流畅的效果，**至少需要每秒24帧**；
3. 60帧每秒的流畅度是最佳的，我们的目标就是让程序的流畅度能接近60帧每秒。

> 现在很多手机支持更高帧数，像120帧、90帧，。

当页面静止不动时，FPS的值显示的是0

测试时间：15-30分钟

##### 测试步骤

1. 打开GT工具，进入到AUT界面，选择被测试的app；
2. 进入到参数界面，点击编辑拖动FPS参数到已关注参数中，勾选之后，点击录制；
3. 进入到日志界面，开启logcat记录日志信息；
4. 返回到AUT界面，点击启动，打开被测试的app；
5. 针对被测app进行相关的业务操作；
6. 返回到参数界面查看参数数据。

#### 3.6 流量测试

GT工具里面提供了一个监控流量的指标：**NET**

流量：手机在访问网络过程当所产生的上传和下载的数据（报文）就称为流量

> 注意：这里的NET指的是整个手机产生的流量（不区分进程的流量）

##### 常用流量测试方法

* 抓包测试法

  通过抓包工具将所有的网络应用数据包，全部抓取到并保存到某个文件中，进行分析的过程 。

  > fiddler或者Charles一般只能抓http和https协议的数据包。
  >
  > wireshark、sniffer可以抓所有协议的报文，tcpdump命令也可以抓所有的报文。

* 统计测试法

  获取的是某一个应用程序获取的数据报文，统计出对应的流量。

##### GT工具测试步骤

1. 打开GT进入到AUT界面，选择被测试的app，勾选NET指标
2. 进入到参数界面，点击编辑，拖选 NET参数，勾选并点击录制
3. 进入到日志界面，开启Logcat记录日志信息
4. 进入到插件界面，选择“抓包”，再点击“开始”
5. 返回到AUT界面，点击“启动”，启动测试app
6. 针对启动的app进行相关业务操作
7. 返回到参数界面，停止录制，再返回到插件界面，点击“抓包”，再点“停止”

##### 流量的优化

| 编号 | 名称                 | 说明                                                         |
| ---- | -------------------- | ------------------------------------------------------------ |
| 1    | 数据压缩             | 在HTTP协议中可以通过此字段将数据进行压缩，减少数据容量。<br />`content-encoding: gzip`<br />`Accept--Encoding：gzip，deflate` |
| 2    | 不同的数据格式的采用 | json、xml或lxml数据格式（一般情况下json数据格式文件更小）    |
| 3    | 控制访问的频次       | 通过异步加载的方式来加载数据。（如：随滚动条加载数据）       |
| 4    | 只获取必要的数据     |                                                              |
| 5    | 缓存机制             |                                                              |
| 6    | 懒加载               | 将多个图片放在同一张图片里面，一起加载。（比如多个图标放在一张图内，然后通过CSS的剪切实现显示不同图标） |

> Accept-Encoding表示Http响应是否进行压缩，一般的浏览器在访问网页时，是默认在请求头中加入。
>
> Accept--Encoding：gzip，deflate，表示这个请求的内容希望被压缩，压缩的目的是为了减少网络流量， 但是这个只是协议，只能是要求而不是强制的，如果服务器不支持压缩或者没有开启压缩，则不能起到作用。
>
> 如果服务器也是支持压缩或者开启压缩，则会在响应头中加入Content-Encoding：gzip头部。
>
> <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524547.png" alt="CleanShot 2023-12-11 at 10.58.49@2x" style="zoom:50%;" />

#### 3.7 电量测试

GT工具的插件中提供了电量的监控指标：电流、电压，电量跟温度。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031524548.png" alt="CleanShot 2023-12-11 at 11.41.24@2x" style="zoom:50%;" />

就是指移动设备电量消耗快慢的一种测试方法，一般用平均电流来衡量电量的消耗速度。

##### 常见的耗电场景

1. GPS
2. 网络传输
3. 蓝牙
4. 屏幕的亮度

GT工具只能对特定类型的机型进行电量的测试。

可换其他性能测试工具进行测试，也可以使用对比方式进行测试。（用同类型的被测产品，在同样的手机，同样的场景下进行对比测试）

#### 3.8 用户体验测试

用户体验主要是跟app的界面有关。

* UI界面测试    包括界面的设计、界面元素框架、结构、颜色、布局、图片、按钮选中的一些效、文字的内容；
* 易用性测试    菜单的层次、完成业务操作的步骤是否过多， 点击按钮的范围 是不是合适，包括返回键的操作；
* 横竖屏测试    横屏之后，页在的表格是不是能正常的显示；
* 关注手机上的其他辅助功能    放大字体、无障碍功能等。

#### 3.9 弱网测试

1. 打开Charles，开启"启动透明HTTP代理"；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525419.png" alt="CleanShot 2023-12-15 at 11.41.08@2x" style="zoom:50%;" />

   :::: tip 提示

   如果无法进行抓包，可能端口8888被占用，可以手动更改代理端，如：9999。

   :::

2. 在Charles中设置网络的上传和下载的速度；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525420.png" alt="CleanShot 2023-12-15 at 11.10.08@2x" style="zoom:50%;" />

3. 点击小乌龟按钮开启弱网选项；

   ![CleanShot 2023-12-15 at 11.45.38@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525421.png)

4. 确认电脑ip地址；

   Mac、Linux使用命令：ifconfig，Windows使用命令：ipconfig。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525422.png" alt="CleanShot 2023-12-15 at 12.14.31@2x" style="zoom:50%;" />

5. 在手机中设置网络的代理；

   打开设置 > 找到WLAN > 长按已连接网络后点击修改网络 > 添加手动代理

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525423.png" alt="CleanShot 2023-12-15 at 12.16.40@2x" style="zoom: 25%;" />

6. 手机点击保存后，这时候电脑上的Charles会提示是否连接，点击允许；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525424.png" alt="CleanShot 2023-12-15 at 11.34.32@2x" style="zoom:50%;" />

7. 然后就可以操作手机上的被测软件进行弱网测试了，电脑上的Charles会显示相关的抓包信息。

   

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525425.png" alt="CleanShot 2023-12-15 at 12.22.04@2x" style="zoom:50%;" />

> 使用fiddler的话步骤差不多，自行百度搜索。

---

## 四、app测试总结

如何测试app，app测试的生命周期?

1. 首先了解需求。

2. 主要的测试过程 ：
   - 测试功能
   - 兼容性测试
   - 安装、卸载、升级测试
   - 交叉事件测试
   - 用户体验测试
   - PUSH测试
   - 性能测试（CPU、内存、电量、流量、流畅度、启动时间）
   - 稳定性测试
3. 当对app进行了充分的测试之后，就可以编写测试报告 ，发布app到线上了。
4. app的发布，打包上传到各大应用商城。
   - 测试人员也需要关注，关注的是app线上的BUG。
   - 运维需要关注的app的线上环境
