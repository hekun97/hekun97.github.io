"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[8337],{991:(e,i,a)=>{a.r(i),a.d(i,{comp:()=>n,data:()=>r});var t=a(6254);const o={},n=(0,a(6995).A)(o,[["render",function(e,i){return(0,t.uX)(),(0,t.CE)("div",null,i[0]||(i[0]=[(0,t.Fv)('<h1 id="http-cookie管理器" tabindex="-1"><a class="header-anchor" href="#http-cookie管理器"><span>HTTP Cookie管理器</span></a></h1><h2 id="简单介绍" tabindex="-1"><a class="header-anchor" href="#简单介绍"><span>简单介绍</span></a></h2><h4 id="功能一" tabindex="-1"><a class="header-anchor" href="#功能一"><span>功能一</span></a></h4><ul><li>首先，它像网络浏览器一样存储和发送 cookie</li><li>如果有一个HTTP请求，并且响应包含 cookie，则 cookie 管理器会<strong>自动存储</strong>该 cookie，并将其用于后面对该特定网站的所有请求</li><li>cookie 管理自动存储的 cookie 不会出现在 Cookie Manager 的界面上，但是可以使用通过查看结果树看到它</li></ul><h4 id="功能二" tabindex="-1"><a class="header-anchor" href="#功能二"><span>功能二</span></a></h4><ul><li>JMeter 会检查收到的 Cookie 是否对该URL有效，这意味着<strong>不会存储跨域 Cookie</strong></li><li>如果有错误的行为或希望使用跨域cookie，请定义 JMeter 属性</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CookieManager.check.cookies = false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="功能三" tabindex="-1"><a class="header-anchor" href="#功能三"><span>功能三</span></a></h4><ul><li>收到的 Cookies 可以自动存储为 JMeter 线程变量</li><li>要将 cookie 保存为变量，请定义 JMeter属性</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CookieManager.save.cookies = true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Cookie 自动存储为 Jmeter 线程变量<strong>的名称前缀默认</strong>是 COOKIE_</li><li>如果要自定义前缀可以修改 Jmeter 属性 CookieManager.name.prefix = ****</li></ul><h4 id="功能四" tabindex="-1"><a class="header-anchor" href="#功能四"><span>功能四</span></a></h4><ul><li>可以将 Cookie 手动添加到 Cookie Manager</li><li>自定义 Cookie 将<strong>被所有 JMeter 线程共享</strong></li><li>自定义 Cookie 的过期时间会很长</li></ul><h4 id="功能五" tabindex="-1"><a class="header-anchor" href="#功能五"><span>功能五</span></a></h4><ul><li>默认情况下，空值的 Cookies 被忽略</li><li>可以通过设置 JMeter 属性来更改此设置 CookieManager.delete_null_cookies = false</li></ul><h2 id="http-cookie-manager" tabindex="-1"><a class="header-anchor" href="#http-cookie-manager"><span>HTTP Cookie Manager</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819125220737-1825557594.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819125220737-1825557594.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="http-cookie-manager-界面介绍" tabindex="-1"><a class="header-anchor" href="#http-cookie-manager-界面介绍"><span>HTTP Cookie Manager 界面介绍</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819130958851-1193536633.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819130958851-1193536633.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="字段介绍" tabindex="-1"><a class="header-anchor" href="#字段介绍"><span>字段介绍</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819130901687-1274442285.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819130901687-1274442285.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="单次循环实际栗子" tabindex="-1"><a class="header-anchor" href="#单次循环实际栗子"><span>单次循环实际栗子</span></a></h2><h4 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h4><ul><li>一个登录接口，一个添加课程接口</li><li>登录接口响应会返回一个Set-cookie，包含一个 sessionid，相当于用户凭证</li><li>发送添加课程接口需要传递包含 sessionid 的 Cookie 才能请求成功</li></ul><h4 id="jmeter-属性设置-jmeter-properties-文件" tabindex="-1"><a class="header-anchor" href="#jmeter-属性设置-jmeter-properties-文件"><span>Jmeter 属性设置（jmeter.properties 文件）</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819135841398-187889462.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819135841398-187889462.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="线程组结构树" tabindex="-1"><a class="header-anchor" href="#线程组结构树"><span>线程组结构树</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819131756648-1020256526.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819131756648-1020256526.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>**整体逻辑：**登录请求成功响应后，HTTP Cookie 管理器会自动存储登录接口返回的 Cookie，后面的请求也能自动调用该 Cookie</p><h4 id="线程组属性" tabindex="-1"><a class="header-anchor" href="#线程组属性"><span>线程组属性</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819131959231-293176798.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819131959231-293176798.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="http-cookie-管理器" tabindex="-1"><a class="header-anchor" href="#http-cookie-管理器"><span>HTTP Cookie 管理器</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132005590-334886196.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819132005590-334886196.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>没有自定义的 Cookie</p><h4 id="登录请求的响应内容" tabindex="-1"><a class="header-anchor" href="#登录请求的响应内容"><span>登录请求的响应内容</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132220959-189955003.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819132220959-189955003.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>响应返回 Cookie</p><h4 id="添加课程请求的响应内容" tabindex="-1"><a class="header-anchor" href="#添加课程请求的响应内容"><span>添加课程请求的响应内容</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819132226733-330704577.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819132226733-330704577.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="调试取样器-查看是否有自动将-cookie-保存为-jmeter-变量" tabindex="-1"><a class="header-anchor" href="#调试取样器-查看是否有自动将-cookie-保存为-jmeter-变量"><span>调试取样器，查看是否有自动将 Cookie 保存为 Jmeter 变量</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819140634646-1317460433.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819140634646-1317460433.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="有循环次数的实际栗子" tabindex="-1"><a class="header-anchor" href="#有循环次数的实际栗子"><span>有循环次数的实际栗子</span></a></h2><h4 id="线程组结构树-1" tabindex="-1"><a class="header-anchor" href="#线程组结构树-1"><span>线程组结构树</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141201645-938538542.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819141201645-938538542.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>登录请求只会发送一次</p><h4 id="线程组属性-1" tabindex="-1"><a class="header-anchor" href="#线程组属性-1"><span>线程组属性</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141247103-110591751.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819141247103-110591751.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>循环 2 次</p><h4 id="http-cookie-管理器-1" tabindex="-1"><a class="header-anchor" href="#http-cookie-管理器-1"><span>HTTP Cookie 管理器</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141258118-2084720180.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819141258118-2084720180.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>勾选了【每次反复清除 Cookies】</p><h4 id="查看结果树" tabindex="-1"><a class="header-anchor" href="#查看结果树"><span>查看结果树</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141336389-1909401062.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819141336389-1909401062.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>第一个增加课程请求能成功发送并响应</p><h4 id="第二个增加课程请求的响应内容" tabindex="-1"><a class="header-anchor" href="#第二个增加课程请求的响应内容"><span>第二个增加课程请求的响应内容</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200819141526672-946754154.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200819141526672-946754154.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>第二个增加课程请求会返回未登录状态</p><h4 id="重点" tabindex="-1"><a class="header-anchor" href="#重点"><span>重点</span></a></h4><p>如果勾选了【每次反复清除 Cookies】，那么每次循环之后都会清除 Cookie 管理器自动存储的 Cookie</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ul><li>如果一个采样器（Sampler）同级下有多个 Cookie 管理器，则无法指定当前要使用哪个 Cookie 管理器</li><li>另外，存储在一个 Cookie 管理器中的 Cookie 对其他任何管理器均不可用，因此请谨慎使用多个cookie管理器</li></ul>',61)]))}]]),r=JSON.parse('{"path":"/jmeter/guide/config/http_cookie.html","title":"HTTP Cookie管理器","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["config","HTTP_Cookie"],"order":4,"sticky":true,"description":"HTTP Cookie管理器 简单介绍 功能一 首先，它像网络浏览器一样存储和发送 cookie 如果有一个HTTP请求，并且响应包含 cookie，则 cookie 管理器会自动存储该 cookie，并将其用于后面对该特定网站的所有请求 cookie 管理自动存储的 cookie 不会出现在 Cookie Manager 的界面上，但是可以使用通过查...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/guide/config/http_cookie.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"HTTP Cookie管理器"}],["meta",{"property":"og:description","content":"HTTP Cookie管理器 简单介绍 功能一 首先，它像网络浏览器一样存储和发送 cookie 如果有一个HTTP请求，并且响应包含 cookie，则 cookie 管理器会自动存储该 cookie，并将其用于后面对该特定网站的所有请求 cookie 管理自动存储的 cookie 不会出现在 Cookie Manager 的界面上，但是可以使用通过查..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hekun97.github.io/assets/jmeter/1896874-20200819125220737-1825557594.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-30T15:06:38.000Z"}],["meta",{"property":"article:tag","content":"config"}],["meta",{"property":"article:tag","content":"HTTP_Cookie"}],["meta",{"property":"article:modified_time","content":"2025-03-30T15:06:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP Cookie管理器\\",\\"image\\":[\\"https://hekun97.github.io/assets/jmeter/1896874-20200819125220737-1825557594.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819130958851-1193536633.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819130901687-1274442285.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819135841398-187889462.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819131756648-1020256526.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819131959231-293176798.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819132005590-334886196.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819132220959-189955003.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819132226733-330704577.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819140634646-1317460433.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819141201645-938538542.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819141247103-110591751.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819141258118-2084720180.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819141336389-1909401062.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200819141526672-946754154.png\\"],\\"dateModified\\":\\"2025-03-30T15:06:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743183812000,"updatedTime":1743347198000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":2,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":2.87,"words":862},"filePathRelative":"jmeter/guide/config/http_cookie.md","localizedDate":"2025年3月28日","excerpt":"\\n<h2>简单介绍</h2>\\n<h4>功能一</h4>\\n<ul>\\n<li>首先，它像网络浏览器一样存储和发送 cookie</li>\\n<li>如果有一个HTTP请求，并且响应包含 cookie，则 cookie 管理器会<strong>自动存储</strong>该 cookie，并将其用于后面对该特定网站的所有请求</li>\\n<li>cookie 管理自动存储的 cookie 不会出现在 Cookie Manager 的界面上，但是可以使用通过查看结果树看到它</li>\\n</ul>\\n<h4>功能二</h4>\\n<ul>\\n<li>JMeter 会检查收到的 Cookie 是否对该URL有效，这意味着<strong>不会存储跨域 Cookie</strong></li>\\n<li>如果有错误的行为或希望使用跨域cookie，请定义 JMeter 属性</li>\\n</ul>","autoDesc":true}')},6995:(e,i)=>{i.A=(e,i)=>{const a=e.__vccOpts||e;for(const[e,t]of i)a[e]=t;return a}}}]);