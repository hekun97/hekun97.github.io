前言

学习目标

```
1. 掌握Jmeter进行HTTP接口测试时的技术要点：断言、关联、参数化、引入外部数据文件；
2. 掌握Jmeter更深入的高级用法：Jmeter函数、Jmeter属性、Jmeter的BeanShell、Jmeter录制脚本、Cookie管理器；
3. 掌握使用Jmeter进行性能测试的核心技巧。
```

## 1. JMeter使用示例

### 1.1. 目标

```
1. 了解jmeter使用方式
2. 掌握如何使用线程组
3. 掌握HTTP请求使用
4. 掌握察看结果树使用
```

### 1.2. JMeter第一个案例

#### 1.2.1. 需求

使用JMeter访问百度首页接口，并查看请求和响应信息

#### 1.2.2. 操作步骤

1. 启动JMeter；

2. 在‘测试计划’下添加‘线程组’；

3. 在‘线程组’下添加‘HTTP请求’取样器；

4. 填写‘HTTP请求’的相关请求数据；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144267.png" alt="CleanShot 2024-02-23 at 11.43.36@2x" style="zoom:50%;" />

5. 在‘线程组’下添加‘察看结果树’监听器；

6. 点击‘启动’按钮运行，并查看结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144268.png" alt="CleanShot 2024-02-23 at 11.44.55@2x" style="zoom:50%;" />

## 2. 重点组件

- 线程组
- HTTP取样器
- 察看结果树

::: tip 提示

无论哪个案例基本都需要以上三个组件，在这里先讲解下以上组件。

:::

### 2.1. 线程组

- 线程组元件是所有测试计划的入口，所有的取样器和控制器必须放在线程组下。
- 一个线程组可以看作一个虚拟用户池，其中的每个线程都可以理解为一个虚拟用户，多个虚拟用户同时去执行相同的一批次任务。
- 每个线程之间都是隔离的，互不影响的。
- 一个线程的执行过程中，操作的变量不会影响其他线程的变量值。

::: info 说明

线如下图设置线程数为10相当于10个线程，也就是10个虚拟用户去执行相同的一批次任务。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402231203604.png" alt="CleanShot 2024-02-23 at 12.02.49@2x" style="zoom:50%;" />

:::

#### 2.1.1. 添加线程组

右键点击 测试计划 --> 添加 --> 线程（用户） --> 线程组

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144269.png" alt="CleanShot 2024-02-23 at 11.51.15@2x" style="zoom:50%;" />

#### 2.1.2. 线程组的特点

- 模拟多人操作；
- 线程组可以添加多个，多个线程组可以并行或串行；
- 取样器（请求）和逻辑控制器必须依赖线程组才能使用；
- 线程组下可以添加其他元件下的组件（用户自定义的变量、查看结果树等）。

#### 2.1.3. 线程组分类

- 线程组

  普通的、常用的线程组，可以看做一个虚拟用户组，线程组中的每一个线程都可以理解为一个虚拟用户。

- setUp线程组

  一种特殊类型的线程组，可用于执行预测试操作。

- tearDown线程组

  一种特殊类型的线程组，可用于执行测试后工作。

见上面[添加线程组](#添加线程组)中的图片所示。

#### 2.1.4. 线程组参数详解

![CleanShot 2024-02-22 at 18.10.14@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402231215557.png)

::: info 说明

- ramp-up时间用于设置启动所有线程所需要的时间。

  例如：线程数设置为10，ramp-up时间设置为100秒，那么JMeter将使用100秒使10个线程启动并运行，每个线程将在前一个线程启动后的10秒启动。

- 如果ramp-up值设置得很小、线程数又设置得很大，刚开始执行测试时会对服务器产生很大的压力。

:::

### 2.2. HTTP请求

HTTP请求取样器用于向web服务器发送HTTP/HTTPS请求。

#### 2.2.1. 位置

选中测试计划/线程组 --> 右键 --> 添加 --> 取样器 --> HTTP请求

#### 2.2.2. 参数详解

![CleanShot 2024-02-23 at 10.37.32@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144270.png)

上述图片未标明内容：

1. 更多请求选项

   - 自动重定向：重定向不会被视为单独的请求，不被JMeter记录。
   - 跟随重定向：每次重定向都被视为单独的请求，都会被JMeter记录。
   - 使用KeepAlive：如果选中，JMeter和目标服务器之间通信时会在请求头中加入Connection: keep-alive。
   - 对POST使用multipart/form-data：如果选中，将使用multipart/form-data 或 application/x-www-form-urlencoded发送请求。

2. 消息体数据

   如果希望传输JSON格式的参数，需要在请求头中配置Content-Type为application/json。

   ::: tip 提示

   **添加请求头**

   - 右击 HTTP 请求并选择：添加 --> 配置元件 --> HTTP 信息头管理。

   - 点击底部的 “添加” 按钮添加头信息，并输入头的名称和值。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144271.png" alt="CleanShot 2024-02-23 at 10.57.04@2x" style="zoom:50%;" />

   :::

3. 文件上传

   在请求中发送文件，通常HTTP文件上传行为可以通过这种方式模拟。

### 2.3. 查看结果树

用于查看像HTTP请求的请求是否成功，并可查看相应的请求内容和响应结果。

#### 2.3.1. 位置

选中测试计划/线程组 --> 右键 --> 添加 --> 监听器 --> 察看结果树

#### 2.3.2. 参数详解

1. 取样器结果

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144272.png" alt="CleanShot 2024-02-23 at 12.26.08@2x" style="zoom:50%;" />

2. 请求

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144273.png" alt="CleanShot 2024-02-23 at 12.40.58@2x" style="zoom:50%;" />

3. 响应数据

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144274.png" alt="CleanShot 2024-02-23 at 12.44.28@2x" style="zoom:50%;" />

## 3. JMeter参数化

思考：如果循环访问某一请求10次，要求每次请求发送不同的参数值，该怎么做？
### 3.1. JMeter参数化常用方式

1. 用户定义的变量；
2. 用户参数；
3. CSV Data Set Config；
4. 函数。

### 3.2. 用户定义的变量

添加方式：测试计划 --> 线程组--> 配置元件 --> 用户定义的变量

#### 3.2.1. 场景

- 请求url：https://www.baidu.com:443；
- 要求：使用用户定义的变量配置被测系统的协议、域名和端口。

#### 3.2.2. 操作步骤

1. 添加线程组，使用默认设置；

2. 添加用户定义的变量；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144275.png" alt="CleanShot 2024-02-23 at 15.17.10@2x" style="zoom:50%;" />

3. 添加HTTP请求，并使用用户定义的变量；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144277.png" alt="CleanShot 2024-02-23 at 15.17.47@2x" style="zoom:50%;" />

4. 添加查看结果树；

5. 运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144278.png" alt="CleanShot 2024-02-23 at 15.18.39@2x" style="zoom:50%;" />

### 3.3. 用户参数

添加方式：测试计划 --> 线程组--> 前置处理器 --> 用户参数

#### 3.3.1. 场景

- 请求：https://www.baidu.com；
- 要求：
  - 第一次请求附带参数：`name="张三"&age=28`;
  - 第二次请求附带参数：`name="李四"&age=30`。

#### 3.3.2. 操作步骤

1. 添加线程组，线程数设置为2；

2. 添加用户参数；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144279.png" alt="CleanShot 2024-02-23 at 15.32.40@2x" style="zoom:50%;" />

3. 添加HTTP请求；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144282.png" alt="CleanShot 2024-02-23 at 15.33.51@2x" style="zoom:50%;" />

4. 添加查看结果树；

5. 运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144283.png" alt="CleanShot 2024-02-23 at 15.35.25@2x" style="zoom:50%;" />

思考：当需要成千上万个不同用户访问的时候，怎么处理？

1. 通过下面的[CSV数据文件设置](#CSV数据文件设置)；
2. 通过直连数据库设置；
3. 通过Excel表设置。

### 3.4. CSV 数据文件设置

添加方式：测试计划 --> 线程组--> 配置元件 --> CSV Data Set Config（CSV 数据文件设置）

#### 3.4.1. 场景

- 请求：https://www.baidu.com
- 要求：循环3次，每次请求时附带的参数username，password，code的值不相同，也就是三个用户。

#### 3.4.2. 操作步骤

1. 定义CSV数据文件`test_user_data.csv`；

   ```csv
   user01,123456,0000
   user02,123456,1111
   user03,123456,2222
   ```

2. 添加线程组，设置循环次数为3，或者线程数为3，结果一样；

3. 添加CSV 数据文件设置；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144284.png" alt="CleanShot 2024-02-23 at 15.50.27@2x" style="zoom:50%;" />

4. 添加HTTP请求；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144285.png" alt="CleanShot 2024-02-23 at 15.52.14@2x" style="zoom:50%;" />

5. 添加查看结果树；

6. 运行查看结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144286.png" alt="CleanShot 2024-02-23 at 15.53.01@2x" style="zoom:50%;" />

#### 3.4.3. 参数详解（CSV 数据文件设置）

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144287.png" alt="CleanShot 2024-02-23 at 16.04.05@2x" style="zoom:50%;" />

**拓展**

线程共享模式的选项有：

- 所有线程（默认选项）：该文件在所有线程之间共享，所有线程循环取值。
- 当前线程组：各个线程组分别循环取值；
- 当前线程：每个文件分别为每个线程打开，每个线程分别循环取值。

详细解析：CSV数据文件设置-线程共享模式。

#### 3.4.4. CSV和用户定义的变量作用域问题

CSV的作用域是针对线程的，只有两种情况：

- 对所有线程组中的线程生效

  父节点是测试计划，并且线程共享模式是“所有线程”时，对所有线程组中的线程生效 对当前线程组中的线程生效。

- 父节点是某个线程组时，只会对当前线程组生效

::: warning 注意

用户定义的变量作用域针对的是测试计划。

无论用户定义的变量组件放在哪里，他都会针对整个测试计划生效。

:::

### 3.5. 函数(__counter)

位置：在菜单中选择--> 工具 --> 函数助手对话框

#### 3.5.1. 使用场景

计数函数，一般做执行次数统计使用;

#### 3.5.2. 操作步骤

##### 3.5.2.1. 全局计数器

1. 打开函数助手对话框生成计数函数；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144288.png" alt="CleanShot 2024-02-23 at 21.09.47@2x" style="zoom:50%;" />

2. 在HTTP请求中使用；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144289.png" alt="CleanShot 2024-02-23 at 21.21.13@2x" style="zoom:50%;" />

3. 查看运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144290.png" alt="CleanShot 2024-02-23 at 21.22.37@2x" style="zoom:50%;" />

##### 3.5.2.2. 每个用户单独计数器

只需按如下改动即可：

1. 将函数对话框中的FALSE改为TRUE后生成计数函数；

2. 设置线程组3个线程数，2次循环；

3. 查看运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144291.png" alt="CleanShot 2024-02-23 at 21.36.31@2x" style="zoom:50%;" />

## 4. JMeter断言

### 4.1. 目标

```
1. 掌握响应断言的使用
2. 掌握JSON断言的使用
3. 了解持续时间断言
```

### 4.2. 断言概念

通过对请求的响应数据进行自动校验，检查接口的返回是否符合预期。断言是自动化测试脚本中举足轻重的一环，因此要十分重视。

JMeter 常用断言主要有响应断言（Response Assertion）、JSON断言（JSON Assertion）、大小断言（Size Assertion）、断言持续时间（Duration Assertion）、beanshell 断言（Beanshell Assertion）等，这里对响应断言、JSON断言和断言持续时间做介绍。

::: tip 提示

JMeter断言是在请求的返回层面增加一层判断机制；因为请求成功了，并不代表结果一定正确，因此需要检测机制提高测试准确性。

:::

### 4.3. 响应断言

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 断言 --> 响应断言

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759025.png" alt="image-20230711171245315" style="zoom:33%;" />

::: warning 注意

断言一定是在HTTP请求的子节点下。

:::

#### 4.3.1. 案例

##### 4.3.1.1. 场景

- 请求：https://www.baidu.com
- 检查：让程序检查响应数据中是否包含“百度一下，你就知道”

##### 4.3.1.2. 操作步骤

1. 添加线程组；

2. 添加HTTP请求；

3. 添加响应断言；

4. 添加断言结果；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144292.png" alt="CleanShot 2024-02-23 at 22.03.59@2x" style="zoom:50%;" />

5. 添加查看结果树；

6. 运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144293.png" alt="CleanShot 2024-02-23 at 22.05.34@2x" style="zoom:50%;" />

#### 4.3.2. 参数详解

![CleanShot 2024-02-23 at 22.11.50@2x](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144294.png)

Apply to适用范围

1. Main sample and sub-samples: 作用于父节点取样器及对应子节点取样器；
2.  Main sample only: 仅作用于父节点取样器；
3. Sub-samples only: 仅作用于子节点取样器；
4. JMeter Variable: 作用于jmeter变量(输入框内可输入jmeter的变量名称)。

::: tip 提示

1. JMeter的响应断言类似于Python的方法`assertEqual(response.json,"success")`。

   - assertEqual :校验的方式；
   - response.json：要校验的部分；
   - success：用来校验的数据。

2. 在同一个HTTP请求下可以包含多个响应断言。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144295.png" alt="CleanShot 2024-02-23 at 22.36.09@2x" style="zoom:50%;" />

:::

### 4.4. JSON断言

该组件用来对JSON文档进行验证，验证步骤如下：
1.  首先解析JSON数据，如果数据不是JSON，则验证失败。
2.  使用Jayway JsonPath 1.2.0中的语法搜索指定的路径。如果找不到路径，就会失败。
3.  如果在文档中找到JSON路径，并且要求对期望值进行验证，那么它将执行验证操作。 

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 断言 --> JSON断言

#### 4.4.1. 案例

##### 4.4.1.1. 场景

- 请求：http://www.weather.com.cn/data/sk/101010100.html
- 检查：让程序检查响应的JSON数据中，city对应的内容是否为“北京”

##### 4.4.1.2. 操作步骤

1. 添加线程组；

2. 添加HTTP请求；

3. 添加JSON断言；

4. 添加断言结果；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144296.png" alt="CleanShot 2024-02-23 at 23.22.51@2x" style="zoom:50%;" />

5. 添加查看结果树；

6. 运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144297.png" alt="CleanShot 2024-02-23 at 23.24.20@2x" style="zoom:50%;" />

#### 4.4.2. 参数详解

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144298.png" alt="CleanShot 2024-02-23 at 23.13.46@2x" style="zoom:50%;" />

### 4.5. 断言持续时间

客户端发送请求，到收到服务器的响应的时间，要求不超过指定的时间。

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 断言 --> 断言持续时间

![image-20230711171502806](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759030.png)

实际时间，是统计的取样器结果中的load time。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759031.png" alt="image-20230711171523790" style="zoom: 25%;" />

::: info 说明

该断言比较简单，不进行案例说明。

:::

## 5. JMeter关联

当请求之间有依赖关系，比如一个请求的入参是另一个请求返回的响应数据，这时候就需要用到关联处理。

所有提供关联功能的元件都在后置处理器中，常用的关联方法：

- 正则表达式提取器：提取**任意格式**的响应数据；

  如`<title>(.*)</title>`：就是找`<title>`标签中的内容。

- XPath提取器：只能适用于响应消息为HTML格式的情况，可以自己去找适合的标签。

  如`//title`：也是找`<title>`标签中的内容。

- JSON提取器：适用于返回的数据类型为JSON格式的情况。

  如`$.weatherinfo.city`：找weatherinfo下city的值北京（其中最后的...表示省略的数据）。

  ```json
  {"weatherinfo":{"city":"北京","cityid":"101010100","temp":"18","WD":"东南风"...}}  
  ```

### 5.1. 正则表达式提取器

正则表达式提取器可以提取**任意格式**的响应数据。

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 后置处理器 --> 正则表达式提取器

#### 5.1.1. 参数详解

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144299.png" alt="CleanShot 2024-02-24 at 14.03.29@2x" style="zoom:50%;" />

**模版用法**

正则表达式可能匹配多组值，通过模板的编写来保存指定的值到变量中。

如：校验数据：`027-332-1111`，正则表达式：`(/d/d/d)-(/d/d/d)-(/d/d/d/d)`。

模版使用：`$1$`：取027作为变量；`$2$`：取332作为变量；`$1$`：取1111作为变量。

#### 5.1.2. 正则表达式介绍

- `.`：匹配任何字符串。

- `+`：一次或多次。

  如：校验数据：`abc123def`，正则表达式：`([0-9]+)`，括号匹配结果：123。

- `?`：不要太贪婪，找到左边界后，往右查找匹配右边界，只要有匹配的右边界就停止继续查找，作为第一个数据；再重新查找是否存在符合的左边界和右边界，有则作为第二个数据。

  如：校验数据：`<title>百度一下，你就知道</title><title>百度一下，你就知道</title> `;

  正则表达式（贪婪匹配）：`<title>(.*)</title>`，括号匹配结果：`百度一下，你就知道</title><title>百度一下，你就知道`；

  正则表达式（非贪婪匹配）:`<title>(.*?)</title>`，括号匹配结果：`百度一下，你就知道` `百度一下，你就知道`（注意：这的匹配结果有两个）。

::: tip 提示

更多的正则表达式使用自己搜索，另外在匹配时候可以通过搜索“在线正则表达式测试”网站先校验正则表达式是否正确再使用。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144300.png" alt="CleanShot 2024-02-24 at 14.16.02@2x" style="zoom:50%;" />

:::

#### 5.1.3. 场景1：变量只有单个值

获取传智播客首页网站标题并作为参数在百度搜索。

- 请求：https://www.itcast.cn/ ，获取网页的title值；
- 请求：https://www.baidu.com/ ，把获取到的title作为请求参数。

**操作步骤**

1. 添加线程组；

2. 添加HTTP请求-传智播客；

3. 添加正则表达式提取器；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144301.png" alt="CleanShot 2024-02-24 at 13.11.38@2x" style="zoom:50%;" />

4. 添加HTTP请求-百度，在参数中使用`${title}`使用变量；

5. 添加查看结果树;

6. 运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144302.png" alt="CleanShot 2024-02-24 at 13.12.56@2x" style="zoom:50%;" />

#### 5.1.4. 场景2：变量含多个值

获取传智播客首页的第二个匹配到的地址，并作为参数传递。

**操作步骤**

1. 添加线程组；

2. 添加HTTP请求—传智播客； 

3. 添加正则表达式提取器；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144303.png" alt="CleanShot 2024-02-24 at 13.53.32@2x" style="zoom:50%;" />

4. 添加Debug Sampler（调试取样器），不用修改任何参数，添加位置在元件取样器中。

   因为变量area是一个列表，不能被直接使用，需要在运行线程组后从查看结果树中查看列表中每个地址自己的变量名，然后使用需要的变量名（第二个地址）。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144304.png" alt="CleanShot 2024-02-24 at 14.00.25@2x" style="zoom:50%;" />

5. 添加HTTP请求—百度首页，在参数中使用`${area_2}`使用变量；

6. 添加查看结果树；

7. 查看运行结果。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144305.png" alt="CleanShot 2024-02-24 at 14.02.23@2x" style="zoom:50%;" />

### 5.2. XPath提取器

应用场景：只能适用于响应消息为HTML格式的情况，可以自己去找适合的标签，如`//title`就是找`<title>`标签中的内容。

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 后置处理器 --> XPath提取器

#### 5.2.1. 参数详解

![image-20230712093453755](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759037.png)

`Use Tidy (tolerant parser)`：如果勾选此项，则使用Tidy将HTML响应解析为XHTML。

- 当需要处理的页面是HTML格式时，必须选中该选项；
- 当需要处理的页面是XML或XHTML格式（例如，RSS返回）时，取消选中该选项。

#### 5.2.2. 操作步骤

比较简单，不做实操。

1. 添加线程组；

2. 添加HTTP请求—传智播客； 

3. 添加XPath提取器；

   - 勾选Use Tidy；
   - 填写引用名称：变量名；
   - 填写Xpath路径。

4. 添加HTTP请求—百度首页；

   引用XPath提取器中定义的参数名：`\${变量名} `。

5. 添加查看结果树。

### 5.3. json提取器

应用场景：适用于返回的数据类型为JSON格式的情况。

添加方式：测试计划 --> 线程组--> HTTP请求 --> (右键添加) 后置处理器 --> JSON提取器

#### 5.3.1. 参数详解

![image-20230712093807320](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759038.png)

#### 5.3.2. 场景

1.  请求获取天气的接口，http://www.weather.com.cn/data/sk/101010100.html
2.  获取返回结果中的城市名称
3.  请求：`https://www.baidu.com/s?wd=北京` ，把获取到的城市名称作为请求参数

#### 5.3.3. 操作步骤

比较简单，不做实操。

1. 添加线程组；

2. 添加HTTP请求——天气；

3. 添加JSON提取器；；
   - 参数名：city
   - JSON路径：`$.weatherinfo.city`

4. 添加HTTP请求——百度；

   应用JSON提取器中定义的参数名：`${city}`

5. 添加查看结果树。

## 6. 跨线程组关联

跨线程组关联指的是多个请求之间有关联关系（即一个请求的参数需要使用前面请求的响应），但是两个请求不在一个线程组内，此时使用提取器无法完成关联，需要使用JMeter属性来完成数据的传递。

### 6.1. 原理

![image-20230712094346068](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759040.png)



### 6.2. 登录案例

#### 6.2.1. 分析

- 最典型的就是登录案例，必须先登录拿到token，然后其他请求的请求头需要带着token才能保持登录状态正常请求。
- 因为后续请求需要**请求头**带上token，需要使用配置元件中的HTTP信息头管理器，因此需要两个线程组。
- 为让登录线程组的token可以在下一个线程组中使用，就需要将登录线程组中的token设置成全局变量，具体看上面的跨线程组关联调用。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759032.png" alt="image-20230711172453108" style="zoom: 33%;" />

#### 6.2.2. 准备内容

1. 登录接口
   - URL：http://novel.hctestedu.com/user/login；
   
   - 请求方式：POST；
   
   - 请求参数：username=13368190423，password=2AjktEwkBEryW4H；
   
   - 响应结果：
   
     ```json
     {"code":"200","msg":"SUCCESS","data":{"token":"XXX"}}。
     ```
   
2. 用户接口
   - URL：http://novel.hctestedu.com/user/userInfo；
   
   - 请求方式：GET；
   
   - 信息头：Authorization：XXX（这的XXX表示token值）；
   
   - 响应结果：
   
     ```json
     {
         "code": "200", 
         "msg": "SUCCESS", 
         "data": {
             "id": null, 
             "username": "13368190423", 
             "password": null, 
             "nickName": "13368190423", 
           	 ...不重要的省略
         }
     }
     ```

::: info 说明

这里不清楚的接口都是通过Charles抓包实现的。

:::

#### 6.2.3. 操作步骤

1. 添加线程组—读书屋登录；

2. 添加HTTP请求—登录接口；

3. 添加JSON表达式提取器提取token（也可以用正则表达式提取token）；

   - JSON表达式：`$.data.token`；
   - 正则表达式：`"token":"(.*?)"`。

4. 添加Bean Shell后置处理程序；

   - 通过setProperty函数，将提取器提取出来的变量token的值赋值给JMeter属性tokenG。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144306.png" alt="CleanShot 2024-02-24 at 21.38.34@2x" style="zoom:50%;" />

5. 添加线程组—读书屋用户接口；

6. 添加HTTP信息头管理器；

   - 通过getPropertr函数或P函数，将JMeter属性中的tokenG读取出来使用。

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144307.png" alt="CleanShot 2024-02-24 at 21.46.16@2x" style="zoom:50%;" />

7. 添加HTTP请求—用户接口；

8. 对用户接口响应结果进行JSON断言，确认用户接口保持登录状态正常请求；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144308.png" alt="CleanShot 2024-02-24 at 21.51.49@2x" style="zoom:50%;" />

9. 添加查看结果树。

#### 6.2.4. 运行结果

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144309.png" alt="CleanShot 2024-02-24 at 21.52.47@2x" style="zoom:50%;" />

## 7. 自动录制脚本

### 7.1. 原理

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759042.png" alt="image-20230712100408348" style="zoom: 33%;" />

JMeter在客户端和服务器之间做代理。收到所有的请求和响应数据后，JMeter再进行逆向解析的动作，将数据报文转化为脚本。

### 7.2. jmeter脚本录制

1. 在测试计划下，添加HTTP代理服务器；

   ![image-20230712102828120](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759043.png)

2. 设置自己PC机的代理；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759044.png" alt="image-20230712102858664" style="zoom: 33%;" />

3. 点击启动，进入浏览器进入相关的操作，脚本会自动生成并存放在指定的线程组下。

::: warning 注意

开启后，操作系统中所有的http请求都会发送给设置的代理服务器。如果这个代理服务器没有启动，那么会提示网络连接错误，要求检查代理服务器地址。

:::

### 7.3. 过滤规则的配置

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251759045.png" alt="image-20230712103039517" style="zoom:50%;" />

::: warning 注意

如果提醒`Root CA certificate ApacheJMeterTemporaryRootCA created in JMeter bin directory`，那么在需要访问https网站的情况下，需要安装证书，目录在JMeter安装目录的bin目录下`ApacheJMeterTemporaryRootCA.crt`文件。

:::

## 8. Cookie管理器

### 8.1. 作用

管理cookie，用于自动将cookie信息添加到后续的所有请求中。

### 8.2. 使用场景

有的系统的用户鉴权使用的cookie，前面的请求登录后，然后其他请求的请求头必须带着前面的cookie信息才能保持登录状态正常请求。

::: tip 提示

- 登录及后续的相关操作时，需要提前添加HTTP Cookie管理器。
- 现在大部分的系统使用的是token鉴权，具体使用见跨线程组关联中的[登录案例](#登录案例)。
- 有的系统还可能使用cookie作为“用户客户端标记密钥”，这时候后续的请求头也必须带上该cookie才能正常访问，前面的[登录案例](#登录案例)未带上该密钥也能正常登录成功，就可以提一个bug。

:::

### 8.3. 登录案例

#### 8.3.1. 准备内容

1. 登录接口

   - URL：http://novel.hctestedu.com/user/login；

   - 请求方式：POST；

   - 请求参数：username=13368190423，password=2AjktEwkBEryW4H；

   - 响应头如下，关键看Set-Cookie内容。

     ```json
     HTTP/1.1 200 
     Server: nginx
     Date: Mon, 26 Feb 2024 06:50:51 GMT
     Content-Type: application/json;charset=UTF-8
     Transfer-Encoding: chunked
     Set-Cookie: userClientMarkKey=32af0732075442f6bbd9ac164e1cd631; Path=/
     Proxy-Connection: keep-alive
     
     ```

2. 用户接口

   - URL：http://novel.hctestedu.com/user/userInfo；
   - 请求方式：GET。

#### 8.3.2. 操作步骤

1. 添加HTTP Cookie管理器，使用默认配置即可；

2. 添加线程组—登录并查看用户信息；

3. 添加HTTP请求—登录接口，运行后可以看到登录请求的响应信息中设置的Cookie信息；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144310.png" alt="CleanShot 2024-02-26 at 15.18.17@2x" style="zoom:50%;" />

4. 添加调试取样器，运行后可以查看被添加到HTTP Cookie管理器的Cookie信息；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144311.png" alt="CleanShot 2024-02-26 at 15.16.34@2x" style="zoom:50%;" />

5. 添加HTTP请求—用户接口；

6. 对用户接口响应结果进行JSON断言，确认用户接口保持登录状态正常请求；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144308.png" alt="CleanShot 2024-02-24 at 21.51.49@2x" style="zoom:50%;" />

7. 添加查看结果树。

#### 8.3.3. 运行结果

可以看到后续的用户接口请求时，带上了前面登录接口设置的Cookie信息。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/PerformanceTest/202402291144312.png" alt="CleanShot 2024-02-26 at 15.15.16@2x" style="zoom:50%;" />

::: info 说明

这里断言失败，是因为该系统采用了token鉴权方式，token未被设置保存为客户端的Cookie中，因此只使用HTTP Cookie管理器，无法在请求的时候自动带上token的Cookie，所以无法保持登录状态。

:::