import{_ as e,W as i,X as t,a0 as a}from"./framework-174e6972.js";const l={},n=a(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p><code>JavaServer Pages Tag Library</code> (JSP标准标签库) ，是由Apache组织提供的开源的免费的jsp标签。</p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>用于简化和替换jsp页面上的java代码</p><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><ol><li></li></ol><p>导入jstl相关jar包；</p><p><img src="https://raw.githubusercontent.com/hekun97/picture/main/img/JSTL导jar包.png#alt=JSTL导jar包" alt="" loading="lazy"></p><ol start="2"><li></li></ol><p>在JSP页面中引入标签库：taglib指令： <code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</code>；</p><ol start="3"><li></li></ol><p>使用标签。</p><h2 id="常用的jstl标签" tabindex="-1"><a class="header-anchor" href="#常用的jstl标签" aria-hidden="true">#</a> 常用的JSTL标签</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><h4 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h4><p>相当于java代码的if语句。</p><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><p>if标签的属性值test为必须填的属性，接受boolean表达式。以下为使用的注意事项：</p><ol><li>如果表达式为true，则显示if标签体内容，如果为false，则不显示标签体内容</li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;true&quot;&gt;
    &lt;h1&gt;我是真...&lt;/h1&gt;
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><p>一般情况下，test属性值会结合el表达式一起使用</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
    //判断request域中的一个list集合是否为空，如果不为null则显示遍历集合
    List list = new ArrayList();
    list.add(&quot;aaaa&quot;);
    request.setAttribute(&quot;list&quot;,list);
%&gt;

&lt;c:if test=&quot;\${not empty list}&quot;&gt;
    遍历集合...
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><p><code>c:if</code>标签没有else情况，想要else情况，则可以在定义一个<code>c:if</code>标签</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%
  //在域中存入一个数字
  request.setAttribute(&quot;number&quot;,4);
%&gt;
&lt;c:if test=&quot;\${number % 2 != 0}&quot;&gt;
      \${number}为奇数
&lt;/c:if&gt;

&lt;c:if test=&quot;\${number % 2 == 0}&quot;&gt;
  \${number}为偶数
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="choose" tabindex="-1"><a class="header-anchor" href="#choose" aria-hidden="true">#</a> choose</h3><h4 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h4><p>相当于java代码的switch语句</p><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4><p>这里以一个小案例（完成数字编号对应星期几）来学习choose标签的使用。</p><h5 id="完成步骤" tabindex="-1"><a class="header-anchor" href="#完成步骤" aria-hidden="true">#</a> 完成步骤</h5><ol><li>域中存储一数字；</li><li>使用choose标签取出数字，相当于switch声明；</li><li>使用when标签做数字判断，相当于case；</li><li>otherwise标签做其他情况的声明，相当于default。</li></ol><h5 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h5><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;

&lt;%@taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;&lt;!--引入JSTL标签库--&gt;

&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;choose标签&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        request.setAttribute(&quot;number&quot;,51);//1.域中存储一数字
    %&gt;
    &lt;c:choose&gt;&lt;%--2.使用choose标签取出数字，相当于switch声明--%&gt;
        &lt;c:when test=&quot;\${number == 1}&quot;&gt;星期一&lt;/c:when&gt;&lt;%--3.使用when标签做数字判断，相当于case--%&gt;
        &lt;c:when test=&quot;\${number == 2}&quot;&gt;星期二&lt;/c:when&gt;
        &lt;c:when test=&quot;\${number == 3}&quot;&gt;星期三&lt;/c:when&gt;
        &lt;c:when test=&quot;\${number == 4}&quot;&gt;星期四&lt;/c:when&gt;
        &lt;c:when test=&quot;\${number == 5}&quot;&gt;星期五&lt;/c:when&gt;
        &lt;c:when test=&quot;\${number == 6}&quot;&gt;星期六&lt;/c:when&gt;
        &lt;c:when test=&quot;\${number == 7}&quot;&gt;星期天&lt;/c:when&gt;
		&lt;%--4.otherwise标签做其他情况的声明，相当于default--%&gt;
        &lt;c:otherwise&gt;数字输入有误&lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h3><h4 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h4><p>相当于java代码的for语句，可完成重复的操作和遍历容器。</p><h4 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2" aria-hidden="true">#</a> 使用</h4><h5 id="完成重复的操作" tabindex="-1"><a class="header-anchor" href="#完成重复的操作" aria-hidden="true">#</a> 完成重复的操作</h5><p>java的代码为<code>for(int i = 0; i &lt; 10; i ++){ }</code>，在JSTL中需对foreach标签的如下属性进行配置：</p><ol><li><p>begin：开始值</p></li><li><p>end：结束值</p></li><li><p>var：临时变量</p></li><li><p>step：步长</p></li><li><p>varStatus：循环状态对象</p><ul><li>index：容器中元素的索引，从0开始</li><li>count：循环次数，从1开始</li></ul></li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:forEach begin=&quot;1&quot; end=&quot;10&quot; var=&quot;i&quot; step=&quot;1&quot; varStatus=&quot;s&quot;&gt;
    &lt;h3&gt; 索引：\${s.index}&lt;h3&gt; &lt;h4&gt; 循环次数：\${s.count} &lt;/h4&gt; 临时变量：\${i} &lt;br&gt;
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="遍历容器" tabindex="-1"><a class="header-anchor" href="#遍历容器" aria-hidden="true">#</a> 遍历容器</h5><p>java代码：<code>List&lt;User&gt; list = new List(); for(User user : list){ }</code>，在JSTL中需对foreach标签的如下属性进行配置：</p><ol><li><p>items：容器对象</p></li><li><p>var：容器中元素的临时变量</p></li><li><p>varStatus：循环状态对象</p><ul><li>index：容器中元素的索引，从0开始</li><li>count：循环次数，从1开始</li></ul></li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>  &lt;c:forEach items=&quot;\${list}&quot; var=&quot;str&quot; varStatus=&quot;s&quot;&gt;
       索引：\${s.index} 循环次数：\${s.count} 临时变量：\${str}&lt;br&gt;
  &lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三层架构-软件设计架构" tabindex="-1"><a class="header-anchor" href="#三层架构-软件设计架构" aria-hidden="true">#</a> 三层架构：软件设计架构</h1><ol><li>界面层(表示层)：用户看的得界面。用户可以通过界面上的组件和服务器进行交互；</li><li>业务逻辑层：处理业务逻辑的；</li><li>数据访问层：操作数据存储文件。</li></ol><p><img src="https://raw.githubusercontent.com/hekun97/picture/main/img/三层架构.bmp#alt=三层架构" alt="" loading="lazy"></p>`,50),s=[n];function d(r,c){return i(),t("div",null,s)}const o=e(l,[["render",d],["__file","18.EL-JSTL-note.html.vue"]]);export{o as default};
