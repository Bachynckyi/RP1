import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './product-api';

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
