import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCircuitBreakers = createAsyncThunk(
	'CircuitBreakers/fetchBrand',
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
	statusCircuitBreakers: 'loading',
};

const circuitBreakersSlice = createSlice({
	name: 'CircuitBreakers',
	initialState,
	reducers: {
		setItems(state, action) {
			state.itemCircuitBreakers = action.payload;
		},
		getItemsById(state, action) {
			if (action.payload === 'all') {
				state.itemCircuitBreakers = state.allItems;
			} else {
				state.itemCircuitBreakers = state.allItems.filter(obj => {
					console.log(obj.brand_id, action.payload);

					return obj.brand_id === action.payload;
				});
			}
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchCircuitBreakers.pending, state => {
			state.statusCircuitBreakers = 'loading';
			state.itemCircuitBreakers = [];
      state.allItems = [];
		});
		builder.addCase(fetchCircuitBreakers.fulfilled, (state, action) => {
			state.itemCircuitBreakers = action.payload;
      state.allItems = action.payload;
			state.statusCircuitBreakers = 'resolved';
		});
		builder.addCase(fetchCircuitBreakers.rejected, (state, action) => {
			state.statusCircuitBreakers = 'error';
			state.error = action.payload;
			state.itemCircuitBreakers = [];
      state.allItems = [];
		});
	},
});
export const { setItems, getItemsById } = circuitBreakersSlice.actions;
export default circuitBreakersSlice.reducer;
