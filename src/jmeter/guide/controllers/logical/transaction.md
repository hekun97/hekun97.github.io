---
icon: pen-to-square
category:
  - JMeter
tag:
  - Controller
  - Transaction
order: 3
sticky: true
---



# 事务控制器

## 简单介绍

可以添加多个取样器（sampler），这样就把多个取样器当做一个完整的事务

 

## 事务控制器（Transaction Controller ）

[![img](/assets/jmeter/1896874-20200820130932290-969853787.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820130932290-969853787.png)

 

## 事务控制器界面介绍

[![img](/assets/jmeter/1896874-20200820130938321-902072916.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820130938321-902072916.png)

- **Generate Parent Sample：**如果选中，事务控制器将作为其他取样器的父级样本，否则事务控制器仅作为独立的样本
- **Include duration of timer and pre-post processors in generated sample：**是否在生成的样本中包括计时器，预处理和后处理的延迟时间

 

## 最简单的栗子（两项都不勾选）

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200820132146366-710523464.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132146366-710523464.png)

一共 6 个接口

 

#### 事务控制器

[![img](/assets/jmeter/1896874-20200820132204472-1953462344.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132204472-1953462344.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200820132207623-546224161.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132207623-546224161.png)

事务控制器和其他取样器是同级的

 

#### 聚合报告

[![img](/assets/jmeter/1896874-20200820132224547-2067208479.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132224547-2067208479.png)

事务控制器的响应时间 = 其他接口的响应时间相加

 

## 勾选 Generate Parent Sample 的栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200820132146366-710523464.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132146366-710523464.png)

一共 6 个接口

 

#### 事务控制器

[![img](/assets/jmeter/1896874-20200820132456522-50286740.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132456522-50286740.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200820132502228-824201754.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132502228-824201754.png)

事务控制器嵌套了其他接口

 

#### 聚合报告

[![img](/assets/jmeter/1896874-20200820132620771-2137782477.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820132620771-2137782477.png)

只显示事务控制器的数据

 

## 勾选 Include duration.... 的栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200820133438314-1883559057.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820133438314-1883559057.png)

一共 6 个接口，多了个定时器

 

#### 事务控制器

[![img](/assets/jmeter/1896874-20200820133550748-1519938186.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820133550748-1519938186.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200820133555273-635476724.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820133555273-635476724.png)

 

#### 聚合报告

[![img](/assets/jmeter/1896874-20200820133602181-286785120.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820133602181-286785120.png)

可以看到，事务控制器的时间 = 其他接口的响应时间 + 定时器 + 前后置处理器的时间

 

#### 当不勾选 include duration of... 时，聚合报告是怎么样的呢

[![img](/assets/jmeter/1896874-20200820133739163-162449753.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200820133739163-162449753.png)

事务控制器的时间 = 其他接口的响应时间