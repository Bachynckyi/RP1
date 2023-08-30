import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "./delivery-api";

axios.defaults.baseURL = 'https://www.delivery-auto.com/api/';

export const getCities = createAsyncThunk(
    'v4/Public/GetAreasList',
    async (_, { rejectWithValue }) => {
      try {
        const result = await api.getCities();
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);

export const getWarehouses = createAsyncThunk(
    'v4/Public/GetWarehousesListByCity',
    async (refLocalityDelivery, { rejectWithValue }) => {
      try {
        const result = await api.getWarehouses({refLocalityDelivery});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);