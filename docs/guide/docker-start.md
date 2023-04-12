# 使用 Docker 搭建 OPQBot

## 安装 Docker

Docker 是一个流行的容器化平台，它可以让你运行应用程序和服务的容器化版本，使得这些容器可以在任何环境下运行。
你需要在你的机器上安装 Docker。你可以在 Docker 官方网站上下载和安装适合你的操作系统的 Docker。

## 启动镜像

::: info
由于 Docker Hub 官方不再提供免费组织，自 `2023-03-16` 起，`opqbot/opq` 镜像永久迁移至 [`opqofficial/opq`](https://hub.docker.com/r/opqofficial/opq) （尽管 `2023-03-24` Docker Hub 宣布[取消](https://www.docker.com/developers/free-team-faq/)了这一计划，但官方 OPQBot 镜像仍将从 `opqofficial` 分发）。
:::

### 基本用法

```bash
  docker run -d \
    --name opq \
    -p 8086:8086 \
    opqofficial/opq:latest
```

### 高级选项

```bash
  docker run -d \
    --name opq \
    -p 8086:9000 \
    # 指定 token
    -e token=******* \ 
    # 自定义容器内端口
    -e port=9000 \
    # 自定义 wsserver
    -e wsserver=ws://127.0.0.1:8081/ws \
    # 自定义 wthread (工作线程 default 100)
    -e wthread=200 \
    opqofficial/opq:latest
```

## 进阶知识

### 使用 docker-compose 启动容器 （推荐）

docker-compose 是 Docker 的一个工具，它允许你用一个 YAML 文件定义和运行多个容器。在这里，我们将使用 docker-compose 来定义和运行我们的机器人容器。

1. 编写 `docker-compose.yml` 文件
   
   在你的工作目录下创建一个名为 docker-compose.yml 的文件。在该文件中，以下是 docker-compose.yml 文件的示例代码：

```yaml
  opqbot:
    image: 'opqofficial/opq:latest'
    ports:
      - '8086:8086'
    deploy:
      resources:
        limits:
          memory: 100M
    environment:
      - token=*******
    container_name: opqbot
```

在这个示例中，我们定义了一个名为 `opqbot` 的服务。我们使用 `opqofficial/opq` 镜像，它是我们机器人的基本镜像。我们还将容器的 8086 端口映射到主机的 8086 端口。我们还限制了容器的内存使用量为 100M，以确保容器不会使用太多的系统资源。我们还设置了环境变量 token，以传递我们机器人的身份验证令牌。最后，我们将容器命名为 opqbot，以方便在以后管理容器时使用。

2. 启动容器
   
   一旦你编写好 docker-compose.yml 文件，你就可以启动容器了。在命令行中，导航到包含 docker-compose.yml 文件的目录，并运行以下命令：
   
   

```bash
  docker-compose up -d
```

这个命令将启动你的容器，并在后台运行。你的机器人应该现在已经启动了。如果你想查看容器日志，可以运行以下命令：

```bash
  docker-compose logs -f opqbot
```

这个命令将输出 opqbot 容器的日志，并继续监听新的日志。

至此，你已经成功地启动了你的机器人！你可以测试你的机器人是否工作正常，以确保你的环境已经设置正确。

## FAQ

### 容器运行正常但无法连接上机器人

检查你的防火墙和安全组配置。
