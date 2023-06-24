import { createSlice } from '@reduxjs/toolkit';
import { getAllSubcategories, addSubcategory } from './subcategory-operations';

const initialState = {
  loading: false,
  error: null,
};

const subCategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllSubcategories.pending, state => {
        state.loading = true;
      })
      .addCase(getAllSubcategories.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getAllSubcategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addSubcategory.pending, state => {
        state.loading = true;
      })
      .addCase(addSubcategory.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addSubcategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default subCategorySlice.reducer;