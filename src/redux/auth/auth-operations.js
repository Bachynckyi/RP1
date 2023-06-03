import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './auth-api';

axios.defaults.baseURL = 'https://color-farb.onrender.com';

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
  