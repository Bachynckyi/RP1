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

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/auth/current');
    setToken();
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const addToBasket = async ({token, data}) => {
  try {
    setToken(token);
    const result = await instance.patch('/api/auth/addtobasket', {data});
    setToken();
    return result;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const removeFromBasket = async ({token, id}) => {
  try {
    setToken(token);
    const result = await instance.patch(`/api/auth/removefrombasket/${id}`);
    setToken();
    return result;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const clearBasket = async (token) => {
  try {
    setToken(token);
    const result = await instance.patch(`/api/auth/clearbasket`);
    setToken();
    return result;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const updateQuantityInBasket = async ({token, _id, quantity}) => {
  try {
    setToken(token);
    const result = await instance.patch(`/api/auth/updatequantityinbasket/${_id}`, {quantity});
    setToken();
    return result;
  } catch (error) {
    setToken();
    throw error;
  }
};

