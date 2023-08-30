import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from "./np-api";

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getAddress = createAsyncThunk(
    'https://api.novaposhta.ua/v2.0/json/',
    async (locality, { rejectWithValue }) => {
      try {
        const result = await api.getAddress(locality);
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);

export const getBranchNumber= createAsyncThunk(
    'https://api.novaposhta.ua/v2.0/json/',
    async (req, { rejectWithValue }) => {
      try {
        const {refLocality} = req
        const result = await api.getBranchNumber({refLocality});
        return result;
      } catch (error) {
        return rejectWithValue(error.response.request.status);
      }
    }
);