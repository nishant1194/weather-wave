
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/redux/slices/inputSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
