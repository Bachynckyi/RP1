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

export const addProduct = async ({token, data}) => {
  setToken(token);
  const { data: result } = await instance.post('/api/product/addproduct', data);
  return result;
};

export const getProductByCategory = async (category) => {
  const result = await instance.get(`/api/product/getproductbycategory/${category}`);
  return result;
};

export const getProductBySearch = async (search) => {
  const result = await instance.get(`/api/product/getproductbysearch?search=${search}`);
  return result;
};

export const getProductById = async (id) => {
  const result = await instance.get(`/api/product/getproductbyId/${id}`);
  return result;
};

export const removeProductById = async ({token, _id}) => {
  setToken(token);
  const result = await instance.delete(`/api/product/deleteproduct/${_id}`);
  return result;
};

export const updateProductWithPhoto = async ({token, data, _id}) => {
  setToken(token);
  const result = await instance.patch(`/api/product/updateproductwithphoto/${_id}`, data);
  return result;
};

export const updateProductWithoutPhoto = async ({token, data, _id}) => {
  setToken(token);
  const result = await instance.patch(`/api/product/updateproductwithoutphoto/${_id}`, data);
  return result;
};


