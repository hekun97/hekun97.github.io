---
title: Postman实现接口测试（一）
order: 2
tag: Postman
---

## 总体目标

```
1. 掌握如何安装Postman
2. 掌握Postman的基本用法
3. 掌握全局变量与环境变量
4. 掌握Postman断言和关联
5. 掌握如何读取外部文件实现参数化
6. 掌握如何使用Newman生成HTML测试报告
```

## 今日目标

```
1. 掌握如何安装Postman
2. 掌握Postman的基本用法（能够使用Postman设置请求方法、URL、请求头、请求体发送接口请求，并且查看响应数据）
```

## 1. Postman介绍和安装

1. 介绍

   - 一款接口调试工具，开发和测试都在使用。
   - 官方网站:htps://www.getpostman.com/

2. 特点

   - 图形化界面
   - 保存历史请求记录
   - 提供数据集管理功能
   - 可以在团队间同步接口数据

3. 安装方式

   - 谷歌浏览器插件（谷歌已停止应用程序支持）

   - 独立安装包安装（推荐安装方式）

     - 下载地址： [https://www.getpostman.com/downloads/*](https://www.getpostman.com/downloads/)

     - Windows双击运行安装程序即可

     - 注意：【 *Skip signing in and take me straight to the app* 】

       <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630293.png" alt="image-20230904154334300" style="zoom: 33%;" />

4. 入门案例

   使用Postman访问百度【[http://www.baidu.com](http://www.baidu.com/)】,并查看响应结果

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630294.png" alt="image-20230904154845201" style="zoom:50%;" />

保存请求说明：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630295.png" alt="image-20230904155233286" style="zoom:50%;" />

## 2. Postman基础用法

### 2.1. 请求中常见的数据传递格式

| 数据类型 | 样例数据                                 | 请求方式 |       请求头（Content-Type）        |
| :------: | ---------------------------------------- | :------: | :---------------------------------: |
|  字符串  | URL?username=huluwa&pass=123             |   GET    |                  /                  |
|   表单   | 见下图                                   |   POST   | application/x-www-form-  urlencoded |
|   json   | {  "username":"huluwa",  "pass":"123"  } |   POST   |          application/json           |

**form表单数据示意图**

![image-20230904155750498](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630296.png)

**说明**

- form表单：最常见的post提交数据的方式，浏览器默认数据提交方式；
- json：目前最流行的数据传输格式。

### 2.2. Postman基础用法

#### 2.2.1. 案例1：提交字符串数据

需求：

1. 访问TPshop搜索商品的接口，通过查询字符串的方式传递搜索的关键字 iPhone ，并查看响应数据
2. 请求路径格式为:` http://localhost/Home/Goods/search.html?q=iPhone`

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630297.png" alt="image-20230904161047734" style="zoom:50%;" />

#### 2.2.2. 案例2：提交form表单数据

需求：

1. 请求TPshop项目登录接口，请求数据：`(username:13488888888,password:123456,verify_code:1234)`
2. 登录接口URL：`http://localhost/index.php?m=Home&c=User&a=do_login`

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630298.png" alt="image-20230904160627223" style="zoom:50%;" />

#### 2.2.3. 案例3：提交json数据

需求：

1. 请求IHRM项目的登录接口，请求数据`({"mobile":"13800000002","password":"123456"})`
2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630299.png" alt="image-20230904161215579" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630300.png" alt="image-20230904161242482" style="zoom:50%;" />
