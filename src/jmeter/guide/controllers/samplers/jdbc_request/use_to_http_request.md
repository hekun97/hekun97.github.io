---
icon: pen-to-square
category:
  - JMeter
tag:
  - samplers
  - JDBC
  - request
  - advanced
order: 2
sticky: true
---

# 获取并使用 JDBC Request 返回的数据

## 前言

- Jmeter 使用 JDBC Request 获取数据库中数据，很多人都会用，因为测试中，有时候需要大量的用户进行登录，然后**获取数据库中真实的数据用于测试**
- 前面也详细讲到 JDBC Request 的具体使用，一般是通过 Variable names 和 Result variable name 来获取返回的数据
- 这篇文章主要讲的就是把 Variable names 和 Result variable name 获取到的数据**提取**出来，给到 HTTP 请求使用

 

## Variable names + Foreach控制器

### 线程组结构树

[![img](/assets/jmeter/1896874-20200624110545944-1121075674.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624110545944-1121075674.png)

 

### JDBC Request

[![img](/assets/jmeter/1896874-20200624110641962-2053847758.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624110641962-2053847758.png)

 

### 调试取样器运行结果

[![img](/assets/jmeter/1896874-20200624110554073-1770443154.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624110554073-1770443154.png)

有 100 条记录

 

### ForEach控制器

[![img](/assets/jmeter/1896874-20200624110652416-516958458.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624110652416-516958458.png)

 

### 循环运行的结果（ mobile:${mobile} ）

[![img](/assets/jmeter/1896874-20200624111123020-1288226572.gif)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624111123020-1288226572.gif)

 

## Variable names + 循环控制器

和上面的栗子只是换了个控制器而已，没太大变化

### 线程组结构树

[![img](/assets/jmeter/1896874-20200624112007190-770089029.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624112007190-770089029.png)

 

### 循环控制器

[![img](/assets/jmeter/1896874-20200624112219428-568780323.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624112219428-568780323.png)

填写 100，是代表循环100次

 

### 计数器

[![img](/assets/jmeter/1896874-20200624112029700-274579002.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624112029700-274579002.png)

从 1 开始，递增加到 100为止，每次递增 1

- 初始值=1
- 每次增加 1
- 最大的值=100（包含）
- 新变量 num

 

### 循环控制器内的 Debug Sampler

[![img](/assets/jmeter/1896874-20200624112113247-642318285.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624112113247-642318285.png)

 ${__V()} 是关联函数，后面讲到

 

### 循环运行的结果（ mobile:${mobile} ）

[![img](/assets/jmeter/1896874-20200624112239151-2112653737.gif)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624112239151-2112653737.gif)

 

## Result variable name + Foreach控制器

### 线程组结构树

[![img](/assets/jmeter/1896874-20200624121455768-553485987.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624121455768-553485987.png)

 

### JDBC Request

[![img](/assets/jmeter/1896874-20200624135058037-1510752776.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135058037-1510752776.png)

 

### 正则提取器

[![img](/assets/jmeter/1896874-20200624135103193-1982650351.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135103193-1982650351.png)

 

#### 重点

Applu to 选中 Jmeter Variable Name to use，因为要从 Jmeter Variables 中拿到 result_mobile 变量进行提取

 

### 调试取样器运行结果

[![img](/assets/jmeter/1896874-20200624122529353-1752147915.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624122529353-1752147915.png)

正则提取后的值是不是跟上面 Variable names 获取的值列表很像，是的！然后再结合 ForEach控制器就好啦

 

### ForEach控制器

[![img](/assets/jmeter/1896874-20200624132310526-1399447763.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624132310526-1399447763.png)

变量前缀是正则提取器里的引用名称

 

### 循环运行的结果（ mobile:${mobile} ）

[![img](/assets/jmeter/1896874-20200624132710751-659742437.gif)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624132710751-659742437.gif)

 

## Result variable name + 循环控制器

和上面的栗子只是换了个控制器而已，没太大变化

### 线程组结构树

[![img](/assets/jmeter/1896874-20200624135114727-1992946155.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135114727-1992946155.png)

 

### 循环控制器

[![img](/assets/jmeter/1896874-20200624135152670-110736680.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135152670-110736680.png)

填写 100，是代表循环100次

 

### 计数器

[![img](/assets/jmeter/1896874-20200624135201997-524006121.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135201997-524006121.png)

 

### 用户参数

[![img](/assets/jmeter/1896874-20200624135307421-755395650.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624135307421-755395650.png)

#### 重点一

-  ${__BeanShell(vars.getObject("result_mobile").get(${num}).get("mobile"))} 
-  ${__BeanShell()} ：执行BeanShell脚本，一般比较短的脚本可以用此方法来写，后面会再详细讲解这个函数

#### 重点二

-  vars.getObject("result_mobile").get(${num}).get("mobile") 
- result_mobile：是一个**数组**，即 JDBC Request 里的 Result variable name，每个元素的格式都是 {mobile=158000480001} 
- ${num}：上面计数器的值，每次递增 1，这里是**数组下标**的意思
- **总结：**获取 result_mobile 数组，每次取数组中第 num 个元素，从元素中取 mobile 键的值**【这是固定写法，只改Object 名、键名就行了】**

 

### 循环运行的结果（ mobile:${user_mobile} ）

![循环运行的结果](/assets/jmeter/1896874-20200624140851743-1166348122.gif)