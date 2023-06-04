import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://color-farb.onrender.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signUp = async data => {
  const { data: result } = await instance.post('/api/auth/register',data);
  const newToken = result.user.token
  setToken(newToken);
  return result;
};

export const signIn = async data => {
  const { data: result } = await instance.post('/api/auth/login', data);
  const newToken = result.user.token
  setToken(newToken);
  return result;
};

export const logOut = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.post('/api/auth/logout');
    setToken();
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};