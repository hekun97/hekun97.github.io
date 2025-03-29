"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[2976],{5022:(e,a,s)=>{s.r(a),s.d(a,{comp:()=>r,data:()=>t});var n=s(6254);const i={},r=(0,s(6995).A)(i,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,a[0]||(a[0]=[(0,n.Fv)('<h1 id="beanshell-内置变量-prev" tabindex="-1"><a class="header-anchor" href="#beanshell-内置变量-prev"><span>BeanShell 内置变量 prev</span></a></h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h2><p>BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子</p><h2 id="简单介绍" tabindex="-1"><a class="header-anchor" href="#简单介绍"><span>简单介绍</span></a></h2><ul><li>prev 提供对<strong>当前</strong>取样器结果的访问能力</li><li>prev 映射 org.apache.jmeter.samplers 的 SampleResult 类</li><li>官方文档： <a href="https://jmeter.apache.org/api/org/apache/jmeter/samplers/SampleResult.html" target="_blank" rel="noopener noreferrer">https://jmeter.apache.org/api/org/apache/jmeter/samplers/SampleResult.html</a></li></ul><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span>常用方法</span></a></h2><h3 id="getresponsecode" tabindex="-1"><a class="header-anchor" href="#getresponsecode"><span>getResponseCode</span></a></h3><h4 id="方法声明" tabindex="-1"><a class="header-anchor" href="#方法声明"><span>方法声明</span></a></h4><p>public String getResponseCode()</p><h4 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h4><p>获取响应状态码</p><h4 id="栗子代码" tabindex="-1"><a class="header-anchor" href="#栗子代码"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sc = prev.getResponseCode() ;</span></span>\n<span class="line"><span>log.info(&#39;status code is: &#39; + sc)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isresponsecodeok" tabindex="-1"><a class="header-anchor" href="#isresponsecodeok"><span>isResponseCodeOK</span></a></h3><h4 id="方法声明-1" tabindex="-1"><a class="header-anchor" href="#方法声明-1"><span>方法声明</span></a></h4><p>public boolean isResponseCodeOK()</p><h4 id="功能-1" tabindex="-1"><a class="header-anchor" href="#功能-1"><span>功能</span></a></h4><p>判断响应状态码是否为OK对应的状态码（200）</p><h4 id="栗子代码-1" tabindex="-1"><a class="header-anchor" href="#栗子代码-1"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yn = prev.isResponseCodeOK()</span></span>\n<span class="line"><span>log.info(&#39;yn is: &#39; + yn)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 true 或 false</p><h3 id="getthreadname" tabindex="-1"><a class="header-anchor" href="#getthreadname"><span>getThreadName</span></a></h3><h4 id="方法声明-2" tabindex="-1"><a class="header-anchor" href="#方法声明-2"><span>方法声明</span></a></h4><p>public String getThreadName()</p><h4 id="功能-2" tabindex="-1"><a class="header-anchor" href="#功能-2"><span>功能</span></a></h4><p>获取线程名</p><h4 id="栗子代码-2" tabindex="-1"><a class="header-anchor" href="#栗子代码-2"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>tname = prev.getThreadName()</span></span>\n<span class="line"><span>log.info(&#39;tname is: &#39; + tname)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getassertionresults" tabindex="-1"><a class="header-anchor" href="#getassertionresults"><span>getAssertionResults</span></a></h3><h4 id="方法声明-3" tabindex="-1"><a class="header-anchor" href="#方法声明-3"><span>方法声明</span></a></h4><p>public AssertionResult[] getAssertionResults()</p><h4 id="功能-3" tabindex="-1"><a class="header-anchor" href="#功能-3"><span>功能</span></a></h4><p>获取取样器断言结果</p><h4 id="栗子代码-3" tabindex="-1"><a class="header-anchor" href="#栗子代码-3"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ars = prev.getAssertionResults()</span></span>\n<span class="line"><span>ars.each{</span></span>\n<span class="line"><span>    log.info(it.getName() + &#39;: &#39; + it.getFailureMessage())</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcontenttype" tabindex="-1"><a class="header-anchor" href="#getcontenttype"><span>getContentType</span></a></h3><h4 id="方法声明-4" tabindex="-1"><a class="header-anchor" href="#方法声明-4"><span>方法声明</span></a></h4><p>public String getContentType()</p><h4 id="功能-4" tabindex="-1"><a class="header-anchor" href="#功能-4"><span>功能</span></a></h4><p>获取取样器响应Content-Type首部字段的值域（包含参数）</p><h4 id="栗子代码-4" tabindex="-1"><a class="header-anchor" href="#栗子代码-4"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ct = prev.getContentType()</span></span>\n<span class="line"><span>log.info(&#39;ct is: &#39; + ct)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getmediatype" tabindex="-1"><a class="header-anchor" href="#getmediatype"><span>getMediaType</span></a></h3><h4 id="方法声明-5" tabindex="-1"><a class="header-anchor" href="#方法声明-5"><span>方法声明</span></a></h4><p>public String getMediaType()</p><h4 id="功能-5" tabindex="-1"><a class="header-anchor" href="#功能-5"><span>功能</span></a></h4><p>获取取样器响应Media-Type首部字段的值域（不包含参数）</p><h4 id="栗子代码-5" tabindex="-1"><a class="header-anchor" href="#栗子代码-5"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ct = prev.getMediaType()</span></span>\n<span class="line"><span>log.info(&#39;ct is: &#39; + ct)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getsentbytes" tabindex="-1"><a class="header-anchor" href="#getsentbytes"><span>getSentBytes</span></a></h3><h4 id="方法声明-6" tabindex="-1"><a class="header-anchor" href="#方法声明-6"><span>方法声明</span></a></h4><p>public long getSentBytes()</p><h4 id="功能-6" tabindex="-1"><a class="header-anchor" href="#功能-6"><span>功能</span></a></h4><p>获取取样器请求报文的大小</p><h4 id="栗子代码-6" tabindex="-1"><a class="header-anchor" href="#栗子代码-6"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sb = prev.getSentBytes()</span></span>\n<span class="line"><span>log.info(&#39;sb is: &#39; + sb)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getbytesaslong" tabindex="-1"><a class="header-anchor" href="#getbytesaslong"><span>getBytesAsLong</span></a></h3><h4 id="方法声明-7" tabindex="-1"><a class="header-anchor" href="#方法声明-7"><span>方法声明</span></a></h4><p>public long getBytesAsLong()</p><h4 id="功能-7" tabindex="-1"><a class="header-anchor" href="#功能-7"><span>功能</span></a></h4><p>获取取样器响应报文的大小</p><h4 id="栗子代码-7" tabindex="-1"><a class="header-anchor" href="#栗子代码-7"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>rb = prev.getBytesAsLong()</span></span>\n<span class="line"><span>log.info(&#39;rb is: &#39; + rb)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getlatency" tabindex="-1"><a class="header-anchor" href="#getlatency"><span>getLatency</span></a></h3><h4 id="方法声明-8" tabindex="-1"><a class="header-anchor" href="#方法声明-8"><span>方法声明</span></a></h4><p>public long getLatency()</p><h4 id="功能-8" tabindex="-1"><a class="header-anchor" href="#功能-8"><span>功能</span></a></h4><p>获取延迟时间</p><h3 id="getconnecttime" tabindex="-1"><a class="header-anchor" href="#getconnecttime"><span>getConnectTime</span></a></h3><h4 id="方法声明-9" tabindex="-1"><a class="header-anchor" href="#方法声明-9"><span>方法声明</span></a></h4><p>public long getConnectTime()</p><h4 id="功能-9" tabindex="-1"><a class="header-anchor" href="#功能-9"><span>功能</span></a></h4><p>获取连接时间</p><h3 id="geturl" tabindex="-1"><a class="header-anchor" href="#geturl"><span>getURL</span></a></h3><h4 id="方法声明-10" tabindex="-1"><a class="header-anchor" href="#方法声明-10"><span>方法声明</span></a></h4><p>public URL getURL()</p><h4 id="功能-10" tabindex="-1"><a class="header-anchor" href="#功能-10"><span>功能</span></a></h4><p>获取取样器请求URL</p><h4 id="栗子代码-8" tabindex="-1"><a class="header-anchor" href="#栗子代码-8"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>url = prev.getURL()</span></span>\n<span class="line"><span>log.info(&#39;url is: &#39; + url)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="geturlasstring" tabindex="-1"><a class="header-anchor" href="#geturlasstring"><span>getUrlAsString</span></a></h3><h4 id="方法声明-11" tabindex="-1"><a class="header-anchor" href="#方法声明-11"><span>方法声明</span></a></h4><p>public String getUrlAsString()</p><h4 id="功能-11" tabindex="-1"><a class="header-anchor" href="#功能-11"><span>功能</span></a></h4><p>获取取样器请求URL字符串</p><h3 id="getgroupthreads" tabindex="-1"><a class="header-anchor" href="#getgroupthreads"><span>getGroupThreads</span></a></h3><h4 id="方法声明-12" tabindex="-1"><a class="header-anchor" href="#方法声明-12"><span>方法声明</span></a></h4><p>public int getGroupThreads()</p><h4 id="功能-12" tabindex="-1"><a class="header-anchor" href="#功能-12"><span>功能</span></a></h4><p>获取线程组下正在运行的线程数</p><h4 id="栗子代码-9" tabindex="-1"><a class="header-anchor" href="#栗子代码-9"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>gtnum = prev.getGroupThreads()</span></span>\n<span class="line"><span>log.info(&#39;gtnum is: &#39; + gtnum)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getheaderssize" tabindex="-1"><a class="header-anchor" href="#getheaderssize"><span>getHeadersSize</span></a></h3><h4 id="方法声明-13" tabindex="-1"><a class="header-anchor" href="#方法声明-13"><span>方法声明</span></a></h4><p>public int getHeadersSize()</p><h4 id="功能-13" tabindex="-1"><a class="header-anchor" href="#功能-13"><span>功能</span></a></h4><p>获取取样器响应首部字段大小</p><h4 id="栗子代码-10" tabindex="-1"><a class="header-anchor" href="#栗子代码-10"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>hs = prev.getHeadersSize()</span></span>\n<span class="line"><span>log.info(&#39;hs is: &#39; + hs)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getbodysizeaslong" tabindex="-1"><a class="header-anchor" href="#getbodysizeaslong"><span>getBodySizeAsLong</span></a></h3><h4 id="方法声明-14" tabindex="-1"><a class="header-anchor" href="#方法声明-14"><span>方法声明</span></a></h4><p>public long getBodySizeAsLong()</p><h4 id="功能-14" tabindex="-1"><a class="header-anchor" href="#功能-14"><span>功能</span></a></h4><p>获取取样器响应正文大小</p><h4 id="栗子代码-11" tabindex="-1"><a class="header-anchor" href="#栗子代码-11"><span>栗子代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bs = prev.getBodySizeAsLong()</span></span>\n<span class="line"><span>log.info(&#39;bs is: &#39; + bs)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',106)]))}]]),t=JSON.parse('{"path":"/jmeter/script/beanshell/prev.html","title":"BeanShell 内置变量 prev","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["prev","Beanshell"],"order":5,"sticky":true,"description":"BeanShell 内置变量 prev 前提 BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子 简单介绍 prev 提供对当前取样器结果的访问能力 prev 映射 org.apache.jmeter.samplers 的 SampleResult 类 官方文档： https://jmeter...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/script/beanshell/prev.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"BeanShell 内置变量 prev"}],["meta",{"property":"og:description","content":"BeanShell 内置变量 prev 前提 BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子 简单介绍 prev 提供对当前取样器结果的访问能力 prev 映射 org.apache.jmeter.samplers 的 SampleResult 类 官方文档： https://jmeter..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-29T08:50:01.000Z"}],["meta",{"property":"article:tag","content":"prev"}],["meta",{"property":"article:tag","content":"Beanshell"}],["meta",{"property":"article:modified_time","content":"2025-03-29T08:50:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BeanShell 内置变量 prev\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-29T08:50:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743238201000,"updatedTime":1743238201000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"jmeter/script/beanshell/prev.md","localizedDate":"2025年3月29日","excerpt":"\\n<h2>前提</h2>\\n<p>BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子</p>\\n<h2>简单介绍</h2>\\n<ul>\\n<li>prev 提供对<strong>当前</strong>取样器结果的访问能力</li>\\n<li>prev 映射 org.apache.jmeter.samplers 的 SampleResult 类</li>\\n<li>官方文档： <a href=\\"https://jmeter.apache.org/api/org/apache/jmeter/samplers/SampleResult.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://jmeter.apache.org/api/org/apache/jmeter/samplers/SampleResult.html</a></li>\\n</ul>","autoDesc":true}')},6995:(e,a)=>{a.A=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}}}]);