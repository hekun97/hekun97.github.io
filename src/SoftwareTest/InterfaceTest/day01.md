---
title: 接口测试基础
order: 1
tag: InterfaceTestBasics
---

## 目标

```
1. 理解接口及接口测试的相关概念
2. 熟悉HTTP协议和接口规范
3. 掌握接口测试流程
4. 熟练掌握如何解析接口文档
5. 熟悉掌握如何编写接口测试用例
```

## 1. 接口及接口测试概念

### 1.1. 目标

1. 了解什么是接口
2. 理解接口测试的概念
3. 掌握接口测试的原理
4. 理解什么是接口自动化测试

### 1.2. 接口的概念

> 接口可分为：硬件接口和软件接口；我们这里只关注软件层面的接口。
>

接口：是指系统或组件之间的交互点，通过这些交互点可以实现数据的交互。（数据交互的通道）

![image-20230904104357374](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629657.png)

#### 1.2.1. 接口的类型

接口测试分类有许多种，按照范围划分：系统之间的接口和程序内部的接口

- 系统之间的接口：多个内部系统之间的交互，内部系统与外部系统之间的交互；(如：toshop系统与支付宝系统)
- 程序内部的接口：方法与方法之间，模块与模块之间的交互。(如：toshop的登录系统与订单系统之间的交互)

![image-20230904104502600](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629658.png)

### 1.3. 接口测试

接口测试：是对系统或组件之间的接口进行测试，主要是校验数据的交换、传递和控制管理过程，以及相互逻辑依赖关系。

#### 1.3.1. 接口测试原理

模拟客户端向服务器发送请求，服务器接收请求后进行相应的业务处理，并向客户端返回响应数据，检查响应数据是否符合预期。

![image-20230904104521100](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629659.png)

> 注意：对于测试而言，不需要区分系统之间的接口与系统内部的接口，我们只管按照接口文档对所有的接口进行测试就行。

#### 1.3.2. 接口测试的特点

1. 测试可以提前介入，提早发现Bug，符合质量控制前移的理念；
2. 可以发现一些页面操作发现不了的问题，（如：前端页面对手机号有校验，但后端没有校验，进行接口测试就能发现这个Bug）；
3. 接口测试低成本高效益（底层的一个Bug能够引发上层8个左右Bug，接口测试可以实现自动化）；
4. 不同于传统的单元测试，接口测试是从用户的角度对系统进行全面的检测。

#### 1.3.3. 接口测试的实现方式
- 使用接口测试工具来实现（比如：JMeter、Postman）
- 通过编写代码来实现（比如：Python + Requests）

### 1.4. 接口自动化测试

#### 1.4.1. 概念

> 自动化测试：是把以人为驱动的测试行为转化为机器执行的一种过程。
>

接口自动化测试：是让程序或工具代替人工自动的完成对接口进行测试的一种过程。

#### 1.4.2. 实现方式

- Python + Pytest + Requests

## 2. HTTP协议

### 2.1. 目标

1. 了解HTTP协议的特点
2. 掌握URL的组成部分
3. 掌握HTTP请求包含的内容
4. 掌握HTTP响应包含的内容
5. 了解常见的响应状态码

### 2.2. HTTP协议介绍

HTTP：（HyperText Transfer Protocol）超文本传输协议，是一个基于请求与响应模式的、应用层的协议，也是互联网上应用最为广泛的一种网络协议。

#### 2.2.1. HTTP协议的特点

1.  支持客户端/服务器模式

2.  简单快速

3.  灵活

4.  无连接

5.  无状态

#### 2.2.2. URL

URL：（Uniform Resource Locator）统一资源定位符，是互联网上标准资源的地址。HTTP使用URL来建立连接和传输数据。

**URL**格式

```http
http://www.itcast.cn:8080/news/index.html?uid=123&page=1
```

- 协议部分：“http”，常见的协议有HTTP，HTTPS、FTP等
- 域名部分：“[www.itcast.cn](http://www.itcast.cn/)”，也可以使用IP地址作为域名使用
- 端口部分：“8080”，端口可以省略，默认端口（HTTP:80，HTTPS:443，FTP:21）资源路径部分：“/news/index.html”
- 查询参数部分：“uid=123&page=1”，可以允许有多个参数，多个之间用“&”作为分隔符

#### 2.2.3. 示例

查询天气信息：<http://www.weather.com.cn/data/sk/101010100.html>

### 2.3. HTTP请求

http请求由三部分组成，分别是：请求行、请求头、请求体

```http
POST http://demo.zentao.net/user-login.html HTTP/1.1 
Host: demo.zentao.net
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Referer: http://demo.zentao.net/user-login.html
Content-Type: application/x-www-form-urlencoded
Content-Length: 54
Connection: keep-alive
Upgrade-Insecure-Requests: 1
// 该空行表示请求头数据已经结束
account=demo&password=efc4a3b32e48054865e5a8321cfda3e4
```

#### 2.3.1. 请求行

请求行用来说明请求方法、要访问的资源以及所使用的协议版本。

```http
POST http://demo.zentao.net/user-login.html HTTP/1.1 
```

常用请求方法：

- GET：从服务器获取资源（一项或多项）；
- POST：在服务器新建一个资源；
- PUT：在服务器更新资源（客户端提供改变后的完整资源）；
- DELETE：从服务器删除资源。

其他请求方法（了解）：

- HEAD：请求获取由Request-URI所标识的资源的响应消息报头；
- TRACE：请求服务器回送收到的请求信息，主要用于测试或诊断；
- CONNECT：保留将来使用；
- OPTIONS：请求查询服务器的性能，或者查询与资源相关的选项和需求。

#### 2.3.2. 请求头

请求头紧接着请求行，请求头部由键值对组成，每行一对。 

```http
Host: demo.zentao.net
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Referer: http://demo.zentao.net/user-login.html
Content-Type: application/x-www-form-urlencoded
Content-Length: 54
Connection: keep-alive
Upgrade-Insecure-Requests: 1
```

请求头部通知服务器有关于客户端请求的信息，典型的请求头有：

- User-Agent：产生请求的浏览器类型；
- Accept：客户端可识别的内容类型列表；
- Content-Type：请求体数据的类型，常见的类型有：
  - text/html： HTML格式；
  - text/plain：纯文本格式；
  - image/jpeg：jpg图片格式 ；
  - application/json： JSON数据格式；
  - application/x-www-form-urlencoded： form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据格式）；
  - multipart/form-data： 在表单中进行文件上传时使用。

#### 2.3.3. 请求体

```http
account=demo&password=efc4a3b32e48054865e5a8321cfda3e4
```

- 请求体不在GET方法中使用，经常在POST、PUT方法中使用；
- 请求体的数据可以是：表单数据、文本、XML、JSON；
- 与请求数据相关的最常使用的请求头是Content-Type和Content-Length。

### 2.4. HTTP响应

HTTP响应也由三个部分组成，分别是：状态行、响应头、响应体。

```http
HTTP/1.1 200 OK
Date: Fri, 22 May 2009 06:07:21 GMT 
Content-Type: text/html; charset=UTF-8

<html>
<head></head> 
<body>...</body>
</html>
```

#### 2.4.1. 状态行

状态行由协议版本号、状态码、状态消息三部分组成。

```http
HTTP/1.1 200 OK
```

状态码有三位数字组成，第一个数字定义了响应的类别：

- 1xx：指示信息--表示请求已接收，继续处理；
- 2xx：成功--表示请求已被成功接收、理解、接受；
- 3xx：重定向--要完成请求必须进行更进一步的操作；
- 4xx：客户端错误--请求有语法错误或请求无法实现；
- 5xx：服务器端错误--服务器未能实现合法的请求。

> 详细信息见本节后面的列表。

#### 2.4.2. 响应头

响应头用于描述服务器的基本信息，以及数据的描述，服务器通过这些数据的描述信息，可以通知客户端如何处理响应数据。

```http
Date: Fri, 22 May 2009 06:07:21 GMT 
Content-Type: text/html; charset=UTF-8
```

#### 2.4.3. 响应体

空行下面的消息就是响应体，就是响应的消息体，数据可以是普通文本、XML、JSON、HTML源码。

```html
<html>
<head></head> 
<body>...</body>
</html>
```

### 2.5. 常见状态码（科普）

服务器向用户返回的状态码（Status Codes）和提示信息，常见的有：

| 状态码 | 状态消息              | 动词       | 说明                                                         |
| ------ | --------------------- | ---------- | ------------------------------------------------------------ |
| 200    | OK                    | [GET]      | 服务器成功返回用户请求的数据                                 |
| 201    | CREATED               | [POST/PUT] | 用户新建或修改数据成功                                       |
| 202    | Accepted              | [*]        | 表示一个请求已经进入后台排队（异步任务）                     |
| 204    | NO CONTENT            | [DELETE]   | 用户删除数据成功                                             |
| 400    | Bad Request           | [POST/PUT] | 客户端请求有语法错误，不能被服务器所理解                     |
| 401    | Unauthorized          | [*]        | 表示用户没有权限（令牌、用户名、密码错误）                   |
| 403    | Forbidden             | [*]        | 表示用户得到授权（与401错误相对），但是访问是被禁止的        |
| 404    | Not Found             | [*]        | 请求资源不存在，eg：输入了错误的URL                          |
| 406    | Not Acceptable        | [GET]      | 用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式） |
| 410    | Gone                  | [GET]      | 用户请求的资源被永久删除，且不会再得到的                     |
| 500    | INTERNAL SERVER ERROR | [*]        | 服务器发生错误，用户将无法判断发出的请求是否成功             |
| 503    | Server Unavailable    | [*]        | 服务器当前不能处理客户端的请求，一段时间后可能恢复正常       |

1. 1xx：服务器接收客户端消息，但没有接收完成，等待一段时间后，发送1xx状态码；

2. 2xx：成功，代表：200；

3. 3xx：重定向，代表：302(重定向)，304(访问缓存)；

   ::: info 说明

   - 重定向：比如访问demo1路径下的资源时，服务器发送302告诉你该路径的资源不能满足你的要求，然后重定向到demo2路径，去访问demo2路径下的资源。
   - 访问缓存：比如demo1路径下有张图片资源，之前已经访问过该路径并把该图片缓存到了本地，再访问demo1路径时，服务器就会发送304告诉你去访问本地的缓存图片就可以了，不用从服务器上重新加载该图片。

   :::

4. 4xx：客户端错误，代表：404(请求路径没有对应的资源)，405(请求方式没有对应的doXxx方法)； 

  5. 5xx：服务器端错误。代表：500(服务器内部出现异常)。

## 3. 接口规范

### 3.1. 目标

1. 了解传统的接口风格
2. 理解RESTful接口规范

> 思考：
>
> 如何让前端开发与后台接口开发人员更好的配合，提高工作效率？
>
> 答：无规矩不成方圆，制定接口规范

### 3.2. 传统接口风格

对用户进行操作的相关接口，包括增删改查

|     操作     | 请求方式 | **URL**                                                      | 成功状态码 |
| :----------: | :------: | :----------------------------------------------------------- | :--------: |
| 查询某个用户 | GET/POST | http://127.0.0.1:8080/myweb/user/getUser?id=1<br/>  http://127.0.0.1:8080/myweb/user/getById?id=1<br/>  http://127.0.0.1:8080/myweb/getUserById?id=1 |    200     |
| 查询所有用户 | GET/POST | http://127.0.0.1:8080/myweb/user/getUserList <br/> http://127.0.0.1:8080/myweb/user/getUsers |    200     |
|   添加用户   |   POST   | http://127.0.0.1:8080/myweb/user/addUser                     |    200     |
|   修改用户   |   POST   | http://127.0.0.1:8080/myweb/user/updateUser                  |    200     |
|   删除用户   | GET/POST | http://127.0.0.1:8080/myweb/user/deleteUser?id=1             |    200     |

### 3.3. RESTful接口

#### 3.3.1. 定义

一种软件架构风格、设计风格，而不是标准，只是提供了一组设计原则和约束条件。

REST：即(`Representational State Transfer`)的缩写。词组的翻译是"表现层状态转化"。如果一个架构符合REST原则，就称它为RESTful架构。

#### 3.3.2. RESTful接口风格

对用户进行操作的相关接口，包括增删改查，1表示需操作的用户id。

|     操作     | 请求方式 | **URL**                             | 成功状态码 |
| :----------: | :------: | :---------------------------------- | :--------: |
| 查询某个用户 |   GET    | http://127.0.0.1:8080/myweb/users/1 |    200     |
| 查询所有用户 |   GET    | http://127.0.0.1:8080/myweb/users   |    200     |
|   添加用户   |   POST   | http://127.0.0.1:8080/myweb/users   |    201     |
|   修改用户   |   PUT    | http://127.0.0.1:8080/myweb/users/1 |    201     |
|   删除用户   |  DELETE  | http://127.0.0.1:8080/myweb/users/1 |    204     |

#### 3.3.3. **RESTful**架构特点

1.  每一个URL代表一种资源；

2.  客户端和服务器之间，传递这种资源的某种表现层；

3.  客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"；

4.  接口之间传递的数据最常用格式为JSON。


常用的HTTP动词有下面四个：

- GET：从服务器获取资源（一项或多项） ;
- POST：在服务器新建一个资源；
- PUT：在服务器更新资源（客户端提供改变后的完整资源） ；
- DELETE：从服务器删除资源。

## 4. 接口测试流程

### 4.1. 目标

掌握接口的测试流程

### 4.2. 接口测试流程

1. 需求分析；

   主要依据需求文档。

2. 接口文档解析；

   一般是由开发人员编写接口文档（API文档）。

3. 设计测试用例；

4. 执行测试；

     - 使用接口测试工具实现 ；
     - 通过编写代码实现。

5. 接口缺陷管理与跟踪；

6. 生成测试报告；

1. 接口自动化持续集成（可选）。
## 5. 项目环境说明

### 5.1. 目标

```
1.熟悉项目功能；
2.了解项目架构。
```

### 5.2. 项目介绍

IHRM 人力资源管理系统

功能模块如下：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629661.png" alt="image-20230904112921932" style="zoom:50%;" />

### 5.3. 技术架构

#### 5.3.1. 技术栈

- 前端：以Node.js为核心的Vue.js前端技术生态架构
- 后端：
  - SpringBoot+SpringCloud+SpringMVC+SpringData (Spring全家桶)
  - MySQL + Redis + RabbitMQ

#### 5.3.2. 技术架构图

了解即可，不需要过多了解具体的技术实现。

![image-20230904113223947](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629662.png)

![image-20230904113306408](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629663.png)

## 6. 接口文档解析

### 6.1. 目标

1.  知道什么是接口文档
2. 掌握接口文档包含的内容
3. 掌握如何解析接口文档

### 6.2. 接口文档介绍

#### 6.2.1. 什么是接口文档？

接口文档：又称为API文档，一般是由开发人员所编写的，用来**描述系统所提供接口信息的文档**。 大家都根据这个接口文档进行开发，并需要一直维护和遵守。

#### 6.2.2. 为什么要写接口文档？

1.  能够让前端开发与后台开发人员更好的配合，提高工作效率；（有一个统一参考的文件）

2.  项目迭代或者项目人员更迭时，方便后期人员查看和维护，能够快速的熟悉项目；

3.  方便测试人员提前介入进行接口测试。

### 6.3. 接口文档内容

一个规范的接口文档，要包含以下信息：

1. 基本信息
   - 接口名称、请求方法、请求路径、接口描述
2. 请求参数
   - 请求头
   - 请求体（包含具体的请求参数名称、参数类型、是否必填、示例、备注）
3. 返回数据
   - 不同情况的响应状态码
   - 响应数据（包含具体的响应数据名称、类型、是否必须、默认值、示例、备注）

#### 6.3.1. 接口文档示例

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629664.png" alt="image-20230904113556553" style="zoom: 50%;" />

### 6.4. 接口文档解析案例

查看人力资源管理系统的接口文档，解析以下接口：

1.  登录
2.  添加员工
3.  查询员工
4.  修改员工
5.  删除员工

## 7. 接口用例设计

### 7.1. 目标

熟练掌握如何编写接口测试用例文档

### 7.2. 接口测试的测试点

1. 功能测试（当前阶段的核心重点）
   - 单接口测试
   - 多接口测试（业务场景测试） 
2. 性能测试（性能测试阶段的重点内容）
3. 安全测试（复杂的安全性内容有专门的安全工程师负责）
   - 敏感数据是否加密
     - 敏感数据是否遮挡 
     - 敏感数据是否可以被复制 
     - 敏感数据是需要加密的
     - 敏感数据加密需要一定的难度（不容易被暴力破解） 
   - SQL注入
   - 其他

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629665.png" alt="image-20230904150343762" style="zoom: 25%;" />

### 7.3. 接口用例设计的方法与思路（重点）

> 本课程主要关注接口的功能测试
>

功能测试：验证接口功能是否按照接口文档实现（输入+处理+输出）

1. 单接口测试
   - 正向功能：仅必填参数（通过性测试）；
   
   - 全部参数：所有必填和非必填参数；
   
   - 参数组合：所有必填和部分非必填参数。
   
     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629666.png" alt="如：添加员工接口" style="zoom: 33%;" />
   
2. 反向测试：(异常测试)
   - 参数异常：无参、少参、多参、错误参数（注意：这个是接口测试新出现的测试点）；
   - 数据异常：数据为空、长度不符、类型不符、错误数据（注意：与功能测试一模一样）；
   - 业务数据异常：结合业务功能考虑输出的各种异常返回情况（测试关注点：各种异常状态码测试）。
   
3. 多接口测试：业务场景功能测试（站在用户角度考虑常用的使用场景）
   - 接口之间数据依赖（注意：接口调用的先后顺序即可）

### 7.4. 接口测试用例模板

**功能测试用例模板（复习）**

1. 用例编号
2. 用例标题
3. 测试项目
4. 用例级别
5. 预置条件
6. 测试输入
7. 执行步骤
8. 预期结果
9. 实际结果

![image-20230904152423629](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629667.png)

**接口测试用例模版**

1. ID
2. 模块
3. 用例标题
4. 接口名称
5. 请求
   - 请求URL
   - 请求方法
   - 请求头
   - 请求数据类型 
   - 请求体（请求参数）
6. 预期结果（响应）
   - 响应状态码
   - 响应数据
7. 实际结果

![image-20230904152352285](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629668.png)

### 7.5. 单接口测试

针对人力资源管理系统的登录接口进行测试

1. 按上面的方法根据接口文档的内容，使用思维导图分析测试点；

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629669.png" alt="分析测试点" style="zoom:50%;" />

2. 设计测试用例。

![image-20230904144010844](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629670.png)

### 7.6. 场景测试（多接口组合测试）

思考：没示例的情况下如何填写添加员工接口的测试数据？ 

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629671.png" alt="image-20230904152821159" style="zoom:50%;" />

答：1. 新项目：

+ 标准的做法从API文档获取
+ 非标准的做法，问开发提供一个样例数据 

2. 老项目：

+ 标准的做法从API文档获取 
+ 非标准的做法，
  (1)问开发提供一个样例数据
  (2)通过抓包获取样例数据（Fiddler、浏览器开发工具）

登录系统后，对员工进行增删改查的操作，这里需要和登录接口进行组合。

![image-20230904144406618](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251629672.png)
