export const userRoutes = [
    {
        path: '/user',
        name: 'Users',
        isHidden: false,
        key: 'user',
        meta: {
            title: '用户管理',
            auth: '',
            keepAlive: false,
        },
        redirect: {
            name: ''
        },
        component: () => import('@/Pages/Users/index.vue'),
        children: []
    }
]

// export default userRoutes

