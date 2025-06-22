import cartBrandSlice from "../redux/slices/cartSliceBrand";
import circuitBreakersSlice from "../redux/slices/circuitBreakersSlice";
import product from "../features/catalog/model/catalogSlice";

export const catalogReducer = combineReducers({
  product,
  cartBrandSlice,
  circuitBreakersSlice,
});
