import{_ as e,W as t,X as i,a0 as s}from"./framework-174e6972.js";const n={},l=s(`<h2 id="_1-需求" tabindex="-1"><a class="header-anchor" href="#_1-需求" aria-hidden="true">#</a> 1. 需求</h2><p>在request域中有一个存有User对象的List集合。需要使用<code>jstl+el</code>将list集合数据展示到jsp页面的表格table中。</p><h2 id="_2-实现代码" tabindex="-1"><a class="header-anchor" href="#_2-实现代码" aria-hidden="true">#</a> 2. 实现代码</h2><p>实现代码只展示jsp页面的代码，另外需要的User类就是封装用户数据的JavaBean这里不进行展示。</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page import=&quot;io.gitee.hek97.domain.User&quot; %&gt;
&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;

&lt;%--1.导入jstl的相关jar包并引入jstl标签库--%&gt;
&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;

&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;JSP+JSTL+EL获取User对象的值&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
  List&lt;User&gt; users = new ArrayList&lt;&gt;();
  //第一名人员信息
  User user1 = new User();
  user1.setId(1001);
  user1.setUsername(&quot;张三&quot;);
  user1.setPassword(&quot;123&quot;);
  //第二名人员信息
  User user2 = new User();
  user2.setId(1002);
  user2.setUsername(&quot;李四&quot;);
  user2.setPassword(&quot;456&quot;);
  //将user添加到List集合中
  users.add(user1);
  users.add(user2);
  //将信息存储到共享域中
  request.setAttribute(&quot;users&quot;,users);
%&gt;
&lt;%--视图V:表格展示--%&gt;
&lt;table border=&quot;1&quot;&gt;
 &lt;%--表头--%&gt;
  &lt;tr&gt;
    &lt;th&gt;索引&lt;/th&gt;
    &lt;th&gt;循环次数&lt;/th&gt;
    &lt;th&gt;用户id&lt;/th&gt;
    &lt;th&gt;用户名&lt;/th&gt;
    &lt;th&gt;用户密码&lt;/th&gt;
  &lt;/tr&gt;
&lt;%--表体--%&gt;
  &lt;%--遍历users集合容器--%&gt;
  &lt;c:forEach items=&quot;\${users}&quot; var=&quot;user&quot; varStatus=&quot;s&quot;&gt;
    &lt;tr&gt;
      &lt;td&gt;\${s.index}&lt;/td&gt;
      &lt;td&gt;\${s.count}&lt;/td&gt;
      &lt;td&gt;\${user.id}&lt;/td&gt;
      &lt;td&gt;\${user.username}&lt;/td&gt;
      &lt;td&gt;\${user.password}&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/c:forEach&gt;
&lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-效果展示" tabindex="-1"><a class="header-anchor" href="#_3-效果展示" aria-hidden="true">#</a> 3. 效果展示</h2><figure><img src="https://raw.githubusercontent.com/hekun97/picture/main/imgs/60f9128a5132923bf86dd021.jpg#alt=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,7),d=[l];function r(a,u){return t(),i("div",null,d)}const c=e(n,[["render",r],["__file","19.JSTL_EL-practice.html.vue"]]);export{c as default};
