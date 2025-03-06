"use strict";(self.webpackChunkcaelis_terra=self.webpackChunkcaelis_terra||[]).push([[5138],{2283:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>l});var n=a(6254);const e={},t=(0,a(6995).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h1 id="相对定位器relativelocator" tabindex="-1"><a class="header-anchor" href="#相对定位器relativelocator"><span>相对定位器RelativeLocator</span></a></h1><p>以下是基于 <strong>Python</strong> 的 Selenium 4.0 中 <code>RelativeLocator</code>（相对定位器）的使用方法详解，包含实际场景示例和注意事项：</p><hr><h3 id="一、环境准备" tabindex="-1"><a class="header-anchor" href="#一、环境准备"><span><strong>一、环境准备</strong></span></a></h3><ol><li>确保使用 <strong>Selenium ≥ 4.0</strong>：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seleniu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">m&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4.0.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>浏览器驱动（如 ChromeDriver）需兼容 Selenium 4.0。</li></ol><hr><h3 id="二、基本语法" tabindex="-1"><a class="header-anchor" href="#二、基本语法"><span><strong>二、基本语法</strong></span></a></h3><h4 id="_1-导入模块" tabindex="-1"><a class="header-anchor" href="#_1-导入模块"><span><strong>1. 导入模块</strong></span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.common.by </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> By</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support.relative_locator </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> locate_with</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-语法格式" tabindex="-1"><a class="header-anchor" href="#_2-语法格式"><span><strong>2. 语法格式</strong></span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.定位策略, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;值&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">方向</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(基准元素)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如 above(), below(), to_left_of() 等</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="三、使用示例" tabindex="-1"><a class="header-anchor" href="#三、使用示例"><span><strong>三、使用示例</strong></span></a></h3><h4 id="场景-1-定位「密码输入框」上方的「用户名输入框」" tabindex="-1"><a class="header-anchor" href="#场景-1-定位「密码输入框」上方的「用户名输入框」"><span><strong>场景 1：定位「密码输入框」上方的「用户名输入框」</strong></span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> webdriver</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.common.by </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> By</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support.relative_locator </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> locate_with</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> webdriver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">Chrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/login&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 基准元素：密码输入框</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">password_input </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;password&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 above() 定位上方的用户名输入框</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">username_input </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">TAG_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;input&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">above</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(password_input)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">username_input.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">send_keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;test_user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="场景-2-定位「提交按钮」右侧的「重置按钮」" tabindex="-1"><a class="header-anchor" href="#场景-2-定位「提交按钮」右侧的「重置按钮」"><span><strong>场景 2：定位「提交按钮」右侧的「重置按钮」</strong></span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">submit_button </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;submit&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">reset_button </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CSS_SELECTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;button[type=&#39;reset&#39;]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">to_right_of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(submit_button)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">reset_button.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="四、组合多个相对条件" tabindex="-1"><a class="header-anchor" href="#四、组合多个相对条件"><span><strong>四、组合多个相对条件</strong></span></a></h3><h4 id="场景-定位「表格标题」下方且位于「搜索框」右侧的「刷新按钮」" tabindex="-1"><a class="header-anchor" href="#场景-定位「表格标题」下方且位于「搜索框」右侧的「刷新按钮」"><span><strong>场景：定位「表格标题」下方且位于「搜索框」右侧的「刷新按钮」</strong></span></a></h4><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">search_box </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;search&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">table_header </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;table-header&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">refresh_button </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//button[contains(text(), &#39;Refresh&#39;)]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">below</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(table_header)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">to_right_of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(search_box)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">refresh_button.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="五、调整-near-的像素距离" tabindex="-1"><a class="header-anchor" href="#五、调整-near-的像素距离"><span><strong>五、调整 <code>near()</code> 的像素距离</strong></span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 定位距离「提示图标」50px 内的文本提示</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">info_icon </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;info-icon&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tooltip_text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tooltip&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">near</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(info_icon, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 默认 50px，可自定义距离</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(tooltip_text.text)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="六、实际应用案例" tabindex="-1"><a class="header-anchor" href="#六、实际应用案例"><span><strong>六、实际应用案例</strong></span></a></h3><h4 id="动态生成的表格中定位「编辑按钮」" tabindex="-1"><a class="header-anchor" href="#动态生成的表格中定位「编辑按钮」"><span><strong>动态生成的表格中定位「编辑按钮」</strong></span></a></h4><p>假设表格中的每一行没有唯一 ID，但「编辑按钮」始终位于「用户邮箱」列的右侧：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 定位用户邮箱为 &quot;user@example.com&quot; 的单元格</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">email_cell </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//td[contains(text(), &#39;user@example.com&#39;)]&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 定位右侧的编辑按钮</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">edit_button </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">    locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">CLASS_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;edit-btn&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">to_right_of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(email_cell)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">edit_button.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="七、注意事项" tabindex="-1"><a class="header-anchor" href="#七、注意事项"><span><strong>七、注意事项</strong></span></a></h3><ol><li><p><strong>布局依赖</strong>：<br> 相对定位基于元素渲染后的实际坐标，若页面布局变动（如 CSS 浮动、绝对定位），可能导致定位失败。</p></li><li><p><strong>性能优化</strong>：<br> 优先使用直接定位（如 ID、CSS 选择器），相对定位适合无法通过属性定位的场景。</p></li><li><p><strong>动态内容处理</strong>：<br> 对异步加载元素需结合显式等待：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support.ui </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> WebDriverWait</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> selenium.webdriver.support </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> expected_conditions </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> EC</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">email_cell </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> WebDriverWait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(driver, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">until</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">    EC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">presence_of_element_located</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((By.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">XPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;//td[text()=&#39;user@example.com&#39;]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>错误处理</strong>：<br> 若找不到元素，抛出 <code>NoSuchElementException</code>，建议使用 <code>find_elements</code> 配合判断：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">elements </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> driver.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">find_elements</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">locate_with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> elements:</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    elements[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h3 id="八、适用场景总结" tabindex="-1"><a class="header-anchor" href="#八、适用场景总结"><span><strong>八、适用场景总结</strong></span></a></h3><table><thead><tr><th>场景</th><th>传统定位痛点</th><th>相对定位解决方案</th></tr></thead><tbody><tr><td>无唯一属性的表单元素</td><td>依赖复杂的 XPath 层级</td><td><code>above()</code>/<code>below()</code> 简化定位</td></tr><tr><td>动态生成的列表操作按钮</td><td>无法通过固定属性定位</td><td>基于相邻内容（如文本）定位</td></tr><tr><td>跨组件的元素关联（如仪表盘）</td><td>元素分散在不同模块</td><td>组合方向定位（如 <code>near()</code> + <code>to_right_of()</code>）</td></tr></tbody></table><hr><p>通过 <code>RelativeLocator</code>，可以更直观地处理复杂布局中的元素定位问题，但需根据实际场景权衡使用。建议结合 <strong>Page Object 模式</strong> 提升代码可维护性。</p>',37)]))}]]),l=JSON.parse('{"path":"/auto/ui/6.selenium_el_RelativeLocator.html","title":"相对定位器RelativeLocator","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["UI自动化测试"],"tag":["selenium","元素定位","xpath"],"order":6,"sticky":true,"description":"相对定位器RelativeLocator 以下是基于 Python 的 Selenium 4.0 中 RelativeLocator（相对定位器）的使用方法详解，包含实际场景示例和注意事项： 一、环境准备 确保使用 Selenium ≥ 4.0： 浏览器驱动（如 ChromeDriver）需兼容 Selenium 4.0。 二、基本语法 1. 导入模块...","head":[["meta",{"property":"og:url","content":"https://hekun97.github.io/auto/ui/6.selenium_el_RelativeLocator.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"相对定位器RelativeLocator"}],["meta",{"property":"og:description","content":"相对定位器RelativeLocator 以下是基于 Python 的 Selenium 4.0 中 RelativeLocator（相对定位器）的使用方法详解，包含实际场景示例和注意事项： 一、环境准备 确保使用 Selenium ≥ 4.0： 浏览器驱动（如 ChromeDriver）需兼容 Selenium 4.0。 二、基本语法 1. 导入模块..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-06T16:27:29.000Z"}],["meta",{"property":"article:tag","content":"selenium"}],["meta",{"property":"article:tag","content":"元素定位"}],["meta",{"property":"article:tag","content":"xpath"}],["meta",{"property":"article:modified_time","content":"2025-03-06T16:27:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"相对定位器RelativeLocator\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-06T16:27:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"专业治头秃\\",\\"url\\":\\"https://github.com/hekun97\\"}]}"]]},"git":{"createdTime":1741278449000,"updatedTime":1741278449000,"contributors":[{"name":"hekun97","username":"hekun97","email":"hek97@qq.com","commits":1,"url":"https://github.com/hekun97"}]},"readingTime":{"minutes":2.55,"words":764},"filePathRelative":"auto/ui/6.selenium_el_RelativeLocator.md","localizedDate":"2025年3月6日","excerpt":"\\n<p>以下是基于 <strong>Python</strong> 的 Selenium 4.0 中 <code>RelativeLocator</code>（相对定位器）的使用方法详解，包含实际场景示例和注意事项：</p>\\n<hr>\\n<h3><strong>一、环境准备</strong></h3>\\n<ol>\\n<li>确保使用 <strong>Selenium ≥ 4.0</strong>：<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pip</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> seleniu</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">m&gt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">4.0.0</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>浏览器驱动（如 ChromeDriver）需兼容 Selenium 4.0。</li>\\n</ol>","autoDesc":true}')},6995:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}}}]);