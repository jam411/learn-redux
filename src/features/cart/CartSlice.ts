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
    clearCart: () => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      } else {
        console.log('cartItem is undefined');
      }
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      } else {
        console.log('cartItem is undefined');
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
