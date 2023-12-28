import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export type StateType = {
  cartItems: CartItemType[];
  amount: number;
  total: number;
};

// initialize cart state
const initialState: StateType = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
