import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://color-farb.onrender.com',
});

// const setToken = token => {
//   if (token) {
//     return (instance.defaults.headers.authorization = `Bearer ${token}`);
//   }
//   instance.defaults.headers.authorization = '';
// };

export const addOrderOneClick = async (data) => {
  const { result } = await instance.post('/api/orders/addorderoneclick', data);
  return result;
};

export const addOrderBasket = async (data) => {
  const { result } = await instance.post('/api/orders/addorderbasket', data);
  return result;
};

