import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters';
// import axios from 'assets/scripts/http'
import mixins from './mixins';

Vue.mixin(mixins);

//rem 布局
import { rem } from 'assets/scripts/rem'; // rem
rem();

// 导入axios
// import axios from 'axios'
// 将axios挂载到vue对象的原型下边以实现全局通用
// window.axios = axios

//引入jq
import $ from 'jquery'

//引入swiper
 import '../node_modules/swiper/dist/css/swiper.min.css';
//  import Swiper from 'swiper' //哪里使用swiper 则复制到哪里去

//mint-ui
import MessageBox from 'mint-ui/lib/message-box'
import 'mint-ui/lib/message-box/style.css'
import Indicator from 'mint-ui/lib/indicator'
import 'mint-ui/lib/indicator/style.css'
window.MessageBox  = MessageBox ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似
window.Indicator  = Indicator ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似

// 注册 filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});





// 弄一个bus
// 在这里定义的bus并不能在全局通用
// var bus = new Vue()


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
