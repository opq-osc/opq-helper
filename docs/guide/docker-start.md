# 使用 Docker 搭建 OPQBot

## 申请 Gitter Token

请直接查看 [入门教程](./manual/deploy#申请-token) 中关于如何申请 Token 的部分

## 启动镜像

::: info
由于 Docker Hub 官方不再提供免费组织，自 `2023-03-16` 起，`opqbot/opq` 镜像永久迁移至 [`opqofficial/opq`](https://hub.docker.com/r/opqofficial/opq) （尽管 `2023-03-24` Docker Hub 宣布[取消](https://www.docker.com/developers/free-team-faq/)了这一计划，但官方 OPQBot 镜像仍将从 `opqofficial` 分发）。
:::

这里我们直接使用 `docker run` 命令来直接启动 Docker，替换其中的 `*******` 为你刚刚获取到的 Token ：

```bash
  docker run -d \
    --name opq \
    -p 8888:8888 \
    -e token=******* \
    -e port=0.0.0.0:8888 \
    opqofficial/opq:latest
```

其中：

 - `-p`：映射端口，如果你的本地 `8888` 已经被占用，可以换为其他端口，如 `-p 9527:8888`

 - `-e token`：OPQBot 的 Token

 - `-e port`：容器内 OPQBot 运行的端口，他应该和 `-p` 参数映射一致，一般情况你不需要变更他


## 进阶知识

### 自行修改配置文件

若你需要手动修改配置文件, 路径`/root/opqbot`请自行合理修改, 需要注意的是你得先创建好 `/root/opqbot/CoreConf.conf` 这个文件并且配置好再启动，否则该文件在容器中会被直接删除!

```bash
  docker run -d \
    --name opq \
    -p 8888:8888 \
    -e token=******* \
    -e port=0.0.0.0:8888 \
    -v /root/opqbot/CoreConf.conf:/apps/CoreConf.conf \
    opqofficial/opq:latest
```

### 使用 docker-compose 启动容器 （推荐）

编写 `docker-compose.yml` 文件

```yaml
  opqbot:
    image: 'opqofficial/opq:latest'
    ports:
      - '8888:8888'
    deploy:
      resources:
        limits:
          memory: 100M
    environment:
      - token=*******
      - port=0.0.0.0:8888
    container_name: opqbot
```

启动容器

```bash
  docker-compose up -d
```

enjoy!

若你想自行修改配置文件

```yaml
  opqbot:
    image: 'opqofficial/opq:latest'
    ports:
      - '8888:8888'
    deploy:
      resources:
        limits:
          memory: 100M
    volumes:
      - './opqbot/CoreConf.conf:/apps/CoreConf.conf'
    environment:
      - token=*******
      - port=0.0.0.0:8888
    container_name: opqbot
```

## FAQ

### 启动容器后没有任何输出

这个可能的原因是OPQBot程序在UPX压缩后因为缺少必要文件无法在当前Docker环境下运行，请联系社区人员共同解决

### 为什么启动容器提示我没有Token呢？

认真读上面的教程

### 容器运行正常但无法连接上机器人

注意 `-p 8888:8888` 和 `-e port=0.0.0.0:8888` 参数是否对应，以及服务器防火墙是否开放相关端口
