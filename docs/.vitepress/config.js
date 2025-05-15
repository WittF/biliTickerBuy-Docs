export default {
  title: 'biliTickerBuy',
  description: 'B站票务购票辅助工具',
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
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    
    footer: {
      message: '基于MIT许可发布 | 仅供学习交流使用',
      copyright: 'Copyright © 2025 biliTickerBuy Contributors'
    }
  },
  
  head: [
    ['style', {}, `
      html {
        overflow-y: scroll;
      }
      
      body {
        overflow-x: hidden;
      }
      
      :root {
        scrollbar-gutter: stable both-edges;
      }
      
      html, body {
        scrollbar-width: thin;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `]
  ]
} 
