 const homeRoutes = [
    {
        path: '/index',  // 路由地址
        name: 'IndexPage',     // 用于唯一标识
        isHidden: false, // 是否显示左侧菜单
        key: 'indexPage',
        meta: {
            title: '首页',  // 用于显示左侧菜单名称
            auth: '',      // 用于权限 判断
            keepAlive: false, // 是否缓存
        },
        component: () => import('@/Pages/Home/index.vue'),
        children: [], // 是否存在子菜单
    }
]

 export default homeRoutes

