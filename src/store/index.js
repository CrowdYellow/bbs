import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'

Vue.use(Vuex);

const state = {
  category: ls.getItem('category'),
};

const mutations = {
  setCategory(state, category){
    state.category = category;
    ls.setItem('category', category);
  },
};

const actions = {
  getCategoryByApi({ commit }, category) {
    if (category) commit('setCategory', category);
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
