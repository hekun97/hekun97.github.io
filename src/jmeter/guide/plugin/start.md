# jmeter插件入门篇 

## **前言**

- jmeter4.0以上，如现在最新的5.2.1版本是有**集成插件**的
- 只需要在官网下载 plugins-manager.jar 包，放在jmeter安装路径的`lib/ext`目录下即可使用：https://jmeter-plugins.org/install/Install/
- 但并不能满足所有需求，仍然需要安装其他插件
- https://jmeter-plugins.org/stats/：可以查看目前最流行的插件

 

## **Jmeter plugin的分类**

- **Standard Set组件：**对线程组进行了扩展，扩充了许多丰富图表的**监听器**，可以用Jmeter来监控服务器
- **Extras Set组件：**支持**远程监控**，图表展示更加丰富
- **Extras with Libs Set组件：**提供对**JSON**的支持，新增了JMS取样器
- **WebDriver Set组件：**与**WebDriver**进行了集成，进行自动化测试
- **Hadoop Set组件：**提供**Hadoop**测试组件

 

## 安装plugins-manager后

![img](/assets/jmeter/1896874-20200507092957280-2025756042.png)

 ::: warning 

- 要保持在网络通畅的情况下才点击哦，不然下载东西会很慢然后就一直卡着...很难受

- 下图，**Installed Plugins**是我已安装的插件，基本涵盖后面会用到的，也是主流的插件；
- **Available Plugins**可以找到未安装的插件进行安装

:::

![img](/assets/jmeter/1896874-20200507093140184-1609186660-20250324212859164.png)
