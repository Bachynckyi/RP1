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

  export const getProductByCategory = createAsyncThunk(
    'api/product/getproductbycategory/:id',
    async (category, { rejectWithValue }) => {
      try {
        const result = await api.getProductByCategory(category);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const getProductBySearch = createAsyncThunk(
    'api/product/getproductbysearch/',
    async (search, { rejectWithValue }) => {
      try {
        const result = await api.getProductBySearch(search);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  
  export const getProductById = createAsyncThunk(
    'api/product/getproductbyid/:id',
    async (id, { rejectWithValue }) => {
      try {
        const result = await api.getProductById(id);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );
