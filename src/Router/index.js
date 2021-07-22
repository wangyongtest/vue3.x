import { createRouter, createWebHashHistory } from 'vue-router'

import homeRoutes from './module/homeRouter'


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
                ...homeRoutes
            ]
        },
    ]
})

export default router
