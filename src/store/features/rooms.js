import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
	error: null,
	isLoading: true,
};

const roomSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		addRooms(state, { payload }) {
			const newRooms = state.data
				? { ...state.data, ...payload.data }
				: payload.data;
			state.data = newRooms;
			state.isLoading = false;
		},
		setRooms(state, { payload }) {
			state.data = payload.data;
			state.isLoading = false;
		},
	},
});

export const { setRooms } = roomSlice.actions;
export default roomSlice.reducer;
