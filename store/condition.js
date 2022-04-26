export default {
  namespaced: true,
  state() {
    return {
      data: {
        bcid: 1
      }
    }
  },
  mutations: {
    changeCondition(state, payload) {
      state.data = payload
    }
  }
}
