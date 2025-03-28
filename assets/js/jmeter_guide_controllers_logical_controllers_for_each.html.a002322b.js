"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[3014],{5237:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>i,data:()=>o});var r=t(6254);const n={},i=(0,t(6995).A)(n,[["render",function(e,a){return(0,r.uX)(),(0,r.CE)("div",null,a[0]||(a[0]=[(0,r.Fv)('<h1 id="详解-foreach控制器" tabindex="-1"><a class="header-anchor" href="#详解-foreach控制器"><span>详解 ForEach控制器</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><ul><li>ForEach 控制器一般和用户自定义变量/JDBC结果变量一起使用，用于可以遍历读取相关的返回值</li><li>该控制器下的 Samplers 和控制器都会被执行一次或多次，每次读取不同的变量值</li><li>ForEach 控制器和正则提取器是个好搭档，因为正则提取出来的变量值会用_分隔，而 ForEach 可以省略 _</li></ul><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach"><span>ForEach</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703141347472-1283755239.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703141347472-1283755239.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="foreach-界面介绍" tabindex="-1"><a class="header-anchor" href="#foreach-界面介绍"><span>ForEach 界面介绍</span></a></h2><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703141351108-1518404042.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703141351108-1518404042.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="字段含义" tabindex="-1"><a class="header-anchor" href="#字段含义"><span>字段含义</span></a></h4><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">Input Variable Prefix</td><td style="text-align:left;">输入变量名的前缀，默认为一个空字符串作为前缀。</td></tr><tr><td style="text-align:left;">Start index for loop(exclusive)</td><td style="text-align:left;">循环开始的索引不包括此值默认从 1 开始填 0 则起始索引是 1，填 1 则是 2</td></tr><tr><td style="text-align:left;">End index for loop(inclusive)</td><td style="text-align:left;">循环结束的索引包括此值填 100 则结束索引是 100</td></tr><tr><td style="text-align:left;">Output variable</td><td style="text-align:left;">输出的变量名在后续循环中，samplers 可使用的变量名</td></tr><tr><td style="text-align:left;">Add”_”before number</td><td style="text-align:left;">输入变量名和索引之间是否有 _ 间隔不勾选的话，则输入变量名和索引直接相连</td></tr></tbody></table><h2 id="foreach-结合用户自定义变量的栗子" tabindex="-1"><a class="header-anchor" href="#foreach-结合用户自定义变量的栗子"><span>ForEach 结合用户自定义变量的栗子</span></a></h2><h4 id="线程组树结构" tabindex="-1"><a class="header-anchor" href="#线程组树结构"><span>线程组树结构</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165202855-1570244898.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165202855-1570244898.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>线程组，只有一个线程</p><h4 id="用户自定义变量" tabindex="-1"><a class="header-anchor" href="#用户自定义变量"><span>用户自定义变量</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165207103-1988572958.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165207103-1988572958.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>一共有四个</p><h4 id="foreach-1" tabindex="-1"><a class="header-anchor" href="#foreach-1"><span>ForEach</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165212845-471223986.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165212845-471223986.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>前缀为 name 的有四个变量，所以循环四次</p><h4 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165218112-2084651568.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165218112-2084651568.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="如果输出变量名称为空-需要怎么取循环的值" tabindex="-1"><a class="header-anchor" href="#如果输出变量名称为空-需要怎么取循环的值"><span>如果输出变量名称为空，需要怎么取循环的值？</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165704757-1366572034.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165704757-1366572034.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>直接取空即可 ${}</p><h2 id="foreach-不勾选-add-before-number-的栗子" tabindex="-1"><a class="header-anchor" href="#foreach-不勾选-add-before-number-的栗子"><span>ForEach 不勾选 Add”_”before number 的栗子</span></a></h2><h4 id="线程组树结构-1" tabindex="-1"><a class="header-anchor" href="#线程组树结构-1"><span>线程组树结构</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165202855-1570244898.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165202855-1570244898.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="用户自定义变量-1" tabindex="-1"><a class="header-anchor" href="#用户自定义变量-1"><span>用户自定义变量</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703171227636-721346752.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703171227636-721346752.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="foreach-2" tabindex="-1"><a class="header-anchor" href="#foreach-2"><span>ForEach</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703165212845-471223986.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703165212845-471223986.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="运行结果-1" tabindex="-1"><a class="header-anchor" href="#运行结果-1"><span>运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703171233276-947313724.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703171233276-947313724.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="foreach-结合-jdbc-request-的栗子一" tabindex="-1"><a class="header-anchor" href="#foreach-结合-jdbc-request-的栗子一"><span>ForEach 结合 JDBC Request 的栗子一</span></a></h2><h4 id="线程组树结构-2" tabindex="-1"><a class="header-anchor" href="#线程组树结构-2"><span>线程组树结构</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703170616294-1266049532.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703170616294-1266049532.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="jdbc-运行结果" tabindex="-1"><a class="header-anchor" href="#jdbc-运行结果"><span>JDBC 运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703170621282-1283836304.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703170621282-1283836304.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>JDBC 一共返回 100 条数据，这里我们是通过 Variable names 去接住所有数据，对应有 100 个变量（mobile_1 到 mobile_100）</p><h4 id="foreach-3" tabindex="-1"><a class="header-anchor" href="#foreach-3"><span>ForEach</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703170706856-2045214002.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703170706856-2045214002.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>循环 100 次，输入变量 mobile_1 - mobile_100 并输出为 new_mobile_1 - new_mobile_100</p><h4 id="运行结果-2" tabindex="-1"><a class="header-anchor" href="#运行结果-2"><span>运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703170811880-1788937199.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703170811880-1788937199.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h2 id="foreach-结合-jdbc-request-的栗子二" tabindex="-1"><a class="header-anchor" href="#foreach-结合-jdbc-request-的栗子二"><span>ForEach 结合 JDBC Request 的栗子二</span></a></h2><h4 id="线程组树结构-3" tabindex="-1"><a class="header-anchor" href="#线程组树结构-3"><span>线程组树结构</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703171319541-285272099.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703171319541-285272099.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h4 id="jdbc-运行结果-1" tabindex="-1"><a class="header-anchor" href="#jdbc-运行结果-1"><span>JDBC 运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703171455111-2125012031.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703171455111-2125012031.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><ul><li>这里通过 Result Variable name 去接住所有数据，只有一个变量，是无法循环的</li><li>所以我们需要通过<strong>正则提取器</strong>将需要的 mobile 字段的值提取出来</li></ul><h4 id="正则提取器" tabindex="-1"><a class="header-anchor" href="#正则提取器"><span>正则提取器</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703172004302-1964600823.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703172004302-1964600823.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>关于正则提取器更多知识点可看：<a href="https://www.cnblogs.com/poloyy/p/13179150.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/poloyy/p/13179150.html</a></p><h4 id="正则提取结果" tabindex="-1"><a class="header-anchor" href="#正则提取结果"><span>正则提取结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703172128888-1272428248.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703172128888-1272428248.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>我们要的其实是箭头的那些，但是正则会提取不必要的字段值（如：mobile_new_11_g0），所以注意 ForEach 的输入变量前缀要写正确</p><h4 id="foreach-4" tabindex="-1"><a class="header-anchor" href="#foreach-4"><span>ForEach</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703172300840-1888884591.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703172300840-1888884591.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><p>循环 100 次，输入变量 mobile_new_1 - mobile_new_100 并输出为 mobile_1 - mobile_100</p><h4 id="运行结果-3" tabindex="-1"><a class="header-anchor" href="#运行结果-3"><span>运行结果</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703172308303-730237368.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200703172308303-730237368.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure>',61)]))}]]),o=JSON.parse('{"path":"/jmeter/guide/controllers/logical_controllers/for_each.html","title":"详解 ForEach控制器","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["Controller","ForEach"],"order":6,"sticky":true,"description":"详解 ForEach控制器 前言 ForEach 控制器一般和用户自定义变量/JDBC结果变量一起使用，用于可以遍历读取相关的返回值 该控制器下的 Samplers 和控制器都会被执行一次或多次，每次读取不同的变量值 ForEach 控制器和正则提取器是个好搭档，因为正则提取出来的变量值会用_分隔，而 ForEach 可以省略 _ ForEach im...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/guide/controllers/logical_controllers/for_each.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"详解 ForEach控制器"}],["meta",{"property":"og:description","content":"详解 ForEach控制器 前言 ForEach 控制器一般和用户自定义变量/JDBC结果变量一起使用，用于可以遍历读取相关的返回值 该控制器下的 Samplers 和控制器都会被执行一次或多次，每次读取不同的变量值 ForEach 控制器和正则提取器是个好搭档，因为正则提取出来的变量值会用_分隔，而 ForEach 可以省略 _ ForEach im..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hekun97.github.io/assets/jmeter/1896874-20200703141347472-1283755239.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-28T17:43:32.000Z"}],["meta",{"property":"article:tag","content":"Controller"}],["meta",{"property":"article:tag","content":"ForEach"}],["meta",{"property":"article:modified_time","content":"2025-03-28T17:43:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 ForEach控制器\\",\\"image\\":[\\"https://hekun97.github.io/assets/jmeter/1896874-20200703141347472-1283755239.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703141351108-1518404042.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165202855-1570244898.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165207103-1988572958.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165212845-471223986.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165218112-2084651568.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165704757-1366572034.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165202855-1570244898.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703171227636-721346752.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703165212845-471223986.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703171233276-947313724.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703170616294-1266049532.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703170621282-1283836304.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703170706856-2045214002.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703170811880-1788937199.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703171319541-285272099.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703171455111-2125012031.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703172004302-1964600823.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703172128888-1272428248.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703172300840-1888884591.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200703172308303-730237368.png\\"],\\"dateModified\\":\\"2025-03-28T17:43:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743183812000,"updatedTime":1743183812000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":2.7,"words":811},"filePathRelative":"jmeter/guide/controllers/logical_controllers/for_each.md","localizedDate":"2025年3月28日","excerpt":"\\n<h2>前言</h2>\\n<ul>\\n<li>ForEach 控制器一般和用户自定义变量/JDBC结果变量一起使用，用于可以遍历读取相关的返回值</li>\\n<li>该控制器下的 Samplers 和控制器都会被执行一次或多次，每次读取不同的变量值</li>\\n<li>ForEach 控制器和正则提取器是个好搭档，因为正则提取出来的变量值会用_分隔，而 ForEach 可以省略 _</li>\\n</ul>\\n<h2>ForEach</h2>\\n<figure><a href=\\"https://img2020.cnblogs.com/blog/1896874/202007/1896874-20200703141347472-1283755239.png\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"/assets/jmeter/1896874-20200703141347472-1283755239.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption>img</figcaption></figure>","autoDesc":true}')},6995:(e,a)=>{a.A=(e,a)=>{const t=e.__vccOpts||e;for(const[e,r]of a)t[e]=r;return t}}}]);