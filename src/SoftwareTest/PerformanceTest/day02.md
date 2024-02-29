目标

```
1. 了解市面主流测试工具；
2. 能够对比说出Loadrunner和JMeter的优缺点；
3. 对JMeter的目录、主要组件和元件进行了解；
4. 了解JMeter的属性和变量。
```

## 1. 常用性能测试工具

### 1.1. 主流性能测试工具

- LoadRunner
- JMeter \[本阶段学习\]

### 1.2. LoadRunner

- HP LoadRunner是一种工业级标准性能测试负载工具，可以模拟上万用户实施测试，并在测试时可实时检测应用服务器及服务器硬件各种数据，来确认和查找存在的瓶颈；
- 支持多协议：Web(HTTP/HTML)、Windows Sockets、FTP、ODBC、MS SQL Server等协议；
- 最初是Mercury公司采用C语言编写,现被HP公司收购。

#### 1.2.1. 优点

1. 多用户（支持数量单位万）；
2. 详细分析报表；
3. 支持ip欺骗。

#### 1.2.2. 缺点

1. 收费；
2. 体积庞大（单位GB）；
3. 无法定制功能。

### 1.3. JMeter

- JMeter是Apache组织开发的基于Java的开源软件，用于对系统做接口功能测试和性能测试。
- 它最初被设计用于Web应用测试，但后来扩展到其他测试领域，例如静态文件、Java 程序、shell 脚本、数据库、FTP、Mail等。

#### 1.3.1. 优点

1. 免费；
2. 开源；
3. 小巧（最新版-50MB左右）；
4. 丰富学习资料及扩展组件；
5. 应用广泛；
6. 易上手。

#### 1.3.2. 缺点

1. 不支持ip欺骗；
2. 分析和报表能力相对于LoadRunner欠缺精度。

## 2. JMeter环境搭建

1. 安装JDK；
2. 安装JMeter。

::: info 说明

安装过程过程比较简单自己从网络上查找教程，记得将语言改为中文，还有Mac下如果关闭终端后不能使用，记得按下面方法修改。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202402221727126.png" alt="image-20240222172707440" style="zoom:50%;" />

:::

## 3. JMeter文件主要目录介绍

### 3.1. 目标

```
1. 了解JMeter文件目录的内容
```

### 3.2. bin目录

存放可执行文件和配置文件；

```
JMeter.bat：windows的启动文件
JMeter.log：日志文件
JMeter.sh：linux的启动文件
JMeter.properties：系统配置文件
JMeter-server.bat：windows分布式测试要用到的服务器配置
JMeter-serve：linux分布式测试要用到的服务器配置
```

### 3.3. docs目录

docs：是JMeter的api文档，可打开api/index.html页面来查看；

### 3.4. printable_docs目录

printable_docs的usermanual子目录下的内容是JMeter的用户手册文档；

 usermanual下component_reference.html是最常用到的核心元件帮助文档。

::: tip 提示

printable_docs的demos子目录下有一些常用的JMeter脚本案例，可以作为参考。

:::

### 3.5. lib目录

该目录用来存放JMeter依赖的jar包和用户扩展所依赖的jar包。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202402221740179.png" alt="CleanShot 2024-02-22 at 17.39.45@2x" style="zoom:50%;" />

## 4. JMeter主要元件和组件介绍

### 4.1. 目标

```
1. 熟悉JMeter的主要元件和组件
2. 元件的类型与各自的功能
3. 熟悉元件之间彼此作用域
4. 掌握元件执行顺序
```

### 4.2. 线程组

线程组元件是所有测试计划的入口。所有的取样器和控制器必须放在线程组下。一个线程组可以看作一个虚拟用户池，其中的每个线程都可以理解为一个虚拟用户，多个虚拟用户同时去执行相同的一批次任务。每个线程之间都是隔离的，互不影响的。一个线程的执行过程中，操作的变量不会影响其他线程的变量值。

### 4.3. 元件和组件的基本介绍

- 元件：多个类似功能组件的容器（类似于类）；
- 组件：实现独立的某个功能（类似于方法）。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291137631.png" alt="CleanShot 2024-02-23 at 10.25.59@2x" style="zoom:50%;" />

#### 4.3.1. 取样器

取样器是用来模拟用户操作的，是向服务器发送请求、接收服务器响应数据的运行单元。取样器是包含在线程组内部的组件，因此它必须在线程组中添加。JMeter原生支持多种不同的取样器，如TCP取样器、HTTP请求、FTP请求、JDBC请求、Java请求等，每一种不同类型的取样器根据设置的参数向服务器发出不同类型的请求。

#### 4.3.2. 逻辑控制器

JMeter 逻辑控制器可以对元件的执行逻辑进行控制，JMeter 官网是这样解释的：「Logic Controllers determine the order in which Samplers are processed」。也就是说逻辑控制器可以控制采样器(samplers)的执行顺序，因此控制器需要和采样器一起使用。除仅一次控制器外，其他逻辑控制器可以相互嵌套。

JMeter 中的逻辑控制器主要分为两类： 

- 控制测试计划执行过程中节点的逻辑执行顺序，如：循环控制器、If 控制器等；
- 对测试计划中的脚本进行分组、方便 JMeter 统计执行结果以及进行脚本的运行时控制等，如：吞吐量控制器、事务控制器。


#### 4.3.3. 监听器

监听器是用于对测试结果数据进行处理和可视化展示的一系列元件。察看结果树、 图形结果、聚合报告等都是我们经常用到的监听器组件。

#### 4.3.4. 配置元件

配置元件用于提供对静态数据配置的支持。它可以定义在测试计划层级下，也可以定义在线程组或取样器层级下，定义在不同层级，作用域也不同。配置元件主要有用户自定义变量、CSV数据文件设置、TCP取样器配置、HTTP Cookie管理器等。

#### 4.3.5. 断言

断言即检查接口的返回是否符合预期。断言是自动化测试脚本中举足轻重的一环，因此要十分重视。

JMeter 常用断言主要有响应断言（Response Assertion）、JSON断言（JSON Assertion）、大小断言（Size Assertion）、断言持续时间（Duration Assertion）、beanshell 断言（Beanshell Assertion）等，我们经常要用到的有 JSON断言、响应断言、断言持续时间。

#### 4.3.6. 定时器

在性能测试中，访问请求之间的停顿时间被称之为思考时间。在实际操作中，停顿时间可以是内容查找、阅读等花费的时间，而定时器正是用来模拟这种停顿时间。其中：

- 同一作用域下的所有定时器优先于 取样器之前执行。
- 如果希望定时器仅应用于其中一个取样器，则把定时器加入到该取样器的子节点。

JMeter定时器主要包括：固定定时器（Constant Timer），统一随机定时器（Uniform Random Timer），精准吞吐量定时器（Precise Throughput Timer），常数吞吐量定时器（Constant Throughput Timer），高斯随机定时器（Gaussian Random Timer），JSR223 定时器（JSR223 Timer），泊松随机定时器（Poisson Random Timer），同步定时器（Synchronizing Timer），BeanShell 脚本编写定时器（BeanShell Timer）。

#### 4.3.7. 前置处理器和后置处理器

前置处理器是取样器请求之前执行一些操作，经常用于在取样器请求运行前修改参数，设置环境变量，或更新未从响应文本中提取的变量。

同样的，后置处理器是在取样器请求之后执行一些操作。有时候服务器的响应数据在后续请求中需要用到，我们就需要对这些响应数据进行处理。比如获取响应中的token，在后续请求中使用以进行身份验证，这时就会使用后置处理器。

### 4.4. 元件作用域

在JMeter中，元件的作用域是靠测试计划的树形结构中元件的父子关系来确定的。

::: tip 提示

核心是取样器，其他组件都是以取样器为核心运行的，组件添加的位置不同，生效的取样器也不同。

:::

## 5. JMeter的属性和变量

JMeter的属性和变量可以简单理解为编程里面的全局变量和局部变量。

属性是全局可见，可以跨线程组传递调用，而变量基本上只能存在于一个线程组中（在测试计划定义的变量也是可以跨线程组传递的）。

- 同线程组内的数据传递一般用变量，例如，存放一个临时的过程值。
- 多个进程组共用的一般用属性，例如，登录操作的session（token）值需要传给其他线程组用，避免每个线程组都还要做一次登录操作。
