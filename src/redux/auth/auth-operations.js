import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../routes';

axios.defaults.baseURL = routes.serverUrl;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const { data } = await axios.post('/users/register', credentials);
  return data;
});

export const login = createAsyncThunk('auth/login', async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios('/users/logout');
  token.unset();
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const {
      auth: {
        session: { token: persistedToken },
      },
    } = getState();
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (_) {
      try {
        dispatch(refreshToken());
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);

export const verify = createAsyncThunk(
  'auth/verify',
  async verifyEmailToken => {
    await axios(`/users/verify/${verifyEmailToken}`);
  },
);

export const resendVerifyToken = createAsyncThunk(
  'auth/resendVerify',
  async email => {
    await axios.post(`/users/verify`, email);
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { getState, rejectWithValue }) => {
    const {
      auth: {
        session: { refreshToken: persistedToken, sid },
      },
    } = getState();
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios(`/users/refresh-token/${sid}`);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
