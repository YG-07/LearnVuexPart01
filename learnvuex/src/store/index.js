import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

// 1.安装、创建、导出插件，类型路由
Vue.use(Vuex)

// 2.Vuex的state状态，一般不抽离
const state = {
  counter: 30,
  students: [
    {id: 1001, name: 'Tom', score: 73},
    {id: 1002, name: 'John', score: 49},
    {id: 1003, name: 'Edu', score: 60},
    {id: 1004, name: 'Peter', score: 92},
    {id: 1005, name: 'Jim', score: 58},
  ],
  info:{
    name: 'Tom',
    age: 22,
    height: 1.75
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA
  }
})

export default store