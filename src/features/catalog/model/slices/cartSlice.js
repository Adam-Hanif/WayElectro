import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // { id, name, image_src, unit, count }
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image_src, unit } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.count += 1;
      } else {
        state.items.push({ id, name, image_src, unit, count: 1 });
      }
    },
    increaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.count += 1;
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    setCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (count > 0) {
          item.count = count;
        } else {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },
  },
});

export const { addToCart, increaseCount, decreaseCount, setCount } =
  cartSlice.actions;
export default cartSlice.reducer;
