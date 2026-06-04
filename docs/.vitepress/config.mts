import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Stackovia Learning Series',
  description:
    'Série de 11 volumes para desenvolvedores que querem ir do zero ao sistema real — com portfólio profissional em cada etapa.',
  lang: 'pt-BR',

  // Em producao: GitHub Pages usa o nome do repo como subpath
  base: '/stackovia-learning/',

  head: [
    ['meta', { name: 'author', content: 'Marcos Oliveira / Stackovia Learning Series' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Stackovia Learning Series' }],
  ],

  themeConfig: {
    siteTitle: 'Stackovia Learning',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Volumes', link: '/volumes/vol01' },
      { text: 'Sobre a Série', link: '/sobre-a-serie' },
    ],

    sidebar: [
      {
        text: 'Volumes',
        items: [
          {
            text: 'Vol. 01 — Fundamentos do Dev Moderno',
            link: '/volumes/vol01',
          },
          {
            text: 'Vol. 02 — Frontend com React e Next.js',
            link: '/volumes/vol02',
          },
          {
            text: 'Vol. 03–11 — Em planejamento',
            link: '/volumes/vol01',
          },
        ],
      },
      {
        text: 'Sobre',
        items: [
          { text: 'Sobre a Série', link: '/sobre-a-serie' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mffdeo' },
    ],

    footer: {
      message:
        'Conteúdo sob <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>. Código sob <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>.',
      copyright: 'Stackovia Learning Series',
    },

  },
})
