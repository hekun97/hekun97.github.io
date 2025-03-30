---
icon: pen-to-square
category:
  - JMeter
tag:
  - controllers
  - Regular_Extractor
order: 4
sticky: true
---

# 正则提取器

## 有了 JSON 提取器为啥还要用正则提取器？

- JSON 提取器**只针对**接口返回的响应内容
- 如果想提取的是响应头、请求头的值，而非响应内容的值呢？
- 这个时候正则提取器的作用就出来了，它可以提取请求任一部分的值

 

## 需知

- 正则表达式很多内容，在这篇文章中不会展开详细说的哦，主要还是说提取器的使用
- 想详细学习正则表达式可以看这系列的文章：https://www.cnblogs.com/poloyy/category/1796055.html

 

## 正则提取器

[![img](/assets/jmeter/1896874-20200622201337980-1535144600.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622201337980-1535144600.png)

我们通过实际栗子去讲述理论知识点

 

## 正则提取器界面介绍

[![img](/assets/jmeter/1896874-20200622201942975-1406453695.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622201942975-1406453695.png)

 

### 字段含义

| 字段                       | 含义                                                 |
| -------------------------- | ---------------------------------------------------- |
| Apply to                   | 应用范围，选默认的 main sample only 就行了           |
| Field to check             | 可提取的字段                                         |
| Names of created variables | 接收提取值的变量名必传                               |
| Regular Expression         | 正则表达式                                           |
| Template                   | 从找到的匹配项中创建字符串的模板                     |
| Match No.(0 for Random)    | 取第几个值0：随机，**默认**-1：所有1：第一个值非必传 |
| Default Value              | 缺省值，匹配不到值的时候取该值非必传                 |
| Use empty default value    | 勾选后，提取不到值时，则返回空字符串                 |

 

### Template

- 如果**一条**正则表达式有**多个提取结果**，则提取结果是数组形式
- 模板 $1$、$2$.....表示把解析到的第几个值赋给变量，从 1 开始匹配
- $0$ 表示整个表达式匹配的内容（后续具体看栗子）
- 若只有一个结果，只能是$1$

 

### Field to check

| 属性               | 含义                                         |
| ------------------ | -------------------------------------------- |
| Body               | 响应体，不包括响应头；**最常用**             |
| Body (unescaped)   | 响应体，替换了所有HTML转义符；**不建议使用** |
| Body as a Document | 从不同类型的文件中提取文本；**影响性能**     |
| Request Headers    | 请求头                                       |
| Response Headers   | 响应头                                       |
| URL                | URL                                          |
| Response Code      | 响应码                                       |
| Response Message   | 响应信息                                     |

 

#### Body

[![img](/assets/jmeter/1896874-20200623101100598-132997947.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623101100598-132997947.png)

 

#### Request Headers

[![img](/assets/jmeter/1896874-20200623101109849-1790097774.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623101109849-1790097774.png)

 

#### Response Headers

[![img](/assets/jmeter/1896874-20200623101112333-159644683.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623101112333-159644683.png)

 

#### URL

[![img](/assets/jmeter/1896874-20200623101105105-1031294474.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623101105105-1031294474.png)

 

#### Response Code、Message

[![img](/assets/jmeter/1896874-20200623101103435-647358423.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623101103435-647358423.png)

 

## 入门栗子

### 栗子的前提

这个栗子，我都会以这个地址的接口来完成 JSON 提取器的实战栗子，大家可以注册个账号玩一玩哦

[http://api.yesapi.cn/docs.php?keyword=%E4%BC%9A%E5%91%98&channel=api](http://api.yesapi.cn/docs.php?keyword=会员&channel=api)

 

### 测试计划树结构

下面多个栗子都以这个测试计划为基础哦

[![img](/assets/jmeter/1896874-20200622204904966-10921445.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622204904966-10921445.png)

 

### 提取某个特定的值的栗子

#### 登录接口响应

登录是执行其他接口的前置接口，所以要获取用户登录后的 **token、uuid**

[![img](/assets/jmeter/1896874-20200622204856860-1952782446.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622204856860-1952782446.png)

 

#### 提取 token

[![img](/assets/jmeter/1896874-20200622204913092-1402647499.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622204913092-1402647499.png)

 

#### 提取 uuid

[![img](/assets/jmeter/1896874-20200622204918320-1064483831.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622204918320-1064483831.png)

 

#### 其他接口调用 token、uuid

[![img](/assets/jmeter/1896874-20200622204845236-50112383.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622204845236-50112383.png)

 

### 知识点

- 提其他接口可以通过 ${var} 这种格式，来获取提取到的值
-  ( ) 里面写匹配规则，用于解析正则表达式
-  .*? 表示匹配任意长度的任意字符，这也是最常用的正则表达式
- 一般 (.+?) 和 (.*?) 能够满足我们 **80%**的使用场景

 

#### 一般正则表达式都可以写成下面两种

-  左边界(.+?)右边界 
-  左边界(.*?)右边界 

 

## 举更多栗子前的一些话

- 上面讲的是**使用正则提取器时的一个流程**，也是实际工作中最简单的栗子
- 在实际项目中，我们可能会出现一条正则表达式有多个提取结果的情况

 

#### JSON 字符串

下面的栗子都以这个 JSON 字符串为基础，从里面提取结果

这 JSON 字符串也是某个接口的响应内容，货真价实，感兴趣也可以自己玩一玩：http://api.yesapi.cn/docs-api-App.User.GetList.html



```
{
    "ret": 200,
    "msg": "V2.5.1 YesApi App.User.GetList",
    "data": {
        "total": 4,
        "err_msg": "",
        "err_code": 0,
        "users": [
            {
                "role": "user",
                "status_desc": "正常",
                "reg_time": "2020-06-22 20:45:05",
                "role_desc": "普通会员",
                "ext_info": {
                    "yesapi_nickname": "",
                    "yesapi_points": 0
                },
                "uuid": "0564CE592B4CE914365D8922F6FC4CEC",
                "username": "luojunjiess286",
                "status": 0
            },
            {
                "role": "user",
                "status_desc": "正常",
                "reg_time": "2020-06-22 14:27:17",
                "role_desc": "普通会员",
                "ext_info": {
                    "yesapi_nickname": "",
                    "yesapi_points": 0
                },
                "uuid": "0164DC0680F84DCE40D3DD4A36640ECA",
                "username": "luojunjiessa",
                "status": 0
            },
            {
                "role": "admin",
                "status_desc": "正常",
                "reg_time": "2020-03-23 22:48:32",
                "role_desc": "管理员",
                "ext_info": {
                    "yesapi_nickname": "",
                    "yesapi_points": 0
                    "yesapi_reg_source": ""
                },
                "uuid": "079BF6BB82AFCFC7084F96AECAF0519F",
                "username": "luojunjiess",
                "status": 0
            }
        ]
    }
}
```

 

## 一条正则表达式只有一个提取结果的栗子

#### 什么叫只有一个提取结果

就是正则表达式里只有一个 ( ) ，且  Match No. 不是 -1

 

### 未填写模板

#### 提取器

[![img](/assets/jmeter/1896874-20200623105704327-579321284.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623105704327-579321284.png)

 

#### 测试结果



```
uuid1=
uuid1_g=1
uuid1_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid1_g1=0564CE592B4CE914365D8922F6FC4CEC
```

 

#### 知识点

如果正则匹配到值，但是没有填模板，则返回**空**

 

### $0$

#### 提取器

[![img](/assets/jmeter/1896874-20200623105734000-327505595.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623105734000-327505595.png)

 

#### 测试结果



```
uuid2="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid2_g=1
uuid2_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid2_g1=0564CE592B4CE914365D8922F6FC4CEC
```

 

#### 知识点

-  $0$ 模板其实返回的就是 uuid2_g0 的值
- 返回了整个正则表达式，不只是 ( ) 内匹配到的值

 

### $1$

#### 提取器

[![img](/assets/jmeter/1896874-20200623105749758-957412849.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623105749758-957412849.png)

 

#### 测试结果



```
uuid3=0564CE592B4CE914365D8922F6FC4CEC
uuid3_g=1
uuid3_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid3_g1=0564CE592B4CE914365D8922F6FC4CEC
```

 

#### 知识点

-  $1$ 模板其实返回的就是 uuid2_g1 的值
- 仅返回 ( ) 内匹配到的值

 

### $2$

#### 提取器

[![img](/assets/jmeter/1896874-20200623105806967-1710581328.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623105806967-1710581328.png)

 

#### 测试结果



```
uuid4=null
uuid4_g=1
uuid4_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid4_g1=0564CE592B4CE914365D8922F6FC4CEC
```

 

#### 知识点

 $2$ 模板并不存在，其实就是 uuid4_g2 变量不存在，即使勾了**使用空默认值**，也返回 null，

 

### 总结

- 其实 uuid 在 JSON 字符串中有**三个**可匹配到的值，如果不填写匹配数字 Match No. ，则会**随机**取一个 uuid 并返回
- 像上述的几个栗子，都填了 **1** ，所以都返回了**第一个匹配到的 uuid**

 

## 一条正则表达式有多个提取结果的栗子

#### 什么叫有多个提取结果

有两种情况

- 一条表达式有多个 ( ) 
- 一个 ( ) 匹配到多个值，且 Match No 填了 **-1**

 

### 一个 ( ) 匹配到多个值 

#### 提取器

[![img](/assets/jmeter/1896874-20200623111935743-1441082763.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623111935743-1441082763.png)

 

#### 测试结果

手动分成四部分



```
uuid1_1=0564CE592B4CE914365D8922F6FC4CEC
uuid1_1_g=1
uuid1_1_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC"
uuid1_1_g1=0564CE592B4CE914365D8922F6FC4CEC

uuid1_2=0164DC0680F84DCE40D3DD4A36640ECA
uuid1_2_g=1
uuid1_2_g0="uuid":"0164DC0680F84DCE40D3DD4A36640ECA"
uuid1_2_g1=0164DC0680F84DCE40D3DD4A36640ECA

uuid1_3=079BF6BB82AFCFC7084F96AECAF0519F
uuid1_3_g=1
uuid1_3_g0="uuid":"079BF6BB82AFCFC7084F96AECAF0519F"
uuid1_3_g1=079BF6BB82AFCFC7084F96AECAF0519F

uuid1_matchNr=3
```

 

### 知识点

- 一个 ( ) 匹配到多个值的场景 ，一般会结合 **ForEach控制器**，可以循环将提取到的值赋予到 HTTP 请求中
- 可以看看下图的小栗子，这里不展开讲，后面会再详细讲解

 

#### 结构树 + ForEach 控制器

[![img](/assets/jmeter/1896874-20200623113710177-786576881.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623113710177-786576881.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200623113712937-2084818274.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623113712937-2084818274.png)

 

### 一条表达式有多个( )，且模板为空

#### 提取器

[![img](/assets/jmeter/1896874-20200623132033331-428428429.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623132033331-428428429.png)

 

#### 测试结果



```
info1=
info1_g=2
info1_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC","username":"luojunjiess286"
info1_g1=0564CE592B4CE914365D8922F6FC4CEC
info1_g2=luojunjiess286
```

 

### 一条表达式有多个( )，且只有一个模板

#### 提取器

[![img](/assets/jmeter/1896874-20200623132109237-1293955560.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623132109237-1293955560.png)

 

#### 测试结果



```
info2=0564CE592B4CE914365D8922F6FC4CEC
info2_g=2
info2_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC","username":"luojunjiess286"
info2_g1=0564CE592B4CE914365D8922F6FC4CEC
info2_g2=luojunjiess286
```

 

#### 知识点

- info2 拿的就是 info2_g1 的值
-  $1$ 获取的是第一个 ( ) 匹配到的值， $2$ 获取的是第二个 ( ) 匹配到的值，以此类推   

 

### 一条表达式有多个( )，且有两个模板

#### 提取器

[![img](/assets/jmeter/1896874-20200623132113585-244154155.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623132113585-244154155.png)

[![img](/assets/jmeter/1896874-20200623132114849-197040883.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623132114849-197040883.png)

 

#### 测试结果



```
info3=0564CE592B4CE914365D8922F6FC4CECluojunjiess286
info3_g=2
info3_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC","username":"luojunjiess286"
info3_g1=0564CE592B4CE914365D8922F6FC4CEC
info3_g2=luojunjiess286

info4=0564CE592B4CE914365D8922F6FC4CEC,luojunjiess286
info4_g=2
info4_g0="uuid":"0564CE592B4CE914365D8922F6FC4CEC","username":"luojunjiess286"
info4_g1=0564CE592B4CE914365D8922F6FC4CEC
info4_g2=luojunjiess286
```

 

### 正则表达式中有多个 ( ) 时的总结

- 如果其中一个 ( ) 匹配不到元素，那也无法获取到值
- **引用名称、匹配数字、缺省值**三个字段也只需要填一个值即可，不需要跟 ( ) 的数量一致
- 多个模板（ $1$$2$ ）的时候，可以用空格、, 、. 、 - 连接模板，最终会显示在变量上，如：info4