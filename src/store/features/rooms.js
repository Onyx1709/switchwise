import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			id: 'living-room',
			image: '/images/living-room.png',
			name: 'Living Room',
			devices: [],
		},
		{
			id: 'bedroom-1',
			image: '/images/bedroom-1.png',
			name: 'Bedroom 1',
			devices: [],
		},
		{
			id: 'bedroom-2',
			image: '/images/bedroom-2.png',
			name: 'Bedroom 2',
			devices: [],
		},
		{
			id: 'others',
			image: '/images/others-1.png',
			name: 'Others',
			devices: [],
		},
	],
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
