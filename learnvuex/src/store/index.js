import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装、创建、导出插件，类型路由
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 30
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    
  },
  modules: {

  }

})

export default store