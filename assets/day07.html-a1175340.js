const e=JSON.parse('{"key":"v-061ea5fc","path":"/AutomatedTest/day07.html","title":"app自动化测试(appium)二","lang":"zh-CN","frontmatter":{"title":"app自动化测试(appium)二","order":7,"tag":"appAutomatedTest","description":"一、appium脚本框架 入门案例 需求 通过通过webDriver访问appium服务，运行代码后，实现自动打开adb已连接手机上的\\"设置\\"软件，并在6秒后退出“设置”软件，结束自动化测试代码的运行。 通过入门案例可以检测我们前面搭建的自动化测试环境是否能正常使用。 实现代码 # 导入webdriver import time from appium import webdriver # 初始化app的配置信息 des_cap = dict( platformName = \\"Android\\", # 表示的是android 或者IOS系统 automationName = \\"uiautomator2\\", # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest platformVersion = \\"7.1.2\\", # 表示的是平台系统的版本号 deviceName = \\"127.0.0.1:62001\\", # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代） appPackage = \\"com.android.settings\\", # 表示的是app的包名 appActivity = \\".Settings\\" # 表示的是app的界面名 # language =\\"en\\" #设置手机使用语言，en：英文，zh-CN：中国 # locale = \\"US\\" # 设置手机使用地区，US：美国, ) # 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与 driver = webdriver.Remote(\\"http://127.0.0.1:4723\\", des_cap) time.sleep(6) driver.quit()","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/AutomatedTest/day07.html"}],["meta",{"property":"og:site_name","content":"专业治头秃"}],["meta",{"property":"og:title","content":"app自动化测试(appium)二"}],["meta",{"property":"og:description","content":"一、appium脚本框架 入门案例 需求 通过通过webDriver访问appium服务，运行代码后，实现自动打开adb已连接手机上的\\"设置\\"软件，并在6秒后退出“设置”软件，结束自动化测试代码的运行。 通过入门案例可以检测我们前面搭建的自动化测试环境是否能正常使用。 实现代码 # 导入webdriver import time from appium import webdriver # 初始化app的配置信息 des_cap = dict( platformName = \\"Android\\", # 表示的是android 或者IOS系统 automationName = \\"uiautomator2\\", # 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest platformVersion = \\"7.1.2\\", # 表示的是平台系统的版本号 deviceName = \\"127.0.0.1:62001\\", # 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代） appPackage = \\"com.android.settings\\", # 表示的是app的包名 appActivity = \\".Settings\\" # 表示的是app的界面名 # language =\\"en\\" #设置手机使用语言，en：英文，zh-CN：中国 # locale = \\"US\\" # 设置手机使用地区，US：美国, ) # 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与 driver = webdriver.Remote(\\"http://127.0.0.1:4723\\", des_cap) time.sleep(6) driver.quit()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-09T15:24:16.000Z"}],["meta",{"property":"article:tag","content":"appAutomatedTest"}],["meta",{"property":"article:modified_time","content":"2024-01-09T15:24:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"app自动化测试(appium)二\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-09T15:24:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、appium脚本框架","slug":"一、appium脚本框架","link":"#一、appium脚本框架","children":[{"level":3,"title":"入门案例","slug":"入门案例","link":"#入门案例","children":[{"level":4,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":4,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]},{"level":4,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]}]}]},{"level":2,"title":"二、appium基础操作","slug":"二、appium基础操作","link":"#二、appium基础操作","children":[{"level":3,"title":"1、通过appium启动app","slug":"_1、通过appium启动app","link":"#_1、通过appium启动app","children":[]},{"level":3,"title":"2、获取包名和界面名","slug":"_2、获取包名和界面名","link":"#_2、获取包名和界面名","children":[]},{"level":3,"title":"3、关闭app及关闭驱动","slug":"_3、关闭app及关闭驱动","link":"#_3、关闭app及关闭驱动","children":[]},{"level":3,"title":"4、安装卸载app以及判断是否安装app","slug":"_4、安装卸载app以及判断是否安装app","link":"#_4、安装卸载app以及判断是否安装app","children":[]},{"level":3,"title":"5、将应用置于后台运行","slug":"_5、将应用置于后台运行","link":"#_5、将应用置于后台运行","children":[]}]},{"level":2,"title":"三、uiautomatorviewer工具介绍","slug":"三、uiautomatorviewer工具介绍","link":"#三、uiautomatorviewer工具介绍","children":[]},{"level":2,"title":"四、元素定位","slug":"四、元素定位","link":"#四、元素定位","children":[{"level":3,"title":"1、定位单个元素","slug":"_1、定位单个元素","link":"#_1、定位单个元素","children":[{"level":4,"title":"1.1 通过ID定位元素","slug":"_1-1-通过id定位元素","link":"#_1-1-通过id定位元素","children":[]},{"level":4,"title":"1.2 通过class_name定位元素","slug":"_1-2-通过class-name定位元素","link":"#_1-2-通过class-name定位元素","children":[]},{"level":4,"title":"1.3 通过xpath定位元素","slug":"_1-3-通过xpath定位元素","link":"#_1-3-通过xpath定位元素","children":[]},{"level":4,"title":"案例","slug":"案例","link":"#案例","children":[{"level":5,"title":"需求","slug":"需求-1","link":"#需求-1","children":[]},{"level":5,"title":"实现代码","slug":"实现代码-1","link":"#实现代码-1","children":[]},{"level":5,"title":"运行结果","slug":"运行结果-1","link":"#运行结果-1","children":[]}]}]},{"level":3,"title":"2、定位一组元素","slug":"_2、定位一组元素","link":"#_2、定位一组元素","children":[{"level":4,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":4,"title":"方法名","slug":"方法名","link":"#方法名","children":[]},{"level":4,"title":"案例","slug":"案例-1","link":"#案例-1","children":[{"level":5,"title":"需求","slug":"需求-2","link":"#需求-2","children":[]}]},{"level":4,"title":"关键代码","slug":"关键代码","link":"#关键代码","children":[]}]},{"level":3,"title":"3、显示等待定位元素","slug":"_3、显示等待定位元素","link":"#_3、显示等待定位元素","children":[{"level":4,"title":"方法名","slug":"方法名-1","link":"#方法名-1","children":[]},{"level":4,"title":"使用实例","slug":"使用实例","link":"#使用实例","children":[]},{"level":4,"title":"使用","slug":"使用","link":"#使用","children":[]}]}]},{"level":2,"title":"五、元素操作","slug":"五、元素操作","link":"#五、元素操作","children":[{"level":3,"title":"1、点击操作","slug":"_1、点击操作","link":"#_1、点击操作","children":[]},{"level":3,"title":"2、清空和输入操作","slug":"_2、清空和输入操作","link":"#_2、清空和输入操作","children":[]},{"level":3,"title":"3、输入的封装","slug":"_3、输入的封装","link":"#_3、输入的封装","children":[]},{"level":3,"title":"4、获取元素的信息","slug":"_4、获取元素的信息","link":"#_4、获取元素的信息","children":[{"level":4,"title":"方法名","slug":"方法名-2","link":"#方法名-2","children":[]},{"level":4,"title":"案例","slug":"案例-2","link":"#案例-2","children":[{"level":5,"title":"需求","slug":"需求-3","link":"#需求-3","children":[]}]},{"level":4,"title":"实现代码","slug":"实现代码-2","link":"#实现代码-2","children":[]},{"level":4,"title":"运行结果","slug":"运行结果-2","link":"#运行结果-2","children":[]}]},{"level":3,"title":"5、工具类utils","slug":"_5、工具类utils","link":"#_5、工具类utils","children":[]},{"level":3,"title":"6、更多初始化app配置信息","slug":"_6、更多初始化app配置信息","link":"#_6、更多初始化app配置信息","children":[{"level":4,"title":"输入中文的处理","slug":"输入中文的处理","link":"#输入中文的处理","children":[]},{"level":4,"title":"区分app是首次打开还是非首次打开","slug":"区分app是首次打开还是非首次打开","link":"#区分app是首次打开还是非首次打开","children":[]}]},{"level":3,"title":"7、综合案例","slug":"_7、综合案例","link":"#_7、综合案例","children":[{"level":4,"title":"需求","slug":"需求-4","link":"#需求-4","children":[]},{"level":4,"title":"实现代码","slug":"实现代码-3","link":"#实现代码-3","children":[]}]}]}],"git":{"createdTime":1704813856000,"updatedTime":1704813856000,"contributors":[{"name":"hk","email":"hek97@qq.com","commits":1}]},"readingTime":{"minutes":13.95,"words":4184},"filePathRelative":"AutomatedTest/day07.md","localizedDate":"2024年1月9日","excerpt":"<h2> 一、appium脚本框架</h2>\\n<h3> 入门案例</h3>\\n<h4> 需求</h4>\\n<p>通过通过webDriver访问appium服务，运行代码后，实现自动打开adb已连接手机上的\\"设置\\"软件，并在6秒后退出“设置”软件，结束自动化测试代码的运行。</p>\\n<blockquote>\\n<p>通过入门案例可以检测我们前面搭建的自动化测试环境是否能正常使用。</p>\\n</blockquote>\\n<h4> 实现代码</h4>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># 导入webdriver</span>\\n<span class=\\"token keyword\\">import</span> time\\n<span class=\\"token keyword\\">from</span> appium <span class=\\"token keyword\\">import</span> webdriver\\n\\n<span class=\\"token comment\\"># 初始化app的配置信息</span>\\ndes_cap <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span>\\n    platformName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"Android\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 表示的是android 或者IOS系统</span>\\n    automationName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"uiautomator2\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 表示appium测试驱动名称，安卓使用“uiautomator2”，iOS使用“xcuitest</span>\\n    platformVersion <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"7.1.2\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 表示的是平台系统的版本号</span>\\n    deviceName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"127.0.0.1:62001\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 表示的是设备的ID名称，如：emulator-5554（如果只有一个设备可以用****来替代）</span>\\n    appPackage <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"com.android.settings\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\"># 表示的是app的包名</span>\\n    appActivity <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\".Settings\\"</span>  <span class=\\"token comment\\"># 表示的是app的界面名</span>\\n    <span class=\\"token comment\\"># language =\\"en\\"  #设置手机使用语言，en：英文，zh-CN：中国</span>\\n    <span class=\\"token comment\\"># locale = \\"US\\"  # 设置手机使用地区，US：美国,</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># 第一个参数是 appium服务器 的地址，手机和开发工具之间需要appium服务器的参与</span>\\ndriver <span class=\\"token operator\\">=</span> webdriver<span class=\\"token punctuation\\">.</span>Remote<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"http://127.0.0.1:4723\\"</span><span class=\\"token punctuation\\">,</span> des_cap<span class=\\"token punctuation\\">)</span>\\n\\ntime<span class=\\"token punctuation\\">.</span>sleep<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span>\\n\\ndriver<span class=\\"token punctuation\\">.</span>quit<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};