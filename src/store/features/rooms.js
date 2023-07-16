import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			id: 'living-room',
			image: '/images/living-room.png',
			name: 'Living Room',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'on',
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
			image: '/images/bedroom-1.png',
			name: 'Bedroom 1',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'on',
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
			image: '/images/bedroom-2.png',
			name: 'Bedroom 2',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'lights',
					state: 'on',
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
			image: '/images/others-1.png',
			name: 'Others',
			devices: [
				{
					id: 1,
					icon: 'bulb',
					name: 'security lights',
					state: 'on',
				},
				{
					id: 2,
					icon: 'water-drop',
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
				state.error = [
					`Room with specified ID: ${payload.roomId} was not found.`,
				];
			else {
				const device = room.devices.find((device) => device.id === payload.id);
				if (!device)
					state.error = [
						`Device with specified ID: ${payload.device} in ${room.name} section was not found.`,
					];
				else {
					device.state = payload.state;
				}
			}
		},
	},
});

export const { toggleDeviceState, setRooms } = roomSlice.actions;
export default roomSlice.reducer;
