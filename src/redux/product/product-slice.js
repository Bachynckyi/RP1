import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './product-operations';

const initialState = {
  loading: false,
  error: null,
  token: "",
  data: {},
};

const authSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addProduct.pending, state => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default authSlice.reducer;