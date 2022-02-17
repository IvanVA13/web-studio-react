export const getIsAuthenticated = state => state.auth.isAuthenticated;
export const getIsFetching = state => state.auth.userLoading;
export const getUser = state => state.auth.user;
export const getUserAvatar = state => state.auth.user.avatarUrl;
export const getSession = state => state.auth.session;
