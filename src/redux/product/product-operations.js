import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './product-api';

axios.defaults.baseURL = 'https://color-farb.onrender.com';

export const addProduct = createAsyncThunk(
    'api/product/addproduct',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data} = req;
        const result = await api.addProduct({token, data});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const addCategory = createAsyncThunk(
    'api/product/addcategory',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data} = req;
        const result = await api.addCategory({token, data});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );