---
title: Postman实现接口测试(二)
order: 3
tag: Postman
---

## 今日目标

```
1. 能够使用postman组织测试用例；
2. 能够使用postman对测试结果进行断言（响应状态码和json格式响应数据）；
3. 能够使用postman解决多接口的依赖;
4. 能够使用postman引入外部数据文件实现参数化;
5. 能够使用newman生成测试报告。
```

## 1. 用例管理

作用：规范和管理接口上的大量测试用例

实现步骤：

1.  创建集合---项目（如IHRM、tpshop）
2.  创建文件夹---模块（如：登录、员工管理）
3.  创建请求---测试用例（如：登录成功）

操作演示

1.  创建集合---项目

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630323.png" alt="image-20230911160424179" style="zoom:50%;" />

2.  创建文件夹---模块

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630324.png" alt="image-20230911160519833" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630325.png" alt="image-20230911160624807" style="zoom:50%;" />

3.  创建请求---测试用例

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630326.png" alt="image-20230911160737161" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630327.png" alt="image-20230911160805011" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630328.png" alt="image-20230911160828504" style="zoom:50%;" />

## 2. Postman断言

### 2.1. 断言前置基础

- 断言：通过**代码**自动判断**实际运行的结果**是否与测试用例中的**预期结果**一致。

- 断言结果：

  - 结果一致：测试通过（pass）；
  - 结果不一致：测试不通过（fail）

- 复习：UnitTest常用断言方式有哪些？（这里的知识应该是前面的python中学习的）

  | **序号** | **断言**     | 代码片段**                                | **代码说明**                  |
  | :------: | ------------ | ----------------------------------------- | ----------------------------- |
  |    1     | 判定为真     | assertTrue(expr,msg=None)                 | 验证expr为true                |
  |    2     | 判定为假     | assertFalse(expr,msg=None)                | 验证expr为false               |
  |    3     | **判定相等** | **assertEqual**(expected,actual,msg=None) | 验证expected==actual          |
  |    4     | 判定不相等   | assertNotEqual(first,second,msg=None)     | 验证first != second           |
  |    5     | 判定为空     | assertIsNone(obj,msg=None)                | 验证obj是None                 |
  |    6     | 判定不为空   | assertIsNotNone(obj,msg=None)             | 验证obj不是None               |
  |    7     | **判定包含** | **assertIn**(member,container,msg=None)   | 验证member在  container里面   |
  |    8     | 判定不包含   | assertNotIn(member,container,msg=None)    | 验证member不在  container里面 |

- Postman的断言

  - 使用**JavaScript**语言编写的，写在Postman的【**Tests**】 标签中

  - 【Tests】中的脚本在**发送请求之后**执行，它会把断言的结果（PASS/FAIL）最终反应在【**Test Results**】标签页中

    <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630329.png" alt="image-20230911162416311" style="zoom:50%;" />

- Postman的常用断言

  - **断言响应状态码是否为200（Status code is 200）**
  - *断言响应体JSON数据校验（Response body:JSON value check）
  - **断言**响应体**是否**包含**指定字符串（Response body: **Contains** string）
  - 断言**响应体**是否**等于**指定字符串（Response body:Is **equal** to a string）
  - 断言**响应头**是否包含指定的头信息（Response **headers**: Content-Type **header check**）

- 操作示例

  <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630330.png" alt="image-20230911162637909" style="zoom:50%;" />

### 2.2. 断言响应状态码（重点）

```javascript
//样例代码：
pm.test("Status code is 200", function () { 
   pm.response.to.have.status(200);
}); 
//说明：
//pm.test是postman内置对象pm对外提供的一种名称为test的方法，他的功能是使用pm.test来编写测试脚本时，即使方法内部处理内容出现错误也不会影响后续自动化脚本的运行。
```

案例：

1. 请求IHRM项目的登录接口，请求数据`({"mobile":"13800000002","password":"123456"})`；

2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`；

3. 请设置断言自动判定服务器`响应状态码为200`。

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630331.png" alt="image-20230911163109188" style="zoom:50%;" />

### 2.3. 断言JSON数据（重点）

```javascript
//示例代码：
pm.test("Your test name", function () { 
   var jsonData = pm.response.json();
   pm.expect(jsonData.value).to.eql(100); 
});
//说明：var是用来声明javascript的变量，上面的代码等价于下面的代码。 
pm.test("Your test name", function () {
   pm.expect(pm.response.json().value).to.eql(100); 
});
```

案例：

1. 请求IHRM项目的登录接口，请求数据`（{"mobile":"13800000002","password":"123456"}）`；
2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`；
3. 请设置断言自动判定服务器响应体数据中`success=true,code=10000,message=操作成功！`。

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630332.png" alt="image-20230911163003505" style="zoom:50%;" />

**排错说明：**

1.  检查断言代码片段是否选错了
2.  检查断言代码是否设置错了 预期结果或者是判断实际结果的字段选择错误
3.  先点击发送，基于响应中的body数据做初步预判
4.  检查请求相关参数（请求方式、请求头、请求体）

### 2.4. 断言包含指定的字符串内容（知道）

```javascript
//样例代码：
pm.test("Body matches string", function () {
   pm.expect(pm.response.text()).to.include("string_you_want_to_search"); 
});
//说明：
//这里的包含（include）是从所有的响应数据中去查找是否含有需要查询的值
```

案例：

1. 请求IHRM项目的登录接口，请求数据`（{"mobile":"13800000002","password":"123456"}）`

2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`

3. 请设置断言自动判定服务器响应体数据中包含`操作成功`

   ![image-20230911164747250](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630333.png)

### 2.5. 断言等于指定的字符串（知道）

```javascript
//样例代码：
pm.test("Body is correct", function () {
   pm.response.to.have.body("response_body_string"); 
});
//说明：
//这里的等于是所有的响应数据是否完全和断言中的内容一样
```

案例：
1.请求IHRM项目的登录接口，请求数据`（{"mobile":"13800000002","password":"123456"}）`
2.登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`
3.请设置断言自动判定服务器响应体数据等于`操作成功`

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630334.png" alt="image-20230911165116241" style="zoom:50%;" />

> 思考：怎么完整的匹配一个JSON返回数据呢？
>
> 说明：直接单引号包裹起来即可
>
> ```javascript
> // 服务器响应体数据中等于【操作成功】精确查找
> pm.test("服务器响应体数据中等于【操作成功】精确查找", function () {
>     pm.response.to.have.body( '{"success":true,"code":10000,"message":"操作成 
> 功！","data":"9ad2a988-e618-47ec-9498-1efe9535c88e"}');
> });
> ```

### 2.6. 断言响应头标签（了解）

```javascript
//示例代码：
pm.test("Content-Type is present", function () { 
   pm.response.to.have.header("Content-Type"); 
});
```

案例：

1. 请求IHRM项目的登录接口，请求数据`（{"mobile":"13800000002","password":"123456"}）`

2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`

3. 请设置断言自动判定服务器响应头中包含`Content-Type`和`Content-Length`

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630335.png" alt="image-20230911165418203" style="zoom:50%;" />

### 2.7. 断言综合练习

**需求：**

1. 请求IHRM项目的登录接口，请求数据`({"mobile":"13800000002","password":""})`
2. 登录接口地址URL：`http://ihrm-test.itheima.net/api/sys/login`
3. 请设置断言自动判定服务器:
   - 响应状态码为200
   - 响应体数据中`success=false,code=20001,message=用户名或密码错误,data=null`
   - 响应体数据中包含【用户名或密码错误】
   - 响应体数据等于【false】
   - 响应头中包含`Content-Type`

**tests中的相关断言代码：**

```javascript
//  (a)响应状态码为200
pm.test("Status code is 200", function () { 
   pm.response.to.have.status(200);
});

//  (b)响应体数据中success=false,code=20001,message=用户名或密码错误,data=null 
pm.test("Your test name", function () {
   var jsonData = pm.response.json();
   pm.expect(jsonData.success).to.eql(false); 
});
pm.test("Your test name", function () { 
   var jsonData = pm.response.json();
   pm.expect(jsonData.code).to.eql(20001); 
});
pm.test("Your test name", function () { 
   var jsonData = pm.response.json();
   pm.expect(jsonData.message).to.eql("用户名或密码错误"); 
});
//断言为null比较麻烦，这点百度自己查阅下资料

//  (c)响应体数据中包含【用户名或密码错误】
pm.test("Body matches string", function () {
   pm.expect(pm.response.text()).to.include("用户名或密码错误"); 
});

//  (d)响应体数据等于【false】
pm.test("Body is correct", function () { 
   pm.response.to.have.body(false); 
});

//  (e)响应头中包含Content-Type
pm.test("Content-Type is present", function () { 
   pm.response.to.have.header("Content-Type"); 
});
```

## 3. 环境变量与全局变量

### 3.1. 概念

- 全局变量：作用范围是针对postman下面所有测试集均生效。
- 环境变量：
  - 只对选择了对应环境的测试集生效（如：选择了测试环境的测试集IHRM0720）；
  - 开发环境、测试环境、生产/线上环境；
  - 一套环境中变量不能重复、但是可以定义多个不重复的变量。

### 3.2. 设置变量

手动设置就是我们手动添加相关的变量，代码设置是通过【Tests】中的代码来实现。

#### 3.2.1. 全局变量

##### 3.2.1.1. 手动设置

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630336.png" alt="image-20230911170348658" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630337.png" alt="image-20230912103015045" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630338.png" alt="查看拥有的全局变量" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630339.png" alt="使用" style="zoom:50%;" />

##### 3.2.1.2. 代码设置

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630340.png" alt="image-20230912104016078" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630341.png" alt="image-20230912104125841" style="zoom:50%;" />

#### 3.2.2. 环境变量

##### 3.2.2.1. 手动设置

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630342.png" alt="image-20230912104313509" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630343.png" alt="image-20230912104346075" style="zoom: 33%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630344.png" alt="image-20230912104514922" style="zoom: 33%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630345.png" alt="image-20230912104539582" style="zoom:33%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630346.png" alt="使用" style="zoom:33%;" />

##### 3.2.2.2. 代码设置

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630347.png" alt="image-20230912105037708" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630348.png" alt="查看效果" style="zoom:50%;" />

### 3.3. 获取变量（全局变量与环境变量）

#### 3.3.1. 在请求参数中获取：{{变量名}}

1. URL中使用

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630349.png" alt="image-20230920103851357" style="zoom: 33%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630350.png" alt="image-20230920103920235" style="zoom:33%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630351.png" alt="image-20230920103950229" style="zoom:33%;" />

2. 请求头中使用

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630352.png" alt="image-20230920104113253" style="zoom:33%;" />

3. 请求体中使用

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630353.png" alt="image-20230920104154588" style="zoom:33%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630354.png" alt="image-20230920104215981" style="zoom:33%;" />

#### 3.3.2. 通过代码来获取

```javascript
pm.environment.get("variable_key");
pm.globals.get("variable_key");

// 获取环境变量的值（mobile2和password2）
var mobile = pm.environment.get("mobile2"); 
var password = pm.environment.get("password2"); 
console.log("测试环境中的mobile是：" + mobile) 
console.log("测试环境中的password是：" + password)
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630355.png" alt="image-20230920104335771" style="zoom:50%;" />

## 4. 请求前置脚本（了解）

介绍：我们在使用postman的时候，每次都是点击send发送请求，请求前置脚本就是在请求发送之前被执行，在`Pre-request Script`页签类编写，

![image-20230920104501291](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630356.png)

**使用场景**

在请求url中需要使用随机数或时间戳需要对敏感数据进行加密，比如一些网站的验证码可能会采取这种方式，来区分人和机器操作，如使用时间戳，人每次发送都是不同的，机器写死的话就是固定的，可以用来识别人和机器操作，起到一定的保护作用。

**使用案例**

```javascript
// 生成0-1之间的一个随机数：如0.6569606479434671
var r = Math.random() 
console.log("生成的随机数：", r)
// 通过全局变量保存随机数
pm.globals.set("g_random", r);
```

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630357.png" alt="image-20230920105253832" style="zoom:50%;" />

## 5. Postman关联（重点）

### 5.1. Postman关联基础介绍

后一个接口的请求需要依赖前一个接口的响应数据，一般通过全局变量或者环境变量来进行参数在接口之间的传递。

> 如：用户登录后，后续所有的请求都需要带上token识别用户信息。

### 5.2. 技术实现

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630358.png" alt="image-20230920110328375" style="zoom:33%;" />

#### 5.2.1. 通过全局变量进行接口关联

**案例1：**

1. 请求获取天气接口，`http://www.weather.com.cn/data/sk/101010100.html`
2. 获取天气接口返回结果中的`城市名称`
3. 请求百度搜索接口：`http://www.baidu.com/s?wd={{城市名称}}`，城市名称即为天气接口获取并保存 
   到全局变量中的数据。

**实现：**

![image-20230920110529704](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630359.png)

![image-20230920110627148](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251630360.png)

#### 5.2.2. 通过环境变量进行接口关联

和通过全局变量进行接口关联的过程差不多，这里就不再赘述。

## 6. 批量执行测试用例（掌握）

操作步骤

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633233.png" alt="image-20230925150858063" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633234.png" alt="image-20230925150924011" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633235.png" alt="image-20230925151008709" style="zoom:50%;" />

## 7. 读取外部文件实现参数化（理解）

### 7.1. 使用场景

针对单个接口、存在大量数据需要批量测试测试情况，我们将数据存放到外部的文件，然后postman通过读取外部文件来逐行执行脚本。

### 7.2. 常见数据格式

- csv
- json

### 7.3. 操作步骤

1.  准备测试数据文件
2.  设置参数

    - 在请求中使用时，直接通过{{变量名}}引用
    - 在断言中使用时，需要借助postman内置的data方法来进行使用，如 `data.username`
3.  选择数据文件进行批量执行
4.  结果检查

### 7.4. 案例-查询手机号码归属地和运营商

```
需求：批量查询手机号归属地和所属运营商信息，并校验运营商数据是否正确
接口地址：    http://cx.shouji.360.cn/phonearea.php?number=13012345678 
部分测试数据：
手机号: 13012345678 运营商: 联通 
手机号: 13800001111 运营商: 移动 
手机号: 18966778899 运营商: 电信
```

1. 准备测试数据文件

   - csv

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633236.png" alt="image-20230925151437242" style="zoom:50%;" />

   - json

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633237.png" alt="image-20230925151455460" style="zoom:50%;" />

2. 设置参数

   - 在请求中使用时，直接通过{{变量名}}引用

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633238.png" alt="image-20230925151529624" style="zoom:50%;" />

   - 在断言中使用时，需要借助postman内置的data方法来进行使用，如`data.username`

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633239.png" alt="image-20230925151558083" style="zoom:50%;" />

3. 选择数据文件进行批量执行

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633240.png" alt="image-20230925151714119" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633241.png" alt="image-20230925151743249" style="zoom:50%;" />

4. 结果检查

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633242.png" alt="image-20230925151801888" style="zoom:50%;" />

## 8. Postman测试报告（掌握）

### 8.1. Newman介绍与安装

Newman：一款基于nodejs开发的可以运行Postman脚本的工具，并且可以生成测试报告。

#### 8.1.1. 安装Newman

1. 安装nodejs

   - 下载地址： [http://nodejs.cn/download/*](http://nodejs.cn/download/)

   - windows系统直接双击运行安装包，如【node-v12.10.0-x64.msi】

   - 校验：打开cmd输入【**node -v**】，看到输出node版本信息，即代表成功

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633243.png" alt="image-20230925152220410" style="zoom:50%;" />

2. 安装newman

   - 打开cmd，输入【npm install -g newman】

     注意这里安装时候大多数时候需要管理员的权限或root权限。

   - 校验：输入【**newman -v**】

     <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633244.png" alt="image-20230925152357226" style="zoom:50%;" />

3. 安装newman-reporter-html

   - 打开cmd输入：【npm install -g newman-reporter-html】

     注意这里安装时候大多数时候需要管理员的权限或root权限。

     ![image-20230925152426031](https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633245.png)

### 8.2. Postman导出测试集、环境变量、全局变量

1. 导出测试集

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633246.png" alt="image-20230925152606884" style="zoom:33%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633248.png" alt="image-20230925152632312" style="zoom:33%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633249.png" alt="image-20230925152658159" style="zoom:33%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633250.png" alt="image-20230925152719016" style="zoom:50%;" />

2. 导出环境变量

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633251.png" alt="image-20230925153753623" style="zoom:50%;" />

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633252.png" alt="image-20230925153823897" style="zoom:50%;" />

   点击保存后，有对应提示结果

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633253.png" alt="image-20230925153855115" style="zoom:50%;" />

   

3. 导出全局变量

   <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633254.png" alt="image-20230925153343873" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633255.png" alt="image-20230925153528559" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633256.png" alt="image-20230925153559573" style="zoom:50%;" />

### 8.3. Newman运行及生成报告

打开一个cmd窗口，使用Newman命令，运行导出的测试脚本

格式：

```cmd
newman run 测试脚本文件    -e 环境变量文件    -g 全局变量文件    -d 测试数据文件    -r html -- reporter-html-export report.html
```

示例：

```shell
# 自动生成报告，格式内会包含日期
newman run demo.postman_collection.json -r html
# 指定生成报告的文件名
newman run demo.postman_collection.json -r html --reporter-html-export report.html
```

参数详解：

- run 测试脚本文件：表示要执行的postman脚本，及导出的测试集
- -e 环境变量文件：指定脚本中依赖的**环境变量**文件的路径
- -g 全局变量文件：指定脚本中依赖的**全局变量**文件的路径
- -d 测试数据文件：指定脚本中依赖的**测试数据文件**的路径

实例：

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633257.png" alt="image-20230925154153519" style="zoom:50%;" />

<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251633258.png" alt="image-20230925154235736" style="zoom:50%;" />

## 今日总结

- 能够使用postman的测试集来管理测试用例
- 能够使用postman断言响应状态码和json格式响应体
- 能够说出postman全局变量和环境变量的区别和用法
- 能够使用postman的关联解决多接口的依赖关系（查询天气和百度搜索的依赖）

## 每日作业

1、请根据课程所学描述一下创建用例集的步骤答案：

2、下文中关于断言的描述正确的是？

A：判断接口返回的响应状态码是不是300 B：判断接口返回的响应状态码是不是200 C：判断接口返回的响应状态码是不是400 D：以上都不正确。这个不是判断http响应状态码的断言。答案：

3、postman提供了常用的断言代码片段，请根据下文中给出断言代码片段和实际代码填入正确的匹配关系

答案

4、请问设置全局变量和环境变量时有哪两种方式，分别是怎么进行的？答案

5、请求怎么获取设置的全局变量和环境变量，请分别阐述。答案：

6、详述使用\[百度搜索接口\]来查询\[查询天气接口\]返回的\[城市\]信息。答案：

7、全局变量和环境变量名称一致时，哪个优先级更高？答案：
