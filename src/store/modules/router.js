import { asyncRouterMap, commontRouterMap } from "@/router";


function hasPermission(roles, route) {
  if (route.code) {
    return roles.includes(route.code)
  } else {
    return true
  }
}

/**
 * @param routes 动态处理的路由
 * @param roles 传人的权限
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    console.log(roles,1111);
      if(roles.length){//存在权限数组执行过滤
        if (hasPermission(roles, tmp)) {
          if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children, roles)
          }
          res.push(tmp)
        }
      } else {
          if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children, roles)
          }
          res.push(tmp)
      }
  })

  return res
}


const router = {
  state: {
    routers: commontRouterMap,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = commontRouterMap.concat(routers);
    },
  
  },
  getters: {
    getaddRouters: state => state.addRouters,//动态添加的路由
    getrouters: state => state.routers//用于渲染sidebar
  },
  actions: {
    GenerateRoutes({ commit},data) {
      return new Promise(resolve => {
        const roles = data;
        let accessedRouters = filterAsyncRoutes(asyncRouterMap, roles)

        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    },
  
  }
};

export default router;
