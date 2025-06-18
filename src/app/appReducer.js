import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../redux/slices/cartSlice";
import product from "../features/catalog/model/catalogSlice";
import orderReducer from "../redux/slices/orderSlice";
import cartBrandSlice from "../redux/slices/cartSliceBrand";
import circuitBreakersSlice from "../redux/slices/circuitBreakersSlice";

export const rootReducer = combineReducers({
  cartSlice,
  product,

  orderReducer,
  cartBrandSlice,
  circuitBreakersSlice,
});
