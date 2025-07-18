import cartBrandSlice from "../model/slices/cartSliceBrand";
import circuitBreakersSlice from "../model/slices/circuitBreakersSlice";
import catalogAll from "../model/slices/catalogSlice";
import { combineReducers } from "@reduxjs/toolkit";

const catalogReducer = combineReducers({
  catalogAll,
  cartBrandSlice,
  circuitBreakersSlice,
});

export default catalogReducer;
