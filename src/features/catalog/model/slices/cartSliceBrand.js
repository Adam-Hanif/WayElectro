import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchAllBrandsGet } from "../api";

export const fetchBrand = createAsyncThunk(
  "cartBrand/fetchBrand",
  async ({ id }) => {
    const data = await fetchAllBrandsGet(id);
    return data;
  }
);

const initialState = {
  itemBrand: [],
  statusBrand: "loading",
};

const cartBrandSlice = createSlice({
  name: "cartBrand",
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrand.pending, (state) => {
      state.statusBrand = "loading";
      state.itemBrand = [];
    });
    builder.addCase(fetchBrand.fulfilled, (state, action) => {
      state.itemBrand = action.payload;
      state.statusBrand = "resolved";
    });
    builder.addCase(fetchBrand.rejected, (state, action) => {
      state.statusBrand = "error";
      state.error = action.payload;
      state.itemBrand = [];
    });
  },
});
export const { setItems } = cartBrandSlice.actions;
export default cartBrandSlice.reducer;
