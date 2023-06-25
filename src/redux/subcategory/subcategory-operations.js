import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './subcategory-api';

  export const addSubcategory = createAsyncThunk(
    'api/product/addsubcategory',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data} = req;
        const result = await api.addSubcategory({token, data});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const getAllSubcategories = createAsyncThunk(
    'api/product/getallsubcategories',
    async (_, { rejectWithValue }) => {
      try {
        const result = await api.getAllSubcategories();
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const getSubcategoryByCategory = createAsyncThunk(
    'api/product/getsubcategorybycategory/:id',
    async (category, { rejectWithValue }) => {
      try {
        const result = await api.getSubcategorybyCategory(category);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );