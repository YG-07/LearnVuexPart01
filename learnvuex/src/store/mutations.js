import Vue from 'vue'
import {
  INCREMENT,
  DECREMENT
} from './mutations-types'

export default {
  [INCREMENT](state) {
    state.counter++
  },
  [DECREMENT](state) {
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
}