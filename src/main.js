import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Qs from 'qs'
import name from './views/data'
Vue.prototype.$axios = axios 
Vue.prototype.$name = name 

Vue.prototype.$ajax=axios
Vue.prototype.$qs = Qs
   //全局注册，使用方法为:this.$axios
Vue.use(axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
