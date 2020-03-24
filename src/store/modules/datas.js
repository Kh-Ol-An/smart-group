import axios from "@/axios";

export default {
  actions: {
    getDatas({ commit }, setting) {
      return axios
        .get(setting)
        .then(({ data }) => {
          commit("updateDatas", data.results);
        })
        .catch(err => console.log("errorCatch", err));
    }
  },
  mutations: {
    updateDatas: (state, datas) => {
      state.datas = datas;
    }
  },
  state: {
    datas: []
  },
  getters: {
    allDatas({ datas }) {
      return datas;
    }
  }
};
