import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装、创建、导出插件，类型路由
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 30,
    students: [
      {id: 1001, name: 'Tom', score: 73},
      {id: 1001, name: 'John', score: 49},
      {id: 1001, name: 'Edu', score: 60},
      {id: 1001, name: 'Peter', score: 92},
      {id: 1001, name: 'Jim', score: 58},
    ]
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
    powerCounter(state) {
      return state.counter * state.counter
    },
    passStudents(state){
      //.filter()过滤器
      return state.students.filter(s => s.score >=60)
    },
    // 添加getters参数
    passStudentsLength(state, getters){
      return getters.passStudents.length
    },
    nametoStu(state) {
      // return function (name) {
      //   return state.students.filter(s => s.name == name)
      // }
      return stuName => {
        return state.students.filter(s => s.name == stuName)
      } 
    }
  },
  modules: {

  }

})

export default store