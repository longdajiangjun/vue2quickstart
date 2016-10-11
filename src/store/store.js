/**
 * Created by Bruce.Liu on 2016-10-10.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curUser: {}
  },
  //private 不公开
  mutations: {
    set_current_user(state, user) {
      state.curUser = user;
    }
  },
  //通过 dispatch 进行 set
  actions: {
    setCurrentUser ({commit}, user) {
      commit('set_current_user', user);
    }
  },
  //获取
  getters: {
    getCurrentUser: (state) => {
      return state.curUser;
    }
  }
});
