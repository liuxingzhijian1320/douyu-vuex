import Vue from 'vue'
import Vuex from 'vuex'
import sidemenu from './modules/sidemenu'
// import http from './modules/http'    //http和category写法是一样的
import category from './modules/category'
import login from './modules/login'




Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    sidemenu,
    // http,
    category,
    login,
  },

  strict: process.env.NODE_ENV !== 'production'
})