import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

import { USE_FIREBASE_EMULATOR } from '../../config';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(USE_FIREBASE_EMULATOR ? undefined : firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

if (USE_FIREBASE_EMULATOR) {
	const authUrl = `http://localhost:${
		import.meta.env.VITE_FIREBASE_AUTH_EMULATOR_PORT
	}`;
	const databasePort = import.meta.env.VITE_FIREBASE_DATABASE_EMULATOR_PORT;
	const storagePort = import.meta.env.VITE_FIREBASE_STORAGE_EMULATOR_PORT;

	connectAuthEmulator(auth, authUrl, { disableWarnings: true });
	connectDatabaseEmulator(db, 'localhost', databasePort);
	connectStorageEmulator(storage, 'localhost', storagePort);
}
