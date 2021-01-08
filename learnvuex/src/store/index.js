import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装、创建、导出插件，类型路由
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    //mutation的参数称为载荷(Payload)
    addStudent(state, student){
      state.students.push(student)
    },
    updateInfo(state) {
      state.info.name = 'Peter'
      // state.info['address'] = 'America'  //不是响应式
      // 数组push、pop等等和Vue.set、Vue.delete方法是响应式
      Vue.set(state.info, 'address', 'America')
      // delete state.info.age  //不是响应式
      Vue.delete(state.info, 'age')
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