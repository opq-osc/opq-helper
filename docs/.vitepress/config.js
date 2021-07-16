const repo = 'opq-helper'
const owner = 'opq-osc'
const address = `${owner}/${repo}`
const lang = 'zh-CN'

const botMainRepo = 'OPQ'
const botMainAdress = `${owner}/${botMainRepo}`
const botMainUrl = `https://github.com/${botMainAdress}`

const isDev = process.env.NODE_ENV === 'development'

const head = [
  ['link', { rel: 'icon', href: '/favicon.png' }],
  !isDev && [
    'script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-F5CQE58D3F',
      async: true,
    },
  ],
  !isDev && [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-F5CQE58D3F');`,
  ],
].filter(Boolean)

module.exports = {
  title: 'OPQ Helper',
  description: 'OPQBot 文档站',
  base: '/',
  lang,
  head,
  themeConfig: {
    // 这个选项指向了 doc 的 repo，suggest 按钮会从这个 repo 获取链接
    repo: address,
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
        items: [{ text: '从零开始搭建 OPQBot', link: '/guide/manual' }],
      },
      {
        text: 'Project',
        items: [
          { text: '开发 SDK', link: '/project/sdk' },
          { text: '开源插件', link: '/project/plugins' },
          { text: '实用工具', link: '/project/tools' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: '相关站点', link: '/other/site' },
          { text: 'OPQ Wiki', link: 'https://github.com/opq-osc/OPQ/wiki' },
        ],
      },
      {
        text: 'About',
        link: '/other/join',
      },
      {
        text: 'Github',
        link: botMainUrl,
      },
    ],

    sidebar: 'auto',
    lastUpdated: '上次更新',
    smoothScroll: true,
  },
}
