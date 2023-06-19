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

export const addProduct = async ({token, product}) => {
  setToken(token);
  const { product: result } = await instance.post('/api/product/addproduct', product);
  return result;
};
