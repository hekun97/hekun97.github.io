---
icon: pen-to-square
category:
  - JMeter
tag:
  - Assert
  - Json
order: 3
sticky: true
---



# 详解 JSON 断言

## 简单介绍

可以对 JSON 格式的响应内容进行断言

 

## JSON 断言

[![img](/assets/jmeter/1896874-20200825114057201-753123499.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825114057201-753123499.png)

 

## JSON 断言界面介绍

[![img](/assets/jmeter/1896874-20200825114059454-1366245387.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825114059454-1366245387.png)

#### 字段说明

- **Assert JSON Path exists：**需要断言的 JSON 表达式
- **Additionally assert value：**如果要根据值去断言，请勾选
- **Match as regular expression：**如果要根据正则表达式去断言，请勾选
- **Expected Value：**期望值
- **Expect null：**如果期望是 null 则勾选
- **Invert assertion：**取反

[![img](/assets/jmeter/1896874-20200825114440877-1742335282.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825114440877-1742335282.png)

 

## 判断方式

- 如果响应结果不是 json 格式的，fail
- 如果 json path 找不到元素，fail
- 如果 json path 找到元素，没有设置条件，pass
- 如果 json path 找到元素，但不符合条件，fail
- 如果 json path 找到元素，且符合条件，pass
- 如果 json path 返回的是一个数组，**会迭代判断**是否有元素符合条件，有则 pass，无则 fail

下面的栗子就针对以上几种情况举的栗子

 

## 实际栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200825150054493-1019881582.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150054493-1019881582.png)

 

#### 响应非 json 格式的 JSON 断言

[![img](/assets/jmeter/1896874-20200825150620078-406872574.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150620078-406872574.png)

 

#### 注册接口的 JSON 断言

[![img](/assets/jmeter/1896874-20200825150807957-346675469.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150807957-346675469.png)

可以成功拿到 ret 这个元素，并通过值断言

 

#### 登录接口的 JSON 断言

[![img](/assets/jmeter/1896874-20200825150832137-1670035187.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150832137-1670035187.png)

不存在的元素

 

#### 登录状态接口的 JSON 断言

[![img](/assets/jmeter/1896874-20200825150844301-2066685874.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150844301-2066685874.png)

没有勾选断言条件

 

#### 个人资料接口的 JSON 断言

[![img](/assets/jmeter/1896874-20200825150856598-1563596976.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150856598-1563596976.png)

找到 uuid 元素并断言

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200825150925527-233087400.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200825150925527-233087400.png)