export const routes = [
    {
        path:'/',
        component:'@/pages/home',
        name:'首页',
        icon:'HomeFilled'
    },
    {
        path:'/login',
        component:'@/pages/user/Login',
        headerRender: false,
        // 不展示页脚
        footerRender: false,
        // 不展示菜单
        menuRender: false,
    },
    {
        path:'/user',
        name:'用户管理',
        icon:'HomeFilled',
        routes:[
            {
                path:'/user/list',
                component:'@/pages/user-management/UserList',
                name:'用户列表'
            }
        ]
    },
    {
        path:'/goods',
        name:'商品管理',
        icon:'HomeFilled',
        routes:[
            {
                path:'/goods/goods',
                component:'@/pages/goods-management/GoodsList',
                name:'商品列表'
            },
        ]
    },
    {
        path:'/order',
        name:'订单管理',
        icon:'HomeFilled',
        routes:[
            {
                path:'/order/order',
                component:'@/pages/order/OrderList',
                name:'订单列表'
            },
        ]
    },
    {
        path:'*',
        component:'@/pages/404'
    }
]