import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlusPlugin from '@/plugins/element-plus'// 引入 ElementPlus 插件(npm i element-plus)
import * as ElementPlusIcons from '@element-plus/icons-vue'// 全局注册 ElementPlus 图标组件(npm install @element-plus/icons-vue)

const app = createApp(App)
for(const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component)
}

// import axios from 'axios'
// import UserManage_Api from '@/api/UserManage/index'
// app.config.globalProperties.$http = {
//   ...UserManage_Api,
// }
// app.config.globalProperties.$axios = axios

app
.use(store)
.use(router)
.use(ElementPlusPlugin)
.mount('#app')
