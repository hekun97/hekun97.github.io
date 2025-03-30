"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[5121],{5323:(e,t,r)=>{r.r(t),r.d(t,{comp:()=>u,data:()=>d});var l=r(6254);const n={class:"hint-container important"},o={class:"hint-container tip"},s={class:"hint-container tip"},a={class:"hint-container tip"},i={class:"hint-container tip"},h={class:"hint-container tip"},p={class:"hint-container tip"},c={},u=(0,r(6995).A)(c,[["render",function(e,t){const r=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[t[59]||(t[59]=(0,l.Lk)("h1",{id:"jmeter-核心元件",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#jmeter-核心元件"},[(0,l.Lk)("span",null,"JMeter 核心元件")])],-1)),t[60]||(t[60]=(0,l.Lk)("p",null,[(0,l.eW)("以下是 "),(0,l.Lk)("strong",null,"JMeter 核心元件学习清单"),(0,l.eW)("，按功能分类并标注优先级（⭐️ 为必学核心）。")],-1)),t[61]||(t[61]=(0,l.Lk)("hr",null,null,-1)),(0,l.Lk)("div",n,[t[2]||(t[2]=(0,l.Lk)("p",{class:"hint-container-title"},"前提条件",-1)),(0,l.Lk)("p",null,[t[1]||(t[1]=(0,l.eW)("先了解")),(0,l.bF)(r,{to:"/jmeter/study.html#%E9%98%B6%E6%AE%B5%E4%BA%8C-%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD%E5%AD%A6%E4%B9%A0"},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.eW)("JMeter核心元件学习表格")]))),_:1})])]),t[62]||(t[62]=(0,l.Fv)('<h2 id="一、线程组-thread-group" tabindex="-1"><a class="header-anchor" href="#一、线程组-thread-group"><span><strong>一、线程组（Thread Group）</strong></span></a></h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span><strong>作用</strong></span></a></h3><p>控制并发用户数、启动时间、循环次数等压测基本参数。</p><h3 id="核心元件" tabindex="-1"><a class="header-anchor" href="#核心元件"><span><strong>核心元件</strong></span></a></h3><ol><li><p><strong>Thread Group（⭐️）</strong></p><ul><li>基础线程组，设置线程数（用户数）、启动时间（Ramp-Up）、循环次数。</li></ul></li><li><p><strong>Ultimate Thread Group（⭐️）</strong></p><ul><li>进阶线程组，支持阶梯加压、波浪式负载（需插件 <code>Custom Thread Groups</code>）。</li></ul></li></ol>',5)),(0,l.Lk)("div",o,[t[11]||(t[11]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[t[4]||(t[4]=(0,l.Lk)("code",null,"Thread Group",-1)),t[5]||(t[5]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/threads/thread_group.html"},{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)("线程组")]))),_:1}),t[6]||(t[6]=(0,l.eW)("。"))]),(0,l.Lk)("li",null,[t[8]||(t[8]=(0,l.Lk)("code",null,"Ultimate Thread Group",-1)),t[9]||(t[9]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/threads/ultimate.html"},{default:(0,l.k6)((()=>t[7]||(t[7]=[(0,l.eW)("终极线程组")]))),_:1}),t[10]||(t[10]=(0,l.eW)("。"))])])]),t[63]||(t[63]=(0,l.Fv)('<hr><h2 id="二、取样器-samplers" tabindex="-1"><a class="header-anchor" href="#二、取样器-samplers"><span><strong>二、取样器（Samplers）</strong></span></a></h2><h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1"><span><strong>作用</strong></span></a></h3><p>定义向服务器发送的具体请求类型（如 HTTP、JDBC）。</p><h3 id="核心元件-1" tabindex="-1"><a class="header-anchor" href="#核心元件-1"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>HTTP Request（⭐️）</strong><ul><li>压测 Web 应用的必学元件，支持 GET/POST 方法、Header、Body 配置。</li></ul></li><li><strong>JDBC Request（⭐️）</strong><ul><li>数据库压测核心元件，需配置 JDBC 连接池和 SQL 语句。</li></ul></li><li><strong>JMS Publisher/Subscriber</strong><ul><li>消息队列（如 ActiveMQ）压测专用。</li></ul></li></ol>',6)),(0,l.Lk)("div",s,[t[21]||(t[21]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[t[13]||(t[13]=(0,l.Lk)("code",null,"HTTP Request",-1)),t[14]||(t[14]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/samplers/http_request.html"},{default:(0,l.k6)((()=>t[12]||(t[12]=[(0,l.eW)("HTTP请求")]))),_:1}),t[15]||(t[15]=(0,l.eW)("。"))]),(0,l.Lk)("li",null,[t[17]||(t[17]=(0,l.Lk)("code",null,"JDBC Request",-1)),t[18]||(t[18]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/samplers/jdbc_request.html"},{default:(0,l.k6)((()=>t[16]||(t[16]=[(0,l.eW)("JDBC请求")]))),_:1}),t[19]||(t[19]=(0,l.eW)("。"))]),t[20]||(t[20]=(0,l.Lk)("li",null,[(0,l.Lk)("code",null,"JMS Publisher/Subscriber"),(0,l.eW)("：详解请参考JMS发布/订阅")],-1))])]),t[64]||(t[64]=(0,l.Fv)('<hr><h2 id="三、监听器-listeners" tabindex="-1"><a class="header-anchor" href="#三、监听器-listeners"><span><strong>三、监听器（Listeners）</strong></span></a></h2><h3 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2"><span><strong>作用</strong></span></a></h3><p>收集并展示测试结果。</p><h3 id="核心元件-2" tabindex="-1"><a class="header-anchor" href="#核心元件-2"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>View Results Tree（⭐️）</strong><ul><li>调试时查看请求详情，正式压测需禁用（避免内存溢出）。</li></ul></li><li><strong>Aggregate Report（⭐️）</strong><ul><li>核心报表，输出平均响应时间、TPS、错误率等关键指标。</li></ul></li><li><strong>Summary Report</strong><ul><li>简化版聚合报告，适合快速查看结果。</li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>后续补充</p></div><hr><h2 id="四、配置元件-config-elements" tabindex="-1"><a class="header-anchor" href="#四、配置元件-config-elements"><span><strong>四、配置元件（Config Elements）</strong></span></a></h2><h3 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3"><span><strong>作用</strong></span></a></h3><p>定义全局配置或参数化数据。</p><h3 id="核心元件-3" tabindex="-1"><a class="header-anchor" href="#核心元件-3"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>HTTP Request Defaults（⭐️）</strong><ul><li>集中配置 HTTP 请求的公共参数（如域名、端口）。</li></ul></li><li><strong>CSV Data Set Config（⭐️）</strong><ul><li>参数化核心工具，从 CSV 文件读取测试数据（如多用户登录）。</li></ul></li><li><strong>User Defined Variables</strong><ul><li>定义全局变量（如环境切换：测试/生产）。</li></ul></li><li><strong>HTTP Cookie Manager（⭐️）</strong><ul><li>自动管理 Cookies，模拟用户会话。</li></ul></li></ol>',13)),(0,l.Lk)("div",a,[t[30]||(t[30]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[t[28]||(t[28]=(0,l.Lk)("li",null,[(0,l.Lk)("code",null,"HTTP Request Defaults"),(0,l.eW)("：详解请参考[HTTP请求默认值](../guide/config/http_request _defaults.md)")],-1)),(0,l.Lk)("li",null,[t[23]||(t[23]=(0,l.Lk)("code",null,"CSV Data Set Config",-1)),t[24]||(t[24]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/config/csv.html"},{default:(0,l.k6)((()=>t[22]||(t[22]=[(0,l.eW)("CSV 数据文件配置")]))),_:1})]),t[29]||(t[29]=(0,l.Lk)("li",null,[(0,l.Lk)("code",null,"User Defined Variables"),(0,l.eW)("：详解请参考[用户自定义变量](../guide/config/user_ Defined_ "),(0,l.Lk)("a",{href:"http://Variables.md",target:"_blank",rel:"noopener noreferrer"},"Variables.md"),(0,l.eW)(")")],-1)),(0,l.Lk)("li",null,[t[26]||(t[26]=(0,l.Lk)("code",null,"HTTP Cookie Manager",-1)),t[27]||(t[27]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/config/http_cookie.html"},{default:(0,l.k6)((()=>t[25]||(t[25]=[(0,l.eW)("HTTP Cookie管理器")]))),_:1})])])]),t[65]||(t[65]=(0,l.Fv)('<hr><h2 id="五、逻辑控制器-logic-controllers" tabindex="-1"><a class="header-anchor" href="#五、逻辑控制器-logic-controllers"><span><strong>五、逻辑控制器（Logic Controllers）</strong></span></a></h2><h3 id="作用-4" tabindex="-1"><a class="header-anchor" href="#作用-4"><span><strong>作用</strong></span></a></h3><p>控制请求的执行顺序和逻辑。</p><h3 id="核心元件-4" tabindex="-1"><a class="header-anchor" href="#核心元件-4"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>Simple Controller（⭐️）</strong><ul><li>分组管理请求，无逻辑控制功能（基础容器）。</li></ul></li><li><strong>Loop Controller（⭐️）</strong><ul><li>循环执行子元件（如循环提交订单 10 次）。</li></ul></li><li><strong>If Controller</strong><ul><li>根据条件执行请求（如状态码=200 时执行下一步）。</li></ul></li><li><strong>Transaction Controller</strong><ul><li>将多个请求合并为一个事务统计（如登录→下单流程）。</li></ul></li></ol>',6)),(0,l.Lk)("div",i,[t[43]||(t[43]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[t[32]||(t[32]=(0,l.Lk)("code",null,"Simple Controller",-1)),t[33]||(t[33]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/logical/simple.html"},{default:(0,l.k6)((()=>t[31]||(t[31]=[(0,l.eW)("简单控制器")]))),_:1})]),(0,l.Lk)("li",null,[t[35]||(t[35]=(0,l.Lk)("code",null,"Loop Controller",-1)),t[36]||(t[36]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/logical/loop.html"},{default:(0,l.k6)((()=>t[34]||(t[34]=[(0,l.eW)("循环控制器")]))),_:1})]),(0,l.Lk)("li",null,[t[38]||(t[38]=(0,l.Lk)("code",null,"If Controller",-1)),t[39]||(t[39]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/logical/if.html"},{default:(0,l.k6)((()=>t[37]||(t[37]=[(0,l.eW)("If 控制器")]))),_:1})]),(0,l.Lk)("li",null,[t[41]||(t[41]=(0,l.Lk)("code",null,"Transaction Controller",-1)),t[42]||(t[42]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/controllers/logical/transaction.html"},{default:(0,l.k6)((()=>t[40]||(t[40]=[(0,l.eW)("事务控制器")]))),_:1})])])]),t[66]||(t[66]=(0,l.Fv)('<hr><h2 id="六、前置-后置处理器-pre-post-processors" tabindex="-1"><a class="header-anchor" href="#六、前置-后置处理器-pre-post-processors"><span><strong>六、前置/后置处理器（Pre/Post Processors）</strong></span></a></h2><h3 id="作用-5" tabindex="-1"><a class="header-anchor" href="#作用-5"><span><strong>作用</strong></span></a></h3><p>在请求前后处理数据（如提取参数、生成动态数据）。</p><h3 id="核心元件-5" tabindex="-1"><a class="header-anchor" href="#核心元件-5"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>Regular Expression Extractor（⭐️）</strong><ul><li>通过正则表达式提取响应中的数据（如 Token）。</li></ul></li><li><strong>JSON Extractor（⭐️）</strong><ul><li>提取 JSON 响应中的字段（优先于正则，效率更高）。</li></ul></li><li><strong>JSR223 PreProcessor</strong><ul><li>用 Groovy 脚本生成动态参数（如时间戳、签名）。</li></ul></li></ol>',6)),(0,l.Lk)("div",h,[t[51]||(t[51]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[t[45]||(t[45]=(0,l.Lk)("code",null,"Regular Expression Extractor",-1)),t[46]||(t[46]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/processor/post/regular_extractor.html"},{default:(0,l.k6)((()=>t[44]||(t[44]=[(0,l.eW)("正则提取器")]))),_:1})]),(0,l.Lk)("li",null,[t[48]||(t[48]=(0,l.Lk)("code",null,"JSON Extractor",-1)),t[49]||(t[49]=(0,l.eW)("：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/processor/post/json_extractor.html"},{default:(0,l.k6)((()=>t[47]||(t[47]=[(0,l.eW)("JSON 提取器")]))),_:1})]),t[50]||(t[50]=(0,l.Lk)("li",null,[(0,l.Lk)("code",null,"JSR223 PreProcessor"),(0,l.eW)("：详解请参考JSR223预处理器")],-1))])]),t[67]||(t[67]=(0,l.Fv)('<hr><h2 id="七、断言-assertions" tabindex="-1"><a class="header-anchor" href="#七、断言-assertions"><span><strong>七、断言（Assertions）</strong></span></a></h2><h3 id="作用-6" tabindex="-1"><a class="header-anchor" href="#作用-6"><span><strong>作用</strong></span></a></h3><p>验证响应结果是否符合预期。</p><h3 id="核心元件-6" tabindex="-1"><a class="header-anchor" href="#核心元件-6"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>Response Assertion（⭐️）</strong><ul><li>验证响应内容、状态码、响应时间等。</li></ul></li><li><strong>Duration Assertion</strong><ul><li>检查请求响应时间是否超阈值。</li></ul></li><li><strong>JSON Assertion</strong><ul><li>针对 JSON 响应结构的断言（如字段是否存在）。</li></ul></li></ol>',6)),(0,l.Lk)("div",p,[t[58]||(t[58]=(0,l.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[t[53]||(t[53]=(0,l.eW)("Response Assertion：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/assert/response.html"},{default:(0,l.k6)((()=>t[52]||(t[52]=[(0,l.eW)("响应断言")]))),_:1})]),(0,l.Lk)("li",null,[t[55]||(t[55]=(0,l.eW)("Duration Assertion：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/assert/duration.html"},{default:(0,l.k6)((()=>t[54]||(t[54]=[(0,l.eW)("断言持续时间")]))),_:1})]),(0,l.Lk)("li",null,[t[57]||(t[57]=(0,l.eW)("JSON Assertion：详解请参考")),(0,l.bF)(r,{to:"/jmeter/guide/assert/json.html"},{default:(0,l.k6)((()=>t[56]||(t[56]=[(0,l.eW)("JSON 断言")]))),_:1})])])]),t[68]||(t[68]=(0,l.Fv)('<hr><h2 id="八、定时器-timers" tabindex="-1"><a class="header-anchor" href="#八、定时器-timers"><span><strong>八、定时器（Timers）</strong></span></a></h2><h3 id="作用-7" tabindex="-1"><a class="header-anchor" href="#作用-7"><span><strong>作用</strong></span></a></h3><p>控制请求之间的等待时间，模拟用户真实操作间隔。</p><h3 id="核心元件-7" tabindex="-1"><a class="header-anchor" href="#核心元件-7"><span><strong>核心元件</strong></span></a></h3><ol><li><strong>Constant Timer（⭐️）</strong><ul><li>固定等待时间（如每次请求后等待 1 秒）。</li></ul></li><li><strong>Uniform Random Timer</strong><ul><li>随机等待时间（如 1~3 秒），更贴近真实用户行为。</li></ul></li><li><strong>Synchronizing Timer</strong><ul><li>实现多用户同时触发的并发场景（如秒杀）。</li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>后续补充</p></div><hr><h2 id="九、实战学习优先级建议" tabindex="-1"><a class="header-anchor" href="#九、实战学习优先级建议"><span><strong>九、实战学习优先级建议</strong></span></a></h2><h3 id="第一步-掌握核心元件-⭐️" tabindex="-1"><a class="header-anchor" href="#第一步-掌握核心元件-⭐️"><span><strong>第一步：掌握核心元件（⭐️）</strong></span></a></h3><ol><li>Thread Group + HTTP Request + View Results Tree</li><li>CSV Data Set Config + Regular Expression Extractor</li><li>Aggregate Report + Response Assertion</li></ol><h3 id="第二步-进阶逻辑控制" tabindex="-1"><a class="header-anchor" href="#第二步-进阶逻辑控制"><span><strong>第二步：进阶逻辑控制</strong></span></a></h3><ol><li>Loop Controller + If Controller</li><li>JSR223 PreProcessor（动态参数生成）</li><li>JSON Extractor + JSON Assertion</li></ol><h3 id="第三步-场景化扩展" tabindex="-1"><a class="header-anchor" href="#第三步-场景化扩展"><span><strong>第三步：场景化扩展</strong></span></a></h3><ol><li>JDBC Request → 数据库压测</li><li>JMS Publisher → 消息队列测试</li><li>BeanShell/Groovy 脚本 → 自定义逻辑处理</li></ol><hr><h2 id="十、常见误区与纠正" tabindex="-1"><a class="header-anchor" href="#十、常见误区与纠正"><span><strong>十、常见误区与纠正</strong></span></a></h2><ol><li><strong>监听器滥用</strong><ul><li>正式压测时禁用 <code>View Results Tree</code>，改用 <code>Aggregate Report</code>。</li></ul></li><li><strong>忽略参数化</strong><ul><li>不使用 CSV 参数化会导致测试数据单一，无法模拟真实场景。</li></ul></li><li><strong>线程组配置错误</strong><ul><li>Ramp-Up 时间过短可能导致服务器瞬时过载（如 100 线程设置 0 秒启动）。</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ol><li><strong>官方文档</strong>：<a href="https://jmeter.apache.org/usermanual/component_reference.html" target="_blank" rel="noopener noreferrer">JMeter Components</a></li><li><strong>实战教程</strong>：JMeter 官方示例测试计划（路径：<code>bin/examples</code>）。</li><li><strong>调试技巧</strong>：使用 <code>Debug Sampler</code> 查看变量值。</li></ol><p>通过系统化学习以上核心元件，您可快速构建复杂测试场景，精准定位性能瓶颈。</p>',21))])}]]),d=JSON.parse('{"path":"/jmeter/core/component.html","title":"JMeter 核心元件","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["Core","Component"],"order":1,"sticky":true,"description":"JMeter 核心元件 以下是 JMeter 核心元件学习清单，按功能分类并标注优先级（⭐️ 为必学核心）。 前提条件 先了解 一、线程组（Thread Group） 作用 控制并发用户数、启动时间、循环次数等压测基本参数。 核心元件 Thread Group（⭐️） 基础线程组，设置线程数（用户数）、启动时间（Ramp-Up）、循环次数。 Ultim...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/core/component.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"JMeter 核心元件"}],["meta",{"property":"og:description","content":"JMeter 核心元件 以下是 JMeter 核心元件学习清单，按功能分类并标注优先级（⭐️ 为必学核心）。 前提条件 先了解 一、线程组（Thread Group） 作用 控制并发用户数、启动时间、循环次数等压测基本参数。 核心元件 Thread Group（⭐️） 基础线程组，设置线程数（用户数）、启动时间（Ramp-Up）、循环次数。 Ultim..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-30T15:06:38.000Z"}],["meta",{"property":"article:tag","content":"Core"}],["meta",{"property":"article:tag","content":"Component"}],["meta",{"property":"article:modified_time","content":"2025-03-30T15:06:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JMeter 核心元件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-30T15:06:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743347198000,"updatedTime":1743347198000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":4.53,"words":1360},"filePathRelative":"jmeter/core/component.md","localizedDate":"2025年3月30日","excerpt":"\\n<p>以下是 <strong>JMeter 核心元件学习清单</strong>，按功能分类并标注优先级（⭐️ 为必学核心）。</p>\\n<hr>\\n<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">前提条件</p>\\n<p>先了解<a href=\\"/jmeter/study.html#%E9%98%B6%E6%AE%B5%E4%BA%8C-%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD%E5%AD%A6%E4%B9%A0\\" target=\\"_blank\\">JMeter核心元件学习表格</a></p>\\n</div>","autoDesc":true}')},6995:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,l]of t)r[e]=l;return r}}}]);