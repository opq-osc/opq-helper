import{_ as a,c as s,o,N as e}from"./chunks/framework.80e84516.js";const n="/manual/download.jpg",l="/manual/upload.jpg",A=JSON.parse('{"title":"从零开始搭建 OPQBot","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick-start.md","lastUpdated":1719737856000}'),t={name:"guide/quick-start.md"},p=e(`<h1 id="从零开始搭建-opqbot" tabindex="-1">从零开始搭建 OPQBot <a class="header-anchor" href="#从零开始搭建-opqbot" aria-label="Permalink to &quot;从零开始搭建 OPQBot&quot;">​</a></h1><p>本文将高效率的介绍如何从零开始搭建 OPQBot ，我们默认使用者具备一定的网络和计算机知识。</p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-label="Permalink to &quot;准备环境&quot;">​</a></h2><h3 id="准备服务器" tabindex="-1">准备服务器 <a class="header-anchor" href="#准备服务器" aria-label="Permalink to &quot;准备服务器&quot;">​</a></h3><p>我们默认使用者运行在 unix 系统上（可能是 <code>macos</code> / <code>linux</code> / <code>树莓派</code> 等），同时具备服务器简单的操作知识。</p><p>若你对服务器还不熟悉，请购买 <code>Ubuntu</code> 系统的服务器，之后安装可以可视化操作的宝塔面板：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># ubuntu 安装命令</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-O</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://download.bt.cn/install/install-ubuntu_6.0.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ed8484bec</span></span></code></pre></div><p>其他系统的安装命令请在 <a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">BT 官网</a> 寻找。</p><h3 id="下载-opqbot" tabindex="-1">下载 OPQBot <a class="header-anchor" href="#下载-opqbot" aria-label="Permalink to &quot;下载 OPQBot&quot;">​</a></h3><p>在 <a href="https://github.com/opq-osc/OPQ/releases" target="_blank" rel="noreferrer"><code>OPQ/releases</code></a> 下载最新版本，对应你系统的 OPQBot 压缩包：</p><img src="`+n+'" width="60%"><p>为了和生态兼容，我们推荐使用 linux 服务器，需要下载 <code>linux amd</code> 版本（其他架构请自行下载对应系统包）。</p><h3 id="上传-opqbot" tabindex="-1">上传 OPQBot <a class="header-anchor" href="#上传-opqbot" aria-label="Permalink to &quot;上传 OPQBot&quot;">​</a></h3><p>我们推荐在 <code>/root/opq/*</code> 下管理所有 OPQBot 的文件，请将 OPQBot 压缩包上传后解压，宝塔面板操作如下图所示：</p><img src="'+l+`" width="60%"><p>终端跳转位置：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 快速跳转到 /root/opq</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/opq</span></span></code></pre></div><h2 id="部署启动" tabindex="-1">部署启动 <a class="header-anchor" href="#部署启动" aria-label="Permalink to &quot;部署启动&quot;">​</a></h2><h3 id="准备-token" tabindex="-1">准备 Token <a class="header-anchor" href="#准备-token" aria-label="Permalink to &quot;准备 Token&quot;">​</a></h3><p>目前获取 Token 的方式：在 OPQBot <a href="https://apifox.com/apidoc/shared-72cecf14-815e-4238-82a5-6c68d006fd00" target="_blank" rel="noreferrer">Wiki</a> 加入群组后获取 Token （免费）。</p><h3 id="启动命令" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令" aria-label="Permalink to &quot;启动命令&quot;">​</a></h3><p>解压下载的 OPQBot 压缩包，你将获得一个 <code>OPQBot</code> 二进制文件，便可一键启动：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/OPQBot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-token</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*****</span></span></code></pre></div><p>通过 <code>ctrl + c</code> 来终止进程。</p><p>若启动失败，请查看 <a href="#启动失败">常见问题 &gt; 启动失败</a> 。</p><p>一般情况下， OPQBot 需要运行在后台，而不是直接启动，通常的解决方法是：</p><ul><li><p><code>tmux</code> 后台多窗口管理</p></li><li><p><code>docker</code> 容器</p></li></ul><p>在 <a href="#后台运行">进阶知识 &gt; 后台运行</a> 学到更多。</p><h3 id="登录账号" tabindex="-1">登录账号 <a class="header-anchor" href="#登录账号" aria-label="Permalink to &quot;登录账号&quot;">​</a></h3><p>OPQBot 默认会运行在 <code>8086</code> 端口，访问 <code>http://{server-ip}:8086/v1/login/getqrcode</code> 来扫码登录账号，你可以在终端看到登录是否成功。</p><p>若无法访问，请确保网络 <strong>防火墙</strong> 与 <strong>安全组</strong> 已经放开对应端口。</p><p>若登录失败，请查看 <a href="#登录失败">常见问题 &gt; 登录失败</a> 。</p><h3 id="连接-opqbot" tabindex="-1">连接 OPQBot <a class="header-anchor" href="#连接-opqbot" aria-label="Permalink to &quot;连接 OPQBot&quot;">​</a></h3><p>借助 ws 连接（默认为 <code>ws://127.0.0.1:8086/ws</code>）来收发消息。</p><p>通常我们会使用 <a href="./../project/sdk.html">SDK</a> 来连接 OPQBot ，并自行编写或使用一些开源插件，请自行甄别选择。</p><h2 id="进阶知识" tabindex="-1">进阶知识 <a class="header-anchor" href="#进阶知识" aria-label="Permalink to &quot;进阶知识&quot;">​</a></h2><h3 id="后台运行" tabindex="-1">后台运行 <a class="header-anchor" href="#后台运行" aria-label="Permalink to &quot;后台运行&quot;">​</a></h3><br><h4 id="使用-tmux-管理" tabindex="-1">使用 tmux 管理 <a class="header-anchor" href="#使用-tmux-管理" aria-label="Permalink to &quot;使用 tmux 管理&quot;">​</a></h4><p><code>tmux</code> 可以管理多窗口，从而让 OPQBot 单独运行在后台，一个简单的示例如下：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个 opq 窗口</span></span>
<span class="line"><span style="color:#FFCB6B;">tmux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">opq</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动 OPQBot</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/OPQBot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-token</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">******</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出该窗口，但保持让其运行在后台</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 快捷键：ctrl + b, d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入 opq 窗口，查看消息</span></span>
<span class="line"><span style="color:#FFCB6B;">tmux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attach</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">opq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看历史日志（注意要先进入日志查看模式，否则不可以滚轮滚动）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入日志查看模式：ctrl + b, [ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出日志查看模式：ctrl + c （注意只按一次，按多了会退出进程！）</span></span></code></pre></div><p>关于更多用法，请参见 <a href="http://www.ruanyifeng.com/blog/2019/10/tmux.html" target="_blank" rel="noreferrer">阮一峰 &gt; Tmux 使用教程</a> 。</p><h4 id="使用-docker-管理" tabindex="-1">使用 docker 管理 <a class="header-anchor" href="#使用-docker-管理" aria-label="Permalink to &quot;使用 docker 管理&quot;">​</a></h4><p>请查看 <a href="./docker-start.html">Docker 搭建指南</a></p><h3 id="关于-token" tabindex="-1">关于 Token <a class="header-anchor" href="#关于-token" aria-label="Permalink to &quot;关于 Token&quot;">​</a></h3><br><h4 id="自动登录" tabindex="-1">自动登录 <a class="header-anchor" href="#自动登录" aria-label="Permalink to &quot;自动登录&quot;">​</a></h4><p>每个 Token 绑定一个账号，一旦第一次扫码登录，第二次启动便可自动登录，无需再次扫码。</p><p>如你不再使用 OPQBot ，或需更换 Token ，可在 <code>手机端 &gt; 设备管理</code> 取消机器人的设备，这样就不会再自动登陆了。</p><h3 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h3><p>在没有外部服务连入 OPQBot 时，请及时开启防火墙，不要放通机器人的端口（默认为 <code>8086</code>），防止外部渗透。</p><h3 id="从旧版本升级" tabindex="-1">从旧版本升级 <a class="header-anchor" href="#从旧版本升级" aria-label="Permalink to &quot;从旧版本升级&quot;">​</a></h3><p>一般情况只需替换新的 <code>OPQBot</code> 二进制文件，即可完成新版本升级，请先关闭原 OPQBot 进程后再替换，替换完重新启动。</p><p>若运行权限不足，请赋权：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./OPQBot</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="启动失败" tabindex="-1">启动失败 <a class="header-anchor" href="#启动失败" aria-label="Permalink to &quot;启动失败&quot;">​</a></h3><p>确保权限为 root ：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入 root 账号，确保你有足够的权限</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span></span></code></pre></div><p>若没有安装 <code>wget</code> 可能会启动失败：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wget</span></span></code></pre></div><p>在 macos 上若启动失败，请先解包后运行：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 解包</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upx</span></span>
<span class="line"><span style="color:#FFCB6B;">upx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./OPQBot</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/OPQBot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-token</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">****</span></span></code></pre></div><p>若仍存在问题，请尝试 <a href="./docker-start.html">docker</a> 避免环境问题。</p><h3 id="登录失败" tabindex="-1">登录失败 <a class="header-anchor" href="#登录失败" aria-label="Permalink to &quot;登录失败&quot;">​</a></h3><p>建议在如下方向排查：</p><ol><li><p>风控：请稳定 IP <code>15</code> 天以上，没有重复登录。</p></li><li><p>系统：是否安装了 <code>wget</code> ，尝试使用 <a href="./docker-start.html">docker</a> 来避免系统环境问题。</p></li><li><p>网络：是否下载失败，请尝试开启代理或配置 host 。</p></li></ol><h3 id="登录状态异常" tabindex="-1">登录状态异常 <a class="header-anchor" href="#登录状态异常" aria-label="Permalink to &quot;登录状态异常&quot;">​</a></h3><p>如遇反复重新登录，请删除全部的 OPQBot 相关文件和目录（同层所有文件，包括自动生成的），之后下载最新版本的 OPQBot ，重新启动登录。</p>`,69),c=[p];function r(i,d,h,C,y,u){return o(),s("div",null,c)}const m=a(t,[["render",r]]);export{A as __pageData,m as default};
