import axios from "axios";

export default {
  state: {
    categoriesRequest: [],
    isOpen: false,
    isSearch: false,
    value: "",
    isSelected: false,
  },

  getters: {
    isOpen(state) {
      return state.isOpen;
    },

    limit(state) {
      if (state.value !== "") {
        return 0;
      }
      return 50;
    },

    isSelected(state) {
      return state.isSelected;
    },

    value(state) {
      if (state.value === "") {
        return "";
      }
      return state.value;
    },

    list(state) {
      if (!state.categoriesRequest) {
        return [];
      }
      return state.categoriesRequest;
    },
  },

  mutations: {
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    toggleIsSelected(state) {
      state.isSelected = !state.isSelected;
    },

    setValue(state, value) {
      state.value = value;
    },
    setIsChecked(state) {
      state.categoriesRequest = state.categoriesRequest.map((item) => {
        return {
          ...item,
          isChecked: state.isSelected,
        };
      });
    },
    setIsSelected(state, value) {
      state.isSelected = value;
    },
  },

  actions: {
    switchChecked({ commit }) {
      commit("toggleIsSelected");
      commit("setIsChecked");
    },

    search(ctx) {
      ctx.dispatch("request");
    },

    async request({ state, getters, commit }) {
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer BT3HK2NpCnyrKiDo",
          "content-type": "application/x-www-form-urlencoded",
        },
        url: "https://lobster.tools/api/v1/projects",
        data: `limit=${getters.limit}&offset=0&search=${getters.value}&total=20`,
      };
      axios(options)
        .then((res) => {
          state.categoriesRequest = res.data.message.data;
        })
        .then(() => {
          commit("setIsChecked", false);
          commit("setIsSelected");
        });
    },
  },
};
