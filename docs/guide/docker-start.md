# 使用 Docker 搭建 OPQBot

## 申请 Gitter Token

请直接查看 [入门教程](./manual/deploy#申请-token) 中关于如何申请Token的部分

## 启动镜像

这里我们直接使用 `docker run` 命令来直接启动 Docker，替换其中的`*******`为你刚刚获取到的Token

```bash
docker run -d --name opq -p 8888:8888 -e token=******* -e port=0.0.0.0:8888 opqbot/opq:latest
```

enjoy!

## 进阶知识

### 自行修改配置文件

若你需要手动修改配置文件, 路径`/root/opqbot`请自行合理修改, 需要注意的是你得先创建好`/root/opqbot/CoreConf.conf`这个文件并且配置好再启动，否则该文件在容器中会被直接删除!

```bash
ocker run -d --name opq -p 8888:8888 -e token=******* -e port=0.0.0.0:8888 -v /root/opqbot/CoreConf.conf:/apps/CoreConf.conf opqbot/opq:latest
```

### 使用 docker-compose 启动容器 （推荐）

编写 docker-compose.yml 文件

```yaml
  opqbot:
    image: 'opqbot/opq:latest'
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
docker compose up -d
```

enjoy!

若你想自行修改配置文件

```yaml
  opqbot:
    image: 'opqbot/opq:latest'
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
