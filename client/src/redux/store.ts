import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productsSlice from '../features/products/productsSlice';
import authSlice from '../features/auth/authSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer:{
    users: usersSlice,
    products: productsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;