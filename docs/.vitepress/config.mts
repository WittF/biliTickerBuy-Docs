import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "biliTickerBuy",
  description: "B站票务购票辅助工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/installation' },
      { text: '免责声明', link: '/disclaimer' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置选项', link: '/guide/configuration' }
          ]
        },
        {
          text: '故障排除',
          items: [
            { text: '故障排除', link: '/guide/troubleshooting' }
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
      :root {
        scrollbar-gutter: stable;
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
})
