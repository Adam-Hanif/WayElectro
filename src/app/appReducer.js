import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../redux/slices/cartSlice";

import orderReducer from "../redux/slices/orderSlice";

export const rootReducer = combineReducers({
  cartSlice,
  orderReducer,
});
