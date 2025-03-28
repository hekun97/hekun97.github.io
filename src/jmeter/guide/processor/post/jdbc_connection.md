---
icon: pen-to-square
category:
  - JMeter
tag:
  - config
  - JDBC
  - detail
order: 1
sticky: true
---



# 详解 JDBC Connection Configuration

## 前言

发起 jdbc 请求前，需要有 JDBC 连接配置，即先连上数据库，才能查询数据库

 

## JDBC Connection Configuration

[![img](/assets/jmeter/1896874-20200623173540819-2100232972.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623173540819-2100232972.png)

 

## JDBC Connection Configuration 界面介绍

[![img](/assets/jmeter/1896874-20200623173207242-1666250297.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623173207242-1666250297.png)

 

### Variable Name for created pool

- JDBC Connection Configuration 算是一个数据库连接池配置
- Variable Name ：数据库连接池的名称
- 一个测试计划可以有多个 JDBC Connection，只要名称不重复就行

 

### Connection pool Configuration

连接池参数配置，基本保持默认就行了，可根据需要进行修改 

| 字段                           | 含义                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| Max Number of Connections      | 最大连接数；做性能测试时，建议填 0如果填了10，则最大连接10个线程 |
| Max Wait(ms)                   | 在连接池中取回连接最大等待时间，单位毫秒                     |
| Time Between Eviction Runs(ms) | 线程可空闲时间，单位毫秒如果当前连接池中某个连接在空闲了 time Between Eviction Runs Millis 时间后任然没有使用，则被物理性的关闭掉 |
| Auto Commit                    | 自动提交sql语句，如：修改数据库时，自动 commit               |
| Transaction isolation          | 事务隔离级别                                                 |
| Preinit Pool                   | 立即初始化连接池如果为 False，则第一个 JDBC 请求的响应时间会较长，因为包含了连接池建立的时间 |

 

### Connection Validation by Pool

验证连接池是否可响应

| 字段                             | 含义                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| Test While Idle                  | 当连接空闲时是否断开                                         |
| Soft Min Evictable Idle Time(ms) | 连接在池中处于空闲状态的最短时间                             |
| Validation Query                 | 一个简单的查询，用于确定数据库是否仍在响应默认为jdbc驱动程序的 isValid() 方法，适用于许多数据库 |

 

### Database Connection Configuration

### 数据库连接配置

| 字段                  | 含义                       |
| --------------------- | -------------------------- |
| Database URL          | 数据库连接 URL             |
| JDBC Driver class     | 数据库驱动                 |
| Username              | 数据库登录用户名           |
| Password              | 数据库登录密码             |
| Connection Properties | 建立连接时要设置的连接属性 |

 

#### Database URL 举例

jdbc:mysql://localhost:3306/dbname?useUnicode=true&characterEncoding=UTF8&autoReconnect=true&allowMultiQueries=true(允许执行多条 sql)

 

#### 常见数据库的连接 URL和驱动

| 数据库     | 驱动                                         | URL                                                  |
| ---------- | -------------------------------------------- | ---------------------------------------------------- |
| MySQL      | com.mysql.jdbc.Driver                        | jdbc:mysql://host:port/{dbname}                      |
| PostgreSQL | org.postgresql.Driver                        | jdbc:postgresql:{dbname}                             |
| Oracle     | oracle.jdbc.driver.OracleDriver              | jdbc:oracle:thin:user/pass@//host:port/service       |
| sqlServer  | com.microsoft.sqlserver.jdbc.SQLServerDriver | jdbc:sqlserver://host:port;databaseName=databaseName |

 

 

## 引入 jar 包

使用不同的数据库，需要引入不同的 jar 包，一共有两种方式，不过前提是下载好了 jar 包

 

### 下载 mysql jar 包

1. 进入：https://dev.mysql.com/downloads/connector/j/
2. 下载解压出 jar 包

[![img](/assets/jmeter/1896874-20200623200423361-1479531820.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623200423361-1479531820.png)

### 引入方式一

将下好的 jar 包直接放到 jmeter 的 lib 目录下，然后重新启动就行了

[![img](/assets/jmeter/1896874-20200623200544517-1763518964.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623200544517-1763518964.png)

 

### 引入方式二

在测试计划底部添加 jar 包即可

[![img](/assets/jmeter/1896874-20200623200749257-1764974451.png)](https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200623200749257-1764974451.png)

 