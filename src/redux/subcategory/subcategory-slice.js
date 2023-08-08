import { createSlice } from '@reduxjs/toolkit';
import { 
        getAllSubcategories, 
        addSubcategory, 
        getSubcategoryByCategory,
        updateSubcategoryWithoutPhoto,
        updateSubcategoryWithPhoto, } from './subcategory-operations';

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
      .addCase(getSubcategoryByCategory.pending, state => {
        state.loading = true;
      })
      .addCase(getSubcategoryByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getSubcategoryByCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateSubcategoryWithPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateSubcategoryWithPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateSubcategoryWithPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateSubcategoryWithoutPhoto.pending, state => {
        state.loading = true;
      })
      .addCase(updateSubcategoryWithoutPhoto.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateSubcategoryWithoutPhoto.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      
  },
});

export default subCategorySlice.reducer;