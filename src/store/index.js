import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //全局状态字段在这写
  state: {
    isHomePage:false
  },
  //设置state isHomePage
  mutations: {
    SET_ISHOMEPAGE(state,data){
      state.isHomePage=data
    }
  },
  //这里是一些一部请求要改变状态，可以异步变同步
  actions: {
  },
  //模块化开发，基本用不到，除非大型项目
  modules: {
  }
})
