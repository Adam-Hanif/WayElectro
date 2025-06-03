import { configureStore } from "@reduxjs/toolkit";
// import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import product from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";
import cartBrandSlice from "./slices/cartSliceBrand";
import circuitBreakersSlice from "./slices/circuitBreakersSlice";
export const store = configureStore({
  reducer: {
    cartSlice,
    product,
    orderReducer,
    cartBrandSlice,
    circuitBreakersSlice,
  },
});
