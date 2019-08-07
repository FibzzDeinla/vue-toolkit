import userService from "../../services/user.service";
import { BehaviorSubject } from "rxjs";

const currentUserSubj = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

const currentUserToken = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentToken"))
);

// State
const state = {
  user: currentUserSubj.value,
  token: currentUserToken.value
};

// Actions
const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit("LOGIN_REQUEST", { username });
    return userService.login(username, password);
  },
  logout({ commit }) {
    commit("LOGOUT");
  }
};

// Mutations
const mutations = {
  LOGIN_REQUEST(state, user) {
    state.user = user;
  },
  LOGIN_SUCCESS(state, data) {
    let _userData = {
      username: data.username,
      email: data.email,
      displayName: data.displayName,
      role: data.role
    };

    // stores to localstorage
    localStorage.setItem("currentUser", JSON.stringify(_userData));
    localStorage.setItem("currentToken", JSON.stringify(data.token));
    currentUserSubj.next(_userData);
    currentUserToken.next(data.token);
  },
  LOGIN_FAIL(state) {
    state.user = null;
  },
  LOGOUT() {
    console.log("wew");
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
};
