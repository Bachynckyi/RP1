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


