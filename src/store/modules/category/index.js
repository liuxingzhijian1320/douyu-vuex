// import * as actions from './actions'
// import * as getters from './getters'
// import mutations from './mutations'
import * as types from './mutation-type'
import axios from '../../../assets/scripts/http'


// 初始状态
const state = {
  category: [],
}


// 逻辑响应
const actions = {
  fetchHomeList({ commit }, params) {
    axios.get(`/douyuapi/RoomApi/live?offset=${params}&limit=20`).then((res) => {
      commit('FETCH_CATEGORY_SUCCESS', res.data)
      return res.data;
    });
  }
}


// 数据改变
const mutations = {
  // 获取所有目录
  [types.FETCH_CATEGORY_SUCCESS](state, data) {
    //console.info('data',data.data,state.category)

    state.category = state.category.concat(data.data)

  }


}


// 读取数据
const getters = {
  categoryData: state => state.category
}


export default {
  state,
  getters,
  actions,
  mutations,
};

