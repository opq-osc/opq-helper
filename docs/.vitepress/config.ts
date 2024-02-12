import { defineConfig } from 'vitepress'
// import pluginMenus from './menu/plugins'

const lang = 'zh-CN'
const ogDescription = 'OPQ 文档站'
const ogImage = 'https://cdn.jsdelivr.net/gh/opq-osc/opq-helper@main/images/opq.1200x630.v2.jpg'
const ogTitle = ogDescription
const ogUrl = 'https://docs.opqbot.com'

const year = new Date().getFullYear()

const PATHS = {
  docker: '/guide/docker-start',
  zero_start: '/guide/quick-start',

  // sdk
  sdk: '/project/sdk',

  // plugins
  plugins: '/project/wip',
} as const

const ITEMS = {
  project: [
    // { text: '实用工具', link: '/project/tools' },
  ],
  knowledge: [
    // { text: '排行榜', link: '/other/ranking' },
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

    outlineTitle: '查看目录',

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
          { text: '从零开始搭建 OPQBot', link: PATHS.zero_start },
          {
            text: 'Docker 快速搭建指南',
            link: PATHS.docker,
          },
        ],
      },
      {
        text: '🌈 Project',
        items: [
          { text: 'SDK', link: PATHS.sdk },
          { text: '开源插件', link: PATHS.plugins },
        ],
      },
      {
        text: '📚︎ Knowledge',
        items: ITEMS.knowledge,
      },
      {
        text: '✨ Wiki',
        items: [
          { text: 'OPQBot Wiki', link: 'http://wiki.opqbot.com/' },
        ],
      },
      {
        text: '🎉 About',
        link: '/about/join',
      },
    ],

    outline: [2, 6],

    sidebar: {
      '/guide/': [
        {
          text: '从零开始搭建 OPQBot',
          link: PATHS.zero_start,
          items: [
            {
              text: '准备环境',
              link: `${PATHS.zero_start}#准备环境`,
            },
            {
              text: '部署启动',
              link: `${PATHS.zero_start}#部署启动`,
            },
            {
              text: '进阶知识',
              link: `${PATHS.zero_start}#进阶知识`,
            },
            {
              text: '常见问题',
              link: `${PATHS.zero_start}#常见问题`,
            },
          ],
        },
        {
          text: '使用 Docker 快速搭建',
          items: [
            { text: 'Docker', link: `${PATHS.docker}#docker` },
            {
              text: 'Docker Compose',
              link: `${PATHS.docker}#docker-compose`,
            },
          ],
        },
      ],
      '/project/': [
        {
          text: '开发 SDK',
          link: PATHS.sdk,
          items: [
            {
              text: 'Python',
              link: `${PATHS.sdk}#python`,
            },
            {
              text: 'Go',
              link: `${PATHS.sdk}#go`,
            },
            {
              text: 'JavaScript',
              link: `${PATHS.sdk}#javascript`,
            },
            {
              text: 'C#',
              link: `${PATHS.sdk}#c`,
            },
            {
              text: 'Ruby',
              link: `${PATHS.sdk}#ruby`,
            },
          ],
        },
        {
          text: '开源插件',
          link: PATHS.plugins,
          items: [
            {
              text: '准备中',
              link: PATHS.plugins,
            },
          ],
          // items: pluginMenus,
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
