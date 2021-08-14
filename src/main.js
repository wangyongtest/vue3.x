import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from '@/Router/index'
import store from '@/Store/index'
import LayoutPage from '@/Layout/index.vue'
import 'animate.css'
import '../styles/reset.css'
import '../styles/theme.pcss'
import 'ant-design-vue/dist/antd.css'


const singlePage = createApp(LayoutPage)

singlePage.config.productionTip = false

singlePage.use(Antd)
singlePage.use(router)
singlePage.use(store)
singlePage.mount('#app')

