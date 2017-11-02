import axios from '../../../assets/scripts/http'


export function fetchHomeList({ commit },params) {
  axios.get(`/douyuapi/RoomApi/live?offset=${params}&limit=20`).then((res)=>{
    commit('FETCH_CATEGORY_SUCCESS', res.data)
    return res.data;
  });
}
