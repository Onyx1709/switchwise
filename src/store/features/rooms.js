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
					id: 'L1',
					icon: 'bulb',
					name: 'lights',
				},
				{
					id: 'L2',
					icon: 'fan',
					name: 'fan',
				},
				{
					id: 'L3',
					icon: 'socket',
					name: 'socket',
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
					id: 'BD11',
					icon: 'bulb',
					name: 'lights',
				},
				{
					id: 'BD12',
					icon: 'socket',
					name: 'socket',
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
					id: 'BD21',
					icon: 'bulb',
					name: 'lights',
				},
				{
					id: 'BD22',
					icon: 'socket',
					name: 'socket',
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
					id: 'OT1',
					icon: 'bulb',
					name: 'security lights',
				},
				{
					id: 'OT2',
					icon: 'water',
					name: 'pumping machine',
				},
				{
					id: 'OT3',
					icon: 'gate',
					name: 'gate',
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
