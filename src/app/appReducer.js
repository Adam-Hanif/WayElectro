import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../redux/slices/cartSlice";
import orderReducer from "../redux/slices/orderSlice";
import  {catalogReducer}  from "../features/catalog/model/catalogReducer";

export const rootReducer = combineReducers({
  cartSlice,
  orderReducer,
  catalogReducer,
});
