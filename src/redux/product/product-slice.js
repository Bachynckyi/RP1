import { createSlice } from '@reduxjs/toolkit';
import { addProduct, getProductByCategory, getProductBySearch } from './product-operations';

const initialState = {
  loading: false,
  error: null,
};

const productSlice = createSlice({
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
      .addCase(getProductByCategory.pending, state => {
        state.loading = true;
      })
      .addCase(getProductByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getProductByCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getProductBySearch.pending, state => {
        state.loading = true;
      })
      .addCase(getProductBySearch.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getProductBySearch.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default productSlice.reducer;