import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsGet } from "../api";

export const fetchCatalogAll = createAsyncThunk(
  "catalogAll/fetchProducts",
  async () => {
    const data = await fetchProductsGet();
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
  error: null,
};

const CatalogAllSlice = createSlice({
  name: "catalogAll",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogAll.pending, (state) => {
        state.status = "loading";
        state.error = null; // Сбрасываем ошибку при новом запросе
      })
      .addCase(fetchCatalogAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "resolved";
      })
      .addCase(fetchCatalogAll.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload; // Здесь будет сообщение об ошибке
        state.items = [];
      });
  },
});

export const { setItems } = CatalogAllSlice.actions;
export default CatalogAllSlice.reducer;
