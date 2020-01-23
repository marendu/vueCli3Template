import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";

    /**
     * 首页name只能是Home，name属性必填用于判断面包屑，
     * hidden，是否显示
     * meta：{
     *          tite：渲染的navMenu，
     *          icon图标，为el中的图标，
     *          iconfont，为使用阿里字体图标库
     *         按钮级权限列表，为一个数组，配合指令v-power使用，power的value在数组中则该按钮显示
     * }
     */
//如首页和登录页和一些不用权限的公用页面
export const commontRouterMap = [{
    path: "/login",
    hidden: true, 
    component: () =>
        import("@/views/login/index")
},
{
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "Home",
    hidden: true,
    children: [{
        path: "home",
        component: () =>
            import("@/views/home")
    }]
}
];


//异步挂载的路由
//动态需要根据权限加载的路由
export const asyncRouterMap = [
  {
    path: "/home",
    component: Layout,
    meta: { title: "首页", iconfont: "iconfont iconzhankai" }
},
{
    path: "/userpower",
    component: Layout,
    redirect: "/userpower/1-1",
    name: "userpower",
    meta: { title: "按钮级权限", icon: "el-icon-tickets" },
    code:'1',
    children: [{
        path: "1-1",
        name: "1-1",
        component: () =>
            import("@/views/userpower/1-1"),
        meta: { title: "1-1", },
        code:'1-1',
    },
    {
        path: "1-2",
        name: "1-2",
        component: () =>
            import("@/views/userpower/1-2"),
        hidden: true,
        meta: { title: "1-2",},
        code:'1-2',
    },
    {
        path: "1-3",
        name: "1-3",
        component: () =>
            import("@/views/userpower/1-3"),
        hidden: true,
        meta: { title: "1-3",},
        code:'1-3',
    }

    ]
},

{
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
        title: "多级菜单",
        icon: "el-icon-news"
    },
    children: [{
        path: "menu1",
        component: () =>
            import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" , icon: "el-icon-tickets" },
        children: [{
            path: "menu1-1",
            component: () =>
                import("@/views/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" }
        },
        {
            path: "menu1-2",
            component: () =>
                import("@/views/nested/menu1/menu1-2/index"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [{
                path: "menu1-2-1",
                component: () =>
                    import("@/views/nested/menu1/menu1-2/menu1-2-1/index"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" }
            },
            {
                path: "menu1-2-2",
                component: () =>
                    import("@/views/nested/menu1/menu1-2/menu1-2-2/index"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" }
            }
            ]
        },
        {
            path: "menu1-3",
            component: () =>
                import("@/views/nested/menu1/menu1-3/index"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" }
        }]

    },
    {
        path: "menu2",
        component: () =>
            import("@/views/nested/menu2/index"),
            name: "menu2",
        meta: { title: "menu2" }
    }
    ]
}
];


//实例化vue的时候只挂载commontRouterMap
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: commontRouterMap
})
const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router;
