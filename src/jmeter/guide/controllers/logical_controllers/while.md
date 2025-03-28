---
icon: pen-to-square
category:
  - JMeter
tag:
  - Controller
  - while
order: 5
sticky: true
---



# 详解 while 控制器

## 简单介绍

和 java 里面的 while 循环一样，将一直运行其所有子项，直到条件为 false 为止

 

## while 控制器

[![img](/assets/jmeter/1896874-20200824132108346-1144300682.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200824132108346-1144300682.png)

 

## while 控制器界面介绍

[![img](/assets/jmeter/1896874-20200824132112574-1164467732.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200824132112574-1164467732.png)

#### condition 可以填入的值

- **空白：**节点下最后一个 sampler 失败，退出循环
- **LAST：**节点下最后一个sampler失败，退出循环，如果这个失败的 sampler 在循环前就运行失败了，那么【While Controller】将不会执行
- **其它：**当条件等于 false 时退出（或不进入）循环

 

#### 其它参考的值

-  ${VAR} ：变量VAR在其它项中被赋值为 **false**
-  ${__javaScript(${C}==10)} ：针对**数字型变量**进行对比判断
-  ${__javaScript("${C}"=="abc")} ：针对**字符串类型变量**进行对比判断，区别在于双引号
-  ${_P(property)} ：属性被赋予 **false**

 

暂时不举栗子 感觉没啥实际应用的场景