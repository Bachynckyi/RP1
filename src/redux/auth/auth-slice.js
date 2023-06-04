import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut } from './auth-operations';

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
      });
  },
});

export default authSlice.reducer;