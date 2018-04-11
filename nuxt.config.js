module.exports = {
    head: {
        titleTemplate: 'Софатекс - одежда для мебели',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Мета описание' }
        ]
    },
    build: {
        babel: {
            plugins: ['transform-vue-jsx']
        }
    }
}