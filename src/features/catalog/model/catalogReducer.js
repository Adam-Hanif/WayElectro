import cartBrandSlice from "../model/slices/cartSliceBrand";
import circuitBreakersSlice from "../model/slices/circuitBreakersSlice";
import product from "../model/slices/catalogSlice";
import { combineReducers } from "@reduxjs/toolkit";

const catalogReducer = combineReducers({
  product,
  cartBrandSlice,
  circuitBreakersSlice,
});

export default catalogReducer;
