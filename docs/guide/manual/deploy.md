# 部署本体

现在的你应该能轻松应对 linux 了，下面开始轻松部署机器人

## 上传运行包

上传之前，你要先去下载好对应你平台型号的 OPQBot 运行包，是一个压缩文件。

### 创建文件夹

如果你是使用的宝塔面板，可以通过 宝塔面板 > 文件 上传刚刚下载的运行包到服务器，这里假设上传到 `/root/opqqq` 这个文件夹内：

![/manual/makedir.jpg](/manual/makedir.jpg)

如果你是老鸟，请随意放在自己喜欢的地方。

### 使用上传功能

<br/>

![/manual/upload.jpg](/manual/upload.jpg)

都是可视化面板，自行上传即可，上传完毕后右键解压。

## 申请 token

机器人运行需要一个唯一 token，在 [gitter.im](https://developer.gitter.im/docs/welcome) 内申请一个即可，可以通过：

1. github 账号
2. twitter 账号

两种常用方式登录，不需要其他条件，有账号即可申请，如果 github 或者 twitter 的账号你都没有，请自行注册一个。

登录后就可以看到自己的 token 了：

![/manual/token.jpg](/manual/token.jpg)

<br/>
<br/>

### 配置 token

返回管理面板，在解压好的文件夹内有一个 `CoreConf.conf` 配置文件，打开填写自己的 token ：

![/manual/input-token.jpg](/manual/input-token.jpg)

**CoreConf.conf**

```json
// 这里是你的机器人运行端口号，可以自行更改
Port = "0.0.0.0:8888"
WorkerThread = 50
OPQVer = "v6.0.16"
Token = "..."
```

填写完毕后保存关闭。

## 运行机器人

使用命令行切换到该目录内：

```bash
    cd ~/opqqq/OPQBot_3.0.8_linux_amd64
```

注：后半部分请根据你解压后的文件名切换，这只是一个例子。

### 试运行

运行机器人：

```bash
    ./OPQBot
```

看到 everything ok 即可进行登录。

访问：`http://host:port/v1/Login/GetQRcode` 进行扫码登录，其中 `host` 是你服务器的 ip ， `port` 是你在 `CoreConf.conf` 配置的端口，如果你没有修改，这里默认是 `8888`。

查看机器人状态：通过访问 `http://host:port/v1/ClusterInfo` 查看和刚刚启动的控制台提示确认机器人已经成功登录。

如果没登录上，请稍等片刻控制台不在提示登录尝试信息后再扫码登录一次。

### 正式运行

确认无误后，你可以通过 `nohup` 后台方式运行机器人：

```bash
    nohup ./OPQBot &
```

会在当前程序目录自动产生一个 `nohup.out` 日志文件，有关日志查看，请看后文介绍。

## 中断程序

如何中断正在运行的机器人进程？可以使用 `ctrl+c` 中断当前进程。

## 清理后台程序

当程序使用 `nohup` 运行在后台时，可以采用如下命令杀掉该进程：

```bash
    # 找到进程 pid （大小写敏感）
    # 例：找到 OPQBot 进程  ps aux | grep OPQ
    ps aux | grep 命令关键词
    # 根据 pid 杀掉进程，上一步找到的进程第一个数字即为 pid
    kill pid
```
