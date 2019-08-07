import http from "@/services/http.service";
import endpoints from "@/helpers/api";

const tokenKey = "token";

http.setJwt(getJwt());

function getJwt() {
  return localStorage.getItem(tokenKey);
}

async function login(username, password) {
  const body = { username: username, password: password };
  const { data: jwt } = await http.get(endpoints.authenticate, body);
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  logout
};
