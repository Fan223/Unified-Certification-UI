import { createApp } from 'vue'
import App from './App.vue'

// 引入 Vue-Router
import router from './router'
// 引入 Vuex
import store from './store'
// 引入 Axios、VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入 Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 Element-Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入 View-UI-Plus 样式, 按需引入
import 'view-ui-plus/dist/styles/viewuiplus.css'
import { LoadingBar } from 'view-ui-plus'


const app = createApp(App)
// 全局注册 Element-Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 按需引入 View-UI-Plus
app.component('LoadingBar', LoadingBar);

app.use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .mount('#app')

app.provide('axios', app.config.globalProperties.axios)
