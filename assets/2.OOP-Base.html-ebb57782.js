import{_ as n,W as a,X as s,a0 as e}from"./framework-174e6972.js";const t={},c=e(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>Java是一种面向对象的编程语言。面向对象编程，英文是<code>Object-Oriented Programming</code>，简称OOP。</p><p>面向对象编程，是一种通过对象的方式，把现实世界映射到计算机模型的一种编程方法。比如现实世界中的人，可按下面的方式进行映射。</p><table><thead><tr><th>现实世界</th><th>计算机模型</th><th>表示方式</th></tr></thead><tbody><tr><td>全世界所有人，人类</td><td>类（class）</td><td>public class Person{}</td></tr><tr><td>具体的人，如小红，小李</td><td>实例（instance）</td><td>Person hong = new Person();</td></tr><tr><td>人的特征，如身高，血型，体重</td><td>字段（field）</td><td>float height = 170.3;</td></tr><tr><td>人的行为，如跑步，跳高，走路</td><td>方法（method）</td><td>public void run(){};</td></tr></tbody></table><h2 id="class和instance" tabindex="-1"><a class="header-anchor" href="#class和instance" aria-hidden="true">#</a> class和instance</h2><p>在OOP中，<code>class</code>和<code>instance</code>是“模版”和“实例”的关系，搞明白了class和instance，基本上就明白了什么是面向对象编程。</p><h3 id="class概念" tabindex="-1"><a class="header-anchor" href="#class概念" aria-hidden="true">#</a> class概念</h3><p>class是一种对象模版，它<strong>定义了如何创建实例</strong>，因此，class本身就是一种引用数据类型，可被叫做<strong>XX对象</strong>。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaBase/OOP/202305061016260.jpeg" alt="class" tabindex="0" loading="lazy"><figcaption>class</figcaption></figure><h4 id="class的作用" tabindex="-1"><a class="header-anchor" href="#class的作用" aria-hidden="true">#</a> class的作用</h4><p>通过<code>class</code>，把一组数据汇集到一个对象上，实现了数据封装。</p><h4 id="定义class" tabindex="-1"><a class="header-anchor" href="#定义class" aria-hidden="true">#</a> 定义class</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//定义class</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instance概念" tabindex="-1"><a class="header-anchor" href="#instance概念" aria-hidden="true">#</a> instance概念</h3><p>instance是对象实例，instance是根据class创建的实例，可以创建多个instance，<strong>每个instance类型相同，但各自属性可能不相同</strong>。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaBase/OOP/202305061016123.jpeg" alt="instances" tabindex="0" loading="lazy"><figcaption>instances</figcaption></figure><h4 id="instance的作用" tabindex="-1"><a class="header-anchor" href="#instance的作用" aria-hidden="true">#</a> instance的作用</h4><p>instance可根据不同的对象（如人），对其字段（特征）和方法（行为）进行赋值和定义，可被叫做<strong>XX实例对象</strong>。</p><h4 id="创建instance" tabindex="-1"><a class="header-anchor" href="#创建instance" aria-hidden="true">#</a> 创建instance</h4><p>定义了class，只是定义了对象模版，而要根据对象模版创建出真正的对象实例，必须用new操作符。</p><p>new操作符可以创建一个实例，然后，我们需要定义一个引用类型的变量来指向这个实例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> ming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意区分<code>Person ming</code>是定义<code>Person</code>类型的变量<code>ming</code>，而<code>new Person()</code>是创建<code>Person</code>实例。</p></div><p>有了指向这个实例的变量，我们就可以通过这个变量来操作实例。访问实例变量可以用<code>变量.字段</code>，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>ming<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Xiao Ming&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 对字段name赋值</span>
ming<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// 对字段age赋值</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ming<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 访问字段name</span>

<span class="token class-name">Person</span> hong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hong<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Xiao Hong&quot;</span><span class="token punctuation">;</span>
hong<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两个变量分别指向两个不同的实例，它们在内存中的结构如下：</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>            ┌──────────────────┐
ming ──────&gt;│Person instance   │
            ├──────────────────┤
            │name = &quot;Xiao Ming&quot;│
            │age = 12          │
            └──────────────────┘
            ┌──────────────────┐
hong ──────&gt;│Person instance   │
            ├──────────────────┤
            │name = &quot;Xiao Hong&quot;│
            │age = 15          │
            └──────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个<code>instance</code>拥有<code>class</code>定义的<code>name</code>和<code>age</code>字段，且各自都有一份独立的数据，互不干扰。</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>一个Java源文件可以包含多个类的定义，但只能定义一个public类，且public类名必须与文件名一致。如果要定义多个public类，必须拆到多个Java源文件中。</p></div>`,29),i=[c];function o(d,l){return a(),s("div",null,i)}const r=n(t,[["render",o],["__file","2.OOP-Base.html.vue"]]);export{r as default};