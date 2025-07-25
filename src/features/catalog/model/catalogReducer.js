import cartBrandSlice from "../model/slices/cartSliceBrand";
import circuitBreakersSlice from "../model/slices/circuitBreakersSlice";
import catalogAll from "../model/slices/catalogSlice";
import AllProducts from "../model/slices/allProducts";
import { combineReducers } from "@reduxjs/toolkit";

const catalogReducer = combineReducers({
  catalogAll,
  cartBrandSlice,
  circuitBreakersSlice,
  AllProducts,
});

export default catalogReducer;
