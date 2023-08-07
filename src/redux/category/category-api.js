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

export const addCategory = async ({token, data}) => {
  setToken(token);
  const { data: result } = await instance.post('/api/product/addcategory', data);
  return result;
};

export const getAllCategories = async () => {
  const result = await instance.get('/api/product/getallcategories');
  return result;
};

export const updateCategoryWithPhoto = async ({token, data, _id}) => {
  setToken(token);
  const { data: result } = await instance.patch(`/api/product/updatecategorywithphoto/${_id}`, data);
  return result;
};

export const updateCategoryWithoutPhoto = async ({token, data, _id}) => {
  setToken(token);
  const { data: result } = await instance.patch(`/api/product/updatecategorywithoutphoto/${_id}`, data);
  return result;
};
