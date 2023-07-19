import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			id: 'living-room',
			image: '/images/living-room-mobile.jpg',
			desktop: '/images/living-room-desktop.jpg',
			name: 'Living Room',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'off',
				},
				{
					id: 2,
					icon: 'fan',
					name: 'fan',
					state: 'off',
				},
				{
					id: 3,
					icon: 'socket',
					name: 'socket',
					state: 'off',
				},
			],
		},
		{
			id: 'bedroom-1',
			image: '/images/bedroom-1-mobile.jpg',
			desktop: '/images/bedroom-1-desktop.jpg',
			name: 'Bedroom 1',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'off',
				},
				{
					id: 2,
					icon: 'socket',
					name: 'socket',
					state: 'off',
				},
			],
		},
		{
			id: 'bedroom-2',
			// image: '/images/bedroom-2-mobile.svg',
			image: '/images/bedroom-2-desktop.jpg',
			name: 'Bedroom 2',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'off',
				},
				{
					id: 2,
					icon: 'socket',
					name: 'socket',
					state: 'off',
				},
			],
		},
		{
			id: 'others',
			image: '/images/others-mobile.jpg',
			desktop: '/images/others-desktop.jpg',
			name: 'Others',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'security lights',
					state: 'off',
				},
				{
					id: 2,
					icon: 'water',
					name: 'pumping machine',
					state: 'off',
				},
				{
					id: 3,
					icon: 'gate',
					name: 'gate',
					state: 'off',
				},
			],
		},
	],
	error: null,
};

const roomSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		setRooms(state, { payload }) {
			state.data = payload.data;
		},
		toggleDeviceState(state, { payload }) {
			const room = state.data.find((room) => room.id === payload.roomId);
			if (!room)
				state.error = `Room with specified ID: ${payload.roomId} was not found.`;
			else {
				const device = room.devices.find((device) => device.id === payload.id);
				if (!device)
					state.error = `Device with specified ID: ${payload.device} in ${room.name} section was not found.`;
				else {
					device.state = payload.state;
				}
			}
		},
	},
});

export const { toggleDeviceState, setRooms } = roomSlice.actions;
export default roomSlice.reducer;
