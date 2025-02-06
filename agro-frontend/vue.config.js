const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://127.0.0.1:8001/Agrostore/store/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
