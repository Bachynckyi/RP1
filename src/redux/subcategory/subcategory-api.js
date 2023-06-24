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

export const addSubcategory = async ({token, data}) => {
  setToken(token);
  const { data: result } = await instance.post('/api/product/addsubcategory', data);
  return result;
};

export const getAllSubcategories = async () => {
  const result = await instance.get('/api/product/getallsubcategories');
  return result;
};