const repo = 'opq-helper'
const owner = 'opq-osc'
const address = `${owner}/${repo}`
const lang = 'zh-CN'

const head = [['link', { rel: 'icon', href: `/favicon.png` }]]

module.exports = {
  title: 'OPQ Helper',
  description: 'OPQBot 文档站',
  base: `/${repo}/`,
  lang,
  head,
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: address,
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: address,
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Suggest changes to this page',

    nav: [
      {
        text: 'Guide',
        items: [
          { text: '从零开始搭建 OPQBot', link: '/guide/manual' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: '开发 SDK', link: '/project/sdk' },
          { text: '开源插件', link: '/project/plugins' },
          { text: '实用工具', link: '/project/tools' }
        ]
      },
      {
        text: 'Join us',
        link: '/other/join'
      },
    ],
    
    sidebar: 'auto',
    lastUpdated: '上次更新',
    smoothScroll: true,
  },
}
