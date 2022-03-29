const initialState = {
  content: "",
  variant: "",
  duration: null,
};

export default {
  namespaced: true,
  state: {
    ...initialState,
  },
  actions: {
    showMessage({ commit }, { content, variant, duration }) {
      commit("showMessage", { content, variant, duration });
    },
    dismiss({ commit }) {
      commit("dismiss");
    },
  },
  mutations: {
    showMessage(state, { content, variant, duration }) {
      state.duration = duration;
      state.content = content;
      state.variant = variant;
    },
    dismiss(state) {
      state.content = "";
      state.variant = "";
      state.duration = null;
    },
  },
};
