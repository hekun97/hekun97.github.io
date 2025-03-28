"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[6472],{2669:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>i,data:()=>g});var r=a(6254);const n={},i=(0,a(6995).A)(n,[["render",function(e,t){return(0,r.uX)(),(0,r.CE)("div",null,t[0]||(t[0]=[(0,r.Fv)('<h1 id="详解用户自定义变量" tabindex="-1"><a class="header-anchor" href="#详解用户自定义变量"><span>详解用户自定义变量</span></a></h1><h2 id="用户自定义变量" tabindex="-1"><a class="header-anchor" href="#用户自定义变量"><span>用户自定义变量</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103023755-988297635.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103023755-988297635.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>我们通过实际栗子去讲述理论知识点</p><h2 id="测试计划树结构" tabindex="-1"><a class="header-anchor" href="#测试计划树结构"><span>测试计划树结构</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103054121-1857264417.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103054121-1857264417.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="测试计划" tabindex="-1"><a class="header-anchor" href="#测试计划"><span>测试计划</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103205833-1419351530.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103205833-1419351530.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>设置了一个变量 d1</p><h2 id="线程组" tabindex="-1"><a class="header-anchor" href="#线程组"><span>线程组</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103331897-889408369.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103331897-889408369.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>模拟两个用户，各循环五次</p><h2 id="线程组下的用户自定义变量" tabindex="-1"><a class="header-anchor" href="#线程组下的用户自定义变量"><span>线程组下的用户自定义变量</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103411108-950346790.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103411108-950346790.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>只设置了一个变量 d1</p><h2 id="http-请求下的用户自定义变量" tabindex="-1"><a class="header-anchor" href="#http-请求下的用户自定义变量"><span>HTTP 请求下的用户自定义变量</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103455557-1197592421.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103455557-1197592421.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>设置了两个变量 d1、d2</p><h2 id="flask-json-请求" tabindex="-1"><a class="header-anchor" href="#flask-json-请求"><span>Flask-json 请求</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103422153-1233121653.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103422153-1233121653.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103525746-147881303.gif" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200622103525746-147881303.gif" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>共发送 10 个请求</p><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点"><span>知识点</span></a></h2><ul><li><strong>线程组下</strong>的用户自定义变量 <strong>优先级高于</strong> <strong>测试计划</strong>里的用户自定义变量</li><li><strong>HTTP 请求下</strong>的用户自定义变量 <strong>优先级高于</strong> <strong>线程组下</strong>的用户自定义变量</li><li>若有<strong>重名</strong>变量，优先取优先级高的用户自定义变量</li><li>用户自定义变量在测试计划<strong>运行后</strong>，是<strong>全局生效的且只生成一次</strong>，它不是动态生成的；从测试结果可以看到，即使变量的值是随机数（Random），不同用户数循环多次，拿到的用户自定义变量值都是一样的</li><li><strong>拓展：<strong>如果想要每次用户自定义变量的值是动态生成的，可以使用</strong>前置处理器-用户参数</strong>，可参考：<a href="https://www.cnblogs.com/poloyy/p/13175865.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/poloyy/p/13175865.html</a></li></ul>',25)]))}]]),g=JSON.parse('{"path":"/jmeter/guide/config/user_custom_variable.html","title":"详解用户自定义变量","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["config","detail"],"order":17,"sticky":true,"description":"详解用户自定义变量 用户自定义变量 imgimg 我们通过实际栗子去讲述理论知识点 测试计划树结构 imgimg 测试计划 imgimg 设置了一个变量 d1 线程组 imgimg 模拟两个用户，各循环五次 线程组下的用户自定义变量 imgimg 只设置了一个变量 d1 HTTP 请求下的用户自定义变量 imgimg 设置了两个变量 d1、d2 Fla...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/guide/config/user_custom_variable.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"详解用户自定义变量"}],["meta",{"property":"og:description","content":"详解用户自定义变量 用户自定义变量 imgimg 我们通过实际栗子去讲述理论知识点 测试计划树结构 imgimg 测试计划 imgimg 设置了一个变量 d1 线程组 imgimg 模拟两个用户，各循环五次 线程组下的用户自定义变量 imgimg 只设置了一个变量 d1 HTTP 请求下的用户自定义变量 imgimg 设置了两个变量 d1、d2 Fla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hekun97.github.io/assets/jmeter/1896874-20200622103023755-988297635.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-28T17:43:32.000Z"}],["meta",{"property":"article:tag","content":"config"}],["meta",{"property":"article:tag","content":"detail"}],["meta",{"property":"article:modified_time","content":"2025-03-28T17:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解用户自定义变量\\",\\"image\\":[\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103023755-988297635.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103054121-1857264417.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103205833-1419351530.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103331897-889408369.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103411108-950346790.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103455557-1197592421.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103422153-1233121653.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200622103525746-147881303.gif\\"],\\"dateModified\\":\\"2025-03-28T17:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743183812000,"updatedTime":1743183812000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"jmeter/guide/config/user_custom_variable.md","localizedDate":"2025年3月28日","excerpt":"\\n<h2>用户自定义变量</h2>\\n<figure><a href=\\"https://img2020.cnblogs.com/blog/1896874/202006/1896874-20200622103023755-988297635.png\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"/assets/jmeter/1896874-20200622103023755-988297635.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption>img</figcaption></figure>","autoDesc":true}')},6995:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}}}]);