import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { googleAuth } from './auth-actions';
import {
  register,
  login,
  logout,
  currentUser,
  verify,
  resendVerifyToken,
  refreshToken,
} from './auth-operations';

const initialState = {
  email: '',
  password: '',
};

const user = createReducer(initialState, {
  [register.fulfilled]: (_, { payload }) => payload.data.email,
  [login.fulfilled]: (_, { payload }) => ({ ...payload.data }),
  [logout.fulfilled]: () => initialState,
  [currentUser.fulfilled]: (_, { payload }) => ({
    ...payload.data,
  }),

  [verify.fulfilled]: () => true,
  [resendVerifyToken.fulfilled]: () => true,
});

const userLoading = createReducer(false, {
  [register.pending]: () => true,
  [register.fulfilled]: () => false,
  [register.rejected]: () => false,
  [login.pending]: () => true,
  [login.fulfilled]: () => false,
  [login.rejected]: () => false,
  [logout.pending]: () => true,
  [logout.fulfilled]: () => false,
  [logout.rejected]: () => false,
  [currentUser.pending]: () => true,
  [currentUser.fulfilled]: () => false,
  [currentUser.rejected]: () => false,
});

const isAuthenticated = createReducer(false, {
  [login.fulfilled]: () => true,
  [login.rejected]: () => false,
  [logout.fulfilled]: () => false,
  [currentUser.fulfilled]: () => true,
  [currentUser.rejected]: () => false,
});

const session = createReducer(null, {
  [login.fulfilled]: (_, { payload: { token, refreshToken, sid } }) => ({
    token,
    refreshToken,
    sid,
  }),
  [googleAuth]: (_, { payload }) => ({ ...payload }),
  [refreshToken.fulfilled]: (_, { payload }) => ({
    token: payload.newAccessToken,
    refreshToken: payload.newRefreshToken,
    sid: payload.sid,
  }),
  [refreshToken.rejected]: () => null,
  [currentUser.rejected]: () => null,
  [logout.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const userError = createReducer(null, {
  [register.rejected]: setError,
  [login.rejected]: setError,
  [logout.rejected]: setError,
  [currentUser.rejected]: setError,
  [verify.rejected]: setError,
  [resendVerifyToken.rejected]: setError,
});

export default combineReducers({
  user,
  isAuthenticated,
  userLoading,
  session,
  userError,
});
