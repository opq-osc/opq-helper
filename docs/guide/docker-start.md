# 使用 Docker 搭建 OPQBot

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

编写 `docker-compose.yml` 文件

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

启动容器

```bash
  docker-compose up -d
```

## FAQ

### 容器运行正常但无法连接上机器人

检查你的防火墙和安全组配置。
