import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './order-api';

export const addOrderOneClick = createAsyncThunk(
    'api/orders/addorderoneclick',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.addOrderOneClick(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);