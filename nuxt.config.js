module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Софатекс Франшиза',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Крупнейший магазин чехлов для мебели из Европы. Высокое качество и огромный выбор натяжных универсальных чехлов для диванов и кресел в Минске и по всей Беларуси.' },
      { hid: 'keywords', name: 'keywords', content: 'Франшиза Софатекс, Франшиза Беларусь, Чехлы, чехлы на мебель, чехлы на диваны, чехлы на кресла, чехлы на комплекты, чехлы на стулья.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#d65988' },
  plugins: ['~plugins/vue-js-modal', '~plugins/vue-mask', '~plugins/vue-scrollto', '~plugins/vue-scroll'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
