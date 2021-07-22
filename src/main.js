import { createApp } from 'vue'
import router from '@/Router/index'
import store from '@/Store/index'
import LayoutPage from '@/Layout/index.vue'
import '../styles/reset.css'
import '../styles/theme.pcss'


const singlePage = createApp(LayoutPage)

singlePage.use(router)
singlePage.use(store)
singlePage.mount('#app')

