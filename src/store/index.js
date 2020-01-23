import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import router from "./modules/router";
import app from "./modules/app";
import user from "./modules/user";

export default new Vuex.Store({
  modules: {
    router,
    app,
    user
  }
});
