import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './auth-api';

axios.defaults.baseURL = 'https://color-farb.onrender.com';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
    'api/auth/register',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.signUp(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
  );

export const signIn = createAsyncThunk(
    'api/auth/login',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.signIn(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (token, { rejectWithValue }) => {
    try {
      clearAuthHeader();
      const result= await api.logOut(token);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.request.status);
    }
  }
);
  