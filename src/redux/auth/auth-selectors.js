export const isLogin = ({ auth }) => auth.isLogin;
export const userToken = ({ auth }) => auth.user.token;
export const isLoading = ({ auth }) => auth.loading;
export const userName = ({ auth }) => auth.user.name;
export const user = ({ auth }) => auth.user;