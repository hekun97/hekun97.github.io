import{_ as i,W as t,X as d,Y as n,Z as e,$ as c,a0 as s,C as l}from"./framework-174e6972.js";const o={},r=s(`<h1 id="git简介" tabindex="-1"><a class="header-anchor" href="#git简介" aria-hidden="true">#</a> Git简介</h1><h2 id="git的概念" tabindex="-1"><a class="header-anchor" href="#git的概念" aria-hidden="true">#</a> Git的概念</h2><p>Git是目前世界上最先进的分布式版本控制系统，使用C语言开发。</p><h2 id="版本控制系统" tabindex="-1"><a class="header-anchor" href="#版本控制系统" aria-hidden="true">#</a> 版本控制系统</h2><p>概念：版本控制最主要的功能是追踪文件的变更，记录每次文件的改动。</p><h3 id="版本控制系统分类" tabindex="-1"><a class="header-anchor" href="#版本控制系统分类" aria-hidden="true">#</a> 版本控制系统分类</h3><p>分为集中式和分布式，其中CVS、SVN为集中式的版本控制系统，Git为分布式版本控制系统。</p><h4 id="集中式版本控制系统" tabindex="-1"><a class="header-anchor" href="#集中式版本控制系统" aria-hidden="true">#</a> 集中式版本控制系统</h4><p>集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/集中式版本控制系统.jpg" alt="central-repo" tabindex="0" loading="lazy"><figcaption>central-repo</figcaption></figure><h4 id="分布式版本控制系统" tabindex="-1"><a class="header-anchor" href="#分布式版本控制系统" aria-hidden="true">#</a> 分布式版本控制系统</h4><p>分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。 和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。 在实际使用分布式版本控制系统的时候，其实很少在两人之间的电脑上推送版本库的修改，因为可能你们俩不在一个局域网内，两台电脑互相访问不了，也可能今天你的同事病了，他的电脑压根没有开机。因此，分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便交换“大家的修改，没有它大家也一样干活，只是交换修改不方便而已。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/分布式版本控制系统.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="集中式vs分布式的区别" tabindex="-1"><a class="header-anchor" href="#集中式vs分布式的区别" aria-hidden="true">#</a> 集中式VS分布式的区别</h3><table><thead><tr><th>区别</th><th>集中式</th><th>分布式</th></tr></thead><tbody><tr><td>版本库</td><td>存放在中央服务器</td><td>没有“中央服务器”</td></tr><tr><td>联网</td><td>必须联网（最大的毛病）</td><td>不需要联网</td></tr><tr><td>安全性</td><td>中央服务器出问题，所有人都没法干活</td><td>某一个人的电脑坏掉了不要紧，随便从其他人哪里复制一个即可</td></tr><tr><td>分支管理</td><td>分支功能不够强大</td><td>极其强大的分支管理</td></tr><tr><td>暂存区</td><td>无</td><td>有</td></tr></tbody></table><h2 id="git流程图解" tabindex="-1"><a class="header-anchor" href="#git流程图解" aria-hidden="true">#</a> Git流程图解</h2><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/Git流程.jpg" alt="Git流程" tabindex="0" loading="lazy"><figcaption>Git流程</figcaption></figure><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h2><h3 id="创建仓库-repository" tabindex="-1"><a class="header-anchor" href="#创建仓库-repository" aria-hidden="true">#</a> 创建仓库(repository)</h3><ol><li><p>创建一个空目录；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> learngit <span class="token comment"># 创建目录learngit</span>
$ <span class="token builtin class-name">cd</span> learngit <span class="token comment"># 进入文件夹learngit</span>
$ <span class="token builtin class-name">pwd</span> <span class="token comment"># 显示当前目录。</span>
/e/GitTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git init</code>命令把这个目录变成<code>Git</code>可以管理的仓库；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> E:/GitTest/.git/
<span class="token comment"># 创建好空仓库后，当前目录下多了.git的目录，该目录为Git来跟踪管理版本库的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新建文件<code>readme.txt</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 文件内容</span>
Git is a version control system.
Git is <span class="token function">free</span> software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>仓库建立后，我们对文件的新增、修改操作是在工作区。</p></blockquote><h3 id="添加文件到暂存区" tabindex="-1"><a class="header-anchor" href="#添加文件到暂存区" aria-hidden="true">#</a> 添加文件到暂存区</h3><ol><li><p>从工作区添加单个文件到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从工作区添加多个文件到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt readme2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从工作区添加所有文件到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="提交到版本库" tabindex="-1"><a class="header-anchor" href="#提交到版本库" aria-hidden="true">#</a> 提交到版本库</h3><p>把暂存区的文件提交到版本库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;wrote a readme file&quot;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> eaadf4e<span class="token punctuation">]</span> wrote a readme <span class="token function">file</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> readme.txt
<span class="token comment"># -m 后面输入的是本次提交的说明，可以输入任意内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理修改" tabindex="-1"><a class="header-anchor" href="#管理修改" aria-hidden="true">#</a> 管理修改</h2><h3 id="修改文件" tabindex="-1"><a class="header-anchor" href="#修改文件" aria-hidden="true">#</a> 修改文件</h3><p>当修改了<code>readme.txt</code>文件时。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改内容，新增单词distributed</span>
Git is a distributed version control system.
Git is <span class="token function">free</span> software
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看仓库状态" tabindex="-1"><a class="header-anchor" href="#查看仓库状态" aria-hidden="true">#</a> 查看仓库状态</h3><p>运行<code>git status</code>查看仓库当前的状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   $ <span class="token function">git</span> status
   On branch master
   Changes not staged <span class="token keyword">for</span> commit:
     <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
     <span class="token punctuation">(</span>use <span class="token string">&quot;git restore &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
           modified:   readme.txt
   
   no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看修改内容" tabindex="-1"><a class="header-anchor" href="#查看修改内容" aria-hidden="true">#</a> 查看修改内容</h3><p>当不清楚修改的内容时，运行<code>git diff</code>查看具体修改了什么内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
index d8036c1<span class="token punctuation">..</span>013b5bc <span class="token number">100644</span>
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
<span class="token parameter variable">-Git</span> is a version control system.
+Git is a distributed version control system.
 Git is <span class="token function">free</span> software.
<span class="token punctuation">\\</span> No newline at end of <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加文件到暂存区-1" tabindex="-1"><a class="header-anchor" href="#添加文件到暂存区-1" aria-hidden="true">#</a> 添加文件到暂存区</h3><p>把被修改的文件从工作区添加到暂存区，运行<code>git add</code>；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交文件到版本库" tabindex="-1"><a class="header-anchor" href="#提交文件到版本库" aria-hidden="true">#</a> 提交文件到版本库</h3><p>把暂存区的文件提交到版本库，运行<code>git commit -m &quot;add distributed&quot;</code>；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add distributed&quot;</span>
<span class="token punctuation">[</span>master b622eeb<span class="token punctuation">]</span> <span class="token function">add</span> distributed
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="确认仓库状态" tabindex="-1"><a class="header-anchor" href="#确认仓库状态" aria-hidden="true">#</a> 确认仓库状态</h3><p>运行<code>git status</code>查看仓库当前的状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销修改" tabindex="-1"><a class="header-anchor" href="#撤销修改" aria-hidden="true">#</a> 撤销修改</h2><h3 id="撤销工作区的修改" tabindex="-1"><a class="header-anchor" href="#撤销工作区的修改" aria-hidden="true">#</a> 撤销工作区的修改</h3><p>命令<code>git checkout -- readme.txt</code>意思就是，把<code>readme.txt</code>文件在工作区的修改全部撤销，这里有两种情况：</p><ol><li><code>readme.txt</code>自修改后还没有被添加暂存区，现在撤销修改就扔掉了当前工作区的内容，回到上一次提交到版本库的状态；</li><li><code>readme.txt</code>已经添加到暂存区，但未提交到版本库，又在工作区作了修改，现在撤销修改就扔掉了当前工作区的内容，回到添加到暂存区时的状态。</li></ol><blockquote><p>总之，就是让这个文件在工作区的修改被抛弃，回到最近一次<code>git commit</code>或<code>git add</code>时的状态。</p></blockquote><p>使用<code>git checkout --file</code>撤销修改回到上一次的添加（add）或提交（commit）的状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">--readme.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="放弃所有工作区的修改" tabindex="-1"><a class="header-anchor" href="#放弃所有工作区的修改" aria-hidden="true">#</a> 放弃所有工作区的修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令会删掉工作区所有的修改。</p><h3 id="撤销暂存区的修改" tabindex="-1"><a class="header-anchor" href="#撤销暂存区的修改" aria-hidden="true">#</a> 撤销暂存区的修改</h3><ol><li><p>发现添加内容有错误，已添加（add）到暂存区，还未进行提交（commit）到版本库。</p></li><li><p>用命令<code>git reset HEAD &lt;file&gt;</code>可以把暂存区的修改撤销掉（unstage），重新放回工作区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD readme.txt
<span class="token comment"># git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本</span>
Unstaged changes after reset:
M	readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git status</code>查看一下，现在暂存区是干净的，工作区有修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git checkout --file</code>丢弃工作区的修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -- readme.txt

$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="撤销版本库的修改" tabindex="-1"><a class="header-anchor" href="#撤销版本库的修改" aria-hidden="true">#</a> 撤销版本库的修改</h3><ol><li><p>发现添加内容有错误，已添加（add）并提交（commit）到版本库。</p></li><li><p>使用命令<code>git reset --hard HEAD^ </code>回到上一个版本即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><p>需要删除某文件，可以直接使用命令<code>rm file</code>删除或在资源管理器中删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>git status</code>查看状态，可以看到<code>test.txt</code>文件被删除了，现在分两种情况，确实需要删除和错误删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add/rm &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

	deleted:    test.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>确实需要删除</p><p>那就用命令<code>git rm</code>删掉，并且<code>git commit</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   $ <span class="token function">git</span> <span class="token function">rm</span> test.txt
   <span class="token function">rm</span> <span class="token string">&#39;test.txt&#39;</span>
   
   $ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;remove test.txt&quot;</span>
   <span class="token punctuation">[</span>master d46f35e<span class="token punctuation">]</span> remove test.txt
    <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
    delete mode <span class="token number">100644</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除错误</p><p>因为版本库里还有该文件，使用<code>git checkout -- test.txt</code>命令撤销工作区的修改，可以很轻松地把误删的文件恢复，回到上次提交的版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -- test.txt
<span class="token comment"># git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="时光机穿梭" tabindex="-1"><a class="header-anchor" href="#时光机穿梭" aria-hidden="true">#</a> 时光机穿梭</h1><h2 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h2><h3 id="版本的概念" tabindex="-1"><a class="header-anchor" href="#版本的概念" aria-hidden="true">#</a> 版本的概念</h3><p>每次修改文件后，<code>commit</code>一次，称为一个新版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add distributed&quot;</span>
<span class="token punctuation">[</span>master b622eeb<span class="token punctuation">]</span> <span class="token function">add</span> distributed <span class="token comment"># b622eeb为版本号</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回退到过去的版本" tabindex="-1"><a class="header-anchor" href="#回退到过去的版本" aria-hidden="true">#</a> 回退到过去的版本</h3><p>当前版本提交的内容错误，需要回到上一个版本。</p><ol><li><p>通过<code>git log</code>查看历史记录，可加上<code>--pretty=oneline</code>参数减少信息，使输出信息为一行，前面的<code>b622ee...</code>为版本号；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token comment"># 使输出信息为一行</span>
b622eebed1ea48b4adfa329e690edc5918ceb553 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token function">add</span> distributed
65d3c6e47f76bc9475c3b841ca44fed1d2752a3c renamed and deleted some files
e786283270d3ae4489fba874f755d6d7ebde70e4 <span class="token function">add</span> <span class="token function">more</span> files
61f336fd68ff39bcd1da26324c755f71a65ccb72 wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git reset</code>进行回退。其中上一个版本为<code>HEAD^</code>，上上一个版本为<code>HEAD^^</code>，更多的可以写为<code>HEAD~100</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 写法1</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^ <span class="token comment"># 回退到 renamed and deleted some files </span>
HEAD is now at 65d3c6e renamed and deleted some files
<span class="token comment"># 写法2</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~1 <span class="token comment"># 回退到 renamed and deleted some files </span>
HEAD is now at 65d3c6e renamed and deleted some files
<span class="token comment"># 写法3</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 65d3c 
<span class="token comment"># 回退到 renamed and deleted some files ，版本号不用输入全部，但不要太短，避免冲突</span>
HEAD is now at 65d3c6e renamed and deleted some files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git log</code>查看版本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
65d3c6e47f76bc9475c3b841ca44fed1d2752a3c <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> renamed and deleted some files
e786283270d3ae4489fba874f755d6d7ebde70e4 <span class="token function">add</span> <span class="token function">more</span> files
61f336fd68ff39bcd1da26324c755f71a65ccb72 wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="回到未来的版本" tabindex="-1"><a class="header-anchor" href="#回到未来的版本" aria-hidden="true">#</a> 回到未来的版本</h3><p>因为一些原因，我现在非常后悔，需要回到最初的<code>add distributed</code>的版本。</p><ol><li><p>使用<code>git reflog</code>命令，查看使用过的每一次命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog
65d3c6e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: reset: moving to HEAD^
b622eeb HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed <span class="token comment"># add distributed 的版本</span>
65d3c6e <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: renamed and deleted some files
e786283 HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> <span class="token function">more</span> files
61f336f HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>找到<code>add distributed</code>的版本号，然后使用<code>git reset --hard b622e</code>回到<code>add distributed</code>的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> b622e
HEAD is now at b622eeb <span class="token function">add</span> distributed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git log</code>查看版本信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
b622eebed1ea48b4adfa329e690edc5918ceb553 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token function">add</span> distributed
65d3c6e47f76bc9475c3b841ca44fed1d2752a3c renamed and deleted some files
e786283270d3ae4489fba874f755d6d7ebde70e4 <span class="token function">add</span> <span class="token function">more</span> files
61f336fd68ff39bcd1da26324c755f71a65ccb72 wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="深入理解版本回退" tabindex="-1"><a class="header-anchor" href="#深入理解版本回退" aria-hidden="true">#</a> 深入理解版本回退</h3><p>Git的版本回退速度非常快，因为Git在内部有个指向当前版本的<code>HEAD</code>指针，当你回退版本的时候，Git仅仅是改变了指针的指向。</p><ol><li><p>版本回退前</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>┌────┐
│HEAD│
└────┘
   │
   └──&gt; ○ append GPL
        │
        ○ add distributed
        │
        ○ wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>版本回退后</p><div class="language-ascii line-numbers-mode" data-ext="ascii"><pre class="language-ascii"><code>┌────┐
│HEAD│
└────┘
   │
   │    ○ append GPL
   │    │
   └──&gt; ○ add distributed
        │
        ○ wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>这里使用github作为免费的远程仓库。由于本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以需要一些设置。</p><ol><li><p>创建SSH Key。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>
<span class="token comment"># 邮箱改为自己的邮件地址，后面一路回车就好了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在用户主目录下查找.ssh目录，里面有<code>id_rsa</code>和<code>id_rsa.pub</code>两个文件，这两个就是SSH Key的秘钥对，<code>id_rsa</code>是私钥，不能泄露出去，<code>id_rsa.pub</code>是公钥，可以放心地告诉任何人。</p></li><li><p>登录GitHub，打开&quot;Accout settings&quot;，&quot;SSH Keys&quot;页面，点击&quot;Add SSH Key&quot;，填上任意Title，在Key文本框里粘贴<code>id_rsa.pub</code>文件的内容。</p></li></ol><blockquote><p>为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。</p><p>当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。</p></blockquote><h2 id="添加远程库" tabindex="-1"><a class="header-anchor" href="#添加远程库" aria-hidden="true">#</a> 添加远程库</h2><ol><li><p>登录GitHub，然后在右上角找到&quot;Create a new repo&quot;按钮，创建一个新的仓库。</p></li><li><p>在Repository name填入<code>learngit</code>，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库。</p></li><li><p>根据GitHub的提示，在本地的<code>learngit</code>仓库下运行命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:hekun97/learngit.git
<span class="token comment"># 其中hekun97为GitHub的账户名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>把本地内容推送到远程库上，<code>origin</code>为远程仓库名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
<span class="token comment"># 由于远程库是空的，第一次推送需加上-u</span>
Counting objects: <span class="token number">20</span>, done.
Delta compression using up to <span class="token number">4</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">20</span>/20<span class="token punctuation">)</span>, <span class="token number">1.64</span> KiB <span class="token operator">|</span> <span class="token number">560.00</span> KiB/s, done.
Total <span class="token number">20</span> <span class="token punctuation">(</span>delta <span class="token number">5</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
remote: Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, done.
To github.com:michaelliao/learngit.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      master -<span class="token operator">&gt;</span> master
Branch <span class="token string">&#39;master&#39;</span> <span class="token builtin class-name">set</span> up to track remote branch <span class="token string">&#39;master&#39;</span> from <span class="token string">&#39;origin&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="从远程库克隆" tabindex="-1"><a class="header-anchor" href="#从远程库克隆" aria-hidden="true">#</a> 从远程库克隆</h2><p>使用命令<code>git clone</code>克隆。</p><ol><li><p>ssh协议</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:hekun97/learngit.git <span class="token comment"># ssh协议</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>https协议</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://github.com/hekun97/learngit.git <span class="token comment"># https协议</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="删除远程库" tabindex="-1"><a class="header-anchor" href="#删除远程库" aria-hidden="true">#</a> 删除远程库</h2><p>如果添加的时候地址写错了，或者就是想删除远程库，可以用<code>git remote rm &lt;name&gt;</code>命令。使用前，建议先用<code>git remote -v</code>查看远程库信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  git@github.com:michaelliao/learn-git.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  git@github.com:michaelliao/learn-git.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，根据名字删除，比如删除<code>origin</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">rm</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到GitHub，在后台页面找到删除按钮再删除。</p><h1 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h1><p>分支就是在主分支上创建一个属于你自己的分支，别人看不到，但我能继续工作，想提交就提交，完成之后直接合并到主分支就行。</p><h2 id="创建与合并分支" tabindex="-1"><a class="header-anchor" href="#创建与合并分支" aria-hidden="true">#</a> 创建与合并分支</h2><ol><li><p>创建<code>dev</code>分支，然后切换到<code>dev</code>分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> dev
Switched to a new branch <span class="token string">&#39;dev&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git switch</code>命令加上<code>-c</code>参数表示创建并切换，相当于以下两条命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch dev
$ <span class="token function">git</span> switch dev
Switched to branch <span class="token string">&#39;dev&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用<code>git branch</code>命令查看版本库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* dev
  master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后在新的分支上就可以进行新功能的开发，并添加（add）和提交（commit）修改。</p></li><li><p>完成新功能后，切换到主分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch master
Switched to branch <span class="token operator">&amp;</span><span class="token comment">#39;master&amp;#39;55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>把<code>dev</code>分支的工作成果合并到<code>master</code>分支上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge dev
Updating d46f35e<span class="token punctuation">..</span>b17d20e
Fast-forward <span class="token comment"># Git告诉我们，这次合并是“快进模式”，也就是直接把master指向dev的当前提交</span>
 readme.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除<code>dev</code>分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev
Deleted branch dev <span class="token punctuation">(</span>was b17d20e<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>还可以使用<code>git checkout -b &lt;branch&gt;</code>来创建并切换分支，<code>git checkout &lt;branch&gt;</code>切换分支，而前面讲过的撤销修改则是<code>git checkout -- &lt;file&gt;</code>，同一个命令，有两种作用。所以此处只使用<code>switch</code>，<code>checkout</code>仅做了解。</p></blockquote><h2 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突" aria-hidden="true">#</a> 解决冲突</h2><p>人生不如意之事十之八九，合并分支往往也不是一帆风顺的。</p><p>准备新的<code>feature1</code>分支，继续我们的新分支开发：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git switch -c feature1
Switched to a new branch &#39;feature1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>readme.txt</code>最后一行，改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Creating a new branch is quick AND simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>feature1</code>分支上提交：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add readme.txt

$ git commit -m &quot;AND simple&quot;
[feature1 14096d0] AND simple
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到<code>master</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git switch master
Switched to branch &#39;master&#39;
Your branch is ahead of &#39;origin/master&#39; by 1 commit.
  (use &quot;git push&quot; to publish your local commits)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git还会自动提示我们当前<code>master</code>分支比远程的<code>master</code>分支要超前1个提交。</p><p>在<code>master</code>分支上把<code>readme.txt</code>文件的最后一行改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Creating a new branch is quick &amp; simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;&amp; simple&quot;
[master 5dc6824] &amp; simple
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>master</code>分支和<code>feature1</code>分支各自都分别有新的提交，变成了这样：</p><figure><img src="https://www.liaoxuefeng.com/files/attachments/919023000423040/0" alt="git-br-feature1" tabindex="0" loading="lazy"><figcaption>git-br-feature1</figcaption></figure><p>这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然冲突了！Git告诉我们，<code>readme.txt</code>文件存在冲突，必须手动解决冲突后再提交。<code>git status</code>也可以告诉我们冲突的文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git status
On branch master
Your branch is ahead of &#39;origin/master&#39; by 2 commits.
  (use &quot;git push&quot; to publish your local commits)

You have unmerged paths.
  (fix conflicts and run &quot;git commit&quot;)
  (use &quot;git merge --abort&quot; to abort the merge)

Unmerged paths:
  (use &quot;git add &lt;file&gt;...&quot; to mark resolution)

	both modified:   readme.txt

no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以直接查看readme.txt的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Creating a new branch is quick &amp; simple.
=======
Creating a new branch is quick AND simple.
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git用<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>，<code>=======</code>，<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>标记出不同分支的内容，我们修改如下后保存：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Creating a new branch is quick and simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再提交：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;conflict fixed&quot;
[master cf810e4] conflict fixed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>master</code>分支和<code>feature1</code>分支变成了下图所示：</p><figure><img src="https://www.liaoxuefeng.com/files/attachments/919023031831104/0" alt="git-br-conflict-merged" tabindex="0" loading="lazy"><figcaption>git-br-conflict-merged</figcaption></figure><p>用带参数的<code>git log</code>也可以看到分支的合并情况：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
*   cf810e4 (HEAD -&gt; master) conflict fixed
|\\  
| * 14096d0 (feature1) AND simple
* | 5dc6824 &amp; simple
|/  
* b17d20e branch test
* d46f35e (origin/master) remove test.txt
* b84166e add test.txt
* 519219b git tracks changes
* e43a48b understand how stage works
* 1094adb append GPL
* e475afc add distributed
* eaadf4e wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，删除<code>feature1</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git branch -d feature1
Deleted branch feature1 (was 14096d0).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>工作完成。</p><blockquote><p>当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。</p><p>解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。</p><p>用<code>git log --graph</code>命令可以看到分支合并图。</p></blockquote><h2 id="分支管理策略" tabindex="-1"><a class="header-anchor" href="#分支管理策略" aria-hidden="true">#</a> 分支管理策略</h2><p>通常，合并分支时，如果可以，Git会用<code>Fast forward</code>模式，但这种模式下，删除分支后，会丢掉分支信息。</p><p>如果要强制禁用<code>Fast forward</code>模式，Git会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。</p><h3 id="保留分支信息" tabindex="-1"><a class="header-anchor" href="#保留分支信息" aria-hidden="true">#</a> 保留分支信息</h3><p>强制禁用<code>Fast forward</code>模式，保留分支信息。</p><ol><li><p>创建并切换<code>dev</code>分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> dev
Switched to a new branch <span class="token string">&#39;dev&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>readme.txt</code>文件，并提交一个新的<code>commit</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt 
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add merge&quot;</span>
<span class="token punctuation">[</span>dev f52c633<span class="token punctuation">]</span> <span class="token function">add</span> merge
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>切换到主分支<code>master</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch master
Switched to branch <span class="token string">&#39;master&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>合并<code>dev</code>分支，请注意添加<code>--no-ff</code>参数，表示禁用<code>Fast forward</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">&quot;merge with no-ff&quot;</span> dev
<span class="token comment"># 因为本次合并要创建一个新的commit，所以加上-m 参数，把commit描述写进去。</span>
Merge made by the <span class="token string">&#39;recursive&#39;</span> strategy.
 readme.txt <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用<code>git log</code>查看分支历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit
*   e1e9c68 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> merge with no-ff
<span class="token operator">|</span><span class="token punctuation">\\</span>  
<span class="token operator">|</span> * f52c633 <span class="token punctuation">(</span>dev<span class="token punctuation">)</span> <span class="token function">add</span> merge
<span class="token operator">|</span>/  
*   cf810e4 conflict fixed
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分支历史如下图所示。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/分支图片.jpg" alt="git-no-ff-mode" tabindex="0" loading="lazy"><figcaption>git-no-ff-mode</figcaption></figure></li></ol><h3 id="分支管理原则" tabindex="-1"><a class="header-anchor" href="#分支管理原则" aria-hidden="true">#</a> 分支管理原则</h3><p>在实际开发中，我们应该按照几个基本原则进行分支管理：</p><ol><li><code>master</code>分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；</li><li>大家干活都在<code>dev</code>分支上，也就是说，<code>dev</code>分支是不稳定的，到某个时候，比如1.0版本发布时，再把<code>dev</code>分支合并到<code>master</code>上，在<code>master</code>分支发布1.0版本；</li><li>具体的每个人都有自己的分支，在自己的分支上干完活，时不时地往<code>dev</code>分支上合并就可以了。</li></ol><p>所以，团队合作的分支看起来就像这样。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/分支图片2.jpg" alt="git-br-policy" tabindex="0" loading="lazy"><figcaption>git-br-policy</figcaption></figure><h3 id="强制删除分支" tabindex="-1"><a class="header-anchor" href="#强制删除分支" aria-hidden="true">#</a> 强制删除分支</h3><p>添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。</p><p>当我们在feature-need分支中完成开发后，因为一些原因需要放弃该分支，使用<code>git branch -d feature-need</code>命令删除会报错，删除失败。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> feature-need
error: The branch <span class="token string">&#39;feature-need&#39;</span> is not fully merged.
If you are sure you want to delete it, run <span class="token string">&#39;git branch -D feature-need&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候你也看见了Git的提示信息，强制删除该分支需要使用<code>git branch -D feature-need</code>命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git branch -D feature-need
Deleted branch feature-vulcan (was 287773e).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bug分支" tabindex="-1"><a class="header-anchor" href="#bug分支" aria-hidden="true">#</a> bug分支</h2><h3 id="储藏-工作现场" tabindex="-1"><a class="header-anchor" href="#储藏-工作现场" aria-hidden="true">#</a> “储藏”工作现场</h3><p>修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；</p><p>当手头工作没有完成时，需要先把工作现场“储藏”一下，然后去修复bug，修复后，再把“储藏”的工作现场恢复出来继续工作。</p><ol><li><p>查看当前工作区状态，存在未提交的文件；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch dev
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

	new file:   hello.py

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>把当前工作现场“储藏”起来；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash
Saved working directory and index state WIP on dev: f52c633 <span class="token function">add</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>再查看当前工作区状态，工作区是干净的；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Your branch is up to <span class="token function">date</span> with <span class="token string">&#39;origin/master&#39;</span><span class="token builtin class-name">.</span>

nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>现在可以回到master分支下，然后创建新分支issue-101修复bug；</p><ul><li><p>切换分支；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建新分支；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> issue-101
Switched to a new branch <span class="token string">&#39;issue-101&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修复bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt 
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;fix bug 101&quot;</span>
<span class="token punctuation">[</span>issue-101 4c805e2<span class="token punctuation">]</span> fix bug <span class="token number">101</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修复完成后，切换到<code>master</code>分支，并完成合并，最后删除<code>issue-101</code>分支；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch master
Switched to branch <span class="token string">&#39;master&#39;</span>
Your branch is ahead of <span class="token string">&#39;origin/master&#39;</span> by <span class="token number">6</span> commits.
  <span class="token punctuation">(</span>use <span class="token string">&quot;git push&quot;</span> to publish your <span class="token builtin class-name">local</span> commits<span class="token punctuation">)</span>

$ <span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">&quot;merged bug fix 101&quot;</span> issue-101
Merge made by the <span class="token string">&#39;recursive&#39;</span> strategy.
 readme.txt <span class="token operator">|</span> <span class="token number">2</span> +-
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>继续回到<code>dev</code>分支干活；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch dev
Switched to branch <span class="token string">&#39;dev&#39;</span>

$ <span class="token function">git</span> status
On branch dev
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看被“储藏”的工作现场；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash list
stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: WIP on dev: f52c633 <span class="token function">add</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>恢复被“储藏”的工作现场；</p><p>有两个办法：</p><ul><li><p>用<code>git stash apply</code>恢复，但是恢复后，stash内容并不删除，你需要用<code>git stash drop</code>来删除；</p></li><li><p>用<code>git stash pop</code>，恢复的同时把stash内容也删了。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash pop
On branch dev
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

	new file:   hello.py

Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

	modified:   readme.txt

Dropped refs/stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">(</span>5d677e2ee266f39ea296182fb2354265b91b3b2a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>再用<code>git stash list</code>查看，就看不到任何stash内容了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><blockquote><p>可以多次使用<code>stash</code>，恢复的时候，先用<code>git stash list</code>查看，然后恢复指定的<code>stash</code>，用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="同步被修复的bug到别的分支" tabindex="-1"><a class="header-anchor" href="#同步被修复的bug到别的分支" aria-hidden="true">#</a> 同步被修复的bug到别的分支</h3><p>在master分支上修复了bug后，我们要想一想，dev分支是早期从master分支分出来的，所以，这个bug其实在当前dev分支上也存在。</p><p>那怎么在dev分支上修复同样的bug？重复操作一次，提交不就行了？</p><p>有木有更简单的方法？</p><p>有！</p><p>同样的bug，要在dev上修复，我们只需要把<code>4c805e2 fix bug 101</code>这个提交所做的修改“复制”到dev分支。注意：我们只想复制<code>4c805e2 fix bug 101</code>这个提交所做的修改，并不是把整个master分支merge过来。</p><p>为了方便操作，Git专门提供了一个<code>cherry-pick</code>命令，让我们能复制一个特定的提交到当前分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* dev
  master
$ <span class="token function">git</span> cherry-pick 4c805e2
<span class="token punctuation">[</span>master 1d4b803<span class="token punctuation">]</span> fix bug <span class="token number">101</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Git</code>自动给<code>dev</code>分支做了一次提交，注意这次提交的<code>commit</code>是<code>1d4b803</code>，它并不同于<code>master</code>的<code>4c805e2</code>，因为这两个commit只是改动相同，但确实是两个不同的<code>commit</code>。用<code>git cherry-pick</code>，我们就不需要在<code>dev</code>分支上手动再把修<code>bug</code>的过程重复一遍。</p><p>有些聪明的童鞋会想了，既然可以在<code>master</code>分支上修复<code>bug</code>后，在<code>dev</code>分支上可以“重放”这个修复过程，那么直接在<code>dev</code>分支上修复<code>bug</code>，然后在<code>master</code>分支上“重放”行不行？当然可以，不过你仍然需要<code>git stash</code>命令保存现场，才能从<code>dev</code>分支切换到<code>master</code>分支。</p><blockquote><p>在<code>master</code>分支上修复的<code>bug</code>，想要合并到当前<code>dev</code>分支，可以用<code>git cherry-pick &lt;commit&gt;</code>命令，把<code>bug</code>提交的修改“复制”到当前分支，避免重复劳动。</p></blockquote><h1 id="多人协作" tabindex="-1"><a class="header-anchor" href="#多人协作" aria-hidden="true">#</a> 多人协作</h1><p>当你从远程仓库克隆时，实际上<code>Git</code>自动把本地的<code>master</code>分支和远程的<code>master</code>分支对应起来了，并且，远程仓库的默认名称是<code>origin</code>。</p><h2 id="查看远程库的信息" tabindex="-1"><a class="header-anchor" href="#查看远程库的信息" aria-hidden="true">#</a> 查看远程库的信息</h2><p>要查看远程库的信息，用<code>git remote</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote
origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，用<code>git remote -v</code>显示更详细的信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin  git@github.com:michaelliao/learngit.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  git@github.com:michaelliao/learngit.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面显示了可以抓取和推送的<code>origin</code>的地址。如果没有推送权限，就看不到<code>push</code>的地址。</p><h2 id="推送分支" tabindex="-1"><a class="header-anchor" href="#推送分支" aria-hidden="true">#</a> 推送分支</h2><p>推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，<code>Git</code>就会把该分支推送到远程库对应的远程分支上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要推送其他分支，比如<code>dev</code>，就改成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？</p><ul><li><code>master</code>分支是主分支，因此要时刻与远程同步；</li><li><code>dev</code>分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；</li><li><code>bug</code>分支只用于在本地修复<code>bug</code>，就没必要推到远程了，除非老板要看看你每周到底修复了几个<code>bug</code>；</li><li><code>feature</code>分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。</li></ul><p>总之，就是在<code>Git</code>中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！</p><h2 id="抓取分支" tabindex="-1"><a class="header-anchor" href="#抓取分支" aria-hidden="true">#</a> 抓取分支</h2><p>多人协作时，大家都会往<code>master</code>和<code>dev</code>分支上推送各自的修改。</p><p>现在，模拟一个你的小伙伴，可以在另一台电脑（注意要把<code>SSH Key</code>添加到<code>GitHub</code>）或者同一台电脑的另一个目录下克隆：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:michaelliao/learngit.git
Cloning into <span class="token string">&#39;learngit&#39;</span><span class="token punctuation">..</span>.
remote: Counting objects: <span class="token number">40</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">21</span>/21<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">40</span> <span class="token punctuation">(</span>delta <span class="token number">14</span><span class="token punctuation">)</span>, reused <span class="token number">40</span> <span class="token punctuation">(</span>delta <span class="token number">14</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">40</span>/40<span class="token punctuation">)</span>, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">14</span>/14<span class="token punctuation">)</span>, done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你的小伙伴从远程库<code>clone</code>时，默认情况下，你的小伙伴只能看到本地的<code>master</code>分支。不信可以用<code>git branch</code>命令看看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你的小伙伴要在<code>dev</code>分支上开发，就必须创建远程<code>origin</code>的<code>dev</code>分支到本地，于是他用这个命令创建本地<code>dev</code>分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，他就可以在<code>dev</code>上继续修改，然后，时不时地把<code>dev</code>分支<code>push</code>到远程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> env.txt

$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add env&quot;</span>
<span class="token punctuation">[</span>dev 7a5e5dd<span class="token punctuation">]</span> <span class="token function">add</span> <span class="token function">env</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> env.txt

$ <span class="token function">git</span> push origin dev
Counting objects: <span class="token number">3</span>, done.
Delta compression using up to <span class="token number">4</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">308</span> bytes <span class="token operator">|</span> <span class="token number">308.00</span> KiB/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To github.com:michaelliao/learngit.git
   f52c633<span class="token punctuation">..</span>7a5e5dd  dev -<span class="token operator">&gt;</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你的小伙伴已经向<code>origin/dev</code>分支推送了他的提交，而碰巧你也对同样的文件作了修改，并试图推送：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> env.txt
<span class="token function">env</span>

$ <span class="token function">git</span> <span class="token function">add</span> env.txt

$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add new env&quot;</span>
<span class="token punctuation">[</span>dev 7bd91f1<span class="token punctuation">]</span> <span class="token function">add</span> new <span class="token function">env</span>
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> env.txt

$ <span class="token function">git</span> push origin dev
To github.com:michaelliao/learngit.git
 <span class="token operator">!</span> <span class="token punctuation">[</span>rejected<span class="token punctuation">]</span>        dev -<span class="token operator">&gt;</span> dev <span class="token punctuation">(</span>non-fast-forward<span class="token punctuation">)</span>
error: failed to push some refs to <span class="token string">&#39;git@github.com:michaelliao/learngit.git&#39;</span>
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes <span class="token punctuation">(</span>e.g.
hint: <span class="token string">&#39;git pull ...&#39;</span><span class="token punctuation">)</span> before pushing again.
hint: See the <span class="token string">&#39;Note about fast-forwards&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;git push --help&#39;</span> <span class="token keyword">for</span> details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，解决办法也很简单，<code>Git</code>已经提示我们，先用<code>git pull</code>把最新的提交从<code>origin/dev</code>抓下来，然后，在本地合并，解决冲突，再推送：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
There is no tracking information <span class="token keyword">for</span> the current branch.
Please specify <span class="token function">which</span> branch you want to merge with.
See git-pull<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> details.

    <span class="token function">git</span> pull <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

If you wish to <span class="token builtin class-name">set</span> tracking information <span class="token keyword">for</span> this branch you can <span class="token keyword">do</span> so with:

    <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/<span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git pull</code>也失败了，原因是没有指定本地<code>dev</code>分支与远程<code>origin/dev</code>分支的链接，根据提示，设置<code>dev</code>和<code>origin/dev</code>的链接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev dev
Branch <span class="token string">&#39;dev&#39;</span> <span class="token builtin class-name">set</span> up to track remote branch <span class="token string">&#39;dev&#39;</span> from <span class="token string">&#39;origin&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再<code>pull</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
Auto-merging env.txt
CONFLICT <span class="token punctuation">(</span>add/add<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> env.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,204),p=n("code",null,"git pull",-1),u={href:"http://www.liaoxuefeng.com/wiki/896043488029600/900004111093344",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;fix env conflict&quot;</span>
<span class="token punctuation">[</span>dev 57c53ab<span class="token punctuation">]</span> fix <span class="token function">env</span> conflict

$ <span class="token function">git</span> push origin dev
Counting objects: <span class="token number">6</span>, done.
Delta compression using up to <span class="token number">4</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">4</span>/4<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">6</span>/6<span class="token punctuation">)</span>, <span class="token number">621</span> bytes <span class="token operator">|</span> <span class="token number">621.00</span> KiB/s, done.
Total <span class="token number">6</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To github.com:michaelliao/learngit.git
   7a5e5dd<span class="token punctuation">..</span>57c53ab  dev -<span class="token operator">&gt;</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，多人协作的工作模式通常是这样：</p><ol><li>首先，可以试图用<code>git push origin &lt;branch-name&gt;</code>推送自己的修改；</li><li>如果推送失败，则因为远程分支比你的本地更新，需要先用<code>git pull</code>试图合并；</li><li>如果合并有冲突，则解决冲突，并在本地提交；</li><li>没有冲突或者解决掉冲突后，再用<code>git push origin &lt;branch-name&gt;</code>推送就能成功！</li></ol><p>如果<code>git pull</code>提示<code>no tracking information</code>，则说明本地分支和远程分支的链接关系没有创建，用命令<code>git branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;</code>。</p><p>这就是多人协作的工作模式，一旦熟悉了，就非常简单。</p><blockquote><ul><li>查看远程库信息，使用<code>git remote -v</code>；</li><li>本地新建的分支如果不推送到远程，对其他人就是不可见的；</li><li>从本地推送分支，使用<code>git push origin branch-name</code>，如果推送失败，先用<code>git pull</code>抓取远程的新提交；</li><li>在本地创建和远程分支对应的分支，使用<code>git checkout -b branch-name origin/branch-name</code>，本地和远程分支的名称最好一致；</li><li>建立本地分支和远程分支的关联，使用<code>git branch --set-upstream branch-name origin/branch-name</code>；</li><li>从远程抓取分支，使用<code>git pull</code>，如果有冲突，要先处理冲突。</li></ul></blockquote><h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h2><p>在上一节我们看到了，多人在同一个分支上协作时，很容易出现冲突。即使没有冲突，后<code>push</code>的童鞋不得不先<code>pull</code>，在本地合并，然后才能<code>push</code>成功。</p><p>每次合并再<code>push</code>后，分支变成了这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* d1be385 (HEAD -&gt; master, origin/master) init hello
*   e5e69f1 Merge branch &#39;dev&#39;
|\\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
| |/  
* |   12a631b merged bug fix 101
|\\ \\  
| * | 4c805e2 fix bug 101
|/ /  
* |   e1e9c68 merge with no-ff
|\\ \\  
| |/  
| * f52c633 add merge
|/  
*   cf810e4 conflict fixed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之看上去很乱，有强迫症的童鞋会问：为什么<code>Git</code>的提交历史不能是一条干净的直线？</p><p>其实是可以做到的！</p><p><code>Git</code>有一种称为<code>rebase</code>的操作，有人把它翻译成“变基”。</p><figure><img src="https://hk-docs.oss-cn-chengdu.aliyuncs.com/git/l.jpeg" alt="rebase" tabindex="0" loading="lazy"><figcaption>rebase</figcaption></figure><p>先不要随意展开想象。我们还是从实际问题出发，看看怎么把分叉的提交变成直线。</p><p>在和远程分支同步后，我们对<code>hello.py</code>这个文件做了两次提交。用<code>git log</code>命令看看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 582d922 (HEAD -&gt; master) add author
* 8875536 add comment
* d1be385 (origin/master) init hello
*   e5e69f1 Merge branch &#39;dev&#39;
|\\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到<code>Git</code>用<code>(HEAD -&gt; master)</code>和<code>(origin/master)</code>标识出当前分支的<code>HEAD</code>和远程<code>origin</code>的位置分别是<code>582d922 add author</code>和<code>d1be385 init hello</code>，本地分支比远程分支快两个提交。</p><p>现在我们尝试推送本地分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git push origin master
To github.com:michaelliao/learngit.git
 ! [rejected]        master -&gt; master (fetch first)
error: failed to push some refs to &#39;git@github.com:michaelliao/learngit.git&#39;
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., &#39;git pull ...&#39;) before pushing again.
hint: See the &#39;Note about fast-forwards&#39; in &#39;git push --help&#39; for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很不幸，失败了，这说明有人先于我们推送了远程分支。按照经验，先<code>pull</code>一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:michaelliao/learngit
   d1be385..f005ed4  master     -&gt; origin/master
 * [new tag]         v1.0       -&gt; v1.0
Auto-merging hello.py
Merge made by the &#39;recursive&#39; strategy.
 hello.py | 1 +
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<code>git status</code>看看状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git status
On branch master
Your branch is ahead of &#39;origin/master&#39; by 3 commits.
  (use &quot;git push&quot; to publish your local commits)

nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上刚才合并的提交，现在我们本地分支比远程分支超前3个提交。</p><p>用<code>git log</code>看看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
*   e0ea545 (HEAD -&gt; master) Merge branch &#39;master&#39; of github.com:michaelliao/learngit
|\\  
| * f005ed4 (origin/master) set exit=1
* | 582d922 add author
* | 8875536 add comment
|/  
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对强迫症童鞋来说，现在事情有点不对头，提交历史分叉了。如果现在把本地分支push到远程，有没有问题？</p><p>有！</p><p>什么问题？</p><p>不好看！</p><p>有没有解决方法？</p><p>有！</p><p>这个时候，<code>rebase</code>就派上了用场。我们输入命令<code>git rebase</code>试试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git rebase
First, rewinding head to replay your work on top of it...
Applying: add comment
Using index info to reconstruct a base tree...
M	hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
Applying: add author
Using index info to reconstruct a base tree...
M	hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出了一大堆操作，到底是啥效果？再用<code>git log</code>看看：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -&gt; master) add author
* 3611cfe add comment
* f005ed4 (origin/master) set exit=1
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本分叉的提交现在变成一条直线了！这种神奇的操作是怎么实现的？其实原理非常简单。我们注意观察，发现<code>Git</code>把我们本地的提交“挪动”了位置，放到了<code>f005ed4 (origin/master) set exit=1</code>之后，这样，整个提交历史就成了一条直线。<code>rebase</code>操作前后，最终的提交内容是一致的，但是，我们本地的<code>commit</code>修改内容已经变化了，它们的修改不再基于<code>d1be385 init hello</code>，而是基于<code>f005ed4 (origin/master) set exit=1</code>，但最后的提交<code>7e61ed4</code>内容是一致的。</p><p>这就是<code>rebase</code>操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。</p><p>最后，通过<code>push</code>操作把本地分支推送到远程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mac:~/learngit michael$ git push origin master
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 576 bytes | 576.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:michaelliao/learngit.git
   f005ed4..7e61ed4  master -&gt; master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<code>git log</code>看看效果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -&gt; master, origin/master) add author
* 3611cfe add comment
* f005ed4 set exit=1
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>远程分支的提交历史也是一条直线。</p><blockquote><ul><li><code>rebase</code>操作可以把本地未<code>push</code>的分叉提交历史整理成直线；</li><li><code>rebase</code>的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。</li></ul></blockquote>`,45);function m(b,g){const a=l("ExternalLinkIcon");return t(),d("div",null,[r,n("p",null,[e("这回"),p,e("成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的"),n("a",u,[e("解决冲突"),c(a)]),e("完全一样。解决后，提交，再push：")]),v])}const k=i(o,[["render",m],["__file","Git-note.html.vue"]]);export{k as default};
