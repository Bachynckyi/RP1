import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories, addCategory, updateCategoryWithPhoto, updateCategoryWithoutPhoto, deleteCategory } from './category-operations';

const initialState = {
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addCategory.pending, state => {
        state.loading = true;
      })
      .addCase(addCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateCategoryWithPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateCategoryWithPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateCategoryWithPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateCategoryWithoutPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateCategoryWithoutPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateCategoryWithoutPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteCategory.pending, state => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default categorySlice.reducer;