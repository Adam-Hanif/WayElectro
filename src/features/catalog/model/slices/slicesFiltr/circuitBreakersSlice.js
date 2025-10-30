import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { filterSchemas } from "@/shared/filters/filterSchemas";
import { applyFilters } from "@/shared/filters/applyFilters";

export const fetchCircuitBreakers = createAsyncThunk(
  "circuitBreakers/fetchList",
  async ({ id } = {}) => {
    const url = id
      ? `https://way-electro-server.onrender.com/get_circuit_breakers_list/${id}`
      : `https://way-electro-server.onrender.com/get_circuit_breakers_list`;
    const { data } = await axios.get(url);
    return data;
  }
);

const initialState = {
  allItems: [],
  status: "idle",
  error: null,
  filter: { brand: "all", poles: "all", text: "" },
};

const slice = createSlice({
  name: "circuitBreakers",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearFilter(state) {
      state.filter = { brand: "all", poles: "all", text: "" };
    },
    setItems(state, action) {
      state.allItems = Array.isArray(action.payload) ? action.payload : [];
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchCircuitBreakers.pending, (s) => {
      s.status = "loading";
      s.error = null;
    });
    b.addCase(fetchCircuitBreakers.fulfilled, (s, a) => {
      s.status = "resolved";
      s.allItems = Array.isArray(a.payload) ? a.payload : [];
    });
    b.addCase(fetchCircuitBreakers.rejected, (s, a) => {
      s.status = "error";
      s.error = a.error?.message || "Fetch error";
      s.allItems = [];
    });
  },
});

export const { setFilter, clearFilter, setItems } = slice.actions;
export default slice.reducer;

// ---- селекторы (мемо) ----
const selectSlice = (state) => state.catalogReducer.circuitBreakersSlice;

export const selectCircuitBreakersAll = createSelector(
  [selectSlice],
  (s) => s.allItems
);
export const selectCircuitBreakersFilter = createSelector(
  [selectSlice],
  (s) => s.filter
);
export const selectCircuitBreakersVisible = createSelector(
  [selectCircuitBreakersAll, selectCircuitBreakersFilter],
  (items, filter) => applyFilters(items, filter, filterSchemas.circuitBreakers)
);
