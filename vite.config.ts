import {
  defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/**
* 详情见 vitejs 文档：https://vitejs.dev/config/
*/
export default defineConfig({
 
plugins: [vue()],
base: '/gj/', // 配置相对地址或绝对地址，此处应为绝对地址，若将 Web 部署到 Nginx 所在的目录为 nginx-1.17.8/html/xxx ，则这个 base 的值就为 /xxx/
resolve: {
 
  alias: {
    '@': resolve(__dirname, './src'),
    assets: resolve(__dirname, './src/assets'),
  }
},
server: {
 
  host: '127.0.0.1', // 主机
  port: 5173, // 端口
  proxy: {
 
    // 项目 v1 的服务端接口地址
    '/v1/api': {
 
      target: 'http://127.0.0.1:8091/',
      changeOrigin: true,
      secure: false,
      ws: true
    },

    // 项目 v2 的服务端接口地址
    '/v2/api': {
 
      target: 'http://127.0.0.1:8092/',
      changeOrigin: true,
      secure: false,
      ws: true
    },

    // 项目 v3 的服务端接口地址
    '/v3/api': {
 
      target: 'http://127.0.0.1:8093/',
      changeOrigin: true,
      secure: false,
      ws: true
    },

    // // 默认服务端接口地址
    // '/': {
 
    //   target: 'http://127.0.0.1:8090/',
    //   changeOrigin: true,
    //   secure: false,
    //   ws: false
    // }
  }
}
})
