---
title: app自动化测试(appium)三
order: 81
tag: appAutomatedTest
---

## 一、获取手机操作

### 1、获取手机分辨率

#### 为什么要获取

自动化测试可能会需要根据当前设备的屏幕分辨率来计算一些点击或滑动的坐标 ；

获取手机分辨率可以保证脚本在不同机型上都能实现点击或滑屏的操作。 

#### 方法

```python
driver.get_window_size()  # 返回的值是字典类型， 包含 height 和 width  高度和宽度的值
```

### 2、获取手机截图

为什么要获取？

有些自动化的操作可能没有反应，但并不报错。此时我们就可以将操作过后的关键情况，截图留存。后期也可以根据图片发现问题。

#### 方法

```python
driver.get_screenshot_as_file(filename) # filename为文件路径+文件名，文件名称以PNG结尾
```

::: warning 注意

1. 路径必须手动创建;
2. 文件名称必须是以PNG结尾

:::

### 3、获取手机分辨率和手机截图案例

#### 实现代码

```python
# 导入webdriver
import time
from appium import webdriver

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

# 获取手机屏幕分辨率
print(driver.get_window_size())

time.sleep(1)
# 截图
driver.get_screenshot_as_file("./AppAutomatedTest/img/error.png")


time.sleep(6)
driver.quit()
```

#### 运行结果

![CleanShot 2023-12-26 at 10.53.43@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401041229503.png)

### 4、获取设置手机网络

#### 4.1 为什么要获取

主要是为了实现视频类的app（如：B站）中，视频播放过程中网络切换时会有提示信息的操作（如：Wi-Fi断开后会提示是否继续使用手机流量观看）。

#### 4.2 appium定义的网络类型

| Value (Alias）      | Data | wifi | Airplane Mode |
| ------------------- | ---- | ---- | ------------- |
| 0（None）           | 0    | 0    | 0             |
| 1（Airplane Mode）  | 0    | 0    | 1             |
| 2（wifi only）      | 0    | 1    | 0             |
| 4（Data only）      | 1    | 0    | 0             |
| 6（All network on） | 1    | 1    | 0             |

#### 4.3 获取手机网络

##### 方法

```
driver.network_connection   
```

#### 4.4 设置手机网络

##### 方法

```python
driver.set_network_connection(connectionType)   #  connectionType：网络类型的值
```

#### 4.5 获取和设置手机网络案例

##### 实现代码

```python
# 导入webdriver
import time
from appium import webdriver

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

# 获取网络类型
print(driver.network_connection)

# 设置网络类型，变为飞行模式
driver.set_network_connection(1)

print(driver.network_connection)


time.sleep(6)
driver.quit()
```

##### 运行结果

```shell
hk@hkdeMacBook-Pro 自动化测试代码 % /usr/local/bin/python3 /Users/hk/Documents/软件测试笔记/自动化测试代码/AppAutomatedTest/appium_network.py
6
1
hk@hkdeMacBook-Pro 自动化测试代码 % 
```

### 4、模拟键盘操作

常用的三个键值： 3 HOME键， 4 返回键 ,  66 回车键

```
driver.press_keycode(键值)
```

### 5、手机通知栏操作

```
driver.open_notifications()
```

### 模拟键盘操作和手机通知栏操作案例

```python
# 导入webdriver
import time
from appium import webdriver

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

#  打开通知栏
driver.open_notifications()
# 模拟返回键
driver.press_keycode(4)

time.sleep(6)
driver.quit()
```

---

## 二、滑动和拖拽事件

### 1、swipe滑动事件

```python
driver.swipe(startx, starty,  endx, endy, duration=None) 
# 从一个坐标位置滑动到另一个坐标位置，只能是两个点之间的滑动。
# 参数：
# 	start_x： 起点X轴坐标 
# 	start_y： 起点Y轴坐标 
# 	end_x： 终点X轴坐标 
# 	end_y： 终点Y轴坐标
#   duration：    滑动这个操作一共持续的时间长度（用来降低滑屏的速度及惯性），单位：ms
```

### 2、swipe滑动事件封装

#### 封装工具类代码

```python
# 封装滑屏操作方法
# driver：驱动，fx：滑动方向，count：滑动次数
def execute_swipe(driver, fx, count=1):
    w = driver.get_window_size()["width"]  # 获取手机屏幕的宽度
    h = driver.get_window_size()["height"] # 获取手机屏幕的高度
    # w=1080  h=1920
    if fx == "top":  # 往上滑
        zb = (w/2, h*0.9, w/2, h*0.1)
    elif fx == "down":  # 往下滑
        zb = (w/2, h*0.1, w/2, h*0.9)
    elif fx == 'left':  # 往左滑
        zb = (w*0.9, h/2, w*0.1, h/2)
    else:  # 往右滑
        zb = (w*0.1, h/2, w*0.9, h/2)
    for i in range(count):
        driver.swipe(*zb, duration=1200)
        time.sleep(1)
```

#### 使用代码

```python
# 其它冗余代码省略，滑动次数（count）不指定可以不填
execute_swipe(driver,"top")
```

### 3、swipe边滑动边查找封装

#### 需求

针对频道类的元素进行滑动选择对应的频道。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401041229504.png" alt="CleanShot 2023-12-29 at 11.57.10@2x" style="zoom:50%;" />

#### 工具类

```python
# 工具类
from selenium.webdriver.support.wait import WebDriverWait
import time

# 定义一个获取元素的方法
def get_element(driver, element):
    wait = WebDriverWait(driver, 10, 1)
    # element[0], element[1]为传入的查找元素的方法和定位元素属性值。
    element = wait.until(lambda x: x.find_element(element[0], element[1]))
    return element
  
# 封装一个边滑动边查找的方法
# driver：驱动，scroll_element：需要滑动的元素对象，find_btn：需要查找的元素定位的值
def swipe_find(driver, scroll_element, find_btn):
    ele_size = scroll_element.size  # 获取需要滑动的元素对象大小
    width = ele_size["width"]  # 获取需要滑动的元素对象的宽度
    height = ele_size["height"]  # 获取需要滑动的元素对象的高度
    # 获了element元素左上角点的坐标
    ele_position = scroll_element.location
    x = ele_position["x"]  # 获取左上角点的x坐标值
    y = ele_position["y"]  # 获取左上角点的y坐标值
    # 确定需要滑动的起止点
    start_x = x + width * 0.9  # 获取的是起始点X的值
    y = y + height * 0.5  # 获取的是起始及终止点的Y的值
    end_x = x + width * 0.1  # 获取的是终止点X的值
    # 循环寻找需要查找的元素
    while True:
        page = driver.page_source  # 记录查找前的页面资源,通过对比页面资源来退出死循环
        try:
            # 使用工具类方法get_element去查找元素
            time.sleep(1)
            get_element(driver, find_btn).click()  # 如果有找到对应的元素那么点击并返回
            return True
        except Exception as e:
            print("没有找到该元素！")
        driver.swipe(start_x, y, end_x, y, duration=1000)  # 没有找到元素，那么像左滑屏后再对比并重新查找
        # 这里不知道原理，但是前面没查找到元素时，或者查找到元素时，对比页面资源的值都是False，只有最后滑屏到最右边后，如果没找到被查找元素，对比页面资源为结果为True
        if page == driver.page_source:
            print("滑屏操作完成且没有找到元素信息")
            return False
```

#### 使用代码

```python
# 导入webdriver
import time
from appium import webdriver
from utils import get_element
from utils import swipe_find
from selenium.webdriver.common.by import By

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName="Android",  # 表示的是android 或者IOS系统
    automationName="uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion="7.1.2",  # 表示的是平台系统的版本号
    deviceName="****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage="com.netease.newsreader.activity",  # 表示的是app的包名
    appActivity="com.netease.nr.phone.main.MainActivity",  # 表示的是app的界面名
    noReset = True # 让app不要重新初始化启动
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

# 拿到 scroll_element：需要滑动的元素对象，find_btn：需要查找的元素定位的值
scroll_btn = By.CLASS_NAME, "android.widget.HorizontalScrollView"
scroll_element = get_element(driver, scroll_btn)
# 这里不能直接去查找需要寻找的元素，不然第一页没有的话会报错
find_btn = By.XPATH, "//*[@text='新时代']"

# 使用工具类
swipe_find(driver, scroll_element, find_btn)

time.sleep(6)
driver.quit()
```

::: warning 注意

​    在初始化app的配置信息记得加上 `noReset = True` ，让app不要重新初始化启动。

:::

### 4、scroll滑动事件

#### 概念

scroll是通过元素来进行滑动的。

```python
# 从一个元素滑动到另一个元素，直到页面自动停止
# 参数
# 	source_element:滑动开始的元素
# 	target_element：滑动结束的元素
driver.scroll(source_element,  target_element)
```

scroll无法设置滑动的持续时间，带有一定惯性。 主要用于IOS中，android高版本系统可以使用。

#### 使用实例

```
从“存储”元素的位置滑动到“蓝牙”元素的位置，因为滑动操作自身的惯性，页面会往下滑动一些。
```

```python
# 导入webdriver
import time
from appium import webdriver
from utils import get_element
from selenium.webdriver.common.by import By

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName="Android",  # 表示的是android 或者IOS系统
    automationName="uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion="7.1.2",  # 表示的是平台系统的版本号
    deviceName="****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage="com.android.settings",  # 表示的是app的包名
    appActivity=".Settings",  # 表示的是app的界面名
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

# 存储 按钮
save_btn = By.XPATH, "//*[@text='存储']"
# 使用工具类get_element去找元素
save_element = get_element(driver, save_btn)

# 蓝牙 按钮
lanya_btn = By.XPATH, "//*[@text='蓝牙']"
# 使用工具类get_element去找元素
lanya_element = get_element(driver, lanya_btn)

# 通过scroll来进行滑动操作
driver.scroll(save_element, lanya_element)

time.sleep(6)
driver.quit()
```

### 5、drag_and_drop拖拽事件

#### 概念

从一个元素滑动到另外一个元素的位置， 同时也能实现将一个元素拖动另一个元素当中。

```python
driver.drag_and_drop(source_element,  target_element)
# 从一个元素滑动到另一个元素，第二个元素替代第一个元素原本屏幕上的位置，无惯性
# 参数：
#   source_element：滑动开始的元素
#   target_element：滑动结束的元素
```

#### 使用实例

```
将“存储”元素拖拽到“更多”元素所在的位置。
```

```python
# 核心代码，其余代码参考scroll处
# 存储
save_btn = By.XPATH, "//*[@text='存储']"
# 更多
more_btn = By.XPATH, "//*[@text='更多']"
# 通过拖动来实现滑屏操作
driver.drag_and_drop(get_element(driver, save_btn),  get_element(driver, more_btn))
```

### 6、滑动和拖拽事件的选择

滑动和拖拽无非就是考虑是否有  “惯性” ，以及传递的参数是  “元素” 还是  “坐标”。 

可以分成以下四种情况

- 有  “惯性” ，传入  “元素”

  scroll

- 无  “惯性” ，传入  “元素” 

  drag_and_drop

- 有  “惯性” ，传入  “坐标”

  swipe，并且设置较短的  duration 时间 

- 无  “惯性” ，传入  “坐标”

  swipe，并且设置较长的  duration 时间

## 三、高级手势操作TouchAction

### 目标

1. 能够使用代码完成轻敲手势；
2. 能够使用代码完成按下手势；
3. 能够使用代码完成抬起手势；
4. 能够使用代码完成等待操作；
5. 能够使用代码完成长按手势；
6. 能够使用代码完成手指移动操作。

### 应用场景

TouchAction 可以实现一些针对手势的操作，比如滑动、长按、拖动等。我们可以将这些基本手势组合成一个相对复杂的手势。比如，我们解锁手机或者一些应用软件都有手势解锁的这种方式。

### 实现步骤

1. 创建TouchAction对象
2. 调用手势方法
3. 调用perform() 执行操作

::: warning 注意

所有手势都要通过执行perform()函数才会运行。

:::

### 1、轻敲操作

#### 应用场景

模拟手指对某个元素或坐标按下并快速抬起。比如，固定点击（100, 100）的位置。

#### 方法名

```python
# 模拟手指对元素或坐标的轻敲操作 
# 参数：
#   element：元素 
#   x：x坐标
#   y：y坐标
#   count:轻敲的次数，默认值为1
TouchAction(driver).tap(element=None, x=None, y=None, count=None).perform()
```

#### 实现步骤

*  action = TouchAction(driver)  #  创建建手势对象

* action.tap(element=None, x=None, y=None)  # 调用轻敲手势方法，传入的是一个元素对象或者是一个坐标点

* action.perform() # 调用perform()执行轻敲操作

#### 使用实例

```
1.  打开《设置》
2.  轻敲  “WLAN”
```

```python
# 核心代码
'''
# 方式一：使用XPATH查找到元素后轻敲
# 查找元素WLAN
wlan_btn = By.XPATH, "//*[@text='WLAN']"
wlan_element = get_element(driver, wlan_btn)
# 调用轻敲手势操作
action = TouchAction(driver)  # 创建手势对象
# 调用手势方法
action.tap(wlan_element)
# 调用perform()执行
action.perform()
'''

#方式二：使用坐标确定位置后轻敲（坐标可以通过UI Automator Viewer工具或者打开开发者模式中的指针位置来确定）
TouchAction(driver).tap(x=300, y=842).perform()
```

::: warning 注意

记得导入TouchAction包。

```
from appium.webdriver.common.touch_action import TouchAction
```

:::

### 2、按下和抬起操作

#### 应用场景

模拟手指一直按下，模拟手指抬起。可以用来组合成轻敲或长按的操作

#### 方法名

```python
# 模拟手指对元素或坐标的按下操作 
# 参数：
# el：元素 
# x：x坐标 
# y：y坐标
TouchAction(driver).press(el=None, x=None, y=None).perform()

# 模拟手指对元素或坐标的抬起操作
TouchAction(driver).release().perform()
```

::: tip 提示

按下和抬起可以结合起来使用，达到点击的效果

```python
TouchAction(driver).press(x=477, y=489).release().perform()
```

:::

#### 使用实例

##### 示例1

使用坐标的形式按下  WLAN （150, 800），2 秒后，按下（150, 800）的位置

###### 核心代码

```python
# 效果相当于按下了两下，但是没做任何操作
TouchAction(driver).press(x=150, y=800).perform() 
time.sleep(2)
TouchAction(driver).press(x=150, y=800).perform()
```

##### 示例2

使用坐标的形式按下  WLAN（150, 800），2 秒后，按下（150, 800）的位置，并抬起

###### 核心代码

```python
# 第一次效果按了一下，但是没操作，第二次按了后抬起，相当于点击了一下。
TouchAction(driver).press(x=150, y=800).perform() 
time.sleep(2)
TouchAction(driver).press(x=150, y=800).release().perform()
```

### 3 、等待操作【掌握】

#### 应用场景

模拟手指等待，比如按下后等待3秒之后再抬起。

#### 方法名

```
# 模拟手指暂定操作 
# 参数：
#   ms：暂停的毫秒数
TouchAction(driver).wait(ms=0).perform()
```

使用实例

```
按下WLAN（150, 800）的位置，暂停3秒，并抬起
```

```python
# 通过等待及按下和抬起实现长按的操作
TouchAction(driver).press(x=150, y=800).wait(3000).release().perform()
```

### 4、长按操作【掌握】

#### 应用场景

模拟手指对元素或坐标的长按操作。比如，长按某个按钮弹出菜单。 

#### 方法名

```python
# 模拟手指对元素或坐标的长按操作 
# 参数：
# 	el：元素 
# 	x：x坐标 
# 	y：y坐标
#		duration：长按时间，毫秒
TouchAction(driver).long_press(el=None, x=None, y=None, duration=1000).perform()
```

#### 使用实例

长按WLAN（150, 800）的位置持续  3 秒，然后抬起，实现长按后点击的效果

```python
# 长按后抬起的操作，实现长按后点击的效果
TouchAction(driver).long_press(x=150, y=800, duration=3000).release().perform()
```

### 5、移动操作【掌握】

#### 应用场景

模拟手指在手机屏幕上移动操作的过程，比如，手势解锁需要先按下，再移动。

#### 方法名

```python
# 模拟手指对元素或坐标的移动操作 
# 参数：
# el：元素 
# x：x坐标 
# y：y坐标
TouchAction(driver).move_to(el=None, x=None, y=None).perform()
```

::: warning 注意

移动的操作是需要结合press和release一起使用。

:::

#### 使用实例

```
在手势解锁中，画一个如下图的案例
包名界面名为  com.android.settings/.ChooseLockPattern
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401041249970.png" alt="CleanShot 2024-01-04 at 12.36.32@2x" style="zoom:50%;" />

```python
# 核心代码
TouchAction(driver).press(x=246, y=857).move_to(x=721, y=867).move_to(x=1200, y=851).move_to(x=1200, y=1329).move_to(x=724, y=1329).move_to(x=246, y=1329).move_to(x=718, y=1815).release().perform()
```

