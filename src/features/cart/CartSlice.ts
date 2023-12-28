import { createSlice } from '@reduxjs/toolkit';

export type StateType = {
  cartItems: string[];
  amount: number;
  title: string;
};

// initialize cart state
const initialState: StateType = {
  cartItems: [],
  amount: 4,
  title: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
