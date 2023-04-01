# 准备环境

本教程将带领你从零开始，循序渐进搭建一个 OPQBot ，若读者已具备相关知识，可选择性阅读。

## 下载运行包

你可以从 [OPQ](https://github.com/opq-osc/OPQ) 官方项目等渠道获取下载安装包，这里建议使用 amd64 在 ubuntu 上运行（或者 centos ）。

附：

- 最新版 Linux amd64 OPQ 运行包（不一定实时更新）：
    
    [OPQBot_6.7.5-20230216_linux_amd64.tar.gz](https://github.com/opq-osc/OPQ/releases/download/v6.7.5-20230216/OPQBot_6.7.5-20230216_linux_amd64.tar.gz)

- 树莓派版本请自行寻找

## 准备服务器

假如你是 linux 小白没关系，按照如下教程一步步操作，让你成为 linux 大手（

假如你是 linux 老鸟，请直接从 [部署本体](./deploy) 开始食用。

### 认识宝塔

为了让小白也能轻松操作 linux，我们安装可视化的 linux 宝塔管理面板。

宝塔 linux 管理面板：[官方网站](https://www.bt.cn/)

你可以在 官网 > 立即安装 > Ubuntu/Deepin 安装命令 找到：

![/manual/install.jpg](/manual/install.jpg)

注：如图片不显示请开启代理。

```bash
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

注：不保证本指令实时更新，请以官网安装指令为准。

### 登录面板

面板安装完成后，会显示登录地址，以及登录用户和密码，请参照进行登录，如果访问不了，请放通服务器的安全组。

#### 安全组

在服务器提供商管理后台进行放通，假如你是用的是阿里云，那就应该在阿里云的官网管理实例那边设置安全组。

安全组如果不会配置的，请自行百度，小白不是很懂的话放通所有端口即可。

### 更换端口

由于我们机器人默认运行在 `8888` 端口，而宝塔也是，所以需要更换宝塔面板端口，在**面板设置**内即可更换。

### 管理员权限

在 ubuntu 上请切换至 root 管理员后再使用命令行，防止权限不够导致不必要的报错，请时刻保持你的 root 管理员权限。

```bash
    # 切换至 root 用户
    sudo -i
```

注：如果因为各种原因切换失败，请自行百度寻找其他切换至 root 的方法。
