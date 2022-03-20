import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/userSlice';
import loginSlice from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    login: loginSlice
  },
});