"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[7043],{4496:(e,a,r)=>{r.r(a),r.d(a,{comp:()=>s,data:()=>p});var t=r(6254);const n={},s=(0,r(6995).A)(n,[["render",function(e,a){return(0,t.uX)(),(0,t.CE)("div",null,a[0]||(a[0]=[(0,t.Fv)('<h1 id="beanshell-内置变量-props" tabindex="-1"><a class="header-anchor" href="#beanshell-内置变量-props"><span>BeanShell 内置变量 props</span></a></h1><h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h2><p>BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子</p><h2 id="简单介绍" tabindex="-1"><a class="header-anchor" href="#简单介绍"><span>简单介绍</span></a></h2><ul><li>props 映射 java.util 的 Properties 类</li><li>与 vars 作用大致相同，区别的是 vars 是对<strong>变量</strong>进行读写操作， 而 props 主要是对<strong>属性</strong>进行读写操作</li><li>vars 只能在当前线程组内使用，props 可以跨线程组使用 ，因为属性可以跨线程组但是变量不行</li><li>vars 只能保存 String 或者 Object，props 可以是 Hashtable 或者 Object</li><li>java.util.Properties 这个类是<strong>线程安全</strong>的；多个线程可以共享一个 Properties 对象，而不需要外部同步</li><li>官方文档： <a href="https://tool.oschina.net/uploads/apidocs/jdk-zh/java/util/Properties.html" target="_blank" rel="noopener noreferrer">https://tool.oschina.net/uploads/apidocs/jdk-zh/java/util/Properties.html</a></li></ul><h2 id="props常用方法" tabindex="-1"><a class="header-anchor" href="#props常用方法"><span>props常用方法</span></a></h2><h3 id="getproperty" tabindex="-1"><a class="header-anchor" href="#getproperty"><span>getProperty</span></a></h3><h4 id="方法声明" tabindex="-1"><a class="header-anchor" href="#方法声明"><span>方法声明</span></a></h4><p>public String getProperty(String key)</p><p>public String getProperty(String key, String defaultValue)：当 key 不存在则返回默认值</p><h4 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h4><p>用指定的键在此属性列表中搜索属性，如果在此属性列表中未找到该键，则接着递归检查默认属性列表及其默认值。如果未找到属性，则此方法返回 null</p><h4 id="栗子" tabindex="-1"><a class="header-anchor" href="#栗子"><span>栗子</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827152102384-284153857.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200827152102384-284153857.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h3 id="setproperty" tabindex="-1"><a class="header-anchor" href="#setproperty"><span>setProperty</span></a></h3><h4 id="方法声明-1" tabindex="-1"><a class="header-anchor" href="#方法声明-1"><span>方法声明</span></a></h4><p>public Object setProperty(String key,String value)</p><h4 id="功能-1" tabindex="-1"><a class="header-anchor" href="#功能-1"><span>功能</span></a></h4><p>设置属性值</p><h4 id="栗子-1" tabindex="-1"><a class="header-anchor" href="#栗子-1"><span>栗子</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827152435600-619147658.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200827152435600-619147658.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h3 id="propertynames" tabindex="-1"><a class="header-anchor" href="#propertynames"><span>propertyNames</span></a></h3><h4 id="方法声明-2" tabindex="-1"><a class="header-anchor" href="#方法声明-2"><span>方法声明</span></a></h4><p>public Enumeration&lt;?&gt; propertyNames()</p><h4 id="功能-2" tabindex="-1"><a class="header-anchor" href="#功能-2"><span>功能</span></a></h4><p>返回属性列表中所有键的枚举，如果在主属性列表中未找到同名的键，则包括默认属性列表中不同的键</p><h4 id="栗子-2" tabindex="-1"><a class="header-anchor" href="#栗子-2"><span>栗子</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827153211291-1982523964.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200827153211291-1982523964.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size"><span>size</span></a></h3><h4 id="方法声明-3" tabindex="-1"><a class="header-anchor" href="#方法声明-3"><span>方法声明</span></a></h4><p>public int size()</p><h4 id="功能-3" tabindex="-1"><a class="header-anchor" href="#功能-3"><span>功能</span></a></h4><p>返回有多少个属性</p><h4 id="栗子-3" tabindex="-1"><a class="header-anchor" href="#栗子-3"><span>栗子</span></a></h4><figure><a href="https://img2020.cnblogs.com/blog/1896874/202008/1896874-20200827160259637-451163819.png" target="_blank" rel="noopener noreferrer"><img src="/assets/jmeter/1896874-20200827160259637-451163819.png" alt="img" tabindex="0" loading="lazy"></a><figcaption>img</figcaption></figure>',35)]))}]]),p=JSON.parse('{"path":"/jmeter/script/beanshell/props.html","title":"BeanShell 内置变量 props","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["JMeter"],"tag":["props","Beanshell"],"order":4,"sticky":true,"description":"BeanShell 内置变量 props 前提 BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子 简单介绍 props 映射 java.util 的 Properties 类 与 vars 作用大致相同，区别的是 vars 是对变量进行读写操作， 而 props 主要是对属性进行读写操作 v...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/jmeter/script/beanshell/props.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"BeanShell 内置变量 props"}],["meta",{"property":"og:description","content":"BeanShell 内置变量 props 前提 BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子 简单介绍 props 映射 java.util 的 Properties 类 与 vars 作用大致相同，区别的是 vars 是对变量进行读写操作， 而 props 主要是对属性进行读写操作 v..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hekun97.github.io/assets/jmeter/1896874-20200827152102384-284153857.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-29T08:50:01.000Z"}],["meta",{"property":"article:tag","content":"props"}],["meta",{"property":"article:tag","content":"Beanshell"}],["meta",{"property":"article:modified_time","content":"2025-03-29T08:50:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BeanShell 内置变量 props\\",\\"image\\":[\\"https://hekun97.github.io/assets/jmeter/1896874-20200827152102384-284153857.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200827152435600-619147658.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200827153211291-1982523964.png\\",\\"https://hekun97.github.io/assets/jmeter/1896874-20200827160259637-451163819.png\\"],\\"dateModified\\":\\"2025-03-29T08:50:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1743238201000,"updatedTime":1743238201000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":1.39,"words":418},"filePathRelative":"jmeter/script/beanshell/props.md","localizedDate":"2025年3月29日","excerpt":"\\n<h2>前提</h2>\\n<p>BeanShell 有的内置变量，JSR223 也会有对应的变量，这里 JSR223 效率更高，所以以它为栗子</p>\\n<h2>简单介绍</h2>\\n<ul>\\n<li>props 映射 java.util 的 Properties 类</li>\\n<li>与 vars 作用大致相同，区别的是 vars 是对<strong>变量</strong>进行读写操作， 而 props 主要是对<strong>属性</strong>进行读写操作</li>\\n<li>vars 只能在当前线程组内使用，props 可以跨线程组使用 ，因为属性可以跨线程组但是变量不行</li>\\n<li>vars 只能保存 String 或者 Object，props 可以是 Hashtable 或者 Object</li>\\n<li>java.util.Properties 这个类是<strong>线程安全</strong>的；多个线程可以共享一个 Properties 对象，而不需要外部同步</li>\\n<li>官方文档： <a href=\\"https://tool.oschina.net/uploads/apidocs/jdk-zh/java/util/Properties.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://tool.oschina.net/uploads/apidocs/jdk-zh/java/util/Properties.html</a></li>\\n</ul>","autoDesc":true}')},6995:(e,a)=>{a.A=(e,a)=>{const r=e.__vccOpts||e;for(const[e,t]of a)r[e]=t;return r}}}]);