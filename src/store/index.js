import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    add (state,data) {
      state.users.push(data)
    }
  },
  actions: {
    add (store, data) {
      store.commit('add', data)
    }
  }
})