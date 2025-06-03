import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCircuitBreakers = createAsyncThunk(
  "CircuitBreakers/fetchBrand",
  async ({ id, param }) => {
    console.log(param);

    const { data } = await axios.get(
      `https://way-electro-server.onrender.com/${param}/${id}`
    );

    return data;
  }
);

const initialState = {
  itemCircuitBreakers: [],
  statusCircuitBreakers: "loading",
};

const circuitBreakersSlice = createSlice({
  name: "CircuitBreakers",
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemCircuitBreakers = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCircuitBreakers.pending, (state) => {
      state.statusCircuitBreakers = "loading";
      state.itemCircuitBreakers = [];
    });
    builder.addCase(fetchCircuitBreakers.fulfilled, (state, action) => {
      state.itemCircuitBreakers = action.payload;
      state.statusCircuitBreakers = "resolved";
    });
    builder.addCase(fetchCircuitBreakers.rejected, (state, action) => {
      state.statusCircuitBreakers = "error";
      state.error = action.payload;
      state.itemCircuitBreakers = [];
    });
  },
});
export const { setItems } = circuitBreakersSlice.actions;
export default circuitBreakersSlice.reducer;
