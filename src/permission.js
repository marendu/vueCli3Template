import router from "./router/";
import store from "./store/";
import Vue from "vue";

// main.js
var flag = true
router.beforeEach((to, from, next) => {
    if(to.path===from.path){
      return
    }
  console.log("路由拦截", to.path,from.path);
  if(flag){
    flag = false
    console.log('页面刷新');
    const userData =  window.localStorage.getItem("userDatas")
    console.log(userData,11111);
    //已经登录
    if(userData){ 
      const data = JSON.parse(userData)
    store.dispatch("setUserInfo",data).then(routerList=>{
        console.log(routerList);
      store.dispatch("GenerateRoutes",routerList).then(() => {
        router.addRoutes(store.getters.getaddRouters); // 动态添加可访问路由表
        // next();
        next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      });
    })
  
    } else{
      console.log(55555);
      if(to.path==="/login"){
        next()
      } else {
        next({ path: "/login" });
      }
    }
   
  } else {
    next()
  }
      
          })
  
          // 添加按钮级权限 v-power

  Vue.directive('power', {
    inserted: function (el,binding,vnode) {
      const power  =vnode.context.$store.getters.getPower
      const list = binding.value.map(item=>{
        return Number(item)
      })
      console.log(binding.value,"权限数组");
      if(!list.includes(Number(power))){
      el.style.display="none"
      }
    },
  })

          
  
