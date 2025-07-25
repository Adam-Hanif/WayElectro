import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsGet } from "../api";

const initialState = {
  items: [],
  status: "loading",
  error: null,
};

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
  async () => {
    const data = await fetchAllProductsGet();
    return data;
  }
);

const AllProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "loaded";
        state.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      });
  },
});
export default AllProductsSlice.reducer;
