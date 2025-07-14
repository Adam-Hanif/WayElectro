import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsGet } from "../api";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetchProductsGet();
    return response;
  }
);

const initialState = {
  items: [],
  status: "loading",
  error: null,
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null; // Сбрасываем ошибку при новом запросе
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "resolved";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload; // Здесь будет сообщение об ошибке
        state.items = [];
      });
  },
});

export const { setItems } = productSlice.actions;
export default productSlice.reducer;
