---
icon: pen-to-square
category:
  - JMeter
tag:
  - ctx
  - Beanshell
order: 2
sticky: true
---

# BeanShell 内置变量 ctx

## 前提

BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子

 

## 简单介绍

- ctx 变量是JMeter JSR223功能最强大的内置变量之一
- 通过它可以轻松的访问当前线程的上下文
- 在 JMeter 内部，ctx 映射为 org.apache.jmeter.threads 的 JMeterContext 类
- 由于JMeterContext 不具有线程安全性，故仅适用于在单线程中使用 
- 官方文档： https://jmeter.apache.org/api/org/apache/jmeter/threads/JMeterContext.html

 

## ctx 常用方法

### getVariables

#### 方法声明

public JMeterVariables getVariables()

 

#### 功能

获取JMeter当前线程的所有变量

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827094704171-915967834.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827094704171-915967834.png)

 

### getProperties

#### 方法声明

public Properties getProperties()

 

#### 功能

获取所有的JMeter属性

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827094815955-1212742910.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827094815955-1212742910.png)

 

### getPreviousResult

#### 方法声明

public SampleResult getPreviousResult()

 

#### 功能

获取前一个取样器的结果

 

#### 栗子

获取前一个 sampler 的响应内容

[![img](/assets/jmeter/1896874-20200827095917601-2050729178.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827095917601-2050729178.png)

 

### getCurrentSampler

#### 方法声明

public Sampler getCurrentSampler()

 

#### 功能

获取当前取样器对象

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827101320446-424314270.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827101320446-424314270.png)

 

### getPreviousSampler

#### **方法声明**

public Sampler getPreviousSampler()

 

#### 功能

获取前一个取样器对象

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827101543374-1909788261.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827101543374-1909788261.png)

 

### getThreadNum

#### 方法声明

public int getThreadNum()

 

#### 功能

获取当前线程组下的线程编号(编号从0开始)

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827101754777-226283564.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827101754777-226283564.png)

 

### getThread

#### 方法声明

public JMeterThread getThread()

 

#### 功能

获取**线程**对象

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827102423207-759017595.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827102423207-759017595.png)

 

### getThreadGroup

#### 方法声明

public AbstractThreadGroup getThreadGroup()

 

#### 功能

获取**线程组**对象

 

#### 栗子

[![img](/assets/jmeter/1896874-20200827102643259-1775651183.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827102643259-1775651183.png)