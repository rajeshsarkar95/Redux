import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/Card/CounterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store;
