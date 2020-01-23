const user = {
  state: {
    getUser:'admin',//获取登陆名
    userInfo:'',
    power:'', //按钮级权限
    routerPower:[]
   
  },
  mutations: {
  
    //设置登录用户
    SET_USER:(state,data)=>{
      state.getUser = data;
    },
    //缓存用户信息
    SET_USERINFO:(state,data)=>{
      state.userInfo = data;
    },
    //设置用户按钮级权限
    SET_POWER:(state,data)=>{
      state.power = data;
    },
    SET_ROUTERPOWER:(state,data)=>{
      state.routerPower = data
    },
    //退出登陆
    LOGOUT:(state)=>{
      // 退出登陆操作
      window.localStorage.removeItem('userDatas')
    }
  },
  getters: {
    getUser: state => state.getUser,
    getUserInfo: state => state.userInfo,
    getPower: state => state.power
  },
  actions: {
    setUser: ({ commit },data) => {
      commit("SET_USER",data);
    },

    setUserInfo: ({ commit },data) => {
      return new Promise((resolve,reject)=>{
        commit("SET_USERINFO",data);
        commit("SET_POWER",data.code);
        commit("SET_USER",data.userName);
        commit("SET_ROUTERPOWER", data.userPower);
        resolve(data.userPower);
      })

    
    },
    
    LogOut: ({ commit }) => {
      commit("LOGOUT");
    },
    
  }
};
export default user;
