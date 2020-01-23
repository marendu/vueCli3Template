const app = {
  state: {
    sidebar: {
      opened: true,
      withoutAnimation: false
    }
  },
  mutations: {
    //slider切换
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLEAR_SERCH:(state)=>{
      state.search = ''
      console.log('清除成功');
  } ,
  SET_SEARCH:(state,data)=>{
    state.search = data
    console.log( state.search);
} ,
  },
  getters: {
    getsidebar: state => state.sidebar,
    getSearch: state => {
      return state.search;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit("TOGGLE_SIDEBAR");
    },
       // 存储缓存
       setSearch:({commit},data)=>{
        commit('SET_SEARCH',data)
      },
      // 清除缓存
      clearSearch:({commit})=>{
        commit('CLEAR_SERCH')
      },
  }
};
export default app;
