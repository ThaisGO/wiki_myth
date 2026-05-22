export const navigation = [
  {
    title: 'GUIA DO JOGO',
    key: 'gameGuide',

    children: [
      {
        title: 'Diferença do Rag convencional',
        to: '/guia-do-jogo/diferenca'
      },

      {
        title: 'Como funciona o Warp?',
        to: '/guia-do-jogo/warp'
      },

      {
        title: 'Novas métricas para aprender',
        to: '/guia-do-jogo/metricas'
      },
      {
        title: 'Classes e Evoluções',
        to: '/guia-do-jogo/classes-evolucoes'
      }
    ]
  },

  {
    title: 'CAMPO DE TREINAMENTO',
    to: '/campo-de-treinamento'
  },

  {
    title: 'CLASS BUILD',
    key: 'classBuild',

    children: [
      {
        title: 'Guia SinX',
        to: '/class-build/sinx'
      },

      {
        title: 'Guia High Wizard',
        to: '/class-build/high-wizard'
      }
    ]
  }
]