"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[6553],{6995:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,t]of s)a[i]=t;return a}},8645:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>h,data:()=>l});var t=a(6254);const e={class:"hint-container tip"},n={},h=(0,a(6995).A)(n,[["render",function(i,s){const a=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[s[6]||(s[6]=(0,t.Fv)('<h1 id="元素定位" tabindex="-1"><a class="header-anchor" href="#元素定位"><span>元素定位</span></a></h1><p>以下是 Selenium 中 <strong>全部 8 种标准元素定位方式</strong> 的完整解析，包含语法示例、适用场景及实战技巧，助你精准操控 Web 页面元素：</p><hr><h2 id="一、基础定位方式-w3c-标准" tabindex="-1"><a class="header-anchor" href="#一、基础定位方式-w3c-标准"><span>一、基础定位方式（W3C 标准）</span></a></h2><p>Selenium 官方支持的 <strong>8 种定位策略</strong>（通过 <code>By</code> 类实现）：</p><hr><h3 id="_1-id-定位" tabindex="-1"><a class="header-anchor" href="#_1-id-定位"><span>1. ID 定位</span></a></h3><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;element_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4><ul><li><strong>最优选择</strong>：速度快，稳定性高（HTML 规范要求 ID 唯一）</li><li><strong>示例场景</strong>：登录框 (<code>id=&quot;username&quot;</code>)、搜索框 (<code>id=&quot;search&quot;</code>)</li><li><strong>注意</strong>：动态生成的 ID（如带时间戳）需避免使用</li></ul><hr><h3 id="_2-name-定位" tabindex="-1"><a class="header-anchor" href="#_2-name-定位"><span>2. Name 定位</span></a></h3><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;input_name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h4><ul><li><strong>表单友好</strong>：常用于 <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code> 等表单元素</li><li><strong>示例场景</strong>：密码输入框 (<code>name=&quot;password&quot;</code>)、单选按钮组 (<code>name=&quot;gender&quot;</code>)</li></ul><hr><h3 id="_3-class-name-定位" tabindex="-1"><a class="header-anchor" href="#_3-class-name-定位"><span>3. Class Name 定位</span></a></h3><h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;btn-primary&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 匹配任意一个存在的 class</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2"><span>特点</span></a></h4><ul><li><strong>批量操作</strong>：适用于同类样式元素（如列表项、导航菜单）</li><li>**示例场景：**如：<code>&lt;button class=&quot;btn btn-primary submit&quot;&gt;点击&lt;/button&gt;</code></li><li><strong>只能匹配单个 class</strong>：当元素的 <code>class</code> 属性有多个值时，<code>By.CLASS_NAME</code> <strong>只能匹配其中一个值</strong>。</li><li><strong>无需完全匹配所有 class</strong>：只需指定其中一个 class 即可定位。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若需要 <strong>同时匹配多个 class</strong>，应使用 <strong>CSS 选择器</strong> 或 <strong>XPath</strong>：</p><ol><li><p><strong>CSS Selector 方式</strong>：使用 <code>.</code> 连接多个 class：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 匹配同时包含 btn 和 btn-primary 的元素</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CSS_SELECTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.button.btn.btn-primary&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>XPath方式</strong>：使用 <code>contains</code> 函数检查 <code>class</code> 属性：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//button[contains(@class, &#39;btn&#39;) and contains(@class, &#39;btn-primary&#39;)]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol></div><hr><h3 id="_4-tag-name-定位" tabindex="-1"><a class="header-anchor" href="#_4-tag-name-定位"><span>4. Tag Name 定位</span></a></h3><h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">links </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">TAG_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 获取所有链接</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点-3" tabindex="-1"><a class="header-anchor" href="#特点-3"><span>特点</span></a></h4><ul><li><strong>标签筛选</strong>：用于统计或过滤特定标签（如 <code>&lt;table&gt;</code>, <code>&lt;img&gt;</code>）</li><li><strong>组合使用</strong>：通常结合其他属性缩小范围（如 <code>find_element(By.TAG_NAME, &quot;input&quot;).get_attribute(&quot;name&quot;)</code>）</li></ul><hr><h3 id="_5-link-text-定位" tabindex="-1"><a class="header-anchor" href="#_5-link-text-定位"><span>5. Link Text 定位</span></a></h3><h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">LINK_TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;立即注册&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点-4" tabindex="-1"><a class="header-anchor" href="#特点-4"><span>特点</span></a></h4><ul><li><strong>精准匹配</strong>：超链接的 <strong>完整可见文本</strong>（区分大小写和空格）</li><li><strong>示例场景</strong>：导航栏链接、页面跳转按钮</li></ul><hr><h3 id="_6-partial-link-text-定位" tabindex="-1"><a class="header-anchor" href="#_6-partial-link-text-定位"><span>6. Partial Link Text 定位</span></a></h3><h4 id="语法-5" tabindex="-1"><a class="header-anchor" href="#语法-5"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">PARTIAL_LINK_TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;注册&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="特点-5" tabindex="-1"><a class="header-anchor" href="#特点-5"><span>特点</span></a></h4><ul><li><strong>模糊匹配</strong>：超链接文本的 <strong>部分内容</strong></li><li><strong>风险提示</strong>：可能匹配到多个元素（建议用 <code>find_elements</code> + 索引）</li></ul><hr><h3 id="_7-css-selector-定位" tabindex="-1"><a class="header-anchor" href="#_7-css-selector-定位"><span>7. CSS Selector 定位</span></a></h3><h4 id="语法-6" tabindex="-1"><a class="header-anchor" href="#语法-6"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CSS_SELECTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;button.submit[type=&#39;submit&#39;]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="核心语法" tabindex="-1"><a class="header-anchor" href="#核心语法"><span>核心语法</span></a></h4><table><thead><tr><th><strong>选择器</strong></th><th><strong>示例</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>标签选择器</td><td><code>div</code></td><td>所有 <code>&lt;div&gt;</code> 元素</td></tr><tr><td>ID 选择器</td><td><code>#header</code></td><td><code>id=&quot;header&quot;</code> 的元素</td></tr><tr><td>Class 选择器</td><td><code>.menu-item</code></td><td><code>class=&quot;menu-item&quot;</code> 的元素</td></tr><tr><td>属性选择器</td><td><code>input[type=&#39;email&#39;]</code></td><td>指定属性的元素</td></tr><tr><td>后代选择器</td><td><code>ul.nav &gt; li</code></td><td>直接子元素</td></tr><tr><td>伪类选择器</td><td><code>a:hover</code></td><td>鼠标悬停状态（需结合动作触发）</td></tr></tbody></table><h4 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h4><ul><li><strong>性能优异</strong>：浏览器原生支持，<strong>解析速度快</strong></li><li><strong>简洁灵活</strong>：支持复杂层级和属性组合</li></ul><hr><h3 id="_8-xpath-定位" tabindex="-1"><a class="header-anchor" href="#_8-xpath-定位"><span>8. XPath 定位</span></a></h3><h4 id="语法-7" tabindex="-1"><a class="header-anchor" href="#语法-7"><span>语法</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//input[@name=&#39;email&#39; and contains(@class, &#39;required&#39;)]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="核心语法-1" tabindex="-1"><a class="header-anchor" href="#核心语法-1"><span>核心语法</span></a></h4><table><thead><tr><th><strong>表达式</strong></th><th><strong>示例</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>绝对路径</td><td><code>/html/body/div[1]/a</code></td><td>从根节点开始</td></tr><tr><td>相对路径</td><td><code>//div[@id=&#39;content&#39;]//a</code></td><td>任意层级的 <code>&lt;div&gt;</code> 下的链接</td></tr><tr><td>属性过滤</td><td><code>//input[@name=&#39;username&#39;]</code></td><td>按属性筛选元素</td></tr><tr><td>文本匹配</td><td><code>//a[text()=&#39;登录&#39;]</code></td><td>精确匹配文本</td></tr><tr><td>函数使用</td><td><code>//div[contains(@class, &#39;error&#39;)]</code></td><td>包含特定 class</td></tr><tr><td>轴定位（Axes）</td><td><code>//div/following-sibling::span</code></td><td>定位兄弟节点</td></tr></tbody></table><h4 id="优势-1" tabindex="-1"><a class="header-anchor" href="#优势-1"><span>优势</span></a></h4><ul><li><strong>功能强大</strong>：支持复杂逻辑和层级关系</li><li><strong>动态适应</strong>：适合处理无固定 ID/Class 的动态元素</li></ul><hr><h2 id="二、定位方式对比与选型" tabindex="-1"><a class="header-anchor" href="#二、定位方式对比与选型"><span>二、定位方式对比与选型</span></a></h2><table><thead><tr><th><strong>定位方式</strong></th><th><strong>速度</strong></th><th><strong>灵活性</strong></th><th><strong>适用场景</strong></th><th><strong>优先级</strong></th></tr></thead><tbody><tr><td>ID</td><td>⚡️⚡️⚡️⚡️⚡️</td><td>★☆☆☆☆</td><td>唯一静态元素</td><td>首选</td></tr><tr><td>Name</td><td>⚡️⚡️⚡️⚡️</td><td>★★☆☆☆</td><td>表单元素</td><td>次选</td></tr><tr><td>CSS Selector</td><td>⚡️⚡️⚡️⚡️</td><td>★★★★☆</td><td>复杂选择、性能敏感场景</td><td>推荐</td></tr><tr><td>XPath</td><td>⚡️⚡️</td><td>★★★★★</td><td>动态元素、复杂层级</td><td>备用</td></tr><tr><td>Class Name</td><td>⚡️⚡️⚡️</td><td>★★☆☆☆</td><td>同类样式元素</td><td>一般</td></tr><tr><td>Link Text</td><td>⚡️⚡️⚡️⚡️</td><td>★☆☆☆☆</td><td>精确匹配的超链接</td><td>特定</td></tr><tr><td>Partial Link Text</td><td>⚡️⚡️⚡️</td><td>★☆☆☆☆</td><td>模糊匹配的超链接</td><td>特定</td></tr><tr><td>Tag Name</td><td>⚡️⚡️⚡️⚡️</td><td>★☆☆☆☆</td><td>标签统计/筛选</td><td>辅助</td></tr></tbody></table>',61)),(0,t.Lk)("div",e,[s[5]||(s[5]=(0,t.Lk)("p",{class:"hint-container-title"},"提示",-1)),(0,t.Lk)("p",null,[s[1]||(s[1]=(0,t.Lk)("code",null,"CSS Selector",-1)),s[2]||(s[2]=(0,t.eW)("和")),s[3]||(s[3]=(0,t.Lk)("code",null,"XPath",-1)),s[4]||(s[4]=(0,t.eW)("定位元素的详细内容请参考：")),(0,t.bF)(a,{to:"/auto/se/base/el_position/css_and_xpath.html"},{default:(0,t.k6)((()=>s[0]||(s[0]=[(0,t.eW)("CSS Selector和XPath定位元素 ")]))),_:1})])]),s[7]||(s[7]=(0,t.Fv)('<hr><h2 id="三、高级技巧与避坑指南" tabindex="-1"><a class="header-anchor" href="#三、高级技巧与避坑指南"><span>三、高级技巧与避坑指南</span></a></h2><h3 id="_1-组合定位策略" tabindex="-1"><a class="header-anchor" href="#_1-组合定位策略"><span>1. 组合定位策略</span></a></h3><p><strong>场景</strong>：应对动态元素</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 CSS 组合选择器</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CSS_SELECTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;div#container &gt; input[name=&#39;dynamic_id&#39;]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 XPath 轴定位</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//div[contains(text(), &#39;订单&#39;)]/following-sibling::button[1]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-处理动态属性" tabindex="-1"><a class="header-anchor" href="#_2-处理动态属性"><span>2. 处理动态属性</span></a></h3><p><strong>方案</strong>：使用 <code>contains</code>、<code>starts-with</code> 或正则表达式（XPath 2.0+）</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 匹配动态 ID（如 id=&quot;user-12345&quot;）</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//div[starts-with(@id, &#39;user-&#39;)]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-相对定位优化" tabindex="-1"><a class="header-anchor" href="#_3-相对定位优化"><span>3. 相对定位优化</span></a></h3><p><strong>场景</strong>：基于已知元素定位其关联元素</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">parent </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;parent_div&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">child </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> parent.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;child-item&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 缩小搜索范围</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-显式等待避免竞态" tabindex="-1"><a class="header-anchor" href="#_4-显式等待避免竞态"><span>4. 显式等待避免竞态</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support.ui </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> WebDriverWait</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> expected_conditions </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> EC</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> WebDriverWait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(driver, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">until</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">    EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">presence_of_element_located</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;loaded_element&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-定位一组元素" tabindex="-1"><a class="header-anchor" href="#_5-定位一组元素"><span>5. 定位一组元素</span></a></h3><p>方案：通过<code>find_elements</code>可以定位一组元素。</p><p>场景：下拉框中所有选项的<code>class</code>都一样时，通过<code>find_elements</code>获取所有的元素后，再通过循环去拿到需要的元素。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查找下拉选项中所有的所属组织元素</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">org_els </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org-dropdown&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 通过循环查找我们需要的指定元素（测试组织）并点击</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> org_el </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> org_els:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 从查找到的所有组织中获取我们需要的组织并点击</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> org_el.text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;测试组织&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 直接点击该元素</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    org_el.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>定位一组元素返回的值是一个列表；</p></li><li><p>可以通过<code>for</code>循环或下标等方式来使用列表中的元素，下标从0开始。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用tag_name定位密码输入框(第二个input标签)，并输入：123456</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">elements </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">TAG_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;input&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">elements[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><hr><h2 id="四、最佳实践总结" tabindex="-1"><a class="header-anchor" href="#四、最佳实践总结"><span>四、最佳实践总结</span></a></h2><ol><li><strong>优先级策略</strong>：ID &gt; Name &gt; CSS &gt; XPath &gt; 其他</li><li><strong>动态元素处理</strong>：优先使用 CSS/XPath 的属性通配符</li><li><strong>代码可维护性</strong>：将定位器集中管理（如 Page Object 模式）</li><li><strong>防御性定位</strong>：多用 <code>find_elements</code> 判断是否存在再操作</li><li><strong>性能优化</strong>：减少 XPath 的复杂层级查询</li></ol><hr><p>掌握这些方法，可轻松应对 99% 的 Web 自动化元素定位挑战！ 🚀</p>',23))])}]]),l=JSON.parse('{"path":"/auto/se/base/el_position/el_basic.html","title":"元素定位","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["UI自动化测试"],"tag":["selenium","元素定位"],"order":1,"sticky":true,"description":"元素定位 以下是 Selenium 中 全部 8 种标准元素定位方式 的完整解析，包含语法示例、适用场景及实战技巧，助你精准操控 Web 页面元素： 一、基础定位方式（W3C 标准） Selenium 官方支持的 8 种定位策略（通过 By 类实现）： 1. ID 定位 语法 特点 最优选择：速度快，稳定性高（HTML 规范要求 ID 唯一） 示例场景...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/auto/se/base/el_position/el_basic.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"元素定位"}],["meta",{"property":"og:description","content":"元素定位 以下是 Selenium 中 全部 8 种标准元素定位方式 的完整解析，包含语法示例、适用场景及实战技巧，助你精准操控 Web 页面元素： 一、基础定位方式（W3C 标准） Selenium 官方支持的 8 种定位策略（通过 By 类实现）： 1. ID 定位 语法 特点 最优选择：速度快，稳定性高（HTML 规范要求 ID 唯一） 示例场景..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-14T16:46:36.000Z"}],["meta",{"property":"article:tag","content":"selenium"}],["meta",{"property":"article:tag","content":"元素定位"}],["meta",{"property":"article:modified_time","content":"2025-03-14T16:46:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元素定位\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-14T16:46:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1741192766000,"updatedTime":1741970796000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":5,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":4.95,"words":1484},"filePathRelative":"auto/se/base/el_position/el_basic.md","localizedDate":"2025年3月5日","excerpt":"\\n<p>以下是 Selenium 中 <strong>全部 8 种标准元素定位方式</strong> 的完整解析，包含语法示例、适用场景及实战技巧，助你精准操控 Web 页面元素：</p>\\n<hr>\\n<h2>一、基础定位方式（W3C 标准）</h2>\\n<p>Selenium 官方支持的 <strong>8 种定位策略</strong>（通过 <code>By</code> 类实现）：</p>\\n<hr>\\n<h3>1. ID 定位</h3>\\n<h4>语法</h4>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">element </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> driver.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">find_element</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(By.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">ID</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"element_id\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);