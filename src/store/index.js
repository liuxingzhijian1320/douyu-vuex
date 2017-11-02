import Vue from 'vue'
import Vuex from 'vuex'
import sidemenu from './modules/sidemenu'
import http from './modules/http'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    sidemenu,
    http
  },

  strict: process.env.NODE_ENV !== 'production'
})