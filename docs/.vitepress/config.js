export default {
  title: 'biliTickerBuy',
  description: 'B站抢票自动化工具',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '常见问题', link: '/guide/faq' },
      { text: '免责声明', link: '/disclaimer' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '基础配置', link: '/guide/basic' },
            { text: '高级配置', link: '/guide/advanced' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mikumifa/biliTickerBuy' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 biliTickerBuy Contributors'
    }
  }
} 
