import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './product-api';

axios.defaults.baseURL = 'https://color-farb.onrender.com';

export const addProduct = createAsyncThunk(
    'api/product/addproduct',
    async (data, { rejectWithValue }) => {
      try {
        const {token, product} = data;
        console.log(product)
        console.log(token)
        const result = await api.addProduct({token, product});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );