"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[879],{3388:(e,t,r)=>{r.r(t),r.d(t,{comp:()=>i,data:()=>a});var n=r(6254);const s={},i=(0,r(6995).A)(s,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Fv)('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><h2 id="listeners-的简介" tabindex="-1"><a class="header-anchor" href="#listeners-的简介"><span>Listeners 的简介</span></a></h2><p>监听器提供了在Jmeter运行时，收集运行信息的权利</p><h2 id="常见的监听器" tabindex="-1"><a class="header-anchor" href="#常见的监听器"><span>常见的监听器</span></a></h2><ul><li>**Graph Results ：**在图表上绘制响应时间</li><li>**View Result Tree：**最常用的查看结果树，显示Samplers请求和响应的详细信息，可以通过多种格式显示（如：HTML、XML）</li><li>其他监听器提供摘要或聚合信息</li></ul><h2 id="保存数据到本地" tabindex="-1"><a class="header-anchor" href="#保存数据到本地"><span>保存数据到本地</span></a></h2><ul><li>每个监听器都可以将收集到的数据<strong>保存到指定文件</strong></li><li>可以指定要保持的字段，以及文件的格式（CSV还是XML文件）</li></ul><h2 id="重点注意" tabindex="-1"><a class="header-anchor" href="#重点注意"><span>重点注意</span></a></h2><ul><li>所有监听器拿到的结果数据都是<strong>一致</strong>的，唯一区别就是<strong>数据的显示方式</strong>，不同监听器，显示方式都不一样</li><li>监听器可以<strong>添加到任何位置</strong>包括测试计划、线程组、取样器等地方，它们会收集<strong>同级别下的数据和所有子元件的数据</strong></li></ul><p><img src="/assets/jmeter/1896874-20200518201927471-1589022672.png" alt="img" loading="lazy">1589022672.png)</p><ul><li>可以看看上图栗子，测试计划、线程组、控制器、取样器都各自添加了一个监听器</li><li><strong>测试计划监听器：<strong>可以收集到</strong>两个线程组</strong>的所有数据</li><li><strong>线程组监听器：<strong>可以收集到该</strong>线程组下</strong>所有数据**（仅一次控制器数据+调试取样器数据）**</li><li><strong>控制器监听器：<strong>收集该控制器下</strong>两个取样器</strong>的数据</li><li><strong>登录请求监听器：<strong>只能收集到</strong>登录请求</strong>的数据</li></ul><h2 id="有什么监听器" tabindex="-1"><a class="header-anchor" href="#有什么监听器"><span>有什么监听器</span></a></h2><p><img src="/assets/jmeter/1896874-20200618105102609-1527345196.png" alt="img" loading="lazy">]</p><p>jmeter 默认有的监听器还是比较少的，但是想做好性能测试，装一些监听器插件必不可少啊</p><p><strong>后面，我们会对每个常用的 Listeners 单独讲解哦！</strong></p>',15)]))}]]),a=JSON.parse('{"path":"/jmeter/guide/listeners/intro.html","title":"介绍","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["Listeners","介绍"],"order":1,"sticky":true,"description":"介绍 Listeners 的简介 监听器提供了在Jmeter运行时，收集运行信息的权利 常见的监听器 **Graph Results ：**在图表上绘制响应时间 **View Result Tree：**最常用的查看结果树，显示Samplers请求和响应的详细信息，可以通过多种格式显示（如：HTML、XML） 其他监听器提供摘要或聚合信息 保存数据到本...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/guide/listeners/intro.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"介绍 Listeners 的简介 监听器提供了在Jmeter运行时，收集运行信息的权利 常见的监听器 **Graph Results ：**在图表上绘制响应时间 **View Result Tree：**最常用的查看结果树，显示Samplers请求和响应的详细信息，可以通过多种格式显示（如：HTML、XML） 其他监听器提供摘要或聚合信息 保存数据到本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hekun97.github.io/assets/jmeter/1896874-20200518201927471-1589022672.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-28T17:43:32.000Z"}],["meta",{"property":"article:tag","content":"Listeners"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:modified_time","content":"2025-03-28T17:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"https://hekun97.github.io/assets/jmeter/1896874-20200518201927471-1589022672.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200618105102609-1527345196.png\\"],\\"dateModified\\":\\"2025-03-28T17:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743183812000,"updatedTime":1743183812000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"jmeter/guide/listeners/intro.md","localizedDate":"2025年3月28日","excerpt":"\\n<h2>Listeners 的简介</h2>\\n<p>监听器提供了在Jmeter运行时，收集运行信息的权利</p>\\n<h2>常见的监听器</h2>\\n<ul>\\n<li>**Graph Results ：**在图表上绘制响应时间</li>\\n<li>**View Result Tree：**最常用的查看结果树，显示Samplers请求和响应的详细信息，可以通过多种格式显示（如：HTML、XML）</li>\\n<li>其他监听器提供摘要或聚合信息</li>\\n</ul>\\n<h2>保存数据到本地</h2>\\n<ul>\\n<li>每个监听器都可以将收集到的数据<strong>保存到指定文件</strong></li>\\n<li>可以指定要保持的字段，以及文件的格式（CSV还是XML文件）</li>\\n</ul>","autoDesc":true}')},6995:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}}}]);