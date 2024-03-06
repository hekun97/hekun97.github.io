---
title: Postman实现接口测试(三)
order: 3
tag: Postman
---

## 今日目标

```
1. 能够创建测试集管理IHRM系统的测试用例；
2. 能够按照测试用例在postman中添加请求并录入接口信息；
3. 能够对ihrm系统接口响应结果中的响应状态码和核心json字段进行断言；
4. 能够使用环境变量处理ihrm系统中登录接口和员工管理接口的依赖关系；
5. 能够在postman中导出测试集数据，并使用newman生成测试报告。
```

## 1. 初始化工作

1.  **创建测试用例结构**

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633259.png" alt="image-20230925162417641" style="zoom:50%;" />

2.  **设置环境变量**

- 开发环境

  `base_url = http://ihrm-dev.itheima.net`

- 测试环境

  `base_url = 127.0.0.1:9999`

  这里的测试环境使用mock搭建，如何使用mock请看第10天的内容

- 生产环境

  `base_url = http://ihrm-prod.itheima.net`

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633260.png" alt="image-20230925163125633" style="zoom:50%;" />

## 2. 实现测试用例

### 2.1. 登录

#### 2.1.1. case01登录成功

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633261.png" alt="image-20230925163441760" style="zoom:50%;" />

操作步骤：

1. 在‘登录’目录下，添加‘登录成功’的请求，这里的请求可以加上测试id，如case01。

2. 填写请求数据：请求方式、请求URL、请求头、请求体

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633262.png" alt="image-20230925170828256" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633263.png" alt="image-20230925170915570" style="zoom:50%;" />

3. 在‘Tests’标签页中，编写测试脚本：断言、业务数据处理

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633264.png" alt="image-20230925171120512" style="zoom:50%;" />

4. 发送请求，调试脚本

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633265.png" alt="image-20230925171204280" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633266.png" alt="image-20230925171230951" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633267.png" alt="image-20230925171402451" style="zoom:50%;" />

### 2.2. 员工管理

#### 2.2.1. case02添加员工

需要使用登录中保存在环境变量中的员工token`env_token`

![image-20230926152924200](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633268.png)

**操作步骤：**

1. 在‘员工管理’目录下，添加‘添加员工’的请求

2. 填写请求数据：请求方式、请求URL、请求头、请求体

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633269.png" alt="image-20230926154814058" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633270.png" alt="image-20230926155208500" style="zoom:50%;" />

3. 在‘Tests’标签页中，编写测试脚本：断言、业务数据处理

4. 发送请求，调试脚本

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633271.png" alt="image-20230926155403878" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633272.png" alt="image-20230926155501752" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633273.png" alt="image-20230926155534208" style="zoom:50%;" />

#### 2.2.2. case03查询员工

1. 在‘员工管理’目录下，添加‘查询员工’的请求

2. 填写请求数据：请求方式、请求URL、请求头、请求体

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633274.png" alt="image-20230926162425909" style="zoom:50%;" />

3. 在‘Tests’标签页中，编写测试脚本：断言、业务数据处理

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633275.png" alt="image-20230926162519653" style="zoom:50%;" />

4. 发送请求，调试脚本

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633276.png" alt="image-20230926162550782" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633277.png" alt="image-20230926162618720" style="zoom:50%;" />

#### 2.2.3. case04修改员工

后面的修改和删除大同小异，这里直接使用课间资料。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633278.png" alt="image-20230926162931817" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633279.png" alt="image-20230926162949359" style="zoom:50%;" />

> 这里注意修改后还需要再查询一次，确认修改信息，用case05来确定，其实也就是查询员工。

#### 2.2.4. case06删除员工

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633280.png" alt="image-20230926163206846" style="zoom:50%;" />

## 3. 生成测试报告

1. 导出测试集

2. 导出环境变量

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633281.png" alt="image-20230927102359235" style="zoom:50%;" />

   > 注意：这里没有全局变量，因此没有导出。

3. 使用newman运行命令、生成报告

   完整命令：`newman run IHRM0712.postman_collection.json -e test.postman_environment.json -r html`

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633282.png" alt="image-20230927102715764" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633283.png" alt="image-20230927103023882" style="zoom:50%;" />

## 每日作业

1. 完成IHRM登陆接口测试和员工管理模块接口测试，并使用Collection Runner批量运行通过。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633284.png" alt="运行步骤" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633285.png" alt="运行结果" style="zoom:50%;" />

2. 实现IHRM系统登陆接口参数化。
