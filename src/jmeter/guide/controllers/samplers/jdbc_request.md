---
icon: pen-to-square
category:
  - JMeter
tag:
  - samplers
  - JDBC
  - request
order: 3
sticky: true
---



# JDBC Request

## 前言

- JDBC Request 主要是向数据库发送一个 JDBC 请求（sql 语句），并获取返回的数据集
- 它需要和数据库连接池配置（JDBC Connection Configuration）一起使用，可参考此篇博文：https://www.cnblogs.com/poloyy/p/13182706.html

 

## JDBC Request

[![img](/assets/jmeter/1896874-20200623201358973-1094593440.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623201358973-1094593440.png)

 

## JDBC Request 界面介绍

[![img](/assets/jmeter/1896874-20200623201401754-685119106.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623201401754-685119106.png)

 

#### 字段含义

| 字段                        | 含义                                                         |
| --------------------------- | ------------------------------------------------------------ |
| Variable Name Bound to Pool | 数据库连接池配置的名称                                       |
| Query Type                  | sql 语句的类型                                               |
| SQL Query                   | sql 语句语句结尾不需要添加 ; 变量用 ? 占位                   |
| Parameter values            | 需要传递的变量值，多个变量用 , 分隔                          |
| Parameter types             | 变量类型                                                     |
| Variable Names              | 保存sql语句返回的数据和返回数据的总行数用 , 分隔跳过列用空   |
| Result Variable Name        | 一个 Object 变量存储所有返回值                               |
| Query timeout(s)            | 超时时间；默认0，代表无限时间                                |
| Limit ResultSet             | 和 limit 类似作用，限制 sql 语句返回结果集的行数             |
| Handle ResultSet            | 如何定义 callable statements 返回的结果集；默认是存储为字符串 |

后续通过各种栗子来深入理解常用字段的含义

 

## 举栗子的前提

需要自己找一个有数据库的数据来练手哦！这里拿的表数据如下哈

[![img](/assets/jmeter/1896874-20200623214842008-300494479.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623214842008-300494479.png)

 

## 只有 sql 语句的栗子

#### JDBC Request

[![img](/assets/jmeter/1896874-20200623214848277-1330496656.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623214848277-1330496656.png)

没啥特别的，平时 sql 怎么写，这里就怎么写

 

#### 运行结果

[![img](/assets/jmeter/1896874-20200623214855093-1093252.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623214855093-1093252.png)

 

## 参数化的栗子

#### JDBC Request

[![img](/assets/jmeter/1896874-20200624094037580-1947409040.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624094037580-1947409040.png)

 

#### 运行结果

[![img](/assets/jmeter/1896874-20200624094041915-1046700033.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624094041915-1046700033.png)

 

#### 知识点

- 有几个问号，Parameter value、Parameter type 填写**值的数量要保持一致**，用,分隔
- 问号其实是**占位符**，如果学过编程的童鞋应该也知道这种写法，可以**避免 SQL 注入**的问题
- sql 中**使用占位符**时，**Query Type** **必须选择** Prepared Select Statement 或者 Prepared Update Statement 
- 我们可以用 Jmeter 变量去赋值，看下面栗子

 

## 参数化+变量的栗子

#### JDBC Request

[![img](/assets/jmeter/1896874-20200624095106562-1162528683.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624095106562-1162528683.png)

 

#### 运行结果

[![img](/assets/jmeter/1896874-20200624095112131-1376926478.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624095112131-1376926478.png)

 

#### 知识点

- 如果在 sql 语句中使用变量，且是字符串类型，需要加上引号（前提是变量值没有加引号），如 '${name}' 
- 如果在 Parameter values 中使用变量，且是字符串类型，不需要加上引号，只需要在 Parameter types 里写明为 varchar 即可

 

## 使用 Variable Names 的栗子

#### 结构树

[![img](/assets/jmeter/1896874-20200623222720043-1192814440.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623222720043-1192814440.png)

 

#### JDBC Request

[![img](/assets/jmeter/1896874-20200623222723631-1531232570.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623222723631-1531232570.png)

添加一个 **Debug Sampler** 就知道这个字段有什么作用了

 

#### JDBC Request 运行结果

[![img](/assets/jmeter/1896874-20200623222727819-961346912.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623222727819-961346912.png)

 

#### 调试取样器运行结果

[![img](/assets/jmeter/1896874-20200623222730613-1263025902.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623222730613-1263025902.png)

 

#### 知识点

- **mysql：**数据库连接池对象
- **a_#、b_#、c_#、d_#：**代表行数
- **a_1：**第 1 行、第 1 列
- **b_2：**第 2 行、第 2 列
- **c_3：**第 3 行、第 3 列
- **d_3：**第 3 行、第 4 列
- 以此类推....
- 一般如果 HTTP 请求需要用到 sql 查出来的数据的话，就会用到 Variable names 这个字段

 

## 使用 Result variable name 的栗子

#### JDBC Request

[![img](/assets/jmeter/1896874-20200624100013276-1777987469.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624100013276-1777987469.png)

 

#### Debug Sampler 运行结果

[![img](/assets/jmeter/1896874-20200624100019239-995095454.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200624100019239-995095454.png)

 

#### 知识点

该变量是个数组，每一个元素代表一条记录

 

#### 重点

关于通过 Variable names、Result variable name 获取到的值**如何提取**，我们将在下一篇文章中详细讲解

 

## 使用 Limit ResultSet 的栗子

#### JDBC Request

 [![img](/assets/jmeter/1896874-20200623214923854-724753133.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623214923854-724753133.png)

 

#### 运行结果

[![img](/assets/jmeter/1896874-20200623214940420-609405285.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623214940420-609405285.png)

 

#### 知识点

- Limit ResultSet 是对 sql 语句返回的结果集限制行数
-  limit **10** 限制只返回了 10 条数据，然后 Limit ResultSet = **6** 限制结果集最终只返回 6 条数据