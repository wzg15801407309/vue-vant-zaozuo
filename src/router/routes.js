const routes = [
    {
        path:"",
        redirect:"/home",
    },
    {// 首页
        path:"/home",
        name:"home",
        component: () => import('../views/home'),
        meta:{navShow:true},
    },
    {// 发现
        path:"/invent",
        name:"invent",
        component: () => import('../views/invent'),
        meta:{navShow:true},
    },
    {// 我的
        path:"/personal",
        name:"personal",
        component: () => import('../views/personal'),
        meta:{navShow:true},
    },
    {// 购物车
        path:"/shoppingCart",
        name:"shoppingCart",
        component: () => import('../views/shoppingCart'),
        meta:{navShow:true},
    },
    {// 分类
        path:"/sort",
        name:"sort",
        component: () => import('../views/sort'),
        meta:{navShow:true},
    },
    {//登录
        path:"/login",
        name:"login",
        component: () => import('../views/login'),
        meta:{navShow:false},
    },
    {// 注册
        path:"/newLongin",
        name:"newLongin",
        component: () => import('../views/login/newLongin.vue'),
        meta:{navShow:false},
    },
    {// 修改密码
        path:"/changePassWords",
        name:"changePassWords",
        component: () => import('../views/login/changePassWords.vue'),
        meta:{navShow:false},
     },
];
export default routes;