import { combineReducers } from "@reduxjs/toolkit";
import product from "./slices/catalogSlice";
import cartBrandSlice from "./slices/cartSliceBrand";
import circuitBreakersSlice from "./slices/circuitBreakersSlice";

export const catalogReducer = combineReducers({
  product,
  cartBrandSlice,
  circuitBreakersSlice,
});
