import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { auth } from './auth';
import { orders } from './orders';
import { mailing } from './mailing';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const store = configureStore({
  reducer: {
    auth,
    // auth: persistReducer(persistConfig, auth),
    orders,
    mailing,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
