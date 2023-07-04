import { createSlice } from '@reduxjs/toolkit';
import { addOrderOneClick } from './order-operations';

const initialState = {
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOrderOneClick.pending, state => {
        state.loading = true;
      })
      .addCase(addOrderOneClick.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addOrderOneClick.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export default orderSlice.reducer;