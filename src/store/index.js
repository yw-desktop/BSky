import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:21,
    collcount:0
  },
  mutations: {
     //添加歌曲
  addcollcount(state,sum){
    state.collcount+=sum;
  },
  //删除歌曲
  subcollcount(state,sum){
    state.collcount-=sum
  },
  //清空歌曲
  clearcollcount(state){
    state.collcount=0
  },
  addcount(state){
    state.count++
  },
  subcount(state){
    state.count--
  },
  modifyage(state,i){
    state.count-=i
  },
  getcount(state){
    return state.count
  },
  getcollcount(state){
    return state.collcount
  } 
  },
  actions: {
    
  },
  modules: {
    
  }
})
