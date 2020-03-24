import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    SET_POEPLE: (state, people) => {
      state.people = people;
    }
  },
  actions: {
    GET_PEOPLE({ commit }) {
      return axios.get("https://swapi.co/api/people/").then(response => {
        commit("SET_POEPLE", response.data.results);
      });
    }
  },
  getters: {
    PEOPLE(state) {
      return state.people;
    }
  }
});
