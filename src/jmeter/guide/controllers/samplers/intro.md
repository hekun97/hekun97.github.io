---
icon: pen-to-square
category:
  - JMeter
tag:
  - Samplers
  - 介绍
order: 1
sticky: true
---

# 介绍 

## Samplers 简介

- 取样器指示Jmeter向服务器发送请求并等待响应
- 多个取样器按照它们在树中出现的顺序运行
- 取样器 + 控制器可以**修改取样器的执行次数**

 

## Jmeter自带的取样器

- FTP Request
- HTTP Request (can be used for SOAP or REST Webservice also)
- JDBC Request
- Java object request
- JMS request
- JUnit Test request
- LDAP Request
- Mail request
- OS Process request
- TCP request

 

## Samplers 的特性

- 每个取样器都有几个可以设置的属性
- 也可以向测试计划或线程组中添加多个**Config Element（配置****元件****）**来更进一步自定义取样器
- 最后，要在测试计划中添加一个**Listener（监听器）**，以便查看请求结果，或存储结果到磁盘
- **备注：**上面说到的配置元件和监听器，在后面文章都会详解哦！这里就提一下

#### 栗子一：**添加HTTP请求默认值配置元件**

如果要发送多个相同类型的请求（如：HTTP请求）到同一服务器，可以考虑抽取公共HTTP信息

![img](/assets/jmeter/1896874-20200518185628104-1113115630.png)

#### 栗子二：添加断言

在对Web应用程序进行压力测试时，服务器可能返回成功的响应代码，也可能返回失败的响应代码；**添加断言可以检查请求的响应是否符合预期**

 ![断言](/assets/jmeter/1896874-20200518185637638-2145269048.png)

 

**后面，我们会对每个常用的Samplers单独讲解哦！**