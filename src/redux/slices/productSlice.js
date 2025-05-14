import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (id) => {
    const { data } = await axios.get(
      `https://way-electro-server.onrender.com/catalog`
    );

    console.log(id);
    

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
