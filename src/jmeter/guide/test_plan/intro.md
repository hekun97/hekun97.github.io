---
icon: pen-to-square
category:
  - JMter
tag:
  - 测试计划
  - 概述
order: 1
sticky: true

---

# 测试计划概述

## 一、测试计划的作用

- 测试计划描述了 Jmeter 在执行时，一系列的步骤
- 一个完整的测试计划包含了一个或多个【线程组、逻辑控制器、采样器、监听器、定时器、断言和配置元素】

 

## 二、添加元件

![img](/assets/jmeter/1896874-20200426132704174-1329470436.png)

- 通过右键点击树中的元件，选中要添加的元件
- 也可以通过合并（merge）或打开（open）从文件中加载和添加元件

 ::: tip

- 树中的每一个控件都能通过右边内容区显示
- 树中的每一个控件都能在树中随意拖动

:::

 

## 三、运行测试计划

- 可以通过`ctrl+r`运行测试计划
- 

![img](/assets/jmeter/1896874-20200426135000017-777407546.png)

::: tip

- 通过右侧的数字查看**活动线程数/线程总数**，这仅适用于本地运行的测试
- 分布式压测（使用客户端-服务器模式）时，master机不会显示所有远程salve机的线程总数。

::: 

::: warning

仅在**调试**测试计划时，才应该使用上面的 GUI 模式**【界面模式】**，如果实际运行**负载测试**的时候，应该使用CLI模式**【命令行模式、无界面模式】**

```bash
# 测试计划与结果，都在 %JMeter_Home%/bin 目录
jmeter -n -t test1.jmx -l result.jtl 
```

后续补充链接。

:::

 

## 四、暂停运行测试计划

![img](/assets/jmeter/1896874-20200426141238109-361881862.png)

两种暂停方式

- **硬中断（stop threads）**：停止线程（ctrl + .）
- **软中断（shutdown threads）**：关闭线程（ctrl + ,）

 

### stop threads

- 许多采样器（Samplers）都是可中断的，这意味着可以提前终止活动采样
- stop命令将检查所有线程是否已在默认超时（即5000 ms = 5秒）内停止
- 如果有线程还没被停止，则会发送一条信息；此时可以再发送一次 stop 命令，但如果还是失败的话，就得退出 Jmeter 来清理

::: warning

上述说的默认超时可以通过修改Jmeter配置文件（` jmeter.properties`）来改变 

```properties
# Number of milliseconds to wait for a thread to stop
jmeterengine.threadstop.wait = 5000
```

::: 

### shutdown threads

- 线程会在当前运行任务结束后停止，**不会中断**活动线程正在执行的任务
- 会出现一个【正在停止测试】的窗口（如下图），直到所有线程都运行完成了才会关闭
- 如果停止时间太久，也可以直接发【stop】命令

![img](/assets/jmeter/1896874-20200426141455471-928434893.png)

 ::: tip

- 在**Linux CLI**模式下，是没有快捷键来停止线程运行的，所以Jmeter 在 CLI模式下会监听特定端口上的命令（默认端口4445，可以通过修改配置文件（` jmeter.properties`）中的属性 `jmeterengine.nongui.port` 修改）
- 如果 4445 端口被占用了（比如，另一个Jmeter实例用了），Jmeter 将尝试监听下一个更高的端口，直到到达Jmeter属性 `jmeterengine.nongui.maxport `为止，该属性默认为4455

 :::

## 五、在CLI模式下，如何停止线程执行

在bin目录下，运行脚本

1. **硬中断**：`stoptest.cmd` / `stoptest.sh` 
2. **软中断**：`shutdown.cmd` / `shutdown.sh` 

::: warning 

只有同一个 host 下运行的脚本，JMeter 才会接受。

::::