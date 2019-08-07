const isValidToken = state => {
  console.log(state);
  return true;
};

const isAuthenticated = state => !!state.auth.accessToken;

export const getters = {
  isAuthenticated,
  isValidToken,
  roles: state => state.account.user.role,
  adminRoutes: state => state.app.routes()
};
