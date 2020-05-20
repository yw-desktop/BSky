import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/global/global.css'

//引入axios模板
import axios from 'axios'
axios.defaults.baseURL="http://49.233.215.18:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
//引入vuex模板
import Vuex from 'vuex'
Vue.use(Vuex)
//引入mint-ui组件
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintui)
//引入element-ui
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementui)
// 导入时间格式化组件库
import moment from 'moment'
// 定义时间格式化全局过滤器
Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dateStr).format(pattern)
})
 //过滤器
 Vue.filter("value",function(oldstring){
  if(oldstring===null){
      var newstring="null"
  }
  return newstring
})
//全局路由导航


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
