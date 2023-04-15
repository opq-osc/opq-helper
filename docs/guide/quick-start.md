# 从零开始搭建 OPQBot

本文将高效率的介绍如何从零开始搭建 OPQBot ，我们默认使用者具备一定的网络和计算机知识。

## 准备环境

### 准备服务器

我们默认使用者运行在 unix 系统上（可能是 `macos` / `linux` / `树莓派` 等），同时具备服务器简单的操作知识。

若你对服务器还不熟悉，请购买 `Ubuntu` 系统的服务器，之后安装可以可视化操作的宝塔面板：

```bash
# ubuntu 安装命令
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```

其他系统的安装命令请在 [BT 官网](https://www.bt.cn/new/download.html) 寻找。

### 下载 OPQBot

在 [`OPQ/releases`](https://github.com/opq-osc/OPQ/releases) 下载最新版本，对应你系统的 OPQBot 压缩包：

<img src="/manual/download.jpg" width='60%' />

为了和生态兼容，我们推荐使用 linux 服务器，需要下载 `linux amd` 版本（其他架构请自行下载对应系统包）。

### 上传 OPQBot

我们推荐在 `/root/opq/*` 下管理所有 OPQBot 的文件，请将 OPQBot 压缩包上传后解压，宝塔面板操作如下图所示：

<img src="/manual/upload.jpg" width='60%' />

终端跳转位置：

```bash
# 快速跳转到 /root/opq
cd ~/opq
```

## 部署启动

### 准备 Token

目前获取 Token 的方式：在 OPQBot [Wiki](http://wiki.opqbot.com/) 加入群组后获取 Token （免费）。

### 启动命令

解压下载的 OPQBot 压缩包，你将获得一个 `OPQBot` 二进制文件，便可一键启动：

```bash
./OPQBot -token *****
```

通过 `ctrl + c` 来终止进程。

若启动失败，请查看 [常见问题 > 启动失败](#启动失败) 。

一般情况下， OPQBot 需要运行在后台，而不是直接启动，通常的解决方法是：

 - `tmux` 后台多窗口管理

 - `docker` 容器

在 [进阶知识 > 后台运行](#后台运行) 学到更多。

### 登录账号

OPQBot 默认会运行在 `8086` 端口，访问 `http://{server-ip}:8086/v1/login/getqrcode` 来扫码登录账号，你可以在终端看到登录是否成功。

若无法访问，请确保网络 **防火墙** 与 **安全组** 已经放开对应端口。

若登录失败，请查看 [常见问题 > 登录失败](#登录失败) 。

### 连接 OPQBot

借助 ws 连接（默认为 `ws://127.0.0.1:8086/ws`）来收发消息。

通常我们会使用 [SDK](../project/sdk) 来连接 OPQBot ，并自行编写或使用一些开源插件，请自行甄别选择。

## 进阶知识

### 后台运行

<br />

#### 使用 tmux 管理

`tmux` 可以管理多窗口，从而让 OPQBot 单独运行在后台，一个简单的示例如下：

```bash
# 新建一个 opq 窗口
tmux new -s opq
# 启动 OPQBot
./OPQBot -token ******
# 退出该窗口，但保持让其运行在后台
# 快捷键：ctrl + b, d

# 进入 opq 窗口，查看消息
tmux attach -t opq

# 查看历史日志（注意要先进入日志查看模式，否则不可以滚轮滚动）
# 进入日志查看模式：ctrl + b, [ 
# 退出日志查看模式：ctrl + c （注意只按一次，按多了会退出进程！）
```

关于更多用法，请参见 [阮一峰 > Tmux 使用教程](http://www.ruanyifeng.com/blog/2019/10/tmux.html) 。

#### 使用 docker 管理

请查看 [Docker 搭建指南](./docker-start)

### 关于 Token

<br />

#### 自动登录

每个 Token 绑定一个账号，一旦第一次扫码登录，第二次启动便可自动登录，无需再次扫码。

如你不再使用 OPQBot ，或需更换 Token ，可在 `手机端 > 设备管理` 取消机器人的设备，这样就不会再自动登陆了。

### 防火墙

在没有外部服务连入 OPQBot 时，请及时开启防火墙，不要放通机器人的端口（默认为 `8086`），防止外部渗透。

### 从旧版本升级

一般情况只需替换新的 `OPQBot` 二进制文件，即可完成新版本升级，请先关闭原 OPQBot 进程后再替换，替换完重新启动。

若运行权限不足，请赋权：

```bash
chmod +x ./OPQBot
```

## 常见问题

### 启动失败

确保权限为 root ：

```bash
# 进入 root 账号，确保你有足够的权限
sudo -i
```

若没有安装 `wget` 可能会启动失败：

```bash
apt-get update
apt-get install wget
```

在 macos 上若启动失败，请先解包后运行：

```bash
# 解包
brew install upx
upx -d ./OPQBot
# 运行
./OPQBot -token ****
```

若仍存在问题，请尝试 [docker](./docker-start) 避免环境问题。

### 登录失败

建议在如下方向排查：

1. 风控：请稳定 IP `15` 天以上，没有重复登录。

2. 系统：是否安装了 `wget` ，尝试使用 [docker](./docker-start) 来避免系统环境问题。

3. 网络：是否下载失败，请尝试开启代理或配置 host 。

### 登录状态异常

如遇反复重新登录，请删除全部的 OPQBot 相关文件和目录（同层所有文件，包括自动生成的），之后下载最新版本的 OPQBot ，重新启动登录。
