import { createSlice } from '@reduxjs/toolkit';
import {  addProduct, 
          getProductByCategory, 
          getProductBySearch, 
          getProductById, 
          removeProductById, 
          updateProductWithPhoto, 
          updateProductWithoutPhoto,
          getAllPhotoSlider,
          addPhotoSlider,
          deletePhotoSlider,
  } from './product-operations';

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
      .addCase(getProductById.pending, state => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(removeProductById.pending, state => {
        state.loading = true;
      })
      .addCase(removeProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(removeProductById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateProductWithPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateProductWithPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateProductWithPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateProductWithoutPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateProductWithoutPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateProductWithoutPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllPhotoSlider.pending, state => {
        state.loading = true;
      })
      .addCase(getAllPhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllPhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addPhotoSlider.pending, state => {
        state.loading = true;
      })
      .addCase(addPhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addPhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deletePhotoSlider.pending, state => {
        state.loading = true;
      })
      .addCase(deletePhotoSlider.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deletePhotoSlider.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default productSlice.reducer;