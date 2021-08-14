import { createRouter, createWebHashHistory } from 'vue-router'
/*
*  路由设计 登录页 不在 此项目中， 或者单独开发多页，一个为login 页面， 一个为系统项目
*  部署时 登录成功 跳转 项目首页， 退出则重定向 到 登录页
* */
import HomeRoutes from './module/homeRouter'
import UserRouters from './module/userRouter'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/Layout/pageParents.vue'),
            redirect: {
                path: '/index'
            },
            children: [
                ...HomeRoutes,
                ...UserRouters
            ]
        },
    ]
})

export default router
