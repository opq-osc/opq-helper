# 使用 Docker 搭建 OPQBot

## 跨平台说明

OPQBot 同时也分发 `linux/386` / `linux/amd64` / `linux/arm/v7` / `linux/arm64` 的 Docker 镜像，这使得你可以快速跨平台启动。

## Docker

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
  -p 9000:8086 \
  # 指定 token
  -e token=******* \
  # 自定义容器内端口
  -e port=8086 \
  # 自定义 wsserver
  -e wsserver=ws://127.0.0.1:8086/ws \
  # 自定义 wthread (工作线程 default 100)
  -e wthread=200 \
  opqofficial/opq:latest
```

## Docker Compose

我们更推荐使用 `docker-compose` 运维多个容器，避免了在本机安装复杂的数据库环境。

### 使用方法

```yaml
# docker-compose.yml
version: '3'
services:
  opq:
    image: opqofficial/opq:latest
    container_name: opq
    ports:
      - 8086:8086
    deploy:
      resources:
        limits:
          memory: 100M
    environment:
      - token=*****
    restart: always
  redis:
    image: redis:latest
    container_name: redis
    ports:
      - 6379:6379
    volumes:
      - /root/opq/redis:/data
    # redis 持久化，每 60s 打一次快照到 volumes 映射位置
    command: redis-server --save 60 1 --loglevel warning
    restart: always
```

### 运维操作

<br >

#### 启动容器

```bash
# 启动全部容器（第一次）
docker-compose up -d
# 启动指定容器
docker-compose up -d redis
```

#### 重启容器

除非你要升级 `opq` 二进制文件版本，否则我们不应该重启 `opq` 容器，这将使账号重新登录，造成高风险：

```bash
# 重启全部容器
docker-compose restart
# 重启指定容器
docker-compose restart redis
```

#### 更新容器镜像版本

更新 `opq` 版本（升级 `opq`）：

```bash
docker-compose stop opq

docker-compose rm opq
docker rmi opqofficial/opq:latest

docker-compose pull opq
docker-compose up -d opq
```

更新 `redis` 版本：

```bash
docker-compose stop redis

docker-compose rm redis
docker rmi redis:latest

docker-compose pull redis
docker-compose up -d redis
```

#### 查看容器实时日志

```bash
docker-compose logs -f opq
```

#### 进入容器

```bash
docker-compose exec opq bash
exit
docker-compose exec redis bash
exit
```

## FAQ

### 容器运行正常但无法连接上机器人

检查你的防火墙和安全组配置。
