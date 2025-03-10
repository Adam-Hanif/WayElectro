import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import product from "./slices/productSlice";

export const store = configureStore({
  reducer: { filter, cartSlice, product },
});
