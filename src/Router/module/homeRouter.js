 const homeRoutes = [
    {
        path: '/index',
        name: '首页',
        meta: {
            title: '',
            auth: '',
            keepAlive: false
        },
        component: () => import('@/views/home/index.vue')
    }
]

 export default homeRoutes

