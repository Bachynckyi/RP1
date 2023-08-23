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
    async (_, { rejectWithValue }) => {
      try {
        const result = await api.getAllCategories();
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateCategoryWithPhoto = createAsyncThunk(
    'api/product/updatecategorywithphoto',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data, _id} = req;
        const result = await api.updateCategoryWithPhoto({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateCategoryWithoutPhoto = createAsyncThunk(
    'api/product/updatecategorywithoutphoto',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data, _id} = req;
        const result = await api.updateCategoryWithoutPhoto({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const deleteCategory = createAsyncThunk(
    'api/product/deletecategory',
    async (req, { rejectWithValue }) => {
      try {
        const {token, _id} = req;
        const result = await api.deleteCategory({token, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

