import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut, getCurrent, addToBasket, removeFromBasket } from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user
        state.isLogin = true;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user
        state.isLogin = true;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.isLogin = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCurrent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user
        state.isLogin = true;
      })
      .addCase(getCurrent.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogin = false;
      })
      .addCase(addToBasket.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToBasket.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = true;
      })
      .addCase(addToBasket.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogin = false;
      })
      .addCase(removeFromBasket.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromBasket.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = true;
      })
      .addCase(removeFromBasket.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogin = false;
      })
  },
});

export default authSlice.reducer;