export default {
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
}