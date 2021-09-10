import { createApp } from 'vue'
import router from '@/Router/index'
import Layout from '@/Layout/index.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'normalize.css'


createApp(Layout).use(router).use(Antd).mount('#app')
