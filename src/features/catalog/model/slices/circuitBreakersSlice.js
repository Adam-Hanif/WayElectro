import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCircuitBreakers = createAsyncThunk(
  "CircuitBreakers/fetchBrand",
  async ({ id }) => {
    const { data } = await axios.get(
      `https://way-electro-server.onrender.com/get_circuit_breakers_list/${id}`
    );
    return data;
  }
);

const initialState = {
  itemCircuitBreakers: [],
  allItems: [],
  statusCircuitBreakers: "loading",
  filter: {
    brand: "all",
    poles: "all",
    text: "",
  },
};

const circuitBreakersSlice = createSlice({
  name: "CircuitBreakers",
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemCircuitBreakers = action.payload;
    },
    clearFilter(state) {
      state.filter = { brand: "all", poles: "all", text: "" };
      state.itemCircuitBreakers = state.allItems;
    },
    setFilter(state, action) {
      // Обновляем фильтр
      state.filter = { ...state.filter, ...action.payload };

      // Фильтруем товары
      state.itemCircuitBreakers = state.allItems.filter((item) => {
        const brandMatch =
          state.filter.brand === "all" ||
          String(item.brand_id) === String(state.filter.brand);

        const polesMatch =
          state.filter.poles === "all" ||
          Number(item.number_of_poles) === Number(state.filter.poles);
        const textMatch =
          !state.filter.text ||
          item.name.toLowerCase().includes(state.filter.text.toLowerCase());

        return brandMatch && polesMatch && textMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCircuitBreakers.pending, (state) => {
      state.statusCircuitBreakers = "loading";
      state.itemCircuitBreakers = [];
      state.allItems = [];
    });
    builder.addCase(fetchCircuitBreakers.fulfilled, (state, action) => {
      state.itemCircuitBreakers = action.payload;
      state.allItems = action.payload;
      state.statusCircuitBreakers = "resolved";
    });
    builder.addCase(fetchCircuitBreakers.rejected, (state, action) => {
      state.statusCircuitBreakers = "error";
      state.error = action.payload;
      state.itemCircuitBreakers = [];
      state.allItems = [];
    });
  },
});

export const { setItems, setFilter, clearFilter } =
  circuitBreakersSlice.actions;
export default circuitBreakersSlice.reducer;
