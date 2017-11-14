// import * as actions from './actions'
// import * as getters from './getters'
// import mutations from './mutations'
import * as types from './mutation-type'


// 初始状态
const state = {
  user: {},
  token: null,
}


// 逻辑响应
const actions = {

}


// 数据改变
const mutations = {
  [types.LOGIN]: (state, data) => {
    console.info(2222,state,data)
    localStorage.token = data;
    state.token = data;
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    state.token = null
  },


}


// 读取数据
const getters = {
  token:state=>state.token
}


export default {
  state,
  getters,
  actions,
  mutations,
};

