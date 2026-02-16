import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionsSlice';
import authenticationReducer from './authSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
