import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../routes';
import { currentUser } from '../auth';

axios.defaults.baseURL = routes.serverUrl;

export const addOrder = createAsyncThunk(
  'orders/add',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post('/orders/create', credentials);
      return data;
    } catch (_) {
      try {
        dispatch(currentUser());
        const { data } = await axios.post('/orders/create', credentials);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);

export const fetchOrders = createAsyncThunk(
  'orders/fetch',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios('/orders');
      return data;
    } catch (_) {
      try {
        dispatch(currentUser());
        const { data } = await axios('/orders');
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/orders/${id}/status`, {
        status: 'cancel',
      });
      return data;
    } catch (_) {
      try {
        dispatch(currentUser());
        const { data } = await axios.patch(`/orders/${id}/status`, {
          status: 'cancel',
        });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);
