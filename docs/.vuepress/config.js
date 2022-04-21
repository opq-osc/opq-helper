const repo = 'opq-helper'
const owner = 'opq-osc'
const address = `${owner}/${repo}`
const lang = 'zh-CN'

const botMainRepo = 'OPQ'
const botMainAdress = `${owner}/${botMainRepo}`
const botMainUrl = `https://github.com/${botMainAdress}`

const gatewayUrl = `https://opqbot.com`

// const isDev = process.env.NODE_ENV === 'development'

const head = [['link', { rel: 'icon', href: '/favicon.png' }]].filter(Boolean)

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
          { text: 'OPQ 哲学', link: '/other/philosophy' },
          { text: '排行榜', link: '/other/ranking' },
        ],
      },
      {
        text: 'Wiki',
        items: [
          { text: 'OPQ Wiki', link: '/opq-wiki/_Sidebar' },
          {
            text: 'OPQBot-GroupManage Wiki',
            link: '/opq-manager-wiki/_Sidebar',
          },
          { text: 'OPQ-SetuBot Wiki', link: '/opq-setu-wiki/_Sidebar' },
        ],
      },
      {
        text: 'About',
        link: '/other/join',
      },
      {
        text: 'Gateway',
        link: gatewayUrl,
      },
      {
        text: 'Github',
        link: botMainUrl,
      },
    ],

    sidebar: 'auto',
    sidebarDepth: 4,
    displayAllHeaders: true,
    lastUpdated: '上次更新',
    smoothScroll: true,
    search: false,
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-zooming',
      {
        selector: '.my-img',
        delay: 1000,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-F5CQE58D3F',
      },
    ],
    ['cursor-effects'],
  ],

  // 3 no
  // TODO: use seo plugin improve site
  // https://github.com/lorisleiva/vuepress-plugin-seo
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'nofollow noopener noreferrer'
    }
  }
}
