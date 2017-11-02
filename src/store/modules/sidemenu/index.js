import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  leftNav: false, // sidemenu的显示
  loading: false
}

export default {
  state,
  actions,
  getters,
  mutations
}
