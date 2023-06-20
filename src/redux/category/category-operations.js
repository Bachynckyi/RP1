import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './category-api';

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

  export const getAllCategories = createAsyncThunk(
    'api/product/getallcategories',
    async (token, { rejectWithValue }) => {
      try {
        const result = await api.getAllCategories({token});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );