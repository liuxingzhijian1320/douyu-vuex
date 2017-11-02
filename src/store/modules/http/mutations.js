import * as types from './mutation-type'

const mutations = {
  // 获取所有目录
  [types.FETCH_CATEGORY_SUCCESS] (state, data) {
    //console.info('data',data.data,state.category)

    state.category = state.category.concat(data.data)

  }
}
export default mutations
