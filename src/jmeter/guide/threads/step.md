---
icon: pen-to-square
category:
  - JMeter
tag:
  - Thread
  - Stepping
order: 6
sticky: true
---



# Stepping Thread Group

Stepping Thread Group：阶梯加压线程组

## 前言

- Stepping Thread Group是第一个自定义线程组
- 但，随着版本的迭代，已经有更好的线程组代替Stepping Thread Group了【Concurrency Thread Group】，所以说Stepping Thread Group已经是过去式了
- 但，咱们还是要介绍下的滴

 

## Stepping Thread Group的特性

- 有预览图显示估计的负载
- 可延迟启动线程组
- 可持续增加线程负载
- 可设置最大负载的持续运行时间

 

## Stepping Thread Group的作用

- 减少服务器的瞬时压力，做性能测试应该逐步增加压力，而不是瞬时加压
- 逐步增压越平缓越好，更容易从结果看到多少压力值下，有性能瓶颈

 

## Stepping Thread Group参数详解

![img](/assets/jmeter/1896874-20200507134558001-1186141310.png)

- **this group will start：**表示总共要启动的线程数；若设置为 100，表示总共会加载到 100 个线程
- **first，wait for：**从运行之后多长时间开始启动线程；若设置为 0 秒，表示运行之后立即启动线程
- **then start：**初次启动多少个线程；若设置为 0 个，表示初次不启动线程
- **next add：**之后每次启动多少个线程；若设置为 10个，表示每个梯次启动 10 个线程
- **threads every：**当前运行多长时间后再次启动线程，即每一次线程启动完成之后的持续时间；若设置为 30 秒，每梯次启动完线程之后再运行 30 秒
- **using ramp-up：**启动线程的时间；若设置为 5 秒，表示每次启动线程都持续 5 秒（和基础线程组的ramp-up一样意思）
- **then hold load for：**线程全部启动完之后持续运行多长时间，如图：设置为 60 秒，表示 100 个线程全部启动完之后再持续运行 60 秒
- **finally，stop/threads every：**多长时间释放多少个线程；若设置为 5 个和 1 秒，表示持续负载结束之后每 1 秒钟释放 5 个线程

 

 

#### 从负载预览图，读懂所有参数

![img](/assets/jmeter/1896874-20200507134553154-1438745374.png)

- 从第0秒开始启动线程，每 5 秒内启动10个线程并且运行30秒，以此循环，直到一共启动了 100 个线程
- 当已启动 100 个线程后，持续负载运行60秒
- 持续负载运行60秒后，每 1 秒释放五个线程，直到全部线程被释放**【注意：线程释放过程中，线程依然在运行】**

 

## 结合Active Threads Over Time

- 运行Stepping Thread Group需要和Active Threads Over Time结合起来使用，这样能看到动态的阶梯加压效果
- 可以看到和Stepping Thread Group负载预览图基本一致，证明加压效果是正常的

![img](/assets/jmeter/1896874-20200508131041999-2147157393.png)