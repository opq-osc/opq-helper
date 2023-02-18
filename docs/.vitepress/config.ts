import { defineConfig } from 'vitepress'
import pluginMenus from './menu/plugins'

const lang = 'zh-CN'
const ogDescription = 'OPQ 文档站'
const ogImage = 'https://opqbot.com/opq.1200x630.v2.jpg'
const ogTitle = ogDescription
const ogUrl = 'https://docs.opqbot.com'

const year = new Date().getFullYear()

const ITEMS = {
  project: [
    { text: '开发 SDK', link: '/project/sdk' },
    { text: '实用工具', link: '/project/tools' },
    {
      text: '开源插件',
      link: '/project/plugins',
      items: pluginMenus,
    },
  ],
  knowledge: [
    { text: '排行榜', link: '/other/ranking' },
    { text: 'OPQ 哲学', link: '/other/philosophy' },
    { text: '相关站点', link: '/other/site' },
  ],
}

export default defineConfig({
  title: 'OPQHelper',
  description: ogDescription,
  lang,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }],
  ],

  // https://github.com/vitejs/vite/issues/7854
  // vue: {
  //   reactivityTransform: true
  // },

  themeConfig: {
    logo: '/opq.logo-only.min.png',

    editLink: {
      pattern: 'https://github.com/opq-osc/opq-helper/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/opq-osc/OPQ' }],

    footer: {
      message: 'OPQ Open Source Community',
      copyright: `MIT Licensed | Copyright © ${year}`,
    },

    nav: [
      {
        text: '🚀 Guide',
        items: [
          { text: '从零开始搭建 OPQBot', link: '/guide/manual/' },
          { text: 'Docker 快速搭建指南', link: '/guide/docker-start' },
        ],
      },
      {
        text: '🌈 Project',
        items: ITEMS.project,
      },
      {
        text: '📚︎ Knowledge',
        items: ITEMS.knowledge,
      },
      {
        text: '✨ Wiki',
        items: [
          { text: 'OPQBot Wiki', link: 'https://github.com/opq-osc/OPQ/wiki' },
        ],
      },
      {
        text: '🎉 About',
        link: '/about/join',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '从零开始搭建 OPQBot',
          items: [
            {
              text: '准备环境',
              link: '/guide/manual/',
            },
            {
              text: '部署本体',
              link: '/guide/manual/deploy',
            },
            {
              text: '进阶知识',
              link: '/guide/manual/advanced',
            },
            {
              text: '最佳实践',
              link: '/guide/manual/practices',
            },
            {
              text: '常见问题',
              link: '/guide/manual/qa',
            },
          ],
        },
        {
          text: '使用 Docker 快速搭建',
          items: [
            {
              text: 'Docker 指南',
              link: '/guide/docker-start',
            },
          ],
        },
      ],
      '/project/': [
        {
          text: 'Project',
          items: ITEMS.project,
        },
      ],
      '/other/': [
        {
          text: 'Knowledge',
          items: ITEMS.knowledge,
        },
      ],
    },
  },
})
