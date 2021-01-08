export default {
  state: {
    name: 'Timmy'
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  getters: {
    addStr(state) {
      return state.name +'111'
    },
    addStr2(state, getters) {
      return getters.addStr + '222'
    },
    addStr3(state, getters, rootState) {
      return getters.addStr2 +rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      // context.rootState / .rootGetters
      setTimeout(() => {
        context.commit('updateName', 'Sam')
      }, 1000)
    }
  }
}