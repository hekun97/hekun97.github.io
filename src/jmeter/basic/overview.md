---
icon: pen-to-square
category:
  - JMeter
tag:
  - 概述
order: 2
sticky: true
---

# JMeter概述

## JMeter支持哪些测试场景？

JMeter能够对许多不同的**应用程序/服务器/协议类型**进行**负载测试**和**性能测试**。

1. Web - HTTP, HTTPS (Java, NodeJS, PHP, ASP.NET, …)
2. SOAP / REST Webservices
3. FTP
4. 通过JDBC连接数据库（支持各种数据库）
5. LDAP
6. 通过JMS的面向消息的中间件（MOM）
7. 邮箱协议 - SMTP(S), POP3(S) and IMAP(S)
8. 本机命令或Shell脚本
9. TCP
10. Java Objects



## JMeter有哪些特征？

- 功能齐全的测试编辑界面，允许快速记录测试计划（来自浏览器或本机应用程序），构建和调试 **【HTTP代理服务器，类似抓包】**
- 命令行模式，可以在任何装了Java环境的系统（win、linux、mac）上进行测试**【移植性好】**
- 提供完整且随时可查看的HTML报告
- 可以在大多数流行的响应格式**（HTML、JSON、XML或任何文本格式）**中提取数据，实现关联**【常说的数据关联】**
- 多线程框架允许通过多个线程进行并发采样，并通过单独的线程组同时对不同的方法进行采样。
- 可以对测试结果进行缓存和离线分析、离线重放

 

## JMetert的扩展性体现在哪里？

- 脚本化的采样器【BeanShell、Groovy】
- 随意增删的采样器
- 负载统计信息可以增删定时器
- 数据分析和可视化插件提供了出色的扩展性和个性化
- JMeter自带方法可以向测试计划提供动态输入或数据处理能力
- 通过针对Maven，Gradle和Jenkins的第三方开源库轻松进行持续集成。

 

## JMeter实际使用场景

- 接口测试
- 压力测试
- 分布式压力测试
- 测试 Restful 风格的API