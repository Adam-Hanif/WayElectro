import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";

export const store = configureStore({
  reducer: { rootReducer },
});
