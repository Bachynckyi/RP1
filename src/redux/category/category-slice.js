import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories, addCategory } from './category-operations';

const initialState = {
  loading: false,
  error: null,
  categories: {},
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
        state.categories = payload.data;
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
  },
});

export default categorySlice.reducer;