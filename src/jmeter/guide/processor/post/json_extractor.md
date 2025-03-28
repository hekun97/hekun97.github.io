---
icon: pen-to-square
category:
  - JMeter
tag:
  - processor
  - post
  - json
order: 3
sticky: true
---

# 详解 JSON 提取器

## 为什么要用 JSON 提取器

- JSON 是目前大多数接口响应内容的数据格式
- 在接口测试中，不同接口之间可能会有**数据依赖**，在 Jmeter 中可以通过后置处理器来提取接口的响应内容
- JSON 提取器是其中一个可以用来提取响应内容的元件

 

#### JSON 提取器的应用场景

1. 提取某个特定的值
2. 提取多个值
3. 按条件取值
4. 提取值组成的列表

 

## JSON 提取器

[![img](/assets/jmeter/1896874-20200622130945599-764001221.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622130945599-764001221.png)

我们通过实际栗子去讲述理论知识点

 

## JSON 提取器界面介绍

[![img](/assets/jmeter/1896874-20200622132122203-1030744800.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622132122203-1030744800.png)

 

#### 字段含义

 

| 字段                                  | 结果                                                         |
| :------------------------------------ | :----------------------------------------------------------- |
| Apply to                              | 应用范围，选默认的 main sample only 就行了                   |
| Names of created variables            | 接收提取值的变量名多个变量用 ; 分隔必传                      |
| JSON Path expression                  | json path 表达式，用来提取某个值多个表达式用 ; 分隔必传      |
| Match No.(0 for Random)               | 取第几个值，多个值用 ; 分隔0：随机，**默认**-1：所有1：第一个值非必传 |
| Compute concatenation var(suffix_ALL) | 如果匹配到多个值，则将它们都连接起来，不同值之间用 , 分隔变量会自动命名为 `<variable name>_ALL` |
| Default Values                        | 缺省值，匹配不到值的时候取该值，可写error多个值用 ; 分隔非必传 |

 

## 入门栗子 

### 栗子的前提

这个栗子，我都会以这个地址的接口来完成 JSON 提取器的实战栗子，大家可以注册个账号玩一玩哦

[http://api.yesapi.cn/docs.php?keyword=%E4%BC%9A%E5%91%98&channel=api](http://api.yesapi.cn/docs.php?keyword=会员&channel=api)

 

### 测试计划树结构

下面多个栗子都以这个测试计划为基础哦

[![img](/assets/jmeter/1896874-20200622131341957-1518166027.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622131341957-1518166027.png)

 

### 提取某个特定的值的栗子

#### 登录接口响应

登录是执行其他接口的前置接口，所以要获取用户登录后的 **token、uuid**

[![img](/assets/jmeter/1896874-20200622131915870-106865385.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622131915870-106865385.png)

 

#### 提取 token

相对路径的方式

[![img](/assets/jmeter/1896874-20200622131917735-652699608.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622131917735-652699608.png)

 

#### 提取 uuid

绝对路径的方式

[![img](/assets/jmeter/1896874-20200622131919522-1827742511.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622131919522-1827742511.png)

 

#### 其他接口调用 token、uuid

[![img](/assets/jmeter/1896874-20200622131922058-2048722952.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622131922058-2048722952.png)

 

### 知识点

- 提取某个特定值的方式有两种：绝对路径、相对路径
- 提其他接口可以通过 ${var} 这种格式，来获取提取到的值

 

## 综合栗子

- 上面讲的是**使用 JSON 提取器时的一个流程**
- 在实际项目中，接口的响应内容肯定是非常复杂的，而我们需要提取的值也是多样化的，需要通过各种实战栗子来讲述清晰

 

### JSON 字符串

这也是某个接口返回的响应内容，后面的栗子也是以这个 JSON 字符串为基础来提取各种值

感兴趣也可以自己玩一玩：http://api.yesapi.cn/docs-api-App.User.GetList.html



```
{
    "ret": 200,
    "msg": "V2.5.1 YesApi App.User.GetList",
    "data": {
        "total": 3,
        "err_msg": "",
        "err_code": 0,
        "users": [
            {
                "role": "user",
                "status_desc": "正常",
                "reg_time": "2020-06-22 15:19:51",
                "role_desc": "普通会员",
                "ext_info": {
                    "yesapi_nickname": "",
                    "yesapi_points": 0
                },
                "uuid": "6D5EDCB459F0917A98106E07D5438C58",
                "username": "fangjieyaossb",
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
                "username": "fangjieyaossa",
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
                },
                "uuid": "079BF6BB82AFCFC7084F96AECAF0519F",
                "username": "fangjieyaoss",
                "status": 0
            }
        ]
    }
}
```

 

### 提取单个值

| Jsonpath                               | 结果                             |
| :------------------------------------- | :------------------------------- |
| $.data.total                           | 3                                |
| $..total                               | 3                                |
| $..users[0].role                       | user                             |
| $..uuid                                | 079BF6BB82AFCFC7084F96AECAF0519F |
| $.data.users[0].ext_info.yesapi_points | 0                                |

 

#### 重点

- 如果匹配到多个值（像 $..uuid ），也只能提取到一个值
- 如果想提取匹配到的所有 uuid，可以设置为 -1，结果如下图

[![img](/assets/jmeter/1896874-20200622162009854-1723322043.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622162009854-1723322043.png)

还会告诉你匹配了多少个值 ${uuid_matchNr} ，记住，调用变量时，不再是 ${uuid} 而是 ${uuid_1} 、 ${uuid_2} 

 

### 利用切片提取单个值

和 Python 切片一样的原理

| Jsonpath      | 结果                  |
| :------------ | :-------------------- |
| $..users[2]   | 第三个 users          |
| $..users[-2]  | 倒数第二个users       |
| $..users[0,1] | 前面两个users         |
| $..users[:2]  | 第一、二个users       |
| $..users[1:2] | 第二个users           |
| $..users[-2:] | 倒数两个users         |
| $..users[1:]  | 第二个开始的所有users |

 

### 提取多个值

- 四种写法类似，选一种方法自己熟记即可
- **重点：**提取多个值，提取器的 Match No. 必须填 **-1**

 

#### $.data.users[*].role

提取所有 role 字段值

[![img](/assets/jmeter/1896874-20200622161026107-282710368.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622161026107-282710368.png)

[*] 表示取数组的所有元素

 

#### $..users..role_desc

提取所有 role_desc 字段值

[![img](/assets/jmeter/1896874-20200622161018553-206280587.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622161018553-206280587.png)

 

#### $..reg_time

提取所有 reg_time 字段值

[![img](/assets/jmeter/1896874-20200622161006101-1171406016.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622161006101-1171406016.png)

 

#### $..[*].username

提取所有 username 字段值

[![img](/assets/jmeter/1896874-20200622161024053-548297825.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622161024053-548297825.png)

 

### 按条件提取值

有时候只需要提取某个特定条件下的参数值

 

#### 语法格式



```
[?(expression)]
```

 

#### 栗子

| Jsonpath                                 | 结果                                     |
| :--------------------------------------- | :--------------------------------------- |
| $..users[?(@.uuid)]                      | 提取 users 里面包含 uuid 字段的记录      |
| $..users[?(@.reg_time > '2020-06-01')]   | 提取 reg_time 字段大于 2020-06-01 的记录 |
| $..users[?(@.role_desc =~ /.*会员.*?/i)] | 提取 role_desc 字段包含会员的记录        |
| $..users[?(@.status == 0)]               | 提取 status 字段等于 0 的记录            |

 

#### @

代表当前节点，像上面的四个栗子，@代表 users 这个列表字段

 

#### =~

- 后面跟正则表达式，如果想提取**包含指定字符**的值，可以使用此正则： /.*指定字符串.*?/i 
-  i 代表大小写不敏感

 

## 提取数据指定字段的值的栗子

提取 users 第一条记录的 uuid、username 字段的值



```
$..users[0].['uuid','username']
```

 

#### 测试结果



```
new_1={"uuid":"6D5EDCB459F0917A98106E07D5438C58","username":"luojunjiessb"}
```

 

## 勾选 Compute concatenation var 的栗子

#### JSON 提取器

[![img](/assets/jmeter/1896874-20200622170027768-1163813054.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622170027768-1163813054.png)

 

#### 测试结果



```
uuid_1=6D5EDCB459F0917A98106E07D5438C58
uuid_2=0164DC0680F84DCE40D3DD4A36640ECA
uuid_3=079BF6BB82AFCFC7084F96AECAF0519F
uuid_ALL=6D5EDCB459F0917A98106E07D5438C58,0164DC0680F84DCE40D3DD4A36640ECA,079BF6BB82AFCFC7084F96AECAF0519F
uuid_matchNr=3
```

 

## 一个 JSON 提取器有多个 Jsonpath 的栗子

#### JSON 提取器

[![img](/assets/jmeter/1896874-20200622192311355-1531861325.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622192311355-1531861325.png)

 

#### 测试结果



```
uuid1_1=6D5EDCB459F0917A98106E07D5438C58
uuid1_2=0164DC0680F84DCE40D3DD4A36640ECA
uuid1_3=079BF6BB82AFCFC7084F96AECAF0519F
uuid1_matchNr=3
uuid2_1=6D5EDCB459F0917A98106E07D5438C58
uuid2_2=0164DC0680F84DCE40D3DD4A36640ECA
uuid2_3=079BF6BB82AFCFC7084F96AECAF0519F
uuid2_matchNr=3
```

 

#### 知识点

- 如果有多个 Jsonpath 的时候，每个字段都必填值，且**字段值的数量要一致**（像上图，每个字段都填了两个值）
- 勾不勾 Compute concatenation var 都行
- 字段值数量不一致则无法提取值