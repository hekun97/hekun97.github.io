const e=JSON.parse('{"key":"v-4f403d3a","path":"/SoftwareTest/PerformanceTest/day04.html","title":"性能测试工具JMeter（三）","lang":"zh-CN","frontmatter":{"title":"性能测试工具JMeter（三）","order":4,"tag":"JMeter","description":"1. Jmeter直连数据库 1.1. 准备工作 启动数据库； 加载mysql的JDBC驱动； 方法1：在测试计划下方的位置，点击浏览添加JDBC的jar包（mysql-connector-java-8.0.26.jar）； 加载jar 方法2：将JDBC的jar拷贝到jmeter安装目录下的lib目录，并重启jmeter。 在配置元件中添加JDBC Connection Configuration，然后配置JDBC连接池的参数；","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/SoftwareTest/PerformanceTest/day04.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"性能测试工具JMeter（三）"}],["meta",{"property":"og:description","content":"1. Jmeter直连数据库 1.1. 准备工作 启动数据库； 加载mysql的JDBC驱动； 方法1：在测试计划下方的位置，点击浏览添加JDBC的jar包（mysql-connector-java-8.0.26.jar）； 加载jar 方法2：将JDBC的jar拷贝到jmeter安装目录下的lib目录，并重启jmeter。 在配置元件中添加JDBC Connection Configuration，然后配置JDBC连接池的参数；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-29T04:14:15.000Z"}],["meta",{"property":"article:tag","content":"JMeter"}],["meta",{"property":"article:modified_time","content":"2024-02-29T04:14:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能测试工具JMeter（三）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-29T04:14:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Jmeter直连数据库","slug":"_1-jmeter直连数据库","link":"#_1-jmeter直连数据库","children":[{"level":3,"title":"1.1. 准备工作","slug":"_1-1-准备工作","link":"#_1-1-准备工作","children":[]},{"level":3,"title":"1.2. 编写JDBC脚本步骤","slug":"_1-2-编写jdbc脚本步骤","link":"#_1-2-编写jdbc脚本步骤","children":[]}]},{"level":2,"title":"2. 逻辑控制器","slug":"_2-逻辑控制器","link":"#_2-逻辑控制器","children":[{"level":3,"title":"2.1. 仅一次控制器","slug":"_2-1-仅一次控制器","link":"#_2-1-仅一次控制器","children":[]},{"level":3,"title":"2.2. 事物控制器","slug":"_2-2-事物控制器","link":"#_2-2-事物控制器","children":[{"level":4,"title":"2.2.1. 使用事务控制器的典型场合","slug":"_2-2-1-使用事务控制器的典型场合","link":"#_2-2-1-使用事务控制器的典型场合","children":[]},{"level":4,"title":"2.2.2. 事务控制器参数说明","slug":"_2-2-2-事务控制器参数说明","link":"#_2-2-2-事务控制器参数说明","children":[]},{"level":4,"title":"2.2.3. 案例","slug":"_2-2-3-案例","link":"#_2-2-3-案例","children":[]}]},{"level":3,"title":"2.3. 如果（if）控制器","slug":"_2-3-如果-if-控制器","link":"#_2-3-如果-if-控制器","children":[{"level":4,"title":"2.3.1. 参数详解","slug":"_2-3-1-参数详解","link":"#_2-3-1-参数详解","children":[]},{"level":4,"title":"2.3.2. 案例","slug":"_2-3-2-案例","link":"#_2-3-2-案例","children":[{"level":5,"title":"2.3.2.1. 第一种配置方法","slug":"_2-3-2-1-第一种配置方法","link":"#_2-3-2-1-第一种配置方法","children":[]},{"level":5,"title":"2.3.2.2. 第二种配置方法","slug":"_2-3-2-2-第二种配置方法","link":"#_2-3-2-2-第二种配置方法","children":[]}]}]},{"level":3,"title":"2.4. 循环控制器","slug":"_2-4-循环控制器","link":"#_2-4-循环控制器","children":[]},{"level":3,"title":"2.5. ForEach控制器","slug":"_2-5-foreach控制器","link":"#_2-5-foreach控制器","children":[{"level":4,"title":"2.5.1. 与用户定义的变量配合使用","slug":"_2-5-1-与用户定义的变量配合使用","link":"#_2-5-1-与用户定义的变量配合使用","children":[]},{"level":4,"title":"2.5.2. 与正则表达式配合使用","slug":"_2-5-2-与正则表达式配合使用","link":"#_2-5-2-与正则表达式配合使用","children":[]}]}]},{"level":2,"title":"3. 定时器","slug":"_3-定时器","link":"#_3-定时器","children":[{"level":3,"title":"3.1. 同步定时器","slug":"_3-1-同步定时器","link":"#_3-1-同步定时器","children":[]},{"level":3,"title":"3.2. 常数吞吐量定时器","slug":"_3-2-常数吞吐量定时器","link":"#_3-2-常数吞吐量定时器","children":[]},{"level":3,"title":"3.3. 固定定时器","slug":"_3-3-固定定时器","link":"#_3-3-固定定时器","children":[]}]},{"level":2,"title":"4. jmeter分布式","slug":"_4-jmeter分布式","link":"#_4-jmeter分布式","children":[{"level":3,"title":"4.1. 应用场景","slug":"_4-1-应用场景","link":"#_4-1-应用场景","children":[]},{"level":3,"title":"4.2. 原理","slug":"_4-2-原理","link":"#_4-2-原理","children":[]},{"level":3,"title":"4.3. 分布式相关注意事项：","slug":"_4-3-分布式相关注意事项","link":"#_4-3-分布式相关注意事项","children":[]},{"level":3,"title":"4.4. 分布式配置与运行","slug":"_4-4-分布式配置与运行","link":"#_4-4-分布式配置与运行","children":[{"level":4,"title":"4.4.1. 配置","slug":"_4-4-1-配置","link":"#_4-4-1-配置","children":[]},{"level":4,"title":"4.4.2. 运行","slug":"_4-4-2-运行","link":"#_4-4-2-运行","children":[]}]},{"level":3,"title":"4.5. 分布式实操","slug":"_4-5-分布式实操","link":"#_4-5-分布式实操","children":[]}]},{"level":2,"title":"5. jmeter报告","slug":"_5-jmeter报告","link":"#_5-jmeter报告","children":[{"level":3,"title":"5.1. 聚合报告","slug":"_5-1-聚合报告","link":"#_5-1-聚合报告","children":[]},{"level":3,"title":"5.2. HMTL报告","slug":"_5-2-hmtl报告","link":"#_5-2-hmtl报告","children":[{"level":4,"title":"5.2.1. 参数详解","slug":"_5-2-1-参数详解","link":"#_5-2-1-参数详解","children":[]},{"level":4,"title":"5.2.2. 使用步骤","slug":"_5-2-2-使用步骤","link":"#_5-2-2-使用步骤","children":[]}]}]},{"level":2,"title":"6. 作业题目：（OA请假单查询）","slug":"_6-作业题目-oa请假单查询","link":"#_6-作业题目-oa请假单查询","children":[]},{"level":2,"title":"7. Jmeter性能测试常用图表","slug":"_7-jmeter性能测试常用图表","link":"#_7-jmeter性能测试常用图表","children":[{"level":3,"title":"7.1. 目标","slug":"_7-1-目标","link":"#_7-1-目标","children":[]},{"level":3,"title":"7.2. 插件安装","slug":"_7-2-插件安装","link":"#_7-2-插件安装","children":[]},{"level":3,"title":"7.3. 不同的插件位置","slug":"_7-3-不同的插件位置","link":"#_7-3-不同的插件位置","children":[]},{"level":3,"title":"7.4. 性能测试常用图表","slug":"_7-4-性能测试常用图表","link":"#_7-4-性能测试常用图表","children":[{"level":4,"title":"7.4.1. Concurrency Thread Group","slug":"_7-4-1-concurrency-thread-group","link":"#_7-4-1-concurrency-thread-group","children":[]},{"level":4,"title":"7.4.2. Transactions per Second","slug":"_7-4-2-transactions-per-second","link":"#_7-4-2-transactions-per-second","children":[]},{"level":4,"title":"7.4.3. Bytes Through Over Time","slug":"_7-4-3-bytes-through-over-time","link":"#_7-4-3-bytes-through-over-time","children":[]}]},{"level":3,"title":"7.5. 基于jmeter客户端监控服务器的硬件资源","slug":"_7-5-基于jmeter客户端监控服务器的硬件资源","link":"#_7-5-基于jmeter客户端监控服务器的硬件资源","children":[{"level":4,"title":"7.5.1. PerfMon Metrics Collector","slug":"_7-5-1-perfmon-metrics-collector","link":"#_7-5-1-perfmon-metrics-collector","children":[]}]}]},{"level":2,"title":"8. 常用平均并发数(TPS)计算公式","slug":"_8-常用平均并发数-tps-计算公式","link":"#_8-常用平均并发数-tps-计算公式","children":[{"level":3,"title":"8.1. 普通计算方法","slug":"_8-1-普通计算方法","link":"#_8-1-普通计算方法","children":[]},{"level":3,"title":"8.2. 二八原则计算方法","slug":"_8-2-二八原则计算方法","link":"#_8-2-二八原则计算方法","children":[]},{"level":3,"title":"8.3. 按照业务数据进行计算","slug":"_8-3-按照业务数据进行计算","link":"#_8-3-按照业务数据进行计算","children":[{"level":4,"title":"8.3.1. 计算模拟用户正常业务操作（稳定性测试）的并发量：","slug":"_8-3-1-计算模拟用户正常业务操作-稳定性测试-的并发量","link":"#_8-3-1-计算模拟用户正常业务操作-稳定性测试-的并发量","children":[]},{"level":4,"title":"8.3.2. 计算模拟用户峰值业务操作（压力测试）的并发量：","slug":"_8-3-2-计算模拟用户峰值业务操作-压力测试-的并发量","link":"#_8-3-2-计算模拟用户峰值业务操作-压力测试-的并发量","children":[]}]}]}],"git":{"createdTime":1709178620000,"updatedTime":1709180055000,"contributors":[{"name":"hk","email":"hek97@qq.com","commits":2}]},"readingTime":{"minutes":20.39,"words":6117},"filePathRelative":"SoftwareTest/PerformanceTest/day04.md","localizedDate":"2024年2月29日","excerpt":"<h2> 1. Jmeter直连数据库</h2>\\n<h3> 1.1. 准备工作</h3>\\n<ol>\\n<li>\\n<p>启动数据库；</p>\\n</li>\\n<li>\\n<p>加载mysql的JDBC驱动；</p>\\n<ul>\\n<li>\\n<p>方法1：在测试计划下方的位置，点击浏览添加JDBC的jar包（<code>mysql-connector-java-8.0.26.jar</code>）；</p>\\n<figure><img src=\\"https://hk-docs.oss-cn-chengdu.aliyuncs.com/SoftwareTest/InterfaceTest/202401251803380.png\\" alt=\\"加载jar\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>加载jar</figcaption></figure>\\n</li>\\n<li>\\n<p>方法2：将JDBC的jar拷贝到jmeter安装目录下的lib目录，并重启jmeter。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>在配置元件中添加JDBC Connection Configuration，然后配置JDBC连接池的参数；</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};