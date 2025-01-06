import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: { value: [] },
  reducers: {
    addTocart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTocart } = CartSlice.actions;
export default CartSlice.reducer;
