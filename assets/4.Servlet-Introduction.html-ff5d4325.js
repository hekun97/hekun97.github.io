import{_ as n,W as s,X as a,Y as e}from"./framework-30063720.js";const t={},l=e(`<h2 id="_1-servlet入门" tabindex="-1"><a class="header-anchor" href="#_1-servlet入门" aria-hidden="true">#</a> 1. Servlet入门</h2><h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念" aria-hidden="true">#</a> 1.1 概念</h3><p>Servlet(server applet)是运行在服务器端的小程序。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638434.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Servlet就是一个接口，定义了Java类被浏览器访问到(tomcat识别)的规则；</li><li>使用时需要自定义一个类来实现Servlet接口，复写Servlet接口的方法。</li></ul><blockquote><p>动态资源：不同的人访问的资源可能不一样。</p></blockquote><h3 id="_1-2-快速入门" tabindex="-1"><a class="header-anchor" href="#_1-2-快速入门" aria-hidden="true">#</a> 1.2 快速入门</h3><ol><li>创建一个JavaWEB项目 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638435.jpg" alt="" loading="lazy"></li><li>定义一个类，实现Servlet接口，代码为<code>public class ServletDemo1 implements Servlet</code></li><li>覆写接口中的抽象方法 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638436.jpg" alt="" loading="lazy"></li><li>配置Servlet，在web.xml中配置Servlet，并映射虚拟路径。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638437.jpg" alt="" loading="lazy"></li><li>启动Tomcat服务器，并访问相应虚拟路径； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638438.jpg" alt="" loading="lazy"><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638439.jpg" alt="" loading="lazy"></li></ol><h3 id="_1-3-执行原理" tabindex="-1"><a class="header-anchor" href="#_1-3-执行原理" aria-hidden="true">#</a> 1.3 执行原理</h3><ol><li>当服务器接收到客户端浏览器的请求后，会解析请求URL路径，获取访问的Servlet的资源路径；</li><li>查找web.xml文件，是否有对应的<code>&lt;url-pattern&gt;</code>标签体内容；</li><li>如果有，则再找到对应的<code>&lt;servlet-class&gt;</code>全类名；</li><li>tomcat会将字节码文件加载进内存，并且创建其对象；</li><li>调用其方法。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638440.jpg" alt="" loading="lazy"></li></ol><h3 id="_1-4-servlet的生命周期" tabindex="-1"><a class="header-anchor" href="#_1-4-servlet的生命周期" aria-hidden="true">#</a> 1.4. Servlet的生命周期</h3><p>Servlet中的生命周期主要有Servlet被创建时执行一次的init方法，提供服务的service方法和正常关闭服务器时执行一次的destroy方法。</p><h4 id="_1-4-1-init方法" tabindex="-1"><a class="header-anchor" href="#_1-4-1-init方法" aria-hidden="true">#</a> 1.4.1 init方法</h4><p>被创建时执行init方法，只执行一次，Servlet默认情况下，第一次被访问时，Servlet被创建。</p><ul><li>可以在web.xml中的<code>&lt;servlet&gt;</code>标签下配置执行Servlet的创建时机。 <ol><li>第一次被访问时，创建； <code>&lt;load-on-startup&gt;</code>的值为负数</li><li>在服务器启动时，创建。 <code>&lt;load-on-startup&gt;</code>的值为0或正整数</li></ol></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>demo1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>hek.web.servlet.ServletDemo1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Servlet的init方法，只执行一次，说明一个Servlet在内存中只存在一个对象，Servlet是单例的。</p><ol><li>多个用户同时访问时，可能存在线程安全问题。</li><li>解决方法：尽量不要在Servlet中定义成员变量。即使定义了成员变量，也不要对修改值</li></ol></blockquote><h4 id="_1-4-2-service方法" tabindex="-1"><a class="header-anchor" href="#_1-4-2-service方法" aria-hidden="true">#</a> 1.4.2 service方法</h4><p>提供服务时执行service方法，可执行多次。</p><ul><li>每次访问Servlet时，Service方法都会被调用一次。</li></ul><h4 id="_1-4-3-destroy方法" tabindex="-1"><a class="header-anchor" href="#_1-4-3-destroy方法" aria-hidden="true">#</a> 1.4.3 destroy方法</h4><p>被销毁时执行destroy方法，只执行一次。</p><blockquote><ol><li>服务器关闭时，Servlet被销毁。</li><li>只有服务器正常关闭时，才会执行destroy方法。</li><li>destroy方法在Servlet被销毁之前执行，一般用于释放资源。</li></ol></blockquote><h3 id="_1-5-servlet的注解配置" tabindex="-1"><a class="header-anchor" href="#_1-5-servlet的注解配置" aria-hidden="true">#</a> 1.5 Servlet的注解配置</h3><p>Servlet3.0以上支持注解配置。可以不需要web.xml了。</p><h4 id="_1-5-1-使用步骤" tabindex="-1"><a class="header-anchor" href="#_1-5-1-使用步骤" aria-hidden="true">#</a> 1.5.1 使用步骤</h4><ol><li>创建JavaEE项目，选择Servlet的版本3.0以上，不创建web.xml； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638441.jpg" alt="" loading="lazy"></li><li>定义一个类，实现Servlet接口</li><li>复写Servlet的方法</li><li>在类上使用@WebServlet注解，进行配置，代码<code>@WebServlet(&quot;/资源路径&quot;)</code>。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638442.jpg" alt="" loading="lazy"></li></ol><blockquote><p>资源路径必须加上反斜线，不然会报错。</p></blockquote><h4 id="_1-5-2-实现原理" tabindex="-1"><a class="header-anchor" href="#_1-5-2-实现原理" aria-hidden="true">#</a> 1.5.2 实现原理</h4><p>WebServlet的注解中对XML的配置给了默认值，可根据自己的需求进行传入参数，默认传入的为资源路径。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">WebServlet</span> <span class="token punctuation">{</span>
<span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token comment">//相当于&lt;Servlet-name&gt;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//代表urlPatterns()属性配置</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">urlPatterns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//相当于&lt;url-pattern&gt;,这也是默认传入值</span>

<span class="token keyword">int</span> <span class="token function">loadOnStartup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//相当于&lt;load-on-startup&gt;</span>

<span class="token class-name">WebInitParam</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">initParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">asyncSupported</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">smallIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">largeIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">description</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认传入的是虚拟目录路径。<img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638443.jpg" alt="" loading="lazy"></p><h2 id="_2-servlet进阶" tabindex="-1"><a class="header-anchor" href="#_2-servlet进阶" aria-hidden="true">#</a> 2. Servlet进阶</h2><p>在入门阶段学习了Serlet的概念、使用步骤、执行原理、生命周期、注解配置。现在学习更多的Servlet的知识。</p><h3 id="_2-1-servlet的体系结构" tabindex="-1"><a class="header-anchor" href="#_2-1-servlet的体系结构" aria-hidden="true">#</a> 2.1 Servlet的体系结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Servlet -- 接口
	|
GenericServlet -- 抽象类
	|
HttpServlet  -- 抽象类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-genericservlet" tabindex="-1"><a class="header-anchor" href="#_2-1-1-genericservlet" aria-hidden="true">#</a> 2.1.1 GenericServlet</h4><p>将Servlet接口中其他的方法做了默认空实现，只将service()方法作为抽象方法，将来定义Servlet类时，可以继承GenericServlet，实现service()方法即可。</p><blockquote><p>了解即可，真正开发时不用这种方式。</p></blockquote><h4 id="_2-1-2-httpservlet" tabindex="-1"><a class="header-anchor" href="#_2-1-2-httpservlet" aria-hidden="true">#</a> 2.1.2 HttpServlet</h4><p>对http协议的一种封装，简化操作。</p><h5 id="_2-1-2-1-使用步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-使用步骤" aria-hidden="true">#</a> 2.1.2.1 使用步骤</h5><ol><li>定义类继承HttpServlet</li><li>复写doGet/doPost方法</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//为保持简介已去掉导包代码</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">&quot;/demo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletDemo</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doPost...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doGet...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用doGet方法，默认情况下直接访问该路径就是get请求，触发该方法。</li><li>使用doPost方法，最简单的方式为建立一个表单页面(login.html)，然后访问表单的路径(/login.html)，使用post方法将信息提交到/demo路径下。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> web目录下的login<span class="token punctuation">.</span>html 表单<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">&gt;</span></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">&gt;</span></span>login<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;/demo&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-servlet访问路径" tabindex="-1"><a class="header-anchor" href="#_2-2-servlet访问路径" aria-hidden="true">#</a> 2.2 Servlet访问路径</h3><p>一个Servlet可以定义多个访问路径 ，如<code>@WebServlet({&quot;/d4&quot;,&quot;/dd4&quot;,&quot;/ddd4&quot;})</code>，然后可以通过其中的任意一个路径进行访问到该资源。</p><h4 id="_2-2-1-路径定义规则" tabindex="-1"><a class="header-anchor" href="#_2-2-1-路径定义规则" aria-hidden="true">#</a> 2.2.1 路径定义规则</h4><ol><li><code>/xxx</code>：路径匹配</li><li><code>/xxx/xxx</code>:多层路径，目录结构</li><li><code>*.do</code>：扩展名匹配</li></ol><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/02.Servlet-HTTP-Request/202303271638444.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,51),o=[l];function p(c,i){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","4.Servlet-Introduction.html.vue"]]);export{u as default};