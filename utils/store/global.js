import { action } from "easy-peasy";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  global: {
    loginModal: false,
    userId: null,
    authToken: null,
    setLoginModal: action((state, payload) => {
      state.loginModal = payload;
    }),
    setUserId: action((state, payload) => {
      state.userId = payload;
    }),
    setAuthToken: action((state, payload) => {
      state.authToken = payload;
    }),
  },
};
