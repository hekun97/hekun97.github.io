# pytest测试框架（旧）

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

::: tips 提示

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

::: tips 提示

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

::: waring 注意

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

::: tips 提示

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

::: tips 提示

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

