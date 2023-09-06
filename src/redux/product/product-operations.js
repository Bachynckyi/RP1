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

  export const removeProductById = createAsyncThunk(
    'api/product/deleteproduct/:id',
    async (req, { rejectWithValue }) => {
      try {
        const {token, _id} = req;
        const result = await api.removeProductById({token, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateProductWithPhoto = createAsyncThunk(
    'api/product/updateproductwithphoto/:id',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data, _id} = req;
        const result = await api.updateProductWithPhoto({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateProductWithoutPhoto = createAsyncThunk(
    'api/product/updateproductwithoutphoto/:id',
    async (req, { rejectWithValue }) => {
      try {
        const {token, data, _id} = req;
        const result = await api.updateProductWithoutPhoto({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const getAllPhotoSlider = createAsyncThunk(
    'api/product/getallphotoslider',
    async (_, { rejectWithValue }) => {
      try {
        const result = await api.getAllPhotoSlider();
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const addPhotoSlider = createAsyncThunk(
    'api/product/addphotoslider',
    async (req, { rejectWithValue }) => {
      try {
        const { token, data } = req 
        const result = await api.addPhotoSlider({token, data});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const deletePhotoSlider = createAsyncThunk(
    'api/product/deletephotoslider',
    async (req, { rejectWithValue }) => {
      try {
        const { token, id } = req 
        const result = await api.deletePhotoSlider({token, id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateStatusProduct = createAsyncThunk(
    'api/product/updatestatusproduct',
    async (req, { rejectWithValue }) => {
      try {
        const { token, data, _id } = req 
        const result = await api.updateStatusProduct({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const updateTopProduct = createAsyncThunk(
    'api/product/updatetopproduct',
    async (req, { rejectWithValue }) => {
      try {
        const { token, data, _id } = req 
        const result = await api.updateTopProduct({token, data, _id});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

  export const getAllTopProducts = createAsyncThunk(
    'api/product/getalltopproducts',
    async (_, { rejectWithValue }) => {
      try { 
        const result = await api.getAllTopProducts();
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );
