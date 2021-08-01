import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const user = createReducer(initialState, {});

export default user;
