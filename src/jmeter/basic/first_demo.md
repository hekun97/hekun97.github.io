---
icon: pen-to-square
category:
  - JMeter
tag:
  - hello world
order: 5
sticky: true
---

# 第一个测试计划

## 需求

使用JMeter使用谷歌搜索【hello world】，并查看请求和响应信息

## 操作步骤

1. 启动JMeter；

2. 在【测试计划】下添加【线程组】；

3. 在【线程组】下添加【HTTP请求】取样器；

4. 填写【HTTP请求】的相关请求数据；

   ![HTTP请求-谷歌](/assets/jmeter/image-20250323003936442.png)

   ::: tip

   如果【参数】中的【编码】不勾选，那么浏览器将无法直接识别【hello world】中间的空格。

   :::

5. 在【线程组】下添加【察看结果树】监听器；

6. 点击【启动】按钮运行，并查看结果。

   ![查看运行结果](/assets/jmeter/image-20250323004245052.png)

## 2. 重点组件

- 线程组
- HTTP取样器
- 察看结果树

::: tip

这三个组件会经常使用，将在后面重点讲解。

:::