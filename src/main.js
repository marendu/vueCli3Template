import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Router from 'vue-router'
import store from "./store";
import './untils/autoSize'
import './untils/iconfont/iconfont.css'
import './untils/jquery'
import './permission'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
Vue.use(ElementUI);
Vue.config.productionTip = true;

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
