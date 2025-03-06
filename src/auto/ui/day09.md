---
title: app自动化测试(appium)四和pytest测试框架一
order: 91
tag: 
  - appAutomatedTest
  - pytest
---

## 1. toast

### 1.1. 什么是toast？

toast可以在一个小型弹出式窗口中提供与操作有关的简单反馈。toast只会填充消息所需的空间大小，并且当前 activity 会一直显示并供用户与之互动，不影响当前的窗口，超时后，toast会自动消失。如下像当我们点击一下版本号弹出的这种消息就是toast消息。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052942.png" alt="CleanShot 2024-01-04 at 16.11.59@2x" style="zoom:50%;" />

### 1.2. 获取Toast内容

#### 1.2.1. 应用场景

举个例子，输入用户名和密码然后点登录之后，会弹出一个  toast 的弹框。我们可以如果学会查找toast ，就可以使用这个登录的  toast来进行断言的判断操作。

#### 1.2.2. 使用实例

##### 1.2.2.1. 需求

```
在开发者模式已打开的前提下，通过对“设置”软件中的系统“版本号”点击一次，然后对toast消息进行获取。
```

##### 1.2.2.2. 实现代码

###### 1.2.2.2.1. 使用代码

```python
import time

from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from selenium.webdriver.common.by import By

from utils import get_element, execute_swipe, get_toast

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName="Android",  # 表示的是android 或者IOS系统
    automationName="uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”，引入uiautomator2，用于定位toast。
    platformVersion="7.1.2",  # 表示的是平台系统的版本号
    deviceName="****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage="com.android.settings",  # 表示的是app的包名
    appActivity=".Settings",  # 表示的是app的界面名
    noReset = True # 用来记住app的session，如果有登陆或做过初始化的操作，为True时，后面不需要再操作
)  #定义字典参数

driver = webdriver.Remote("http://localhost:4723", des_cap)

# 往上滑2次
execute_swipe(driver, 'top', count=2)

# 点击关于平板电脑
about_btn = By.XPATH, "//*[@text='关于平板电脑']"
get_element(driver, about_btn).click()
time.sleep(1)

# 点击版本号
version_btn = By.XPATH, "//*[@text='版本号']"
get_element(driver, version_btn).click()
time.sleep(1)

# 获取toast元素信息
print(get_toast(driver, "开发者模式"))
```

###### 1.2.2.2.2. 工具类utils

用于获取toast消息和需要使用的工具类。

```python
# 定义一个获取元素的方法
# def get_element(driver, find_type, value):
#     wait = WebDriverWait(driver, 10, 1)
#     element = wait.until(lambda x: x.find_element(find_type, value))
#     return element
# 减少代码量，不必要在每个元素定位的代码中都使用显示等待来定位。
def get_element(driver, element):   # element 表示的元素定位的值
    wait = WebDriverWait(driver, 10, 1)
    element = wait.until(lambda x: x.find_element(element[0], element[1]))
    return element
# 封装一个边滑动边查找的方法
def swipe_find(driver, element, element_info):  # By.XPATH, "//*[@text='存储']"
    ele_size = element.size  # 获取元素大小
    width = ele_size["width"]  # 获取元素的宽度
    height = ele_size["height"]  # 获取元素的高度
    # 获了element元素左上角点的坐标
    ele_position = element.location
    x = ele_position["x"]  # 获取左上角点的x坐标值
    y = ele_position["y"]  # 获取左上角点的y坐标值

    start_x = x + width*0.9  # 获取的是起始点X的值
    y = y + height*0.5  # 获取的是起始及终止点的Y的值
    end_x = x + width*0.1   # 获取的是终止点X的值
    while True:
        page = driver.page_source  # 记录查找前的页面资源,通过对比页面资源来退出死循环
        try:
            driver.find_element(*element_info).click()  # 如果有找到对应的元素那么点击并返回
            return True
        except Exception as e:
            print("没有找到该元素！")
        driver.swipe(start_x, y, end_x, y, duration=1000)  # 没有找到元素，那么滑屏后再对比并重新查找
        time.sleep(1)
        if page == driver.page_source:
            print("滑屏操作完成且没有找到元素信息")
            return False

# 定义获取toast消息的方法
def get_toast(driver, message, timeout=3):
    # xpath = "//*[contains(@text, '" + message + "')]"   #.format(message)   # 通过{} 符号将message当参数传到xpath表达式中去
    # 使用f-string（格式化字符串字面值）来在字符串前面加f。当字符串前面加上f后，可以直接在字符串内部使用大括号{}包裹变量名，使得变量的值能够被替换进字符串中。
    xpath = F"//*[contains(@text, '{message}')]"
    # 设置显示等待，最长等待时间3S，检测的间隔时间1S
    wait = WebDriverWait(driver, timeout, 1)
    # 使用匿名函数，通过XPATH寻找元素
    element = wait.until(lambda x:x.find_element(By.XPATH, xpath))
    return element.text
```

::: warning 注意

获取toast消息，在初始化配置中必须添加如下配置项。否则定位不到。

```
automationName = "Uiautomator2"
```

:::

##### 1.2.2.3. 运行结果

```shell
hk@hkdeMacBook-Pro 03代码 % /usr/local/bin/python3 /Users/hk/Documents/黑马2022年测试/配套资料/09、UI自动化测试及黑马头条项目实战/UI自动化测试/day09
/03代码/toast消息定位.py
您已处于开发者模式，无需进行此操作。
hk@hkdeMacBook-Pro 03代码 % 
```

## 2. webview操作(H5)

根据之前学习的内容，使用Ul Automator Viewer工具不能对浏览器打开的页面中的webview元素进行定位，直接用之前学习的自动化代码也无法对webview进行操作。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052943.png" alt="CleanShot 2024-01-04 at 17.28.28@2x" style="zoom:50%;" />

### 2.1. 查看webview元素

appium2.0版本已经可以自己发现然后匹配对应的谷歌驱动版本了，所以可以直接进行下面的步骤，如果出现类似下面的报错，那么才需要自己手动配置appium的谷歌驱动，不然可以跳过下面的环境搭建步骤。

```
An unknown server-side error occurred while processing the command.
Original error: unknown error: Chrome version must be >= 55.0.2883.0
```

::: tip 提示

可供参考的文章：[Using Chromedriver](https://www.kancloud.cn/testerhome/appium_docs_cn/2001863)

:::

#### 2.1.1. 环境搭建

1. 需要查看手机或者模拟器上webView的版本；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052944.png" alt="CleanShot 2024-01-05 at 16.06.43@2x" style="zoom:50%;" />

2. 下载对应的[chromedriver](https://cdn.npmmirror.com/)版本；  

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052945.png" alt="CleanShot 2024-01-05 at 16.10.45@2x" style="zoom:50%;" />

   ::: warning 注意

   - webView的版本必须要与chromedriver的版本配套，像这里都是75.0版本的。

   - 有的驱动版本不能明确看出是否和webView版本对应，可以查看notes.txt文件确定。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052946.png" alt="CleanShot 2024-01-05 at 16.16.16@2x" style="zoom:50%;" />

   :::

3. 将appium中chromedriver的版本替换为第2步中下载的版本；

   - Mac和win都可以参考

     参考步骤：[appium chromedriver path mac](https://juejin.cn/s/appium%20chromedriver%20path%20mac)。

   - win

     找到如下路径并替换`C:\Users\用户名\node_modules\appium\node_modules\appium-chromedriver\chromedriver\win`。

4. 在手机或者模拟器上面安装chrome浏览器，这里发现直接用其它浏览器也行，后续自己实验。(手机或者模拟器中chrome版本要低于电脑上chrome的版本)

#### 2.1.2. 查看webview元素的使用

##### 2.1.2.1. PC端chrome直接连接手机查看

1. 在手机或者模拟器的浏览器中打开被查看的H5页面；

2. 在PC的chrome浏览器当中，打开对应的地址： chrome://inspect/#devices，然后点击inspect查看；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052948.png" alt="CleanShot 2024-01-05 at 17.15.50@2x" style="zoom:50%;" />

3. 通过devtools来查看对应的元素信息。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052949.png" alt="CleanShot 2024-01-05 at 17.16.58@2x" style="zoom:50%;" />

::: warning 注意

- inspect工具和android版本有关

  工具是否有  "select an element…"（元素查看器） 按钮取决于android 版本，有些版本可能并没有"select an element…" 的按钮，比如  android 5.1，如果真的需要对  android 5.1 需要查看，只能从代码中一个一个找。

- 能否使用chrome 直接查看手机地址与网页地址有关

  比如，之前的网易新闻的新闻页面是使用的WebView，但开发人员是将整个网页下载到手机后，再通过打开下载在手机的地址进行加载。显示的地址是网页文件的绝对路径，在电脑上是无法打开的。

:::

##### 2.1.2.2. 通过代码查看(实现webview自动化)

###### 2.1.2.2.1. 关键步骤

1. 前置代码，和之前相同，只是打开的包名和启动名是浏览器软件，如下：

   ```shell
   # 命令行获取当前启动软件包名和界面名
   adb shell dumpsys window windows | grep mFocusedApp
   # 得到包名和界面名结果，以/分开
   com.android.browser/.BrowserActivity
   ```

2. 获取driver的所有的上下文；

   在python中使用`print(driver.contexts)`可获取driver的所有上下文，也就是能切换的页面，NATIVE_APP为原生页面，WEBVIEW_com.android.browser为webview页面。如下：

   ```shell
   # 使用时可以直接使用driver.contexts[-1]获取 'WEBVIEW_com.android.browser'
   ['NATIVE_APP', 'WEBVIEW_com.android.browser']
   ```

3. 使用时通过driver的switchto来切换上下文，实现切换到操作web页面；

   ```python
   # 告诉appium需要查找的是com.android.browser程序的webview的内容 
   driver.switch_to.context(driver.contexts[-1])
   ```

   ::: tip 提示

   这里可以理解为当前能操控的是当前打开的app（浏览器），也就是原生页面，但之前学习的方式都不能操控打开的网页（`www.baidu.com`），也就是webview页面，通过switchto切换后，就把操控切换到网页上了，也就可以对网页进行操控了。

   :::

4. 切换后就可以使用appium的方法进行元素定位了，使用方式和之前的有一些不同，实践只能通过xpath方式进行定位；

   ```python
   # 4.1 定位百度输入框并输入10086
   driver.find_element(By.XPATH,"//*[@id='index-kw']").send_keys("10086") 
   ```

5. 切换到原生环境。

   ```python
   driver.switch_to.context(driver.contexts[0]) 
   ```

###### 2.1.2.2.2. 案例

需求

```
在浏览器应用中打开百度首页，并在搜索框中输入10086，再点击搜索。然后打开知乎首页。
```

实现关键内容

1. 使用UI Automator Viewer工具获取浏览器的网址输入框；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052950.png" alt="CleanShot 2024-01-07 at 16.11.16@2x" style="zoom:50%;" />

2. 使用chrome直连手机获取百度页面的输入框和搜索按钮的id。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052951.png" alt="CleanShot 2024-01-07 at 16.06.41@2x" style="zoom:50%;" />

实现代码

```python
import time
from appium import webdriver
from appium.webdriver.common.touch_action import TouchAction
from selenium.webdriver.common.by import By

# 1. 前置代码
# 1.1 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName="Android",  # 表示的是android 或者IOS系统
    automationName="uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion="7",  # 表示的是平台系统的版本号,书写大版本即可，比如，7.1.2，可以写7.1.2、7.1、7
    deviceName="****",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage="com.android.browser",  # 表示的是app的包名
    appActivity=".BrowserActivity",  # 表示的是app的界面名
    noReset = True,
    chromedriverExecutable=r"/Users/hk/chromedriverExecutableDir/chromedriver" # 用来指定chrome驱动的目录
)

# 1.2 注册驱动
driver = webdriver.Remote("http://localhost:4723", des_cap)

# 打开百度（没切换之前只能操控浏览器，不能操控网页）
driver.find_element(By.ID,"com.android.browser:id/url").click()
driver.find_element(By.ID,"com.android.browser:id/url").send_keys("www.baidu.com")
# 回车
driver.press_keycode(66)
# 2. 获取driver的所有的上下文
# print(driver.contexts)
# 3. 切换到网页环境（切换后可以操控网页）
driver.switch_to.context(driver.contexts[-1])
time.sleep(3)
# 4. 使用appium的xpath方法进行元素定位
# 4.1 通过id定位百度输入框并输入10086
driver.find_element(By.XPATH,"//*[@id='index-kw']").send_keys("10086") 
# 4.2 通过id定位百度一下按钮并点击
driver.find_element(By.XPATH,"//*[@id='index-bn']").click()
time.sleep(3)
# 5. 切换到原生环境（操控浏览器需要切换回原生环境
driver.switch_to.context(driver.contexts[0]) 
# 5.1 打开知乎
driver.find_element(By.ID,"com.android.browser:id/url").click()
driver.find_element(By.ID,"com.android.browser:id/url").send_keys("www.zhihu.com") 
driver.press_keycode(66)

time.sleep(3)
driver.quit()
```

::: warning 注意

- 初始化app的配置信息时，需要添加配置项：`chromedriverExecutable="/path/to/chromedriver"`，不然会报错，如何配置详见上面的环境搭建。

- 在切换后只能通过qppium的xpath方式获取，类似如下：

  ```python
  # 4.1 通过id定位百度输入框并输入10086
  driver.find_element(By.XPATH,"//*[@id='index-kw']").send_keys("10086") 
  ```

:::

## 3. pytest测试框架

### 3.1. 目标

```
1. 能够安装 pytest 框架
2. 能够了解 pytest 主函数的运行方式
3. 能够掌握 pytest 命令行的运行方式
4. 能够掌握 setup 和 teardown 方法
5. 能够掌握 setup_class 和 teardown_class 方法
6. 能够理解 pytest 配置文件的含义
```

### 3.2. 特点

1. 非常容易上手，入门简单，文档丰富，文档中有很多参考实例；
2. 支持简单的单元测试和复杂的功能测试；
3. 支持参数化；
4. 执行测试用例过程中，支持跳过操作；
5. 支持重复执行失败的case；
6. 支持运行由Nose，unittest编写的测试case；
7. pytest支持很多第三方插件；
8. 方便的和持续集成工具集成。

::: tip 提示

对pytest的更多学习参考：[Pytest文档](https://www.osgeo.cn/pytest/contents.html)

:::

### 3.3. 安装

pytest安装：
* 在线安装：`pip install pytest`；
* 离线安装方式：下载pytest离线安装包，并解压，然后在DOS（终端）下进入到解压的目录，然后执行`python setup.py install`；
* pycharm安装。

判断是否安装成功：
* 运行命令：`pip show pytest`或`pip --version`；
* pycharm查看。

### 3.4. PyTest基本使用

#### 3.4.1. 快速入门案例

##### 3.4.1.1. 代码准备

```python
# test_login.py
# 类名必须是以Test开头
class TestLogin:
    # 测试方法一，方法名必须是以test开头
    def test_a(self):
        print("------->test_a")
        # 断言成功
        assert 1

    # 测试方法二
    def test_b(self):
        print("------->test_b")
        # 断言失败
        assert 0
```

##### 3.4.1.2. 运行

###### 3.4.1.2.1. 方式一：命令行模式

命令行中执行：`pytest -s test_login.py`

###### 3.4.1.2.2. 方式二：主函数模式

在test_login.py文件中增加主函数

```python
if __name__ == '__main__':
  pytest.main(["-s", "login.py"])
```

::: tip 提示

-s 表示支持控制台打印，如果不加，print 不会出现任何内容。

:::

###### 3.4.1.2.3. 方式三：pycharm直接运行

在pycharm中点击左侧运行按钮直接执行对应测试类、测试方法或者右击方法名、类名选择执行。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052952.png" alt="CleanShot 2024-01-08 at 17.21.32@2x" style="zoom:50%;" />

##### 3.4.1.3. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052953.png" alt="方式一" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052954.png" alt="方式二和三结果" style="zoom:50%;" />

::: warning 注意

1. 命令行模式运行的结果中：

   - `. `表示成功 ；
   - `F `表示失败。

2. 如果执行不了，可能之前的默认运行测试的为unittest，需要在设置中改为pytest。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052955.png" alt="CleanShot 2024-01-09 at 14.45.35@2x" style="zoom:50%;" />



:::

#### 3.4.2. pytest 断言

pytest里面的断言方法只有 assert 表达式。 类似如下，结果为True时断言成功，为False断言失败。

```python
class TestADD:  # 定义的类名必须是以Test开头
    def test_add_01(self):  # 定义的测试方法必须是以test开头
        result = add(1, 2)
        print(result)
        # assert result == 3    判断相等
        # assert result != 4    判断不相等
        # assert result    # 判断为True
        #assert False        # 判断为False
        # assert "a" in "abc" # 判断包含
        # assert "a" not in "abc"  # 判断不包含
        # assert result is None
        assert result is not None
```

#### 3.4.3. setup 和  teardown

pytest 在运行自动化脚本的前后会执行两个特殊的方法，分别是  setup 和  teardown 。在执行脚本之前会执行  setup 方法，在执行脚本之后会执行  teardown 方法。有了这两个方法，我们可以在 setup 中进行获取驱动对象的操作，在  teardown 中进行关闭驱动对象的操作。

##### 3.4.3.1. 方法级别实现

运行于测试方法的始末，运行一次测试函数会运行一次  setup 和  teardown。

针对每个测试方法，在执行测试方法前会执行初始化（setup）的操作，在执行完测试方法后，执行销毁（teardown）的操作。

###### 3.4.3.1.1. 示例代码

```python
import time


def add(x, y):
    return x+y


class TestAdd:
    # 这里提示转为静态方法，不知道作用
    @staticmethod
    def setup():
        # \n为换行符
        print("\n测试用例开始执行时间:", time.strftime("%Y-%m-%D %H:%M:%S"))

    def test_add_01(self):
        result = add(1, 2)
        assert result == 3

    def test_add_02(self):
        result = add(2, 2)
        assert result == 4

    @staticmethod
    def teardown():
        print("\n测试用例结束时间:", time.strftime("%Y-%m-%D %H:%M:%S"))

```

###### 3.4.3.1.2. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052956.png" alt="CleanShot 2024-01-09 at 14.21.17@2x" style="zoom:50%;" />

::: warning 注意

在最新的版本中setup()和teardown()方法以不受支持，继续使用会触发警告，因此需要替换setup()和teardown()方法：将setup()方法更名为setup_method()，将teardown()方法更名为teardown_method()。这些是pytest推荐使用的方法名，以替代nose方法。

:::

##### 3.4.3.2. 类级别实现

运行于测试类的始末，在一个测试内只运行一次  setup_class 和  teardown_class，不关心测试类内有多少个测试函数。

###### 3.4.3.2.1. 示例代码

```python
import time


def add(x, y):
    return x+y


class TestAdd:
    # 添加类级别的初始化操作方法
    @staticmethod
    def setup_class():
        print("\n测试类开始执行时间：",  time.strftime("%Y-%m-%d %H:%M:%S"))

    # 添加类级别的销毁操作方法
    @staticmethod
    def teardown_class():
        print("\n测试类结束执行时间:", time.strftime("%Y-%m-%d %H:%M:%S"))

    def test_add_01(self):
        result = add(1, 2)
        assert result == 3

    def test_add_02(self):
        result = add(2, 2)
        assert result == 4
```

###### 3.4.3.2.2. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052957.png" alt="CleanShot 2024-01-09 at 14.24.46@2x" style="zoom:50%;" />



::: warning 注意

方法必须写在测试类当中，不能写在测试类外面。（但是实测写外面的时候，类级别实现还是能用的，不知道为啥）

:::

#### 3.4.4. pytest配置文件

##### 3.4.4.1. 应用场景

使用配置文件后可以快速的使用配置的项来选择执行哪些测试模块。 

##### 3.4.4.2. 使用方式

1.  项目下新建  scripts 模块
2.  将测试脚本文件放到  scripts 中
3.  pytest 的配置文件放在自动化项目目录下
4.  名称为  pytest.ini
5.  命令行运行时会使用该配置文件中的配置
6.  第一行内容为[pytest]

##### 3.4.4.3. 示例

```ini
# 标识当前配置文件是pytest的配置文件
[pytest]
# 添加命令行参数，pytest执行时增加的参数。（-s: 显示print内容；-v: 运行时输出更详细的用例执行信息。 ）
addopts = -s -v
# 文件搜索路径，匹配搜索的目录
testpaths = ./scripts
# 匹配测试文件
python_files = test_*.py
# 匹配测试类
python_classes = Test*
# 匹配测试方法
python_functions = test_*
```

##### 3.4.4.4. 运行

运行直接在项目目录下输入pytest即可运行配置文件中指定目录下所有的测试文件。

##### 3.4.4.5. 运行结果目录结构

最后的运行结果和形成的目录结构如下图。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052958.png" alt="CleanShot 2024-01-09 at 15.19.07@2x" style="zoom:50%;" />

::: warning 注意

pytest的配置文件有固定的三个名称: pytest.ini、tox.ini、setup.cfg这三个配置文件都是放在项目的根目录下，其中setup.cfg不推荐使用。

:::

### 3.5. Pytest常用插件

#### 3.5.1. 目标

```
1. 能够生成 pytest-html 测试报告
2. 能够控制 pytest 函数执行的顺序
3. 能够掌握 pytest 失败重试
```

#### 3.5.2. pytest测试报告 

##### 3.5.2.1. 应用场景

自动化测试脚本最终执行是通过还是不通过，需要通过测试报告进行体现。

##### 3.5.2.2. 安装pytest测试报告插件

* 在线安装：`pip3 install pytest-html`
* 离线安装
* pycharm

##### 3.5.2.3. 使用方法

在配置文件pytest.ini的addopts属性中增加`--html=用户路径/report.html`，示例如下：

```ini
# 添加命令行参数，pytest执行时增加的参数。（-s: 显示print内容；-v: 运行时输出更详细的用例执行信息。 ）
# --html=report/report.html：生成测试报告和路径，这里的路径需要自己手动创建好
addopts = -s -v --html=report/report.html
```

##### 3.5.2.4. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052960.png" alt="CleanShot 2024-01-09 at 19.04.12@2x" style="zoom:50%;" />

::: danger 危险

- 问题1：

  虽然已经使用命令行安装了pytest-test，但是执行时可能还是会遇到报错unrecognized arguments（无法识别的参数）。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052961.png" alt="CleanShot 2024-01-09 at 15.47.42@2x" style="zoom:50%;" />

- 解决办法1：

  在pyChram软件的设置中重新自己安装一下purest。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052962.png" alt="CleanShot 2024-01-09 at 15.51.55@2x" style="zoom:50%;" />

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052963.png" alt="CleanShot 2024-01-09 at 15.46.59@2x" style="zoom:50%;" />

- 问题2：执行的时候不知道为什么一直报错：`TypeError: unsupported operand type(s) for =: foat' and 'str!`，但是报错代码全是内部模块代码报错，估计是依赖冲突之类的。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052964.png" alt="image-20240109184847582" style="zoom:50%;" />

- 解决方法2：新建一个项目使用虚拟环境，然后项目模块中仅安装pytest和pytest-html模块，再试着重新运行后问题解决。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052965.png" alt="CleanShot 2024-01-09 at 18.49.16@2x" style="zoom:50%;" />

  :::

#### 3.5.3. 控制用例执行顺序

##### 3.5.3.1. 应用场景

现实生活中，如果想下订单，必须先登录，我们可以通过pytest-ordering插件的形式来控制pytest测试方法执行的顺序。 

::: tip 提示

* unittest测试用例执行顺序是根据测试方法名称的assicc码值的大小来的，值越小排在前面(a-z)；

* pytest 正常情况下是根据测试方法的从上到下的顺序来执行。

:::

##### 3.5.3.2. 安装

使用命令`pip install pytest-ordering `进行安装 

##### 3.5.3.3. 使用

1.  标记于被测试函数，`@pytest.mark.run(order=x)`；
2.  根据order传入的参数来解决运行顺序；
3.  order值全为正数或全为负数时，运行顺序：值越小，优先级越高；
4.  正数和负数同时存在：正数优先级高；
5.  设置用例最后执行，`@pytest.mark.last`。

##### 3.5.3.4. 示例

```python
# test_login.py
# 类名必须是以Test开头
import pytest


class TestLogin:
    # 测试方法一，方法名必须是以test开头
    @pytest.mark.run(order=2)
    def test_a(self):
        print("------->test_a")

    # 测试方法二
    @pytest.mark.run(order=1)
    def test_b(self):
        print("------->test_b")

    # 测试方法三
    @pytest.mark.run(order=2)
    def test_c(self):
        print("------->test_c")
```

##### 3.5.3.5. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092124020.png" alt="CleanShot 2024-01-09 at 21.11.59@2x" style="zoom:50%;" />

#### 3.5.4. 失败重试

##### 3.5.4.1. 应用场景

自动化测试脚本可能会使用到网络，如果网络不好可能最终会使脚本不通过。像这种情况可能并不是脚本本身的问题，仅仅是因为网络忽快忽慢，那么我们可以使用失败重试的插件，当失败后尝试再次运行。一般情况最终成功可以视为成功，但最好进行进行排查时候是脚本问题。

##### 3.5.4.2. 安装

使用命令`pip install pytest-rerunfailures`进行安装。

##### 3.5.4.3. 使用

在配置文件pytest.ini中的命令行参数中增加 `--reruns n`。

##### 3.5.4.4. 示例

pytest.ini

```
addopts = -s --reruns 3
```

test_login.py

```python
import pytest

class TestLogin:
    # 测试方法一，方法名必须是以test开头
    def test_a(self):
        print("------->test_a")
        # 断言成功
        assert 1

    # 测试方法二
    def test_b(self):
        print("------->test_b")
        # 断言失败
        assert 0
```

##### 3.5.4.5. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092124022.png" alt="CleanShot 2024-01-09 at 21.20.08@2x" style="zoom:50%;" />

### 3.6. PyTest高级用法

#### 3.6.1. 目标

```
1. 能够掌握 pytest 跳过函数
2. 能够掌握 pytest 数据参数化
```

#### 3.6.2. 跳过测试函数

##### 3.6.2.1. 应用场景

同一个软件在不同的设备上可能会有不同的效果，比如，iOS 的 3d touch 操作是需要 6s 以上设备支持的，6 和 6s 都可以安装同一款应用，如果设备不支持，那么根本没有必要去测试这个功能。 此时，我们可以让这种函数进行跳过。

::: tip 提示

该方法可以在测试类和测试方法上使用。

:::

##### 3.6.2.2. 方法名

```python
# 跳过测试函数 
# 参数：
#   condition：跳过的条件，必传参数，值为True或False
#   reason：标注原因，必传参数
@pytest.mark.skipif(condition, reason=None)
```

##### 3.6.2.3. 使用方式

在需要跳过的测试脚本之上加上装饰器`@pytest.mark.skipif(condition, reason="xxx") `

##### 3.6.2.4. 示例1

```python
# test_login.py
# 类名必须是以Test开头
import pytest

class TestLogin:
    # 测试方法一，方法名必须是以test开头
    def test_a(self):
        print("------->test_a")
        # 断言成功
        assert 1

    # 测试方法二
    @pytest.mark.skipif(condition=True, reason="不使用了")
    def test_b(self):
        print("------->test_b")
        # 断言失败
        assert 0
```

##### 3.6.2.5. 运行结果1

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052966.png" alt="CleanShot 2024-01-09 at 19.15.32@2x" style="zoom:50%;" />

##### 3.6.2.6. 示例2

```python
import pytest


def add(x, y):
    return x+y

# 现在的版本
version = 21

class TestAdd:
    def test_add_01(self):
        result = add(1, 2)
        assert 3 == result

    @pytest.mark.skipif(version > 20, reason="大于2.0的版本不需要再执行此用例")
    def test_add_02(self):
        result = add(2, 2)
        assert 4 == result
```

运行结果略。

#### 3.6.3. 数据参数化

##### 3.6.3.1. 应用场景

登录功能都是输入用户名，输入密码，点击登录。但登录的用户名和密码如果想测试多个值是没有 
办法用普通的操作实现的。数据参数化可以帮我实现这样的效果。

##### 3.6.3.2. 方法名

```python
# 数据参数化 
# 参数：
#   argnames：参数名
#   argvalues：参数对应值，类型必须为可迭代类型，一般使用list
@pytest.mark.parametrize(argnames, argvalues, indirect=False, ids=None, scope=None)
```

##### 3.6.3.3. 单个参数使用方式

1.  argnames 为字符串类型，根据需求决定合适的参数名，类似：`name`；
2.  argvalues 为列表类型，根据需求决定列表元素中的内容，类似：`["xiaoming", "xiaohong"]`；
3.  在测试脚本中，参数中的名字与  argnames 保持一致，类似：`def test_a(self, name)`；
4.  在测试脚本中正常使用，类似：`print("name")`。

::: tip 提示

argvalues 列表有多少个内容，这个脚本就会运行几次

:::

###### 3.6.3.3.1. 示例

```python
# test_login.py
# 类名必须是以Test开头
import pytest

class TestLogin:
    # 测试方法一，方法名必须是以test开头
    @pytest.mark.parametrize("name", ["xiaoming", "xiaohong"])
    def test_a(self, name):
        print("------->test_a")
        # 断言成功
        assert 1
```

###### 3.6.3.3.2. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052967.png" alt="CleanShot 2024-01-09 at 19.36.36@2x" style="zoom:50%;" />

##### 3.6.3.4. 多个参数使用方式

###### 3.6.3.4.1. 示例1

```python
# test_login.py
# 类名必须是以Test开头
import pytest


class TestLogin:
    # 测试方法一，方法名必须是以test开头
    @pytest.mark.parametrize(("username", "password"), [("zhangsan", "zhangsan123"), ("xiaoming", "xiaoming123")])
    def test_a(self, username, password):
        print(username)
        print(password)
        assert 1
```

::: tip 提示

多个参数还可以将装饰器写成如下形式，效果是一样的。

```python
@pytest.mark.parametrize("username,password", [("zhangsan", "zhangsan123"), ("xiaoming", "xiaoming123")]) 
```

:::

###### 3.6.3.4.2. 运行结果1

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092052735.png" alt="CleanShot 2024-01-09 at 19.40.41@2x" style="zoom:50%;" />

###### 3.6.3.4.3. 示例2

```python
import pytest

def add(x, y):
    return x+y

class TestAdd:
    @pytest.mark.parametrize("x,y,expect", [(1, 2, 3), (2, 2, 4), (3, 2, 5)])
    def test_add_01(self, x, y, expect):
        result = add(x, y)
        assert expect == result
```

###### 3.6.3.4.4. 运行结果2

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401092129906.png" alt="image-20240109212946210" style="zoom:50%;" />