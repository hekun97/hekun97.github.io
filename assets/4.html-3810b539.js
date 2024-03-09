import{_ as n,W as s,X as a,a0 as e}from"./framework-174e6972.js";const c={},i=e(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>既然是最后一篇那就不能只列出些干枯的标准语句，更何况表联接也是<code>SQL</code>中较难的部分，所以此次搭配题目来详细阐述表联接。</p><h2 id="表联接" tabindex="-1"><a class="header-anchor" href="#表联接" aria-hidden="true">#</a> 表联接</h2><p>前面说到相关子查询效率低下，那我们怎么能将不同表的信息一起查询出来呢？这就需要用到表联接。</p><p>和之前的<code>UNION</code>组合查询不同，<code>UNION</code>是将不同的表组合起来，也就是纵向联接，说白了就是竖着拼起来。</p><p>而表联接是通过笛卡尔乘积将表进行横向联接，所谓的通过笛卡尔乘积简单说就是两表的行依次相联再相加。要想更详细的理解可以百度下，毕竟本文主要是汇总<code>SQL</code>语句。</p><p>现在有如下两张表：</p><p><img src="https://pic.downk.cc/item/5e859487504f4bcb04d967d5.jpg" alt="" loading="lazy"><img src="https://pic.downk.cc/item/5e859494504f4bcb04d97383.jpg" alt="" loading="lazy"></p><p>这是当初老师布置的一份作业，我偷个懒就不改数据了。不过把这些真神级人物的大名贴出来做“实验”总觉得心里有很虚，更何况大部分都是IT业的。如有什么不敬我先道个歉，别跟我一般见识。</p><p>好了，扯远了。怎么联接这两张表呢？标准写法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span> t_student
<span class="token keyword">JOIN</span> t_class<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果这里只截一小部分图，因为笛卡尔乘积后的行数等于两张表的行数乘积，实在太多了。</p><figure><img src="https://pic.downk.cc/item/5e8594ae504f4bcb04d984a7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里就可以理解表联接的原理了，依次相连再相加。当然其中很多是无效行，为了去除无效的行我们就要用到外键来进行约束。学生表中的<code>_fk</code>与班级表中的<code>_infor</code>相关联：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span> t_student s
<span class="token keyword">JOIN</span> t_class c <span class="token keyword">ON</span> s<span class="token punctuation">.</span>_fk <span class="token operator">=</span> c<span class="token punctuation">.</span>_infor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><figure><img src="https://pic.downk.cc/item/5e8594c2504f4bcb04d9917b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里通过外键的匹配我们就得到了一张完美的联接之后的表，它可以看做一张新表，想要任何数据均可以从此表中查询，这就是表联接的强大之处。</p><h2 id="表联接的分类" tabindex="-1"><a class="header-anchor" href="#表联接的分类" aria-hidden="true">#</a> 表联接的分类：</h2><h3 id="内联接" tabindex="-1"><a class="header-anchor" href="#内联接" aria-hidden="true">#</a> 内联接</h3><p>内联接是指两个表中某一行相关的列值匹配时，这一行才会出现在表中。就像上例中<code>s._fk</code>与<code>c._infor</code>相同时才会出行该行，其他的行剔除。</p><p>语法为<code>INNER JOIN</code> 其中<code>INNER</code>可以省略。</p><p>内联接的简写：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span> t_student s<span class="token punctuation">,</span>
  t_class c
<span class="token keyword">WHERE</span>
  c<span class="token punctuation">.</span>_infor <span class="token operator">=</span> s<span class="token punctuation">.</span>_fk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此写法也是我们用的最多的。</p><h3 id="外联接" tabindex="-1"><a class="header-anchor" href="#外联接" aria-hidden="true">#</a> 外联接</h3><p><strong>分类：</strong></p><ul><li>左外联接</li><li>右处联接。</li></ul><p>外联接是指不管有没有匹配，被定义了外联接的表数据都要出现在结果中。比如左外联接，那么在<code>JOIN</code>左边的表就被定义为外联接，那么此表中所有数据都会出现在查询结果中。</p><p>注意班级表中的四班是没有学生的，所以在内联接之后理所当然的被剔除了。现在以外联接做示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  <span class="token operator">*</span>
<span class="token keyword">FROM</span> t_student s
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> t_class c <span class="token keyword">ON</span> s<span class="token punctuation">.</span>_fk <span class="token operator">=</span> c<span class="token punctuation">.</span>_infor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面<code>SQL</code>中表<code>t_class</code>在写在<code>JOIN</code>的右边，所以我们用<code>RIGHT JOIN</code>来进行外联接。</p><figure><img src="https://pic.downk.cc/item/5e85951e504f4bcb04d9d2c9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最下面多了一行四班的信息</p><p>例如我们想查出还没有学生录入的班级信息：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  c<span class="token punctuation">.</span>_id<span class="token punctuation">,</span>
  c<span class="token punctuation">.</span>_cname<span class="token punctuation">,</span>
  c<span class="token punctuation">.</span>_code
<span class="token keyword">FROM</span> t_student s
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> t_class c <span class="token keyword">ON</span> s<span class="token punctuation">.</span>_fk <span class="token operator">=</span> c<span class="token punctuation">.</span>_infor
<span class="token keyword">WHERE</span>
  s<span class="token punctuation">.</span>_id <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic.downk.cc/item/5e859544504f4bcb04d9f03f.jpg" alt="" loading="lazy"> 这就是外联接的用法，通常用在我们想要的数据匹配不上时。</p><h3 id="自联接" tabindex="-1"><a class="header-anchor" href="#自联接" aria-hidden="true">#</a> 自联接</h3><p>自联接属于内联接或外联接的一种特例，自联接所联接的表均是来自同一张，用法个人感觉还是比较巧妙的。</p><p>现有一表如下：</p><figure><img src="https://pic.downk.cc/item/5e859558504f4bcb04d9fd75.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>表中，6个人均属于某公司的员工。区别是李四为张三和王五的领导，张八为赵六和孙七的领导。<code>leader_id</code>与<code>work_id</code>相关联。</p><p>现在可以通过自联接巧妙的将一张表分为员工部分和领导部分：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  w<span class="token punctuation">.</span>work_name<span class="token punctuation">,</span>
  l<span class="token punctuation">.</span>work_name <span class="token keyword">as</span> <span class="token string">&#39;领导姓名&#39;</span>
<span class="token keyword">FROM</span> t_emp w<span class="token punctuation">,</span>
  t_emp l
<span class="token keyword">WHERE</span>
  w<span class="token punctuation">.</span>leader_id <span class="token operator">=</span> l<span class="token punctuation">.</span>work_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意别名的用法</p><p>结果：</p><figure><img src="https://pic.downk.cc/item/5e85957b504f4bcb04da132b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是不是有点方便？</p><h2 id="知识点罗列到这里-做题时间到" tabindex="-1"><a class="header-anchor" href="#知识点罗列到这里-做题时间到" aria-hidden="true">#</a> 知识点罗列到这里，做题时间到</h2><h3 id="_1-查询凤姐所在的班级" tabindex="-1"><a class="header-anchor" href="#_1-查询凤姐所在的班级" aria-hidden="true">#</a> 1.查询凤姐所在的班级</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  _cname
<span class="token keyword">FROM</span> t_student s<span class="token punctuation">,</span>
  t_class c
<span class="token keyword">WHERE</span>
  c<span class="token punctuation">.</span>_infor <span class="token operator">=</span> s<span class="token punctuation">.</span>_fk
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">&#39;凤姐&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.downk.cc/item/5e8595a1504f4bcb04da2d18.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-查询同朱军同班级的学生" tabindex="-1"><a class="header-anchor" href="#_2-查询同朱军同班级的学生" aria-hidden="true">#</a> 2.查询同朱军同班级的学生</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  s<span class="token punctuation">.</span>_name
<span class="token keyword">FROM</span> t_student s
<span class="token keyword">WHERE</span>
  s<span class="token punctuation">.</span>_fk <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
      cc<span class="token punctuation">.</span>_infor
    <span class="token keyword">FROM</span> t_class cc<span class="token punctuation">,</span>
      t_student ss
    <span class="token keyword">WHERE</span>
      ss<span class="token punctuation">.</span>_fk <span class="token operator">=</span> cc<span class="token punctuation">.</span>_infor
      <span class="token operator">AND</span> ss<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">&#39;朱军&#39;</span>
  <span class="token punctuation">)</span>
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>_name <span class="token operator">!=</span> <span class="token string">&#39;朱军&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题中，括号内为联接后的表，其返回的是&#39;朱军&#39;所在班级的<code>_infor</code>，然后主查询在学生表中匹配与<code>_infor</code>相等的<code>_fk</code>的行，最后从匹配成功后的行中剔除&#39;朱军&#39;自己。</p><figure><img src="https://pic.downk.cc/item/5e8595cd504f4bcb04da49e7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-查询每个班级的人数" tabindex="-1"><a class="header-anchor" href="#_3-查询每个班级的人数" aria-hidden="true">#</a> 3.查询每个班级的人数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  d<span class="token punctuation">.</span>_cname<span class="token punctuation">,</span>
  <span class="token function">COUNT</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
      ss<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
      cc<span class="token punctuation">.</span>_cname
    <span class="token keyword">FROM</span> t_class cc
    <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> t_student ss <span class="token keyword">ON</span> ss<span class="token punctuation">.</span>_fk <span class="token operator">=</span> cc<span class="token punctuation">.</span>_infor
  <span class="token punctuation">)</span> d
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
  d<span class="token punctuation">.</span>_cname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题中，括号内为班级表外联接后的表，并给该联接后的表以别名<code>d</code>，按<code>d</code>的班级名称<code>d._cname</code>分组后统计各班人数。这里之所以用外联接还是因为四班没有学生但依然要统计。</p><figure><img src="https://pic.downk.cc/item/5e8595fb504f4bcb04da677c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-查询班级人数最多的班级" tabindex="-1"><a class="header-anchor" href="#_4-查询班级人数最多的班级" aria-hidden="true">#</a> 4.查询班级人数最多的班级</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  cc<span class="token punctuation">.</span>_cname<span class="token punctuation">,</span>
  <span class="token function">COUNT</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> t_class cc<span class="token punctuation">,</span>
  t_student ss
<span class="token keyword">WHERE</span>
  cc<span class="token punctuation">.</span>_infor <span class="token operator">=</span> ss<span class="token punctuation">.</span>_fk
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
  cc<span class="token punctuation">.</span>_cname
<span class="token keyword">HAVING</span>
  <span class="token function">COUNT</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token keyword">ALL</span><span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
      <span class="token function">COUNT</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> t_class c<span class="token punctuation">,</span>
      t_student s
    <span class="token keyword">WHERE</span>
      c<span class="token punctuation">.</span>_infor <span class="token operator">=</span> s<span class="token punctuation">.</span>_fk
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
      c<span class="token punctuation">.</span>_cname
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个有点凶残，用了两次表联接。括号内返回的是每个班的人数：</p><p><img src="https://pic.downk.cc/item/5e859619504f4bcb04da7a8a.jpg" alt="" loading="lazy"> 之后外部又使用了一次表联接，将每个班的人数与括号内的返回值逐一比较，得到最大值，然后找到最大值所在的班级。这里就体现了对<code>SQL</code>执行顺序的理解有多重要了，联接、分组、过滤等等的先后顺序。</p><p>结果：</p><figure><img src="https://pic.downk.cc/item/5e85962a504f4bcb04da87a3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-查询每个班中年龄最低的人" tabindex="-1"><a class="header-anchor" href="#_5-查询每个班中年龄最低的人" aria-hidden="true">#</a> 5.查询每个班中年龄最低的人</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  cc<span class="token punctuation">.</span>_cname<span class="token punctuation">,</span>
  ss<span class="token punctuation">.</span>_name<span class="token punctuation">,</span>
  ss<span class="token punctuation">.</span>_age
<span class="token keyword">FROM</span> t_student ss<span class="token punctuation">,</span>
  t_class cc
<span class="token keyword">WHERE</span>
  ss<span class="token punctuation">.</span>_fk <span class="token operator">=</span> cc<span class="token punctuation">.</span>_infor
  <span class="token operator">AND</span> ss<span class="token punctuation">.</span>_age <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span><span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
      <span class="token function">MIN</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>_age<span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> t_student s
    <span class="token keyword">WHERE</span>
      ss<span class="token punctuation">.</span>_fk <span class="token operator">=</span> s<span class="token punctuation">.</span>_fk
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题中，括号内部返回一个学生表中的最小年龄，外部进行表联接后将年龄列对返回值进行比较，若小于等于返回的最小值那其本身也为最小值。</p><p>如果括号内部不加判断条件<code>WHERE ss._fk = s._fk</code>，则最后只会查询出一条年龄最小的数据，而并没有按我们想要的查询出每个班的最小值。</p><p>如：</p><p><img src="https://pic.downk.cc/item/5e859647504f4bcb04da99c0.jpg" alt="" loading="lazy"> 有人会问了既然按班分，用分组不就好了？但要注意的是最小年龄的人不只一个，而分组后每一个班只会显示一个人。所以这里用了关联条件<code>WHERE ss._fk = s._fk</code>来让内外表关联，从而统计出所有我们想要的值。</p><p>结果：</p><figure><img src="https://pic.downk.cc/item/5e859654504f4bcb04daa1c5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,74),p=[i];function t(l,o){return s(),a("div",null,p)}const r=n(c,[["render",t],["__file","4.html.vue"]]);export{r as default};
