import{_ as n,W as s,X as a,Y as e}from"./framework-30063720.js";const t={},i=e(`<h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2><p><code>Expression Language</code>（表达式语言）。</p><h2 id="_2-作用" tabindex="-1"><a class="header-anchor" href="#_2-作用" aria-hidden="true">#</a> 2. 作用</h2><p>替换和简化<code>jsp</code>页面中<code>java</code>代码的编写</p><h2 id="_3-语法格式" tabindex="-1"><a class="header-anchor" href="#_3-语法格式" aria-hidden="true">#</a> 3. 语法格式</h2><p>格式为：<code>\${表达式}</code>。</p><blockquote><p>jsp默认支持el表达式的，如果要忽略el表达式：</p></blockquote><blockquote><ol><li>设置<code>jsp</code>中<code>page</code>指令中：<code>isELIgnored=&quot;true&quot;</code>忽略当前jsp页面中所有的el表达式；</li><li><code>\\\\\${表达式}</code> ：忽略当前这个el表达式。</li></ol></blockquote><h2 id="_4-使用" tabindex="-1"><a class="header-anchor" href="#_4-使用" aria-hidden="true">#</a> 4. 使用</h2><h3 id="_4-1-用于运算" tabindex="-1"><a class="header-anchor" href="#_4-1-用于运算" aria-hidden="true">#</a> 4.1. 用于运算</h3><p>包括算数运算符、比较运算符、逻辑运算符、空运算符。具体如下：</p><ol><li>算数运算符：<code>+ - * /(div) %(mod)</code></li><li>比较运算符： <code>&gt; &lt; &gt;= &lt;= == !=</code></li><li>逻辑运算符：<code>&amp;&amp;(and) ||(or) !(not)</code></li><li>空运算符： <code>empty</code></li></ol><p>用于判断字符串、集合、数组对象是否为<code>null</code>或者长度是否为0。解析如下：</p><ul><li><code>\${empty list}</code>：表示判断字符串、集合、数组对象是否为<code>null</code>或者长度为0；</li><li><code>\${not empty str}</code>：表示判断字符串、集合、数组对象是否不为<code>null</code>并且 长度&gt;0。</li></ul><h3 id="_4-2-获取域对象中的值" tabindex="-1"><a class="header-anchor" href="#_4-2-获取域对象中的值" aria-hidden="true">#</a> 4.2. 获取域对象中的值</h3><p>el表达式只能从域对象中获取值。具体如下：</p><ol><li><p>\${域名称.键名}：从指定域中获取指定键的值</p><ul><li><p>域名称：</p><ol><li>pageScope    --&gt; pageContext</li><li>requestScope   --&gt; request</li><li>sessionScope   --&gt; session</li><li>applicationScope   --&gt; application（ServletContext）</li></ol></li><li><p>示例：在request域中存储了<code>name=张三</code>；获取：<code>\${requestScope.name}</code>。</p></li></ul></li><li><p><code>\${键名}</code>：表示依次从最小的域中查找是否有该键对应的值，直到找到为止。</p></li></ol><p>例：<code>\${name}</code>，先到pageContext中找是否有name，再到request中去找，直到找到为止。</p><blockquote><p>上述的域名称顺序也是默认查找的顺序。</p></blockquote><h3 id="_4-3-获取对象、list集合、map集合的值" tabindex="-1"><a class="header-anchor" href="#_4-3-获取对象、list集合、map集合的值" aria-hidden="true">#</a> 4.3. 获取对象、List集合、Map集合的值</h3><p>可获取对象、List集合、Map集合的值，具体如下：</p><ol><li>对象：<code>\${域名称.键名.属性名}</code></li></ol><blockquote><p>本质上会去调用对象的getter方法</p></blockquote><ol start="2"><li><p>List集合：<code>\${域名称.键名[索引]}</code></p></li><li><p>Map集合：</p><ul><li><code>\${域名称.键名.key名称}</code></li><li><code>\${域名称.键名[&quot;key名称&quot;]</code></li></ul></li></ol><p>代码演示如下：</p><ol><li>User类型的JavaBean：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>domain</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBirStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>birthday <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//1.格式化日期对象</span>
            <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//2.返回字符串即可</span>
            <span class="token keyword">return</span> sdf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>JSP中EL表达式的使用：</li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;cn.itcast.domain.User&quot; %&gt;
&lt;%@ page import=&quot;java.util.*&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;el获取数据&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%	//1.设置对象
        User user = new User();//获取JavaBean的User对象
    	//设置user对象的值
        user.setName(&quot;张三&quot;);
        user.setAge(23);
        user.setBirthday(new Date());
        request.setAttribute(&quot;u&quot;,user);//共享数据
		//2.设置List集合
        List list = new ArrayList();
        list.add(&quot;aaa&quot;);
        list.add(&quot;bbb&quot;);
        list.add(user);
        request.setAttribute(&quot;list&quot;,list);
		//3.设置Map集合
        Map map = new HashMap();
        map.put(&quot;sname&quot;,&quot;李四&quot;);
        map.put(&quot;gender&quot;,&quot;男&quot;);
        map.put(&quot;user&quot;,user);
        request.setAttribute(&quot;map&quot;,map);
    %&gt;

    	&lt;h3&gt;1.el获取对象中的值&lt;/h3&gt;
	&lt;!--
        通过的是对象中属性来获取。
        setter或getter方法，去掉set或get，在将剩余部分，首字母变为小写。
        过程：setName -- Name -- name
	--&gt;
        \${requestScope.u.name}&lt;br&gt;
    	&lt;!-- 通过默认顺序查找 --&gt;
        \${u.age}&lt;br&gt;
        \${u.birthday}&lt;br&gt;
        \${u.birthday.month}&lt;br&gt;&lt;!-- u.birthday是Date类型，可以调用GetMonth方法返回月份 --&gt;
    	\${u.birStr}&lt;br&gt;

        &lt;h3&gt;2.el获取List集合中的值&lt;/h3&gt;
        \${list}&lt;br&gt;
        \${list[0]}&lt;br&gt;
        \${list[1]}&lt;br&gt;
        \${list[10]}&lt;br&gt;
    	\${list[2].name}&lt;!-- list[2]存储的User类型的user，可以调用GetName方法返回姓名--&gt;

        &lt;h3&gt;3.el获取Map集合中的值&lt;/h3&gt;
        \${map.gender}&lt;br&gt;
        \${map[&quot;gender&quot;]}&lt;br&gt;
        \${map.user.name}&lt;!--map.user存储的Uesr类型的user，可以调用GetName方法返回姓名--&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-隐式对象" tabindex="-1"><a class="header-anchor" href="#_5-隐式对象" aria-hidden="true">#</a> 5. 隐式对象</h2><h3 id="_5-1-pagecontext" tabindex="-1"><a class="header-anchor" href="#_5-1-pagecontext" aria-hidden="true">#</a> 5.1. pageContext</h3><p>用于获取jsp其他八个内置对象。常用的有<code>\${pageContext.request.contextPath}</code>：动态获取虚拟目录。</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;el隐式对象&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

    \${pageContext.request}&lt;br&gt;&lt;!--获取request对象--&gt;
    \${pageContext.request.contextPath}&lt;!--pageContext获取request对象后，使用getContextpath()方法实现在jsp页面动态获取虚拟目录--&gt;
    &lt;h4&gt;动态获取虚拟目录&lt;/h4&gt;
    &lt;from action = &quot;\${pageContext.request.contextPath}/loginServlet&quot;&gt;
        使用示例
    &lt;/from&gt;
&lt;%
    response.sendRedirect(request.getContextPath()+&quot;资源路径&quot;);//java代码重定向动态获取虚拟目录

%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>el表达式中有11个隐式对象，将在后面进行学习。</p></blockquote><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,35),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","17.EL.html.vue"]]);export{u as default};
