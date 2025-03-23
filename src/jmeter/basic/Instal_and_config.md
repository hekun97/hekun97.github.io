---
icon: pen-to-square
category:
  - JMeter
tag:
  - 安装
  - 配置
order: 3
sticky: true
---

# JMeter安装与配置

## 一、环境搭建

1. 安装JDK；
2. 安装JMeter。

::: tip

- 安装过程过程比较简单自己从网络上查找教程，记得将语言改为中文。

- 还有Mac下如果关闭终端后不能使用，记得按如下步骤修改。

  1. **编辑**：`vim ~/.zshrc`

  2. **添加**：在`.zshrc`文件中新增一行`source ~/.bash_profile`
  
  3. **使环境变量生效**：`source ~/.zshrc`

:::

## 二、目录详解

### 1. 安装目录

![JMeter安装目录](/assets/jmeter/image-20250322223940590.png)

| 文件夹         | 作用                                                         |
| -------------- | ------------------------------------------------------------ |
| bin            | 包含启动、配置等相关命令自己写的脚本默认另存为该目录下       |
| docs           | 官方接口文档（可点击`api/index.html`查看），二次开发需要了解的一些接口 |
| extras         | 辅助库，持续集成会用到（后面讲）                             |
| lib            | 1. 存放各种 Jmeter 核心库的源码 jar 包<br />2. 用户扩展所依赖的jar包<br />3. 存放自己二次开发的 jar包 |
| lib\ext        | 官方提供的第三方插件                                         |
| license        | 包含 non-ASF 软件的许可证                                    |
| printable_docs | 离线的帮助文档，可以查看函数等内容<br />1. usermanual子目录下的内容是JMeter的用户手册文档；<br />2. usermanual下`component_reference.html`是最常用到的核心元件帮助文档。 |
| LICENSE        | JMeter 许可说明                                              |
| NOTICE         | JMeter 简单信息说明                                          |
| README.md      | JMeter 官方基本介绍                                          |

::: info

printable_docs的demos子目录下有一些常用的JMeter脚本案例，可以作为参考。

:::

### 2. bin目录（重点）

![bin目录](/assets/jmeter/image-20250322224154182.png)

| 文件              | 作用                                                         |
| ----------------- | ------------------------------------------------------------ |
| jmeter.properties | JMeter 核心配置文件，各种配置基本在这完成                    |
| log4j.conf        | JMeter 日志配置管理                                          |
| jmeter.log        | JMeter 运行日志记录，什么输出信息、警告、报错都在这里进行了记录 |
| jmeter.bat        | windows 下 jmeter 的**启动**文件，**带**cmd窗口              |
| jmeterw.cmd       | windows 下 jmeter 的**启动**文件，**不带**cmd窗口            |
| shutdown.cmd      | windows 下 jmeter 的**关闭**文件                             |
| stoptest.cmd      | windows 下 jmeter 停止测试的文件                             |
| jmeter-server.bat | windows 下 jmeter 服务器模式的启动文件                       |
| jmeter-server     | mac 或者 Liunx 分布式压测使用的启动文件                      |

## 三、修改配置文件（jmeter.properties）

文件所在位置：jmeter安装目录下`bin/jmeter.properties`，**是Jmeter核心配置项文件**

 ::: tip

将需要修改的属性值，复制粘贴到同目录下的`user.properties `文件中。

**好处：**当Jmeter升级时，直接复制该配置文件到新的版本即可，避免修改项需要重新应用

:::

::: info

**官方文档：**https://jmeter.apache.org/usermanual/properties_reference.html

:::

### 1. 默认语言设置

- language=en：默认英文
- language=zh_CN：默认中文

::: warning

这个只有在 jmeter.properties 文件中声明才会生效，官方也提醒了

:::



### 2. 配置默认编码格式

```properties
# 默认ISO-8859-1
# sampleresult.default.encoding=ISO-8859-1
# 可以改成常用的UTF-8
sampleresult.default.encoding=UTF-8  
```

### 3. 输出测试报告模板格式 

```properties
jmeter.save.saveservice.output_format=csv 
```

### 4. 捕捉cookie

Cookies应该存储为变量

```properties
# 默认【关闭】
# CookieManager.save.cookies=false
# 将cookie存储为变量
CookieManager.save.cookies=true
```

### 5. 快捷方式（ctrl+数字0-9）

```properties
gui.quick_0=ThreadGroupGui
gui.quick_1=HttpTestSampleGui
gui.quick_2=RegexExtractorGui
gui.quick_3=AssertionGui
gui.quick_4=ConstantTimerGui
gui.quick_5=TestActionGui
gui.quick_6=JSR223PostProcessor
gui.quick_7=JSR223PreProcessor
gui.quick_8=DebugSampler
gui.quick_9=ViewResultsFullVisualizer 
```

### 6. post请求，若不添加Content-Type，则不会默认添加Content-type

在5.0版本之前默认是true

```properties
# 默认
# post_add_content_type_if_missing=false
# 添加Content-Type: application/x-www-form-urlencoded
post_add_content_type_if_missing=true 
```

### 7. 配置远程主机 host 

```properties
remote_hosts=127.0.0.1
```

