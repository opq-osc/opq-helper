# opq-helper

OPQBot 文档站。

**请自由修订文档**

### 修订方式

本地修订文档需要 Node.js 环境，可安装 Node.js 后在项目根目录下执行以下命令启动项目：

```bash
    # 安装 yarn
    npm config set registry https://registry.npm.taobao.org
    npm install -g yarn
    
    # 设定加速镜像
    yarn config set registry https://registry.npm.taobao.org -g
    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

    # 安装依赖
    yarn

    # 启动项目
    yarn dev
```

启动项目后即可在 `3000` 端口即时修订。

如果不具备环境，请直接 Pull Request `.md` 文件，请按分类放置你的文件或者新开文件夹，但要保证他们在 `docs` 文件夹下，最后由 Organization Owner 整理即可。

### 修订内容

1. 补充新的介绍、教程、项目相关文档

2. 按照格式补充自己的项目，修订自己项目的描述

3. 调整优化样式和布局

