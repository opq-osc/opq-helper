import { defineConfig } from 'vitepress'

const lang = 'zh-CN'
const ogDescription = 'OPQ 文档站'
const ogImage =
  'https://cdn.jsdelivr.net/gh/opq-osc/opq-helper@main/images/opq.1200x630.v2.jpg'
const ogTitle = ogDescription

// GitHub Pages
// const siteBase = '/opq-helper/'
// const ogUrl = `https://opq-osc.github.io${siteBase}`

// Official Site
const ogUrl = 'https://opqbot.com/'

const year = new Date().getFullYear()

const PATHS = {
  docker: '/guide/docker-start',
  zero_start: '/guide/quick-start',

  // sdk
  sdk: '/project/sdk',
} as const

export default defineConfig({
  title: 'OPQHelper',
  description: ogDescription,
  lang,
  lastUpdated: true,
  // base: siteBase,

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
        items: [{ text: 'SDK', link: PATHS.sdk }],
      },
      {
        text: '✨ Wiki',
        items: [
          {
            text: 'OPQBot Wiki',
            link: 'https://apifox.com/apidoc/shared-72cecf14-815e-4238-82a5-6c68d006fd00',
          },
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
          items: [{ text: 'Docker', link: `${PATHS.docker}` }],
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
              text: 'C#',
              link: `${PATHS.sdk}#c`,
            },
            {
              text: 'Ruby',
              link: `${PATHS.sdk}#ruby`,
            },
          ],
        },
      ],
    },
  },
})
