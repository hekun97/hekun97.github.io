---
icon: pen-to-square
category:
  - JMeter
tag:
  - config
  - HTTP_Cookie
order: 4
sticky: true
---



# 详解 HTTP Cookie 管理器

## 简单介绍

#### 功能一

- 首先，它像网络浏览器一样存储和发送 cookie
- 如果有一个HTTP请求，并且响应包含 cookie，则 cookie 管理器会**自动存储**该 cookie，并将其用于后面对该特定网站的所有请求
- cookie 管理自动存储的 cookie 不会出现在 Cookie Manager 的界面上，但是可以使用通过查看结果树看到它

 

#### 功能二

- JMeter 会检查收到的 Cookie 是否对该URL有效，这意味着**不会存储跨域 Cookie**
- 如果有错误的行为或希望使用跨域cookie，请定义 JMeter 属性 



```
CookieManager.check.cookies = false
```

 

#### 功能三

- 收到的 Cookies 可以自动存储为 JMeter 线程变量
- 要将 cookie 保存为变量，请定义 JMeter属性



```
CookieManager.save.cookies = true
```

- Cookie 自动存储为 Jmeter 线程变量**的名称前缀默认**是 COOKIE_ 
- 如果要自定义前缀可以修改 Jmeter 属性 CookieManager.name.prefix = **** 

 

#### 功能四

- 可以将 Cookie 手动添加到 Cookie Manager
- 自定义 Cookie 将**被所有 JMeter 线程共享**
- 自定义 Cookie 的过期时间会很长

 

#### 功能五

- 默认情况下，空值的 Cookies 被忽略
- 可以通过设置 JMeter 属性来更改此设置 CookieManager.delete_null_cookies = false 

 

## HTTP Cookie Manager

[![img](/assets/jmeter/1896874-20200819125220737-1825557594.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819125220737-1825557594.png)

 

## HTTP Cookie Manager 界面介绍

[![img](/assets/jmeter/1896874-20200819130958851-1193536633.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819130958851-1193536633.png)

#### 字段介绍

[![img](/assets/jmeter/1896874-20200819130901687-1274442285.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819130901687-1274442285.png)

 

## 单次循环实际栗子

#### 项目背景

- 一个登录接口，一个添加课程接口
- 登录接口响应会返回一个Set-cookie，包含一个 sessionid，相当于用户凭证
- 发送添加课程接口需要传递包含 sessionid 的 Cookie 才能请求成功

 

#### Jmeter 属性设置（jmeter.properties 文件）

[![img](/assets/jmeter/1896874-20200819135841398-187889462.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819135841398-187889462.png)

 

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200819131756648-1020256526.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819131756648-1020256526.png)

**整体逻辑：**登录请求成功响应后，HTTP Cookie 管理器会自动存储登录接口返回的 Cookie，后面的请求也能自动调用该 Cookie

 

#### 线程组属性

[![img](/assets/jmeter/1896874-20200819131959231-293176798.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819131959231-293176798.png)

 

#### HTTP Cookie 管理器

[![img](/assets/jmeter/1896874-20200819132005590-334886196.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132005590-334886196.png)

没有自定义的 Cookie

 

#### 登录请求的响应内容

[![img](/assets/jmeter/1896874-20200819132220959-189955003.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132220959-189955003.png)

响应返回 Cookie

 

#### 添加课程请求的响应内容

[![img](/assets/jmeter/1896874-20200819132226733-330704577.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132226733-330704577.png)

 

#### 调试取样器，查看是否有自动将 Cookie 保存为 Jmeter 变量

[![img](/assets/jmeter/1896874-20200819140634646-1317460433.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819140634646-1317460433.png)

 

## 有循环次数的实际栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200819141201645-938538542.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141201645-938538542.png)

登录请求只会发送一次

 

#### 线程组属性

[![img](/assets/jmeter/1896874-20200819141247103-110591751.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141247103-110591751.png)

循环 2 次

 

#### HTTP Cookie 管理器

[![img](/assets/jmeter/1896874-20200819141258118-2084720180.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141258118-2084720180.png)

勾选了【每次反复清除 Cookies】

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200819141336389-1909401062.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141336389-1909401062.png)

第一个增加课程请求能成功发送并响应

 

#### 第二个增加课程请求的响应内容

[![img](/assets/jmeter/1896874-20200819141526672-946754154.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141526672-946754154.png)

第二个增加课程请求会返回未登录状态

 

#### 重点

如果勾选了【每次反复清除 Cookies】，那么每次循环之后都会清除 Cookie 管理器自动存储的 Cookie

 

## 注意事项

- 如果一个采样器（Sampler）同级下有多个 Cookie 管理器，则无法指定当前要使用哪个 Cookie 管理器
- 另外，存储在一个 Cookie 管理器中的 Cookie 对其他任何管理器均不可用，因此请谨慎使用多个cookie管理器