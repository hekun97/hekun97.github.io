const n=JSON.parse('{"key":"v-8adcb498","path":"/JavaBase/OOP/8.abstract-class.html","title":"抽象类","lang":"zh-CN","frontmatter":{"title":"抽象类","order":8,"category":"OOP","tag":"abstract","description":"概念 由于多态的存在，每个子类都可以覆写父类的方法，例如： class Person { public void run() { … } } class Student extends Person { @Override public void run() { … } } class Teacher extends Person { @Override public void run() { … } }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/JavaBase/OOP/8.abstract-class.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"抽象类"}],["meta",{"property":"og:description","content":"概念 由于多态的存在，每个子类都可以覆写父类的方法，例如： class Person { public void run() { … } } class Student extends Person { @Override public void run() { … } } class Teacher extends Person { @Override public void run() { … } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-08T02:02:04.000Z"}],["meta",{"property":"article:tag","content":"abstract"}],["meta",{"property":"article:modified_time","content":"2023-05-08T02:02:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"抽象类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-08T02:02:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"面向抽象编程","slug":"面向抽象编程","link":"#面向抽象编程","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1683511324000,"updatedTime":1683511324000,"contributors":[{"name":"hk","email":"hek97@qq.com","commits":1}]},"readingTime":{"minutes":2.85,"words":854},"filePathRelative":"JavaBase/OOP/8.abstract-class.md","localizedDate":"2023年5月8日","excerpt":"<h2> 概念</h2>\\n<p>由于多态的存在，每个子类都可以覆写父类的方法，例如：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">run</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> … <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Student</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">run</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> … <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Teacher</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">run</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> … <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};