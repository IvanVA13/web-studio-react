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
    let persistedToken;
    persistedToken = getState()?.auth?.session?.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (_) {
      try {
        await dispatch(refreshToken());
        persistedToken = getState()?.auth?.session?.token;
        token.set(persistedToken);
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

export const changeFirstName = createAsyncThunk(
  'auth/changeFirstName',
  async firstName => {
    const { data } = await axios.patch(`/users/first-name`, firstName);
    return data;
  },
);

export const changeLastName = createAsyncThunk(
  'auth/changeLastName',
  async lastName => {
    const { data } = await axios.patch(`/users/last-name`, lastName);
    return data;
  },
);

export const changeEmail = createAsyncThunk('auth/changeEmail', async email => {
  const { data } = await axios.patch(`/users/email`, email);
  return data;
});

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async password => {
    const { data } = await axios.patch(`/users/password`, password);
    return data;
  },
);

export const changeSex = createAsyncThunk('auth/changeSex', async sex => {
  const { data } = await axios.patch(`/users/sex`, sex);
  return data;
});

export const changeAvatar = createAsyncThunk(
  'auth/changeAvatar',
  async avatar => {
    const { data } = await axios.patch(`/users/avatar`, avatar);
    return data;
  },
);

export const forgotten = createAsyncThunk('auth/forgotten', async email => {
  const { data } = await axios.post(`/users/forgotten`, email);
  return data;
});

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ resetPasswordToken, password }) => {
    const { data } = await axios.post(
      `/users/reset-password/${resetPasswordToken}`,
      password,
    );
    return data;
  },
);
