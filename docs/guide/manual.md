# 从零开始

## 下载运行包

你可以从 [OPQ](https://github.com/opq-osc/OPQ) 官方项目等渠道获取下载安装包，这里建议使用 amd64 在 ubuntu 上运行（或者 centos ）。

附：
 - 最新版 opq 运行包（不一定实时更新）：[OPQBot_6.7.5_linux_amd64.tar.gz](https://github.com/opq-osc/OPQ/releases/download/v6.7.5/OPQBot_6.7.5_linux_amd64.tar.gz)

 - 树莓派版本请自行寻找


## 准备环境

假如你是 linux 小白没关系，按照如下教程一步步操作，让你成为 linux 大手（

假如你是 linux 老鸟，请直接从 [部署机器人](#部署机器人) 开始食用。

### 认识宝塔

为了让小白也能轻松操作 linux，我们安装可视化的 linux 宝塔管理面板。

宝塔 linux 管理面板：[官方网站](https://www.bt.cn/)

你可以在 官网 > 立即安装 > Ubuntu/Deepin安装命令 找到：

<img :src="$withBase('/manual/install.jpg')" />

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


## 部署机器人

现在的你应该能轻松应对 linux 了，下面开始轻松部署机器人

### 上传运行包

上传之前，你要先去下载好对应你平台型号的 OPQBot 运行包，是一个压缩文件。

#### 创建文件夹

如果你是使用的宝塔面板，可以通过 宝塔面板 > 文件 上传刚刚下载的运行包到服务器，这里假设上传到 `/root/opqqq` 这个文件夹内：

<img :src="$withBase('/manual/makedir.jpg')" />

如果你是老鸟，请随意放在自己喜欢的地方。

#### 使用上传功能

<br/>

<img :src="$withBase('/manual/upload.jpg')" />

都是可视化面板，自行上传即可，上传完毕后右键解压。

### 申请 token

机器人运行需要一个唯一 token，在 [gitter.im](https://developer.gitter.im/docs/welcome) 内申请一个即可，可以通过：

1. github 账号
2. twitter 账号

两种常用方式登录，不需要其他条件，有账号即可申请，如果 github 或者 twitter 的账号你都没有，请自行注册一个。

登录后就可以看到自己的 token 了：

<img :src="$withBase('/manual/token.jpg')" />

<br/>
<br/>

#### 配置 token
返回管理面板，在解压好的文件夹内有一个 `CoreConf.conf` 配置文件，打开填写自己的 token ：

<img :src="$withBase('/manual/input-token.jpg')" />

**CoreConf.conf**

```json
// 这里是你的机器人运行端口号，可以自行更改
Port = "0.0.0.0:8888"
WorkerThread = 50
OPQVer = "v6.0.16"
Token = "..."
```

填写完毕后保存关闭。

### 运行机器人

使用命令行切换到该目录内：

```bash
    cd ~/opqqq/OPQBot_3.0.8_linux_amd64
```

注：后半部分请根据你解压后的文件名切换，这只是一个例子。

#### 试运行
运行机器人：
```bash
    ./OPQBot
```
看到 everything ok 即可进行登录。

访问：`http://host:port/v1/Login/GetQRcode` 进行扫码登录，其中 `host` 是你服务器的 ip ， `port` 是你在 `CoreConf.conf` 配置的端口，如果你没有修改，这里默认是 `8888`。

查看机器人状态：通过访问 `http://host:port/v1/ClusterInfo` 查看和刚刚启动的控制台提示确认机器人已经成功登录。

如果没登录上，请稍等片刻控制台不在提示登录尝试信息后再扫码登录一次。

#### 正式运行

确认无误后，你可以通过 `nohup` 后台方式运行机器人：
```bash
    nohup ./OPQBot &
```
会在当前程序目录自动产生一个 `nohup.out` 日志文件，有关日志查看，请看后文介绍。

### 中断程序

如何中断正在运行的机器人进程？可以使用 `ctrl+c` 中断当前进程。

### 清理后台程序

当程序使用 `nohup` 运行在后台时，可以采用如下命令杀掉该进程：
```bash
    # 找到进程 pid （大小写敏感）
    # 例：找到 OPQBot 进程  ps aux | grep OPQ
    ps aux | grep 命令关键词
    # 根据 pid 杀掉进程，上一步找到的进程第一个数字即为 pid
    kill pid
```


## 进阶知识

### 关于 token

<br/>

#### 自动登录

一个 token 绑定一个账号，一旦第一次扫码登录了，第二次启动程序就会自动登录，不需要再扫码了。

#### 使用其他账号
如果要使用其他账号，请再去申请一个新 token ，用一份从压缩包（指最初下载的运行包）解压出来新的文件夹再进行配置，因为使用过的文件夹会被污染。

#### 取消自动登录
如果你要放弃使用，请在 手机端 QQ > 设备管理 取消机器人设备，这样就不会再自动登陆了。

### 进程查看

我们在上文提到了使用 `nohup` 进行后台运行，我们可以使用 `htop` 查看进程运行情况：

```bash
    htop
```
之后就可以查看到该进程的资源占用情况了，按 F10 退出。

注：如果是 centos ，可能没有安装 htop ，如果需要使用，请自行安装。

### 日志查看

我们在上文提到了使用 `nohup` 进行后台运行，我们可以用如下方式查看我们的日志。

#### 宝塔控制面板查看

直接在宝塔内点击查看文件即可，但是宝塔不支持查看大文件，超过 3 M 后即不支持打开。

#### tail 查看

使用 `tail` 命令查看实时日志：

```bash
    tail -f nohup.out
```

查看最后 10 行日志：

```bash
    tail nohup.out
```

#### cat 查看

使用 `cat` 命令查看全部日志：

```bash
    cat nohup.out
```

注意太多可能会控制台爆炸，不建议使用。

#### 日志定位

先找到这条消息的行数：

```bash
    tail -n 1000 nohup.out | grep "关键词"
```

通过 `tail` 展示文件最后 1000 行，并通过 `grep` 搜索含 `关键词` 的日志，这里的 `关键词` 可以是任意内容，比如用户名，账号，群组名，消息关键词等。`-n` 表示显示行号。

再找到该行之后的消息，假设该消息在 11141 行：

```bash
    cat -n nohup.out | tail -n +11141 | head -n 30
```

用 `cat` 取全部日志，再使用 `tail` 查看 1234 行后的所有日志，再用 `head` 命令取 1234 行后的前 30 行：

<img :src="$withBase('/manual/error.jpg')" />

如此一来，就发现了错误位置。

### 防火墙

我们部署在服务器上的机器人，如果其他人知道你服务器的 ip 是很危险的，他可以通过相应的网址查看到你的控制台和机器人信息，如果需要，可以在 宝塔面板 > 安全 内关闭机器人部署的端口（默认是 `8888`）。

### 宝塔面板配置
可视化面板很简单，请自行探索和百度，密码忘了请使用 shell 工具链接服务器后执行 `bt` 命令修改：
```bash
    bt
```

## 最佳实践

### tmux 管理进程

使用 `nohup` 不太容易管理和排查问题，我们可以使用 `tmux` 进行多窗口隔离管理，就像 windows 一样，将机器人单独跑在一个隔离窗口内可以随时关注运行状态。

现在你已经是一个熟练的 linux 使用者了，请自行百度学习。

推荐：[阮一峰 Tmux 使用教程](http://www.ruanyifeng.com/blog/2019/10/tmux.html)

### 使用 docker

<br/>

#### 基础镜像

在使用之前先构建一个基础镜像环境 `Dockerfile` ：

```yml
    FROM ubuntu

    RUN apt-get update && apt-get install -y wget
```

构建：

```bash
    docker build --no-cache -t opqqq:base .
```

#### 运行

将你本地机器人目录挂载到容器里即可：

```bash
    docker run \
        -v /opqqq/OPQBot_3.0.8_linux_amd64:/opq \
        --name opqqq \
        -w /opq \
        -p 8888:8888 \
        -d opqqq:base \
        ./OPQBot
```

#### 内存监控
```bash
    # 找到 pid
    ps aux | grep OPQBot
    # 监控
    top -d 2 -p <pid>
```

#### 日志监控
```bash
    docker logs -tf opqqq --tail 20
```

## 常见问题

### 启动失败

如果你没有安装 wget，可能第一次运行下载资源失败。

```bash
    apt-get update  
    apt-get install wget  
```

### 从旧版本升级

关掉运行的机器人进程或停止 docker 容器，替换 `OPQBot` 二进制文件即可，请注意替换后文件和文件夹的权限，请设定为 777 ，否则会出现部分功能不能使用的情况。

宝塔面板可视化设定或执行命令：

```bash
    chmod -R 777 /dir_name
```
