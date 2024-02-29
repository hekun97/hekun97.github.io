## 1. Jmeter直连数据库

### 1.1. 准备工作

1. 启动数据库；

2. 加载mysql的JDBC驱动；

   - 方法1：在测试计划下方的位置，点击浏览添加JDBC的jar包（`mysql-connector-java-8.0.26.jar`）；

     ![加载jar](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803380.png)

   - 方法2：将JDBC的jar拷贝到jmeter安装目录下的lib目录，并重启jmeter。

3. 在配置元件中添加JDBC Connection Configuration，然后配置JDBC连接池的参数；

![CleanShot 2023-07-11 at 15.11.19@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803381.png)

### 1.2. 编写JDBC脚本步骤

需求：搜索指定商品，在返回结果中检查是否包含指定商品的ID的详情URL

步骤：

1. 在取样器中添加JDBC Request请求
   - JDBC连接池名称：必须与“JDBC连接池”中的连接名一致；
   
   - 要执行的sql语句；
   
   - `Variable Name`中：写明要保存的数据的参数名。
   
     ![image-20230711162040641](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803382.png)

2、添加HTTP请求 —— 搜索请求

参数为中文时，将参数写到下方参数位置，并勾选上“编码”

![CleanShot 2023-07-11 at 15.12.38@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803383.png)

3、添加响应断言：

在响应断言中配置要检查的数据内容。

![image-20230711160833555](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803384.png)

::: warning 注意

- 应用JDBC Request查询出的结果时，需要加上索引（因为JDBC查询的结果保存为一个列表）。
- 不清楚索引内容的话，可以通过Debug Sampler（调试取样器）来查看保存的变量名。

:::

## 2. 逻辑控制器

作用：控制jmeter脚本的执行顺序。

### 2.1. 仅一次控制器

往往类似登录等接口只需要一次，其他的接口需要循环测试（比如多次购买商品，不用重复多次登录）。 

就会用到逻辑控制器中的仅一次控制器，不管线程循环执行多少次，只要放置在控制器下的请求，都只执行一次。

线程组设置：线程数:3，循环次数：2。

运行结果：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145243.png" alt="CleanShot 2024-02-26 at 17.55.30@2x" style="zoom:50%;" />

### 2.2. 事物控制器

性能测试的结果统计时我们一定会关注 TPS， TPS 代表每秒的事务数，每个事务对应的是我们的请求。虽然 Jmeter 能够帮我们把每个请求统计成一个事务，但有时候我们希望多个操作统计成一个事务，Jmeter 也考虑到了这种需求，我们可以通过逻辑控制器中的事务控制器来完成。

::: info 说明

比如一个支付操作： 查询用户余额请求+支付安全校验请求+支付请求。

这个支付操作的事务就对应了3个接口情求，我们在压测的时候也需要把这三个请求放到一个事物中来查看整个支付操作的TPS、响应时间等。

:::

#### 2.2.1. 使用事务控制器的典型场合

1. 当要度量生成某个页面的整体性能时，不仅考虑页面请求本身，还需要考虑完成页面渲染所需要的image、CSS、js等资源，因为请求这些数据也会消耗系统，网络等资源。故需要页面请求与资源请求看做一个整体，放在一个事务控制器下；
2. 在做API或接口性能测试时，接口之间存在逻辑依赖关系，后一个接口会引用前面接口返回的结果，故需要将这些接口看成一个整体，放在一个事务控制器下，度量性能才能接近真实场景；
3. 在前面的请求服务器返回了token，后面的请求需要使用token，这些请求有逻辑上的依赖关系，需要看成一个整体，放在一个事务控制器下。

#### 2.2.2. 事务控制器参数说明

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145245.png" alt="CleanShot 2024-02-26 at 18.29.37@2x" style="zoom:50%;" />

- Generate parent sample：如果事务控制器下有多个取样器，勾选它，那么在“查看结果树”中我们不仅可以看到事务控制器，还可以看到每个取样器，并且事务控制器定义的事务是否成功取决于子事务是否都成功，**子事务其中任何一个失败即代表整个事务失败**。
- Include duration of timer and pre-post processors in generated sample：是否包括定时器、预处理和后期处理延迟的时间

#### 2.2.3. 案例

1. 查看结果树内容；

   ![查看结果树内容](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145246.png)

2. 聚合报告内容。

   ![聚合报告内容](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145247.png)

### 2.3. 如果（if）控制器

如果（if）控制器：判断控制器，根据填写的条件中表达式的值（true或false），来决定控制器下的元件是否执行；true就执行，false就不执行。

#### 2.3.1. 参数详解

1. Expression (must evaluate to true or false) ：表达式（值必须是 true 或 false )，也就是说，在右边文本框中输入的条件值必须是 true 或 false（默认情况下）；
2. Interpret Condition as Variable Expression?：默认勾选，将条件解释为变量表达式（需要使用 `${__jexl3 }` 或 `$​{__groovy } `表达式）；
3. Evaluate for all children?：条件作用于每个子项（具体理解见后面的例子说明）。

#### 2.3.2. 案例

通过对“用户定义的变量”中的name变量值进行判断，来确定请求那个网站（baidu或itcast）。

##### 2.3.2.1. 第一种配置方法

![image-20230711162647630](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803385.png)

::: warning 注意

Jmeter中如果（If）控制器，没有对应的ELSE语句，所以有不同的分支时，需要写多个如果（If）控制器，将不同的分支语句写在不同的如果（If）控制器下面。

:::

##### 2.3.2.2. 第二种配置方法

1. 使用`jexl3`函数生成判断条件，位置在工具-函数助手对话框。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803386.png" alt="image-20230711163029878" style="zoom:50%;" />

2. 填写配置条件并勾选上`Interpret Condition as Variable Expression`，填写生成的函数`${__jexl3("$(name)"=="baidu",)}`或者`${__groovy("$(name)"=="baidu",)}`。

![image-20230711162734582](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803387.png)

::: warning 注意

- 选中` Interpret Condition as Variable Expression?`，使用函数来进行判定时，Jmeter自身的执行效果要高一些。
- 如果取消选中 `Interpret Condition as Variable Expression?`，这可能会导致性能损失很大，并使测试的可扩展性降低，所以不推荐不勾选。
- jexl3函数和groovy函数：根据请求返回结果中某一字段的取值判断往下走的流程。

:::

### 2.4. 循环控制器

作用：控制子节点下的HTTP请求的执行次数。

![image-20230711163218363](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803388.png)

循环控制器与线程组中的循环次数的对比：

- 循环控制器只控制其子节点下的HTTP请求，线程组对所有的请求都有效；
- 假如线程组循环次数为2，循环控制器次数为3，则循环控制器下的请求执行次数为：`2*3`。

### 2.5. ForEach控制器

与用户定义的变量或者正则表达式提取器配合使用，循环读取用户定义的变量或者正则表达式结果中的所有数据。

配置参数：

![image-20230711163620352](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803389.png)

#### 2.5.1. 与用户定义的变量配合使用

1. 添加用户定义的变量：

   参数名：固定前缀 + 连续的数字后缀

![image-20230711164709739](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803390.png)

2. 添加ForEach控制，并配置，这里取的序号数据为后缀为3、4、5的数据。

![image-20230711163751359](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803391.png)

3. 在ForEach控制器下方添加HTTP请求，并引用ForEach读取的数据`${word} `

4. 添加查看结果树

   ![image-20230711164600462](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803392.png)

#### 2.5.2. 与正则表达式配合使用

1. 添加HTTP请求——itcast首页

2. 添加正则表达式提取器，提取出itcast响应中所有的地址相关的数据，并保存为参数area（列表数据）

   ![image-20230711165017830](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803393.png)

3. 添加ForEach控制器，循环提取area列表中的每一个地址信息

   ![image-20230711165042950](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803394.png)

4. 在ForEach控制器下添加一个HTTP请求——百度，引用ForEach控制器中定义的变量\${word}，作为参数

5. 添加查看结果树

## 3. 定时器

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803395.png" alt="image-20230711165416830" style="zoom: 33%;" />

### 3.1. 同步定时器

又叫做集合点（LR的叫法），保证大量的请求在同一时间进行发送，形成绝对的并发。

实现原因：设置同步定时器，有请求要发出时，同步定时器会暂缓请求发送，一直到积攒的请求数达到要的数量时，将所有的请求同步发送出去，形成绝对的并发（更大的压力负载）。

SyncTimer的目的是阻塞线程，直到阻塞了n个线程，然后立即释放它们。

![image-20230711165256644](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803396.png)

**使用场景**

抢红包、消费券；秒杀活动。

::: warning 注意

问题

当用户数不能整除集合点组件的一组用户数属性时，如果超时时间是 0，会导致程序挂起,怎么避免挂起?

解决办法

1. 方案1: 点击 stop 强行终止，但是不建议；
2. 方案2: 修改一组用户数，能够做到整除(治标不治本)；
3. 方案3: 修改超时时间，不设置为 0，即便一组用户数填充不满，只要超时，也会执行(建议，一般也是使用这种)。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145248.png" alt="img" style="zoom:50%;" />

:::

### 3.2. 常数吞吐量定时器

设置Jmeter以指定的吞吐量速度往服务器发送HTTP请求，一般测并发都是用常数吞吐量定时器。

比如要形成1500/s的并发，那么可以设置：线程数750个，然后循环次数永远，常量吞吐量定时器120（也就是每秒2个请求）。计算：750*2/s=1500/s。

![image-20230711165542608](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803397.png)

::: warning 注意

- 常数吞吐量定时器只是帮忙达到性能测试的负载(压力)要求，本身不代表性能有bug/无bug，对于bug的分析需要通过响应时间来判断。
- 这两个定时器的结果可以用聚合报告查看。

:::

### 3.3. 固定定时器

固定定时器，即配置每个请求之间的间隔时间为固定值。

下图在一个事务控制器上添加固定定时器：

![JMeter固定定时器](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145249.png)

将线程延迟分别配置为 100 和 1000后，运行脚本

![JMeter运行脚本](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145250.png)

查看表格结果中的数据，其中1、2是配置为 100 毫秒时的运行结果，4、5是配置为 1000 毫秒时的运行结果，可看到 4、5 的间隔时间明显比 1、2 的间隔时间长

![JMeter运行结果](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145251.png)



更多定时器内容学习：https://blog.csdn.net/weixin_45071330/article/details/129563851

## 4. jmeter分布式

### 4.1. 应用场景

当性能测试时需要模拟的负载（用户/请求）太高，一台测试机无法模拟，需要使用多台测试机一起来模拟以达到要求的负载量，这就叫分布式。

::: info 说明

并发量的瓶颈：

1. 测试机的瓶颈；

   不同的测试机配置不同，可模拟的并发也不同，单台测试机可能能模拟1500/s的并发，但是更多的并发肯定需要多台测试机。

2. 服务器的瓶颈。

   压测的目的就是为了找出服务器的最优负载和最大负载，所以不要让测试机成为瓶颈，不能真实的反应出服务器的负载能力。

:::

### 4.2. 原理

分布式测试时通常由1台控制机和N台代理机

- 控制机：给代理发送任务，接收代理机返回的数据统计，做汇总展示；

- 代理机：往服务器发送HTTP请求，并接收服务器的响应，并对响应进行处理。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803398.png" alt="image-20230711165737984" style="zoom: 33%;" />

### 4.3. 分布式相关注意事项：

1. 测试机上所有的防火墙关闭；
2. 所有的控制机、代理机、被测系统都在同一个子网中；
3. 所有的控制机和代理机上安装的Jmeter和JDK的版本必须完全一样；
4. 要关闭Jmeter中的RMI SSL开关，也就是设置配置文件中的`server.rmi.ssl.disable=true`。

### 4.4. 分布式配置与运行

#### 4.4.1. 配置

所有的修改在配置文件（Jmeter.property）中

代理机

- server_port ：代理机启动的端口，不冲突即可；
- `server.rmi.ssl.disable=true`。

控制机

- remote_hosts： 代理机的IP和port，如果有多个代理机用','分隔；
- `server.rmi.ssl.disable=true`。

#### 4.4.2. 运行

代理机

- 进入bin目录下，执行jmeter_server.bat，Mac、Linux下运行Unix可执行文件jmeter_server。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145252.png" alt="CleanShot 2024-02-27 at 17.31.08@2x" style="zoom:50%;" />

控制机

- 进入bin目录下，执行jmeter.bat；
- 启动时，点击“运行”——“远程启动所有”控制代理机的运行。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803399.png" alt="image-20230711170151588" style="zoom:50%;" />

### 4.5. 分布式实操

这里通过在本地复制两份JMeter，来模拟分布式。

1. 通过复制两份Jmeter安装文件，模拟两台代理机；

   ![CleanShot 2024-02-27 at 17.33.13@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145253.png)

2. 更改两台代理机启动的端口号和`server.rmi.ssl.disable=true`，注意端口号不要冲突；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145254.png" alt="CleanShot 2024-02-27 at 17.10.32@2x" style="zoom:50%;" />

3. 更改控制机中的remote_hosts：代理机的IP和port，`server.rmi.ssl.disable=true`；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145255.png" alt="CleanShot 2024-02-27 at 17.39.47@2x" style="zoom:50%;" />

4. 启动两台代理机；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145256.png" alt="CleanShot 2024-02-27 at 17.26.33@2x" style="zoom:50%;" />

5. 启动控制机，控制机还是一样的启动方式，进入bin目录下，执行jmeter.bat或jmeter；

6. 启动后，编写好需要执行的测试计划；

7. 找到软件中运行菜单下的远程启动所有，点击启动所有的代理机执行控制机上的线程组；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145257.png" alt="CleanShot 2024-02-27 at 17.44.42@2x" style="zoom:50%;" />

8. 查看运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145258.png" alt="CleanShot 2024-02-27 at 17.48.38@2x" style="zoom:50%;" />

## 5. jmeter报告

### 5.1. 聚合报告

![CleanShot 2023-07-11 at 09.39.34@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803400.png)

聚合报告重点关心的性能指标：

1. 响应时间：越快越好；

   观察当前的最大最小值的波动范围。

   - 如果波动范围不大，以平均响应时间作为最终的性能响应时间结果；
   - 如果波动范围很大，以90%（经验）的响应时间作为最终性能响应时间结果。

2. 错误率：错误率越高代表系统在高并发下越不稳定；

3. 吞吐量：吞吐量越高性能越好。

::: tip 提示

其他重点指标：

- 并发量（RPS）：系统能支撑的并发量越高越好；

  在测试前的时候设计好并发量。

- 资源占用率：保障功能正常使用的情况下，资源占用率越低性能越好。

  通过对服务器的资源占用监控确认。

:::

### 5.2. HMTL报告

#### 5.2.1. 参数详解

```shell
jmeter -n -t [jmx file] -l [result file] -e -o [html report folder]
jmeter -n -t hello.jmx -l result.jtl -e -o ./report
```

![参数](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803401.png)

参数描述：

1. `-n`：非GUl模式执行JMeter；
2. `-t [jmx file]`：测试计划保存的路径及jmx文件名，路径可以是相对路径也可以是绝对路径；
3. `-l [result file]`：保存生成测试结果的文件，jtl文件格式；
4. `-e`：测试结束后，生成测试报告；
5. `-o [html report folder]`：存放生成测试报告的路径，路径可以是相对路径也可以是绝对路径。

::: warning 注意

result.jtl和report会自动生成，如果在执行命令时result.jtl和report已存在，必须先删除，否则在运行命令时就会报错。

:::

#### 5.2.2. 使用步骤

1. 在jmeter安装目录下的bin目录下执行下述命令，该脚本是并发20/s，持续时间60s的小压测；

   ![CleanShot 2024-02-27 at 11.56.47@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145259.png)

2. 等待脚本执行完成后，进行report文件夹下，打开index.html，可以看到性能测试的详细数据统计。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145260.png" alt="CleanShot 2024-02-27 at 11.55.56@2x" style="zoom:50%;" />

## 6. 作业题目：（OA请假单查询）

解决思路：

1. 配置JDBC连接池，添加JDBC请求，查询总数量；
2. 添加HTTP请求，查询请假单的数量和详细信息；
3. 添加JSON断言，找到响应数据中的总数量的值，与JDBC请求返回的总数量做对比。

## 7. Jmeter性能测试常用图表

### 7.1. 目标

```
1. 了解jmeter下载插件方式；
2. 理解常用性能测试图表。
```

### 7.2. 插件安装

安装步骤：

```
1. 下载包管理工具jar包;
2. 将包管理工具jar包添加到jmeter中;
3. 下载性能测试常用组件.
```

1. 安装插件管理器

   - 在[Jmeter官网](https:/jmeter-plugins.org/install/Install/)上下载插件管理器Plugins-manager-1.3.jar；

   - 将JAR包放入到**lib\ext**目录下；

   - 重启Jmeter，可以在选项下看到Plugins Manager选项。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145261.png" alt="CleanShot 2024-02-28 at 16.28.42@2x" style="zoom:50%;" />

2. 安装指定的插件（需要安装的插件有：3 Basic Graphs、PerfMon、Concurrency、5 Additional）

   - 打开Plugins Manager插件管理器；
   - 选择Available Plugins，当前可用的插件；
   - 选择需要下载的插件（等待右方文本内容展示出来），可以选择下载多个；
   - 下载右下角的下载按钮，自动的完成下载，Jmeter会自动重启。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145262.png" alt="CleanShot 2024-02-28 at 16.32.47@2x" style="zoom:50%;" />

3. 重启后，检查已安装好的插件。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145263.png" alt="CleanShot 2024-02-28 at 16.45.57@2x" style="zoom:50%;" />



### 7.3. 不同的插件位置

- 3 Basic Graphs、PerfMon、5 Additional：位置在监听器下。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145264.png" alt="CleanShot 2024-02-28 at 16.42.58@2x" style="zoom:50%;" />

- Concurrency：位置在线程组下。

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145265.png" alt="CleanShot 2024-02-28 at 17.14.08@2x" style="zoom:50%;" />

### 7.4. 性能测试常用图表

#### 7.4.1. Concurrency Thread Group

直译并发线程组，通常叫做阶梯式加压并发线程组。

作用是通过阶梯式加压，来判断系统在不同并发量下的容错能力。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145266.png" alt="CleanShot 2024-02-28 at 17.30.26@2x" style="zoom:50%;" />

#### 7.4.2. Transactions per Second

TPS：运行过程中的TPS（每秒钟的事务）统计。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145267.png" alt="CleanShot 2024-02-28 at 22.07.03@2x" style="zoom:50%;" />

#### 7.4.3. Bytes Through Over Time

Bytes Through Over Time：不同时间吞吐量展示（字节Bytes），也就是运行过程中的传输速率。

聚合报告里，吞吐量（Throughput）是按请求个数来展示的，比如说1.9/sec，就是每秒发送1.9个请求，而这里的展示是按字节，比如说2100000Bytes/s，就是每秒传输2100000个字节。

`2100000Bytes/s  / (1024 * 1024)  = 2MB/s `

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145268.png" alt="CleanShot 2024-02-28 at 22.28.52@2x" style="zoom:50%;" />

### 7.5. 基于jmeter客户端监控服务器的硬件资源

#### 7.5.1. PerfMon Metrics Collector

一般添加只会对CPU、Memory、TCP、Disks I/O、network I/O指标进行监控。

1. 下载安装包ServerAgent-2.2.3.zip；

2. 解压缩安装包；

3. 启动安装包中的执行文件：Linux服务器启动startAgent.sh，Windows服务器启动startAgent.bat，默认运行端口为4444；

4. Jmeter中添加插件，在监听器——perForm插件，并配置；

5. 运行性能脚本，会自动监控。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145269.png" alt="CleanShot 2024-02-28 at 23.46.41@2x" style="zoom:50%;" />

::: warning 注意

- ServerAgent是运行在被监控服务器上的。
- Y轴上的数据单位默认为Byte/s，`3000000Byte/s / (1024 * 1024) = 2.86MB/s`，这里我的服务器带宽为3MB/s，可以看出还是合理的。 

:::

## 8. 常用平均并发数(TPS)计算公式

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145270.png" alt="CleanShot 2024-02-28 at 15.26.23@2x" style="zoom:50%;" />

- PV（Page View）：即页面访问量，每打开一次页面PV计数+1，刷新页面也是。
-  UV(Unique Visitor)：唯一访问用户数，用来衡量真实访问网站的用户数量。

PV只统计页面访问次数。一般用UV统计用户活跃数，用PV统计用户访问页面的频率。

::: tip 提示

这的数据的来源是开发通过埋点来实现的。

:::

### 8.1. 普通计算方法

计算公式：TPS= 总请求数 / 总时间

按照上图所示，在2019年第32周，有4.13万的浏览量，那么总请求数，我们可以认为估算为4.13万（1次浏览都至少对应1个请求）。

- 总请求数  = 4.13 万请求数  = 41300 请求数
- 总时间：由于不知道每个请求的具体时间，我们按照普通方法，我们可以按照一周的时间进行计算；
- 总时间  = 1天  = 1 * 24 小时  = 24 * 3600 秒。

套入公式可得：

TPS = 41300请求数/24*3600秒  = 0.48请求数/秒；

结论：按照普通计算方法，我们在测试环境对相同的系统进行性能测试时，每秒能够发送0.48请求就可以满足线上的需要。

问题：对于同一天的时间内，不同的时间段，请求速率会有波动，这样计算会被平均掉，无法测试负载高的情况

### 8.2. 二八原则计算方法

二八原则就是指80%的请求在20%的时间内完成。

计算公式 ： TPS = 总请求数 80% / (总时间20%)

按照公式进行计算

`TPS = 41300 * 0.8请求数  / 24 * 3600 * 0.2秒  = 1.91 请求数/秒`

结论：按照二八原则计算，在测试环境我们的TPS只要能达到1.91请求数每秒就能满足线上需要。

::: tip 提示

二八原则的估算结果会比平均值的计算方法更能满足用户需求。

因为我们的系统不是每时每刻都一样的并发数，像大部分网站，白天的请求会更多，且集中在某个时间段（早上、中午、晚上），因此需要使用二八原则。

:::

### 8.3. 按照业务数据进行计算

业务数据：有的公司会统计一定时间内的所有业务数据，我们可以根据这个业务数据曲线图，统计出最多请求的数量和时间比例。

1. 曲线图看趋势：

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145271.png" alt="CleanShot 2024-02-28 at 15.50.30@2x" style="zoom:50%;" />

2. 直方图看数据和趋势：

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291145272.png" alt="CleanShot 2024-02-28 at 15.51.01@2x" style="zoom:50%;" />

#### 8.3.1. 计算模拟用户正常业务操作（稳定性测试）的并发量：

根据这些数据统计图，可以得出结论：

- 大部分订单在8点-24点之间，因此系统的有效工作时长为16个小时；
- 从订单数量统计，8-24点之间的订单占一天总订单的98%左右（40474个）

结合二八原则计算公式 ： TPS = 总请求数 80% / (总时间20%)

计算稳定性测试的并发数： `TPS = 40474 * 0.8请求数 / 16 * 3600 * 0.2秒 = 2.81 请求数/秒`

#### 8.3.2. 计算模拟用户峰值业务操作（压力测试）的并发量：

根据这些数据统计图，可以得出结论：

- 订单最高峰在在21点-22点之间，一小时的订单总数大约为8853个。（找最高的两个，或按需求找）

计算压力测试的并发数：`TPS = 峰值请求数/峰值时间 * 系数`

- 需要在测试环境模拟用户峰值业务操作（压力测试）的并发量为：`TPS = 8853 请求数 / 3600秒 * 3（系数） = 7.38 请求数/秒`

::: tip 提示

系数可以是：2、3、6、10，由项目组自己觉得要达成的性能指标。

:::
