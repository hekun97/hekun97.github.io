import{_ as a,W as e,X as c,Y as t}from"./framework-b9c734bc.js";const i={},o=t(`<h2 id="_1-将tomcat集成到idea中" tabindex="-1"><a class="header-anchor" href="#_1-将tomcat集成到idea中" aria-hidden="true">#</a> 1. 将Tomcat集成到IDEA中</h2><p>将Tomcat集成到IDEA中，并且创建JavaEE的项目，部署项目。</p><h3 id="_1-1-具体步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-具体步骤" aria-hidden="true">#</a> 1.1. 具体步骤</h3><ol><li>创建一个空项目以便配置Tomcat； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34577844ef46bb2d78ab7-20230327114743099.jpg" alt="" loading="lazy"></li><li>在Run中编辑配置； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d340e7844ef46bb2aadf03-20230327114743118.jpg" alt="" loading="lazy"></li><li>导入Tomcat安装路径； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d342f5844ef46bb2bec78f-20230327114743121.jpg" alt="" loading="lazy"></li><li>配置成功，现在新建一个模块JavaWEB的项目； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34514844ef46bb2d3e12b-20230327114743099.jpg" alt="" loading="lazy"></li><li>编辑index.jsp文件，把网页标题和内容进行了修改； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34630844ef46bb2de5319-20230327114743126.jpg" alt="" loading="lazy"></li><li>运行该项目； <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d346cd844ef46bb2e4023b-20230327114743029.jpg" alt="" loading="lazy"></li><li>打开浏览器，查看运行结果。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d942785132923bf8fac063-20230327114743057.jpg" alt="" loading="lazy"></li></ol><h3 id="_1-2-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-2-注意事项" aria-hidden="true">#</a> 1.2. 注意事项</h3><h4 id="_1-2-1-修改tomcat服务器的配置信息" tabindex="-1"><a class="header-anchor" href="#_1-2-1-修改tomcat服务器的配置信息" aria-hidden="true">#</a> 1.2.1. 修改Tomcat服务器的配置信息</h4><p>在编辑配置中，可对Tomcat服务器进行新增、删除和修改的操作。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34abd844ef46bb2081c08-20230327114743162.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-2-2-根路径的配置" tabindex="-1"><a class="header-anchor" href="#_1-2-2-根路径的配置" aria-hidden="true">#</a> 1.2.2. 根路径的配置</h4><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34911844ef46bb2f8b043-20230327114743157.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-2-3-热部署" tabindex="-1"><a class="header-anchor" href="#_1-2-3-热部署" aria-hidden="true">#</a> 1.2.3. 热部署</h4><p>通过热部署，实现在修改资源后，不重启 Tomcat服务器。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34962844ef46bb2fb9a2d-20230327114743179.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-2-4-访问资源" tabindex="-1"><a class="header-anchor" href="#_1-2-4-访问资源" aria-hidden="true">#</a> 1.2.4. 访问资源</h4><p>访问资源通过修改访问路径实现，这里的index.jsp属于配置中声明的默认首页，所以可以不加也能访问到该资源。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d943465132923bf8001128-20230327114743148.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-2-5-目录结构" tabindex="-1"><a class="header-anchor" href="#_1-2-5-目录结构" aria-hidden="true">#</a> 1.2.5. 目录结构</h4><p>java动态项目web下目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>—— 项目的根目录
	—— WEB-INF目录：
		—— web.xml：web项目的核心配置文件
		—— classes目录：放置字节码文件的目录
		—— libs目录：放置依赖的jar包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d34dd8844ef46bb223a792-20230327114743163.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-idea与tomcat的相关配置" tabindex="-1"><a class="header-anchor" href="#_2-idea与tomcat的相关配置" aria-hidden="true">#</a> 2. IDEA与tomcat的相关配置</h2><h3 id="_2-1-idea使用tomcat服务器的解析" tabindex="-1"><a class="header-anchor" href="#_2-1-idea使用tomcat服务器的解析" aria-hidden="true">#</a> 2.1. IDEA使用tomcat服务器的解析</h3><p>IDEA会为每一个tomcat部署的项目单独建立一份配置文件。</p><p>解析如下：</p><ol><li>启动服务器后，将控制台的log信息翻到最顶部，找到<code>Using CATALINA_BASE: &quot;C:\\Users\\HK\\AppData\\Local\\JetBrains\\IntelliJIdea2020.1\\tomcat\\_Test&quot;</code>。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d48f2f844ef46bb281a810-20230327114743190.jpg" alt="" loading="lazy"></li><li>在文件资源管理器中打开该路径，路径下的资源就是IDEA中当前项目对Tomcat的配置。其中conf 为配置信息文件夹（比如该文件下的server.xml可以查看服务器的端口等信息），logs为日志文件夹。 <img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d490e0844ef46bb28e8581-20230327114743207.jpg" alt="" loading="lazy"><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d491a6844ef46bb294a0d1-20230327114743212.jpg" alt="" loading="lazy"></li></ol><blockquote><p>可以发现该路径下的目录和文件和tomcat安装路径下的目录和文件差不多。为了便于理解，这里简单的认为在该路径下和在安装tomcat的路径下热部署WEB项目是一样的。</p></blockquote><ol start="3"><li>Catalina文件夹下的文件为Tomcat的第三种项目部署-热部署的方式。</li></ol><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d491ed844ef46bb296d64d-20230327114743208.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d4925d844ef46bb29a870d-20230327114743203.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>在资源管理器中打开docBase中的路径，就是需要部署的WEB项目文件。包含jsp、html、css等文件，在WEB-INF下包含class等文件。</li></ol><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d492e5844ef46bb29ee883-20230327114743202.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-2-区分工作空间项目和tomcat部署的web项目" tabindex="-1"><a class="header-anchor" href="#_2-2-区分工作空间项目和tomcat部署的web项目" aria-hidden="true">#</a> 2.2. 区分工作空间项目和tomcat部署的web项目</h3><ul><li><code>&quot;C:\\Users\\HK\\AppData\\Local\\JetBrains\\IntelliJIdea2020.1\\tomcat\\_Test&quot;</code>为工作空间项目，也就是在IDEA中编辑的WEB项目，可以理解为源代码;</li><li><code>&quot;C:\\Users\\HK\\IdeaProjects\\Test\\out\\artifacts\\Tomcat_war_exploded2</code>&quot;为tomcat部署的web项目，其中的Java代码已经被编译为class文件存放到web/WEB-INF目录下。</li></ul><blockquote><ol><li>tomcat真正访问的是“tomcat部署的web项目”，&quot;tomcat部署的web项目&quot;对应着&quot;工作空间项目&quot; 的web目录下的所有资源；</li><li>WEB-INF目录下的资源不能被浏览器直接访问，不要把WEB资源放到该目录下。</li></ol></blockquote><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d494bf844ef46bb2ae790c-20230327114743246.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-3-断点调试" tabindex="-1"><a class="header-anchor" href="#_2-3-断点调试" aria-hidden="true">#</a> 2.3. 断点调试</h3><p>使用&quot;小虫子&quot;启动 dubug 启动。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/java/JavaWeb/01.Tomcat/60d496b0844ef46bb2bed4e2-20230327114743256.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,38),d=[o];function s(n,l){return e(),c("div",null,d)}const r=a(i,[["render",s],["__file","3.Tomcat-to-IDEA.html.vue"]]);export{r as default};