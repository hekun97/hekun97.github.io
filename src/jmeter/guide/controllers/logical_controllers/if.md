---
icon: pen-to-square
category:
  - JMeter
tag:
  - Controller
  - if
order: 2
sticky: true
---



# 详解 If 控制器

## 简单介绍

可以通过条件来控制是否运行其下面的测试元件（子元素）

 

## If 控制器

[![img](/assets/jmeter/1896874-20200819162227921-246062408.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819162227921-246062408.png)

 

## If 控制器界面介绍

[![img](/assets/jmeter/1896874-20200819162235061-2061034751.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819162235061-2061034751.png)

- **Expression (must evaluate to true or false) ：**表达式（值必须是 true 或 false )，也就是说，在右边文本框中输入的条件值必须是 true 或 false（默认情况下）
- **Interpret Condition as Variable Expression?：**默认勾选，将条件解释为变量表达式（需要使用 ${__jexl3 } 或 ${__groovy } 表达式）
- **Evaluate for all children?：**条件作用于每个子项（具体理解见后面的栗子说明）

 

#### 黄色感叹号那一段文字

就是**建议**要选中 Interpret Condition as Variable Expression?，然后通过 ${__jexl3 } 或 ${__groovy } 表达式返回 true 或 false

 

#### 扩展

如果要测试上一个样本（sampler）是否成功（code=200），则可以使用 ${JMeterThread.last_sample_ok} 

 

## 最简单的栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200819170337429-835416677.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819170337429-835416677.png)

 

#### 第一个 if 控制器

[![img](/assets/jmeter/1896874-20200819170343323-2040514106.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819170343323-2040514106.png)

**注意：**如果取消选中 Interpret Condition as Variable Expression?，这可能会导致性能损失很大，并使测试的可扩展性降低，所以不推荐不勾选

 

#### 第二个使用 groovy 表达式的 if 控制器

[![img](/assets/jmeter/1896874-20200819170525982-854293570.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819170525982-854293570.png)

 

#### 第三个使用 jexl3 表达式的 if 控制器

[![img](/assets/jmeter/1896874-20200819170530136-283913280.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819170530136-283913280.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200819170532720-262429939.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819170532720-262429939.png)

三个 if 控制器的表达式都是 true

 

## Expression 中使用变量的栗子

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200819172239217-501246938.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172239217-501246938.png)

 

#### 用户自定义变量

[![img](/assets/jmeter/1896874-20200819172245701-1736328760.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172245701-1736328760.png)

 

#### if 控制器

[![img](/assets/jmeter/1896874-20200819172250305-1554486933.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172250305-1554486933.png)

因为是字符串，所以要加双引号哦 "" 

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200819172255838-1670027662.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172255838-1670027662.png)

 

## **勾选 Evaluate for all children? 的栗子**

#### 线程组结构树

[![img](/assets/jmeter/1896874-20200819172301944-1058435660.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172301944-1058435660.png)

一共三个请求，第二个请求加了个后置处理器

 

#### 用户自定义变量

[![img](/assets/jmeter/1896874-20200819172322542-25355160.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172322542-25355160.png)

 

#### if 控制器

[![img](/assets/jmeter/1896874-20200819172418715-1144667542.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172418715-1144667542.png)

因为是字符串，所以要加双引号哦 ""

 

#### JSR223 后置处理器

[![img](/assets/jmeter/1896874-20200819172351458-626566538.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172351458-626566538.png)

 

#### 查看结果树

[![img](/assets/jmeter/1896874-20200819172402423-1217773813.png)](https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819172402423-1217773813.png)

 

#### 总结

勾选了 Evaluate for all children? 意味着它的每个子元素在运行前都会运行一次 if 控制器里面的条件表达式，看看是否还是 true，是的话就可以运行，false 就不运行