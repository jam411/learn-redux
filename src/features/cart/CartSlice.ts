import { createSlice } from "@reduxjs/toolkit";

// initialize cart state
const initialState = {
  cartItems: [],
  amount: 0,
  ttal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
