---
icon: pen-to-square
category:
  - JMeter
tag:
  - Assert
  - Response
order: 2
sticky: true
---



# 详解响应断言

## 简单介绍

不仅可以对响应内容进行断言，还能对请求内容进行断言

 

## 响应断言

[![img](/assets/jmeter/1896874-20200825092607564-1160861641.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825092607564-1160861641.png)

 

## 响应断言界面介绍

[![img](/assets/jmeter/1896874-20200825092616969-750209844.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825092616969-750209844.png)

#### Apply to

有四个应用范围

- main sample and sub sample
- main sample only（默认）
- sub-sample only
- jmeter variable

**一般默认勾选 main sample only 就足够了**，因为我们一个请求，实质上只有一个请求

但是当我们发一个请求时，可以触发多个服务器请求，类似于ajax那种，那么就有main sample 和 sub-sample之分了

此外，对于有重定向的请求，并且**勾选了跟随重定向**， 那么这两个请求都是 sub-sample，重定向后的请求（第二个请求）就是main-sample

 

#### Field to Test

需要断言 JMeter 测试请求或响应中的哪个字段

- **Text Response：**响应文本，来自服务器的响应文本，即正文，不包括任何 HTTP 头，相当于结果树的 Response Body
- **Response Code：**响应码，在结果树的取样器结果中可看到
- **Response Message：**响应信息，在结果树的取样器结果中可看到
- **Response Headers：**响应头，相当于结果树的 Response headers
- **Request Headers：**请求头，相当于结果树的 Request headers 
- **URL Sampler：**请求 URL
- **Request Data：**请求数据，发送到服务器（即正文）的请求文本，不包括任何 HTTP 头，相当于结果树的 Request Body

 

#### Pattern Matching Rules

- Contains：包含，可用正则
- Match：匹配，可用正则
- Equals：相等，不能用正则，区分大小写
- Substring：类似 py 的 substring 方法，也是包含，不能用正则，区分大小写

 

#### Not

- 选择 Not 表示预期断言结果不应存在，如果实际结果与预期值不一致，则结果树标红
- 不选择 Not，表示预期断言结果应该存在

 

## 实际栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200825105648140-1364523921.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105648140-1364523921.png)

 

#### 注册接口的响应断言

[![img](/assets/jmeter/1896874-20200825105652786-1378730684.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105652786-1378730684.png)

对 Response Body 通过正则进行断言

 

#### 登录接口的响应断言

[![img](/assets/jmeter/1896874-20200825105723357-329287985.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105723357-329287985.png)

通过取样器结果里面的 Response Code 进行断言

 

#### 状态即可欧的响应断言

[![img](/assets/jmeter/1896874-20200825105745166-384338229.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105745166-384338229.png)

断言 Request Body 是否包含登录接口的 token 值

 

#### 个人资料接口的响应断言

[![img](/assets/jmeter/1896874-20200825105821679-483159932.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105821679-483159932.png)

断言 Response Body 是否包含登录接口的 uuid 值

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200825105839864-1757326642.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105839864-1757326642.png)

断言成功

 

#### 断言失败的结果

[![img](/assets/jmeter/1896874-20200825105847567-1794211242.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825105847567-1794211242.png)

断言失败会有对应的提示