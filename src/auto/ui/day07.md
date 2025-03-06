---
title: app自动化测试(appium)二
order: 71
tag: appAutomatedTest
---

## 一、appium脚本框架

### 入门案例

#### 需求

通过通过webDriver访问appium服务，运行代码后，实现自动打开adb已连接手机上的"设置"软件，并在6秒后退出“设置”软件，结束自动化测试代码的运行。

> 通过入门案例可以检测我们前面搭建的自动化测试环境是否能正常使用。

#### 实现代码

```python
# 导入webdriver
import time
from appium import webdriver

# 初始化app的配置信息
des_cap = dict(
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
    # language ="en"  #设置手机使用语言，en：英文，zh-CN：中国
    # locale = "US"  # 设置手机使用地区，US：美国,
)

# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

time.sleep(6)

driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525426.gif" alt="CleanShot 2023-12-16 at 15.11.27" style="zoom: 67%;" />

appium服务器上的部分运行结果信息：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525427.png" alt="CleanShot 2023-12-18 at 11.56.40@2x" style="zoom:50%;" />

::: tip 提示

1. appuim自动化原理；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525428.png" alt="image-20231215143437301" style="zoom:50%;" />

2. 运行前记得启动appuim服务，appuim启动和运行地址查看。

   ![CleanShot 2023-12-15 at 14.49.20@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525429.png)

3. 实际工作中，我们更多的会遇到appium服务运行在单独的远程服务器上面，这个时候我们代码中`webdriver.Remote("appium服务器地址"，传入参数)`的appium服务器地址填入远程服务器地址`http://192.168.1.100:4723`即可。

   ![image-20200630110815138](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525430.png)

:::

::: danger 警告

1. 运行时出现报错：`AttributeError: ‘NoneType‘ object has no attribute ‘to_capabilities’`

   解决方法：

   ```shell
   # 可能原因是appium-python-client版本太高导致，安装2.0的版本
   pip install appium-python-client==2.0
   ```

2. 报错：`... Could not find ‘adb‘ in ...`

   ```shell
   WebDriverException: Message: An unknown server-side error occurred
   while processing the command. Original error: Could not find ‘adb’ in
   … Do you have Android Build Tools installed at ‘/Users/chengrui/Library/Android/sdk’?
   ```

   解决方法：https://blog.csdn.net/Sally_xy/article/details/128384954
   
3. 报错：`... Could not find 'apksigner.jar' in ...`

   ```shell
   WebDriverException: Message: An unknown server-side error occurred while processing the command. Original error: Cannot verify the signature of ‘/Applications/Appium Server GUI.app/Contents/Resources/app/node_modules/appium/node_modules/appium-uiautomator2-server/apks/appium-uiautomator2-server-v4.27.0.apk’. Original error: Could not find ‘apksigner.jar’ in ["/Users/chengrui/Library/Android/sdk/platform-tools/apksigner.jar"…
   ```

   解决方法：https://blog.csdn.net/Sally_xy/article/details/128385633

:::

---

## 二、appium基础操作

### 1、通过appium启动app

* driver.start_activity("包名"，”界面名“)

  ```python
  # 导入webdriver
  import time
  from appium import webdriver
  
  # 初始化app的配置信息
  des_cap = dict(   # 定义字典参数
      platformName = "Android",  # 表示的是android 或者IOS系统
      automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
      platformVersion = "7.1.2",  # 表示的是平台系统的版本号
      deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
      appPackage = "com.android.settings",  # 表示的是app的包名
      appActivity = ".Settings"  # 表示的是app的界面名
  )
  
  # 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
  driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)
  
  time.sleep(2)
  
  # 再启动"设置"app后，直接启动“作业帮”app：driver.start_activity("包名","界面名")，注意运行完成后“作业帮”app不会自动退出
  driver.start_activity("com.baidu.homework", ".activity.user.passport.ChoiceLoginModeActivity")
  
  time.sleep(6)
  
  driver.quit()
  ```

### 2、获取包名和界面名

```python
driver.current_package  # 获取当前脚本运行中的app的包名
driver.current_activity # 获取当前脚本运行中的app的界面名
```

::: warning 注意

这里和后面的代码统一只写主要代码，其它代码和通过appium启动app一样

:::

### 3、关闭app及关闭驱动

```python
driver.close_app() # 关闭app，不需要跟参数
driver.quit()      # 关闭驱动
```

::: tip 提示

- 关闭app之后，可以再使用其他代码启动新的app；
- 关闭驱动，那么代码与appium服务器之间的连接已经断开，不能再做任何的操作。

::: 

### 4、安装卸载app以及判断是否安装app

* 安装app    driver.install _app(apk路径)

* 卸载app    driver.remove_app(app包名)

* 判断手机是否安装app   driver.is_app_installed("包名")

  返回值：True  有安装app 或者False  没有安装app

```python
# 安装263app
driver.install_app(r"D:\BaiduNetdiskDownload\apptools\apk\263.apk")
# 判断手机是否安装263app
driver.is_app_installed("com.em.mobile")
# 卸载263app
driver.remove_app("com.em.mobile")
```

### 5、将应用置于后台运行

```python
driver.background_app(seconds)  # seconds 表示的是将app置于后台运行多少秒的时间
```

## 三、uiautomatorviewer工具介绍

* 终端输入命令`uiautomatorviewer`打开uiautomatorviewer工具，通过uiautomatorviewer工具可以查看app的元素信息。

  ::: tip 提示

  1. 嫌弃命令过长可以使用linux的别名命令：`alias ui='uiautomatorviewer'`，以后输入命令`ui`即可打开uiautomatorviewer工具。

  2. 永久保存需要该命令放入Mac的配置文件`.bash_profile`中。

     ```shell
     vim ~/.bash_profile  
     source ~/.bash_profile
     ```
  
  :::
  
  ![CleanShot 2023-12-18 at 15.46.47@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525431.png)

::: tip 提示

可能会遇到一些错误。

1. 错误1:无法使用uiautomatorviewer

   解决方法：https://blog.csdn.net/weixin_42182599/article/details/120938170

2. 错误2：uiautomatorviewer报错连不上adb

   解决方法：https://blog.csdn.net/siling115/article/details/105314867

3. 错误3：如果正在运行自动化测试代码去操作手机或模拟器，这时候使用uiautomatorviewer去获取页面信息，会报错`Error while obtaining Ul hierarchy XML file:com.android.ddmlib.SyncException:Remote object doesn't exist!`

   原因：获取app页面信息时需要使用adb服务，运行代码也会占用adb服务。

   解决办法：

   - 等自动化测试代码运行完才能继续使用uiautomatorviewer；
   - 实际测试过程中，我们可以先使用uiautomatorviewer获取页面信息后，保存为本地文件，然后后面打开本地文件查看即可，不影响自动化测试代码的运行。

:::

## 四、元素定位

### 1、定位单个元素

可以通过id、class_name、xpath来进行定位元素。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525432.png" alt="CleanShot 2023-12-18 at 17.21.57@2x" style="zoom:50%;" />

#### 1.1 通过ID定位元素

通过元素的resource-id来进行元素定位。

```python
driver.find_element_by_id(resource_id的值)
```

#### 1.2 通过class_name定位元素

通过元素的class属性值来进行元素定位，app中class的值始终都只有一个。

```
driver.find_element_by_class_name(class)
```

#### 1.3 通过xpath定位元素

通过xpath的元素属性来进行元素定位 

```
driver.find_element_by_xpath("//*[@text='value']")
```

::: warning 注意

单个元素定位不到会报错。

:::

#### 案例

##### 需求

```
1. 找到“更多”按钮并点击(XPATH)
2. 找到 飞行模式的 开关，并点击(ID)
3. 找到切换设置主页按钮并点击(class)
```

##### 实现代码

```python
# 导入webdriver等包
import time
from appium import webdriver
from selenium.webdriver.common.by import By

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

driver = webdriver.Remote("http://localhost:4723", des_cap)

# 1. 找到“更多”按钮并点击(XPATH)
element = driver.find_element(By.XPATH, "//*[@text='更多']")
element.click()
time.sleep(2)
# 2. 找到 飞行模式的开关，并点击开启(ID)
air_element = driver.find_element(By.ID, "android:id/switch_widget")
air_element.click()
time.sleep(2)
# 3. 找到切换设置主页按钮并点击(class)
return_element = driver.find_element(By.CLASS_NAME, "android.widget.ImageButton")
return_element.click()

time.sleep(3)
driver.quit()
```

##### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525433.gif" alt="CleanShot 2023-12-18 at 22.06.44" style="zoom:50%;" />

### 2、定位一组元素

#### 应用场景

和定位一个元素相同，但如果想要批量的获取某个相同特征的元素，使用定位一组元素的方式更加方便。

#### 方法名

```python
# 通过id定位一组元素
driver.find_elements_by_id(resource_id)
# 通过class_name定位一组元素 
driver.find_elements_by_class_name(class_name)
# 通过xpath定位一组元素 
driver.find_elements_by_xpath(xpath)
```

::: tip 提示

返回的值是一个列表，如果没有找到，说明列表是空值，可以通过下标来使用其中的元素对象，下标是从0开始。

:::

#### 案例

##### 需求

```
1. 通过 id 的形式，获取所有 resource-id 为 "com.android.settings:id/title" 的元素，并打印其文字内容；
2. 通过 class_name 的形式，获取所有class 为 "android.widget.TextView" 的元素，并打印其文字内容；
3. 通过 xpath 的形式，获取所有包含 "设" 的元素，并打印其文字内容。
```

#### 关键代码

```python
# 1. 通过 id 的形式
titles = driver.find_elements_by_id("com.android.settings:id/title") 
for title in titles:
  print(title.text)
# 2. 通过 class_name 的形式
text_views = driver.find_element_by_class_name("android.widget.TextView") 
for text_view in text_views:
  print(text_view.text)
# 3. 通过 xpath 的形式
elements = driver.find_element_by_xpath("//*[contains(@text,'设')]") 
for element in elements:
  print(element.text)
```

### 3、显示等待定位元素

#### 方法名

```python
WebDriverWait(driver, timeout, poll_frequency=0.5).until(lambda x:x.find_element(By.ID, "userA"))
# driver指的是浏览器驱动对象
# timeout表示的是最长等待时间
# poll_frequency表示的是检测的间隔时间，默认是0.5秒
# 后面跟上until方法，在until方法跟上匿名函数来实现元素定位。
```

> 注意WebDriverWait等待类需要导入`from selenium.webdriver.support.wait import WebDriverWait`

#### 使用实例

定义一个显示等待的工具类`utils_wait`，方便使用时直接调用。

```python
# 工具类
from selenium.webdriver.support.wait import WebDriverWait

# 定义一个获取元素的方法
def get_element(driver, element):
    wait = WebDriverWait(driver, 10, 1)
    # element[0], element[1]为传入的查找元素的方法和定位元素属性值。
    element = wait.until(lambda x: x.find_element(element[0], element[1]))
    return element
```

#### 使用

这里改造前面定位单个元素的案例。

```python
# 导入webdriver等包
import time
from appium import webdriver
from selenium.webdriver.common.by import By
from utils_wait import get_element

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

driver = webdriver.Remote("http://localhost:4723", des_cap)
# 找到“更多”按钮并点击(XPATH)
more_element = By.XPATH, "//*[@text='更多']"
get_element(driver, more_element).click()
time.sleep(2)
# 找到 飞行模式的 开关，并点击(ID)
air_element = By.ID, "android:id/switch_widget"
get_element(driver, air_element).click()
time.sleep(2)
# 找到返回按钮并点击(class)
return_element = By.CLASS_NAME, "android.widget.ImageButton"
get_element(driver, return_element).click()

time.sleep(3)
driver.quit()
```

## 五、元素操作

###  1、点击操作

```python
element.click()  # 针对元素进行点击操作
```

### 2、清空和输入操作

```python
element.clear()  # 针对元素进行清空操作
element.send_keys("value")  # 针对元素进行输入操作
```

### 3、输入的封装

```python
#  为了保证代码的健壮性，确定输入的内容一定不会出错，所以在输入前做一次清除，将其它输入内容清除。
def input_text(element, text):
    """
    :param element:  表示的是元素对象
    :param text: 表示的是要输入的内容
    :return:
    """
    # 清除元素中的文本内容
    element.clear()
    # 输入文本内容
    element.send_keys(text)
```

### 4、获取元素的信息

#### 方法名

* 获取元素的文本内容（获取的是元素text属性的内容）

  ```
  element.text
  ```

* 获取元素的位置

  ```python
  element.location  # 返回的值是一个字典，字典中包含x和y ， x和y表示的是元素在手机屏幕左上角的点的坐标
  ```

* 获取取元素的大小

  ```python
  element.size     # 返回值是一个字典，字典中会包含 width和height， width表示的宽度，height表示的高度
  ```

* 获取元素的属性值

  ```python
  element.get_attribute("attribute")  # attribute表示的是属性名称
  # 获取ID值时，attribute为resourceId；
  # 获取的是class的值，attribute为className；
  # 获取的是text的值，attribute为name。
  ```
  
  ::: warning 注意
  
  如果attribute为name时，获取的是text或者content-desc（text优先，找不到text值，再去找content-desc的值）
  
  :::

#### 案例

##### 需求

```
1. 找到wlan元素；
2. 获取wlan菜单的文本内容；
3. 获取wlan的位置信息；
4. 获取wlan元素的大小；
5. 获取wlan元素。
```

#### 实现代码

```python
# 导入webdriver
import time
from appium import webdriver
from selenium.webdriver.common.by import By
from utils_wait import get_element

# 初始化app的配置信息
des_cap = dict(  # 定义字典参数
    platformName = "Android",  # 表示的是android 或者IOS系统
    automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
    platformVersion = "7.1.2",  # 表示的是平台系统的版本号
    deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
    appPackage = "com.android.settings",  # 表示的是app的包名
    appActivity = ".Settings"  # 表示的是app的界面名
)

# 注册驱动，
# 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与
driver = webdriver.Remote("http://127.0.0.1:4723", des_cap)

# 1. 找到wlan元素
wlan_btn = By.XPATH, "//*[@text='WLAN']"
element = get_element(driver, wlan_btn)
# 2. 获取wlan菜单的文本内容
print(element.text)

# 3. 获取wlan的位置信息
print(element.location)

# 4. 获取wlan元素的大小
print(element.size)

# 5. 获取wlan元素的class属性值
print(element.get_attribute("className"))
time.sleep(6)

driver.quit()
```

#### 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/AutomatedTest/202401031525434.png" alt="CleanShot 2023-12-19 at 15.03.59@2x" style="zoom:50%;" />

### 5、工具类utils

根据上面的知识，可以总结出三个常用的工具类方法，这三个方法可以放入同一个工具类`utils`中，更方便调用和使用。

```python
from selenium.webdriver.support.wait import WebDriverWait
# 定义一个获取元素的方法

# 减少代码量，不必要在每个元素定位的代码中都使用显示等待来定位。
def get_element(driver, element):   # element 表示的元素定位的值
    wait = WebDriverWait(driver, 10, 1)
    element = wait.until(lambda x: x.find_element(element[0], element[1]))
    return element

# 判断元素是否存在
def element_is_exsit(driver, element):   # element 表示的元素定位的值
    try:  # 捕获异常信息
        get_element(driver, element)    # 能够正常找元素，就返回True
        return True
    except Exception as e:   # 如果捕获到了异常，返回False
        return False


#  为了保证代码的健壮性，确定输入的内容一定不会出错，所以在输入前做了一次清除。
def input_text(element, text):
    """
    :param element:  表示的是元素对象
    :param text: 表示的是要输入的内容
    :return:
    """
    # 清除元素中的文本内容
    element.clear()
    # 输入文本内容
    element.send_keys(text)
```

### 6、更多初始化app配置信息

初始化app的配置信息，就是`driver = webdriver.Remote("http://localhost:4723",des_cap)`中的des_cap中的信息。

#### 输入中文的处理

默认情况下是输入不了中文的，需要在初始化app配置中增加两个参数:

```python
resetKeyboard = True,        # 重置设备的输入键盘
unicodeKeyboard = True        # 采用unicode编码输入
```

#### 区分app是首次打开还是非首次打开

```python
noReset = True  # 用来记住app的session，如果有登陆或做过初始化的操作，为True时，后面不需要再操作
```

### 7、综合案例

#### 需求

通过自动化测试代码，打开学车不软件，并使用手机号、密码进行登录，然后对“驾照圈”的第一条评论进行评价并发布。

#### 实现代码

```python
# 导入webdriver
import time
from appium import webdriver
# 初始化app的配置信息
from selenium.webdriver.common.by import By

from utils import get_element, input_text, element_is_exsit

des_cap = {  #定义字典参数
  platformName = "Android",  # 表示的是android 或者IOS系统
  automationName = "uiautomator2",  # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest”
  platformVersion = "7.1.2",  # 表示的是平台系统的版本号
  deviceName = "127.0.0.1:62001",  # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）
  appPackage = "com.bjcsxq.chat.carfriend",  # 表示的是app的包名,学车不
  appActivity = ".module_main.activity.SplashActivity"  # 表示的是打开app的主界面名
  noReset = True  # 用来记住app的session，如果有登陆或做过初始化的操作，为True时，后面不需要再操作
####"".module_main.activity.MainActivity""
}  

driver = webdriver.Remote("http://localhost:4723",des_cap)

# 通过同意协议来判断app是否是首次打开，如果刚安装首次打开会要求点击同意协议
agree_btn = By.XPATH, "//*[@text='同意并继续使用APP']"
if element_is_exsit(driver, agree_btn):
    get_element(driver, agree_btn).click()
else:
    print("非首次打开")

# 点击“我的”
me_element = By.ID,"com.bjcsxq.chat.carfriend:id/mine_layout"
get_element(driver, me_element).click()
# 登录
login_element = By.ID, "com.bjcsxq.chat.carfriend:id/mine_username_tv"
get_element(driver, login_element).click()
# 输入手机号
tel_element = By.ID, "com.bjcsxq.chat.carfriend:id/login_phone_et"
input_text(get_element(driver, tel_element), "13751113926")
# 输入密码
password_element = By.ID, "com.bjcsxq.chat.carfriend:id/login_pwd_et"
input_text(get_element(driver, password_element), "a123456b")
# 点击登录
insert_element = By.ID, "com.bjcsxq.chat.carfriend:id/login_btn"
get_element(driver, insert_element).click()
# 对弹出的信息确认窗口，点击确定
accept_element = By.CLASS_NAME, "android.widget.Button"
get_element(driver, accept_element).click()
# 点击“驾照圈”
licence_btn = By.ID, "com.bjcsxq.chat.carfriend:id/apply_layout"
get_element(driver, licence_btn).click()
# 选择第一条评论
pl_element = By.ID, "com.bjcsxq.chat.carfriend:id/tv_post_replay"
get_element(driver, pl_element).click()
# 填写评论内容
nr_element = By.XPATH, "//*[@text='发布评论']"
input_text(get_element(driver, nr_element), "test")
# 进行发布
fb_element = By.CLASS_NAME, "android.widget.TextView"
get_element(driver, fb_element)

time.sleep(3)
driver.quit()
```

