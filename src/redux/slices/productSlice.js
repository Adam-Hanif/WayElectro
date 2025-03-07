import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ Сategory, pageCount, Search }) => {
    const { data } = await axios.get(
      `https://66f81cf22a683ce9730eab97.mockapi.io/items?page=${pageCount}&limit=6&${Сategory}${Search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      console.log(state.items);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "resolved";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
      state.items = [];
    });
  },
});

export const { setItems } = productSlice.actions;
export default productSlice.reducer;
