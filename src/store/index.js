import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth';
import roomsReducer from './features/rooms';
import { NODE_ENV } from '../config';

const store = configureStore({
	devTools: NODE_ENV !== 'production',
	reducer: {
		auth: authReducer,
		rooms: roomsReducer,
	},
});

export default store;
