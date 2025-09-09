import cartBrandSlice from "../model/slices/cartSliceBrand";
import circuitBreakersSlice from "../model/slices/circuitBreakersSlice";
import catalogAll from "../model/slices/catalogSlice";
import AllProducts from "../model/slices/allProducts";
import cartSlice from "../model/slices/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

const catalogReducer = combineReducers({
  catalogAll,
  cartBrandSlice,
  circuitBreakersSlice,
  AllProducts,
  cartSlice,
});

export default catalogReducer;
