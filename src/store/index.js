import Vue from "vue";
import Vuex from "vuex";
import add from "./modules/add"
import getters from '@/store/getters'
Vue.use(Vuex);

const store =  new Vuex.Store({
  modules: {
    add
  },
  getters
});
export default store
