---
icon: pen-to-square
category:
  - JMeter
tag:
  - request
  - samplers
  - hhtp
order: 2
sticky: true
---

# HTTP Request

## HTTP Request 介绍

用来发送 HTTP、HTTPS 协议请求

 

## HTTP Request 界面

[![img](/assets/jmeter/1896874-20200618184506345-301273000-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200618184506345-301273000.png)

| 字段名                        | 作用                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| 名称                          | 不多介绍啦，建议自定义一个识别度高的名称                     |
| 注释                          | 对于测试**没有任何影响**，仅记录作用                         |
| 协议                          | http或https，大小写**不敏感****默认：**http                  |
| 服务器名称或IP                | 服务器 host 或者 ip，**不包括协议****比如：**www.baidu.com、192.168.196.128 |
| 端口号                        | 目标服务器的端口号，**默认：**80                             |
| 方法                          | 发送 http 请求的方法                                         |
| 路径                          | 目标请求的 URL 路径不包括**协议、host、ip、端口**            |
| 内容编码                      | 请求的编码方式，**默认：**iso8859                            |
| 自动重定向                    | 发出的请求的响应码是**3\****，会自动跳转到新目标页面只记录最终页面的返回结果 |
| 跟随重定向                    | 和自动重定向**唯一不同**的是：会记录重定向过程中的的**所有请求**的响应结果 |
| 使用 KeepAlive                | jmeter 和目标服务器之间使用 Keep-Alive 方式进行 HTTP 通信真正做性能测试强烈建议不勾选 |
| 对POST使用multipart/form-data | post 请求需要上传文件时勾选                                  |
| 与浏览器兼容的头              | 当勾选 multipart/form-data 时，勾选此项http请求头中的 Content-Type 和Content-Transfer-Encoding 被忽略而只发送 Content-Disposition 部分 |

 

### Parameters 讲解

[![img](/assets/jmeter/1896874-20200619092841859-1465317993-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619092841859-1465317993.png)

| 字段            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| Name            | 参数名                                                       |
| Value           | 参数值                                                       |
| URL Encode?     | 是否要 URL 编码？**重点：**如果参数值包含了中文、特殊字符（非数字字母以外），最好勾上，当然全都勾上最稳妥 |
| Content-Type    | 参数值的资源类型**默认：**text/plain                         |
| Include Equals? | 当你的参数值**为空**的时候，可以选择不包含=，默认勾选如果参数值**不为空**，则不可以取消勾选 |

 

#### 什么是 URL 编码

- URL 编码解码**，**又叫**百分号编码**，是统一资源定位（URL）的编码方式
- URL 地址（常说网址）规定了数字，字母可以直接使用，另外一批作为特殊用户字符也可以直接用（ / , : @ 等），剩下的其它所有字符必须通过 %xx 编码处理
- 编码方法很简单，在该字符ascii码的的16进制字符前面加**%**，如空格字符，ascii码是32，对应16进制是20，那么 urlencode 编码结果是 %20 

 

#### URL 编码的栗子

直接在网上搜在线 URL 编解码

[![img](/assets/jmeter/1896874-20200619100342047-649455746-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619100342047-649455746.png)

 

#### include equals 的栗子

参数值为空，且勾选 Include equals

[![img](/assets/jmeter/1896874-20200619094234231-970701581-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619094234231-970701581.png)

 

参数值为空，但不勾选 Include equals

[![img](/assets/jmeter/1896874-20200619094259268-1310572448-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619094259268-1310572448.png)

 

其实说的就是等于号而已，一般也不会传空值，即使传了也会带上=

 

### Body Data 讲解

[![img](/assets/jmeter/1896874-20200619092846508-892345099-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619092846508-892345099.png)

- 没啥好说的，传 json 字符串就行了，注意下格式，后面再讲具体栗子
- **不过倒有个重点：**如果 Parameters 有参数列表的话，是无法切换到 Body Data 的哦

 

### Files Upload 讲解

[![img](/assets/jmeter/1896874-20200619092851102-978099268-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619092851102-978099268.png)

| 字段           | 描述           |
| -------------- | -------------- |
| File Path      | 文件的本地路径 |
| Parameter Name | 参数名         |
| MIME Type      | 资源媒体类型   |

 

#### 常见资源媒体类型

| 类型               | 文件后缀   | 格式       |
| ------------------ | ---------- | ---------- |
| 超文本标记语言文本 | .html      | text/html  |
| 普通文本           | .txt       | text/plain |
| XML 文件           | .xml       | text/xml   |
| PNG 图片           | .png       | image/png  |
| GIF                | .gif       | image/gif  |
| JPEG 图片          | .jpeg、jpg | image/jpeg |

 

| 类型                   | 文件后缀    | 格式                              |
| ---------------------- | ----------- | --------------------------------- |
| 表单中进行文件上传     |             | multipart/form-data               |
| 表单默认提交数据的格式 |             | application/x-www-form-urlencoded |
| XML 数据格式           |             | application/xml                   |
| JSON 数据格式          |             | application/json                  |
| PDF 文件               | .pdf        | application/pdf                   |
| RTF 文本               | .rtf        | application/rtf                   |
| GZIP 文件              | .gz         | application/x-gzip                |
| TAR 文件               | .tar        | application/x-tar                 |
| AVI 文件               | .avi        | video/x-msvideo                   |
| MPEG 文件              | .mpg、.mpeg | video/mpeg                        |

 

## **不同的content-type在jmeter中如何输入参数**

#### 前提

因为是需要真实接口进行测试的，这里提供两种方案

- 自己用 Flask 框架开发了本地的接口进行测试， 如果有需要的同学进群领取哦：870155189
- 或者进入 http://open.yesapi.cn/?r=user/registration&from=wx_837493986，直接注册个账号，弄个免费会员，有在线免费的接口提供测试哦

 

### application/x-www-form-urlencoded 的栗子

**备注：**也是表单提交最常见的栗子

 

#### Parameters 方式传参

[![img](/assets/jmeter/1896874-20200619112006231-845142310-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619112006231-845142310.png)

[![img](/assets/jmeter/1896874-20200619112014583-2079471286-3169333.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619112014583-2079471286.png)

 

#### 总结

- 最终表单的参数列表会拼接到 URL 中，所以如果包含了中文、特殊字符就要勾选**编码？**哦
- 这里**不可以**通过 Body Data 传递参数哦，会无法识别到参数，已实践过（即使加了 HTTP请求头也不行），乖乖用 Parameters 的方式传参

 

### **content-type:application/json 的栗子**

#### Body Data 方式传参

[![img](/assets/jmeter/1896874-20200619114801973-747495881.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619114801973-747495881.png)

 

#### 添加 HTTP请求头

[![img](/assets/jmeter/1896874-20200619114810004-1920152392.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619114810004-1920152392.png)

 

#### 请求体

[![img](/assets/jmeter/1896874-20200619114906653-974702726.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619114906653-974702726.png)

 

#### 请求头

[![img](/assets/jmeter/1896874-20200619114909610-846940152.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619114909610-846940152.png)

 

#### 结论

重点就是添加 HTTP请求头，指明 Content-type 是 json 格式

 

### **content-type:multipart/form-data**

**重点：**用于 post 请求，需要文件上传的场景；记住不是 get 请求

 

#### 请求参数列表

[![img](/assets/jmeter/1896874-20200619124802449-187358843.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619124802449-187358843.png)

如果选了 get 方法的话，文件参数是不会生效哦

 

#### 文件参数

[![img](/assets/jmeter/1896874-20200619124807439-766791767.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619124807439-766791767.png)

 

#### 请求体

[![img](/assets/jmeter/1896874-20200619124834783-962729328.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619124834783-962729328.png)

 

#### 重点

- 如果添加了 HTTP请求头，请务必不要添加 content-type : multipart/form-data 
- **如果加了的话：**那么所有的**请求参数**都会被当成**文件以二进制形式传输**，我们 parameters 里的文本格式参数就不会被识别，接口会提示参数为空

 

## HTTP Request Advance

说实话我还没用过这部分的内容，不过还是得了解下每个配置项是什么意思哦

[![img](/assets/jmeter/1896874-20200619131056137-1380612100.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200619131056137-1380612100.png)

 

### Client implemention 和 Timeouts

| 字段           | 描述                                                   |
| -------------- | ------------------------------------------------------ |
| implementation | 发送http请求的方式，可选项为 java、HttpClient4（默认） |
| Connect        | 连接超时时间，单位毫秒                                 |
| Respones       | 响应等待超时时间，单位毫秒                             |

 

### Embedded Resources from HTML Files

- 从HTML文件获取所有内含的资源
- jmeter 在发出的 HTTP请求获得响应的 HTML文件内容后，对 HTML进行解析并获取HTML中包含的所有资源（图片、flash等）

| 字段                            | 描述                                                        |
| ------------------------------- | ----------------------------------------------------------- |
| Retrieve All Embedded Resources | 发送http请求的方式，可选项为 java、HttpClient4（默认）      |
| Parallel downloadds. Number     | 是否使用自设资源处。启用后可以设置资源池大小，默认为6       |
| URLs must match                 | URL 匹配过滤，填写此项则只会下载与此内容项匹配的 url 的资源 |

 

### Source address

只用于 HTTP协议且 implemention = HttpClient4 时

| 字段        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| IP/Hostname | IP /主机名以使用特定的IP地址或（本地）主机名                 |
| Device      | 选择设备以选择该接口的第一个可用地址，该设备可以是IPv4或IPv6 |
| Device IPv4 | 选择IPv4设备来选择名称设备的IPv4地址（如eth0, lo, em0）      |
| Device IPv6 | 选择IPv6设备来选择名称设备的IPv6地址（如eth0, lo, em0）      |

 

### Proxy Server

代理服务器

| 字段              | 描述                       |
| ----------------- | -------------------------- |
| Server Name or IP | 代理服务器的名称或者IP地址 |
| Port Number       | 代理服务器的端口号         |
| Username          | 代理服务器的用户名         |
| Password          | 代理服务器的密码           |