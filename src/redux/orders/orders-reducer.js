import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addOrder, fetchOrders, updateOrderStatus } from './orders-operations';
const initState = [
  { _id: 1, comment: 'У вас еще нет ни одного заказа', btn: true },
];
const items = createReducer(initState, {
  [fetchOrders.fulfilled]: (_, { payload }) => {
    if (payload.data.orders.length === 0) {
      return initState;
    }
    return payload.data.orders;
  },
  // [addOrder.fulfilled]: (state, { payload }) => [...state, payload.data.order],
  [updateOrderStatus.fulfilled]: (state, { payload }) => {
    const patchedOrderIdx = state.find(
      order => order._id === payload.data.order._id,
    );
    const idx = state.indexOf(patchedOrderIdx);

    const newState = state.map((order, i) => {
      if (i === idx) {
        return payload.data.order;
      }
      return order;
    });
    return [...newState];
  },
});

const ordersLoading = createReducer(false, {
  [addOrder.pending]: () => true,
  [addOrder.fulfilled]: () => false,
  [addOrder.rejected]: () => false,
  [fetchOrders.pending]: () => true,
  [fetchOrders.fulfilled]: () => false,
  [fetchOrders.rejected]: () => false,
  [updateOrderStatus.pending]: () => true,
  [updateOrderStatus.fulfilled]: () => false,
  [updateOrderStatus.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const orderError = createReducer(null, {
  [addOrder.rejected]: setError,
  [fetchOrders.rejected]: setError,
  [updateOrderStatus.rejected]: setError,
});

export default combineReducers({ items, ordersLoading, orderError });
