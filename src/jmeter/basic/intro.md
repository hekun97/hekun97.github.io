---
icon: pen-to-square
category:
  - JMeter
tag:
  - 介绍
order: 2
sticky: true
---



# JMeter入门介绍


## 一、JMeter 概述  
JMeter 是 Apache 基金会下的开源性能测试工具，主要用于模拟高并发负载并分析系统性能。其设计灵活，支持多种协议和扩展，适用于服务端、网络、数据库等场景的性能验证。  

---

## 二、JMeter 支持的测试场景  
### 1. **Web 应用测试**  
   - HTTP/HTTPS 请求模拟（REST、SOAP、GraphQL）。  
   - 动态页面处理（Cookie、Session、Token 管理）。  
   - 静态资源（CSS/JS/图片）加载性能测试。  

### 2. **API 测试**  
   - RESTful API 功能验证与性能压测。  
   - WebSocket、MQTT 等实时协议测试。  
   - 结合 JSON/XML 提取器实现参数化与关联。  

### 3. **数据库性能测试**  
   - JDBC 压测（支持 MySQL、Oracle、PostgreSQL 等）。  
   - SQL 查询效率分析及慢查询定位。  

### 4. **消息队列测试**  
   - JMS（ActiveMQ、RabbitMQ）消息生产与消费性能测试。  
   - Kafka 生产者/消费者吞吐量验证。  

### 5. **其他协议测试**  
   - FTP 文件传输性能。  
   - TCP 协议测试。
   - LDAP 目录服务性能。  
   - SMTP、POP3、IMAP(S)邮件服务测试。  

### 6. 其他测试

- 本机命令或Shell脚本
- Java Objects

---

## 三、JMeter 的核心特征  
### 1. **开源免费**  
   - 无商业化限制，社区活跃，插件生态丰富。  

### 2. **多协议支持**  
   - 覆盖 HTTP、JDBC、JMS、FTP、TCP 等主流协议。  

### 3. **分布式压测**  
   - 支持 Master-Slave 模式，多台机器协同生成高并发流量。  

### 4. **跨平台性**  
   - 基于 Java 开发，支持 Windows、Linux、macOS。  

### 5. **丰富的监听器和报告**  
   - 内置 `Aggregate Report`、`Response Time Graph` 等结果分析工具。  
   - 支持生成 HTML 可视化报告（命令：`jmeter -g result.jtl -o report/`）。  

### 6. **逻辑控制与参数化**  
   - 通过 `CSV Data Set Config` 实现数据驱动测试。  
   - 使用 `If Controller`、`Loop Controller` 构建复杂场景。  

---

## 四、JMeter 的扩展性  
### 1. **插件机制**  
   - **插件管理器**：通过 `Plugins Manager` 安装第三方插件（如 `Custom Thread Groups`）。  
   - 常用插件示例：  
     - **WebDriver Sampler**：集成 Selenium 实现浏览器行为模拟。  
     - **Dummy Sampler**：生成模拟请求，用于调试脚本逻辑。  
     - **JSON/YAML Plugins**：增强 JSON 数据处理能力。  

::: tip

更多插件请参考：[插件列表](../guide/plugin/items.md)

:::

### 2. **自定义开发**  
   - **BeanShell/Groovy**：通过 JSR223 脚本编写自定义逻辑（如动态签名生成）。  
   - **开发自定义 Sampler**：实现私有协议压测（如 gRPC、Dubbo）。  
   - **扩展监听器**：自定义结果存储格式（如直接写入 InfluxDB）。  

### 3. **与其他工具集成**  
   - **CI/CD 流水线**：通过 Jenkins，Maven，Gradle第三方开源库轻松进行持续集成。  
   - **监控工具**：结合 Grafana + InfluxDB 实时展示性能数据。  

### 4. 其它拓展性

- 随意增删的采样器
- 负载统计信息可以增删定时器
- 数据分析和可视化插件提供了出色的扩展性和个性化
- JMeter自带方法可以向测试计划提供动态输入或数据处理能力

---

## 五、JMeter 的实际使用场景  
::: tip

主要做这几方面的测试。

- 接口测试
- 压力测试
- 分布式压力测试
- 测试 Restful 风格的API

:::

### 1. **电商促销活动性能保障**  

   - **场景**：模拟秒杀场景（如 10,000 用户瞬时抢购）。  
   - **步骤**：  
     1. 使用 `Ultimate Thread Group` 模拟流量尖峰。  
     2. 结合 Redis 分布式锁验证库存扣减准确性。  
     3. 监控 MySQL 慢查询日志，优化索引。  

### 2. **微服务 API 压力测试**  
   - **场景**：验证订单服务 API 的吞吐量（目标 500 TPS）。  
   - **步骤**：  
     1. 使用 `HTTP Request` 发送订单创建请求。  
     2. 参数化用户 Token 和商品 ID。  
     3. 通过 `Backend Listener` 将结果推送至 InfluxDB。  

### 3. **数据库批量写入性能优化**  
   - **场景**：测试批量插入 10 万条数据的效率。  
   - **步骤**：  
     1. 配置 JDBC 连接池，设置批量提交大小（Batch Size）。  
     2. 使用 `JSR223 Sampler` 生成随机测试数据。  
     3. 对比不同批量提交策略的耗时（如每 1000 条提交一次）。  

### 4. **消息队列稳定性验证**  
   - **场景**：Kafka 集群在高负载下的消息堆积情况。  
   - **步骤**：  
     1. 使用 `JMS Publisher` 发送百万级消息。  
     2. 监控 Kafka 消费者组的 Lag 值。  
     3. 调整消费者线程数优化吞吐量。  

### 5. **混合场景性能测试**  
   - **场景**：模拟用户登录 → 浏览商品 → 下单的完整流程。  
   - **步骤**：  
     1. 使用 `Transaction Controller` 将多个请求合并为事务。  
     2. 设置 `Random Timer` 模拟用户操作间隔。  
     3. 分析 90% 响应时间是否低于 2 秒。  

---

## 六、总结  
JMeter 凭借其灵活性、扩展性和社区支持，成为性能测试领域的标杆工具。无论是传统 Web 应用、微服务架构，还是新兴技术栈（如 Kafka、gRPC），JMeter 均可通过插件或脚本快速适配。实际使用中需结合场景合理设计测试计划，并利用分布式压测和监控工具提升效率。