import{_ as t,W as l,X as r,Y as e,Z as a,$ as c,a2 as o,C as n}from"./framework-5910e262.js";const s={},d=o('<h1 id="web相关概念回顾" tabindex="-1"><a class="header-anchor" href="#web相关概念回顾" aria-hidden="true">#</a> web相关概念回顾</h1><h2 id="软件架构" tabindex="-1"><a class="header-anchor" href="#软件架构" aria-hidden="true">#</a> 软件架构</h2><ol><li>C/S：客户端/服务器端</li><li>B/S：浏览器/服务器端</li></ol><h2 id="资源分类" tabindex="-1"><a class="header-anchor" href="#资源分类" aria-hidden="true">#</a> 资源分类</h2><ol><li>静态资源：所有用户访问后，得到的结果都是一样的，称为静态资源.静态资源可以直接被浏览器解析。如： html，css，JavaScript。</li><li>动态资源:每个用户访问相同资源后，得到的结果可能不一样。称为动态资源。动态资源被访问后，需要先转换为静态资源，在返回给浏览器。如：servlet/jsp，php，asp。</li></ol><h2 id="网络通信三要素" tabindex="-1"><a class="header-anchor" href="#网络通信三要素" aria-hidden="true">#</a> 网络通信三要素</h2><ol><li>IP：电子设备(计算机)在网络中的唯一标识；</li><li>端口：应用程序在计算机中的唯一标识，范围为0~65536。</li><li>传输协议：规定了数据传输的规则。</li></ol><h3 id="基础协议" tabindex="-1"><a class="header-anchor" href="#基础协议" aria-hidden="true">#</a> 基础协议</h3><ol><li>tcp：安全协议，三次握手，速度稍慢。</li><li>udp：不安全协议，速度快。</li></ol><h1 id="web服务器软件" tabindex="-1"><a class="header-anchor" href="#web服务器软件" aria-hidden="true">#</a> web服务器软件</h1><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><p>安装了服务器软件的计算机，属于硬件资源。</p><h2 id="服务器软件" tabindex="-1"><a class="header-anchor" href="#服务器软件" aria-hidden="true">#</a> 服务器软件</h2><p>接收用户的请求，处理请求，做出响应，如MySQL服务器软件。</p><h2 id="web服务器软件-1" tabindex="-1"><a class="header-anchor" href="#web服务器软件-1" aria-hidden="true">#</a> web服务器软件</h2><p>也能和服务器软件一样接收用户的请求，处理请求，做出响应，并且在web服务器软件中，可以部署web项目，让用户通过浏览器来访问这些项目。</p><blockquote><p>动态资源只能在web服务器（Web容器）中运行。</p></blockquote><h2 id="常见的java相关的web服务器软件" tabindex="-1"><a class="header-anchor" href="#常见的java相关的web服务器软件" aria-hidden="true">#</a> 常见的java相关的web服务器软件</h2><ol><li>webLogic：oracle公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费的；</li><li>webSphere：IBM公司，大型的JavaEE服务器，支持所有的JavaEE规范，收费的；</li><li>JBOSS：JBOSS公司的，大型的JavaEE服务器，支持所有的JavaEE规范，收费的；</li><li>Tomcat：Apache基金组织，中小型的JavaEE服务器，仅仅支持少量的JavaEE规范servlet/jsp。开源的，免费的。</li></ol><blockquote><p>JavaEE规范：Java语言在企业级开发(JavaEE)中使用的技术规范的总和，一共规定了13项大的规范。</p></blockquote><h1 id="tomcat-web服务器软件" tabindex="-1"><a class="header-anchor" href="#tomcat-web服务器软件" aria-hidden="true">#</a> Tomcat：web服务器软件</h1><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>',23),h={href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},p=o(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>解压下载的压缩包即可。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/JavaWeb60be2f31844ef46bb200848c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注意：安装目录建议不要有中文和空格</p></blockquote><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><p>直接删除Tomcat的安装目录。</p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><ul><li>找到Tomcat安装目录中的bin/startup.bat文件 ，双击运行该文件即可</li><li>访问：浏览器输入<code>http://localhost:8080</code>回车访问自己。访问别人网站的格式：<code>http://别人的ip:8080</code>。</li></ul><h4 id="启动可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#启动可能遇到的问题" aria-hidden="true">#</a> 启动可能遇到的问题</h4><ol><li>黑窗口一闪而过：</li></ol><ul><li>原因： 没有正确配置JAVA_HOME环境变量；</li><li>解决方案：正确配置JAVA_HOME环境变量。</li></ul><ol start="2"><li>启动报错：</li></ol><ul><li>暴力：找到占用的端口号，并且找到对应的进程，使用命令<code>netstat -ano</code>杀死该进程。</li><li>温柔：修改自身的端口号，找到Tomcat安装目录中的<code>conf/server.xml</code>文件，通过修改下面代码中的port修改端口。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token class-name">Connector</span> port<span class="token operator">=</span><span class="token string">&quot;8888&quot;</span> protocol<span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>
    connectionTimeout<span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
    redirectPort<span class="token operator">=</span><span class="token string">&quot;8445&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>一般会将tomcat的默认端口号修改为80。80端口号是http协议的默认端口号。好处：在访问时，就不用输入端口号。</p></blockquote><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><ol><li><p>正常关闭：</p><ul><li>找到Tomcat安装目录中的<code>bin/shutdown.bat</code>脚本文件，双击运行该脚本。</li><li>在运行<code>bin/startup.bat</code>脚本的窗口中按下组合键ctrl+c关闭。</li></ul></li><li><p>强制关闭：</p><ul><li>点击运行<code>bin/startup.bat</code>脚本窗口的×。</li></ul></li></ol><h2 id="部署web项目的三种方式" tabindex="-1"><a class="header-anchor" href="#部署web项目的三种方式" aria-hidden="true">#</a> 部署WEB项目的三种方式</h2><h3 id="直接进行部署的两种方式" tabindex="-1"><a class="header-anchor" href="#直接进行部署的两种方式" aria-hidden="true">#</a> 直接进行部署的两种方式</h3><ol><li>直接将WEB项目放到Tomcat安装目录中的webapps目录下即可。</li></ol><blockquote><p>访问路径中的hello是项目的虚拟目录，hello.html是资源名称。</p></blockquote><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/JavaWeb60be2bf3844ef46bb2b387d6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>将项目打成一个war包，再将war包放置到webapps目录下，可简化部署操作。</li></ol><blockquote><p>在tomcat服务器中，war包会自动解压缩。</p></blockquote><p>缺点是必须把项目放到webapps目录下</p><h3 id="修改server-xml文件进行部署" tabindex="-1"><a class="header-anchor" href="#修改server-xml文件进行部署" aria-hidden="true">#</a> 修改server.xml文件进行部署</h3><ol><li>在Tomcat安装目录中找到<code>conf/server.xml</code>文件并打开；</li><li>在<code>&lt;Host&gt;</code>标签体中配置 <code>&lt;Context docBase=&quot;D:\\hello&quot; path=&quot;/hehe&quot; /&gt;</code></li></ol><blockquote><p>docBase:项目存放的路径；</p><p>path：虚拟目录。</p></blockquote><ol start="3"><li>双击bin/startup.bat文件启动服务器；</li><li>在浏览器中访问WEB项目。</li></ol><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/JavaWeb60be2dca844ef46bb2df16f5.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>缺点是需要到核心文件server.xml中去配置，在正式的WEB开发中很少会修改tomcat服务器的核心文件。</p><h3 id="热部署" tabindex="-1"><a class="header-anchor" href="#热部署" aria-hidden="true">#</a> 热部署</h3><ol><li>在tomcat安装目录下<code>conf\\Catalina\\localhost</code>创建任意名称的xml文件，这里举例使用的是bbb.xml；</li><li>打开文件，在文件中编写代码 <code>&lt;Context docBase=&quot;D:\\hello&quot; /&gt;</code>；</li><li>启动服务器；</li><li>浏览该WEB项目。</li></ol><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/JavaWeb60be2d88844ef46bb2d8b118.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>虚拟目录为xml文件的名称。</p></blockquote><p>优点：热部署。后续使用idea创建WEB项目时，idea使用的就是这种部署方式。</p>`,36);function b(u,f){const i=n("ExternalLinkIcon");return l(),r("div",null,[d,e("p",null,[a("在"),e("a",h,[a("Tomcat官网"),c(i)]),a("下载即可。")]),p])}const v=t(s,[["render",b],["__file","Tomcat-base.html.vue"]]);export{v as default};