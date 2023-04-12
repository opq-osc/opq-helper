# 使用 Docker 搭建 OPQBot

## 跨平台说明

OPQBot 同时也分发 `linux/386` / `linux/amd64` / `linux/arm/v7` / `linux/arm64` 的 Docker 镜像，这使得你可以快速跨平台启动。 

## 启动镜像

### 基本用法

```bash
  docker run -d \
    --name opq \
    -e token=******* \ 
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

### 使用 docker-compose 启动容器

使用 docker-compose 可以一并管理多个 docker 容器，并对其进行编排，这便于我们同时启动 OPQBot 与收发消息的服务（如通过 SDK 编写的插件）：

```yaml
# docker-compose.yml
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

#### 运维操作

启动全部容器：
   
```bash
  docker-compose up -d
```

重启全部容器：

```bash
  docker-compose restart
```

更新容器镜像版本：

```bash
  docker-compose stop

  docker-compose rm
  docker rmi opqofficial/opq:latest

  docker-compose pull
  docker-compose up -d
```

查看容器日志：

```bash
  docker-compose logs -f opqbot
```

## FAQ

### 容器运行正常但无法连接上机器人

检查你的防火墙和安全组配置。
