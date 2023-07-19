import {
	createUserWithEmailAndPassword,
	updatePassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { auth } from '.';
import { handleError } from './utils';

// get logged in user info
export async function getProfile() {
	try {
		if (auth.currentUser)
			return {
				data: {
					displayName: auth.currentUser.displayName,
					email: auth.currentUser.email,
					id: auth.currentUser.uid,
					image: auth.currentUser.photoURL,
					phone: auth.currentUser.phoneNumber,
				},
			};
		return null;
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}

// update user profile info
export async function updateProfileInfo(payload) {
	// payload = { displayName: '', photoURL: '' }
	try {
		if (auth.currentUser) {
			const data = await updateProfile(auth.currentUser, payload);
			return { data };
		} else {
			return {
				error: {
					message: 'Authentication credentials were not provided!',
				},
			};
		}
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}

// TODO: Remove this function. Not being used.
// register use with email and password
export async function emailPasswordSignUp({ email, password }) {
	try {
		const credentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		if (credentials?.user) {
			return {
				data: {
					dsiplayName: credentials.user.displayName,
					email: credentials.user.email,
					id: credentials.user.uid,
					image: credentials.user.photoURL,
					phone: credentials.user.phoneNumber,
				},
			};
		}

		return {
			error: {
				message: 'A server error occurred. Unable to sign up!',
			},
		};
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}

// Sign in with email and password
export async function emailPasswordLogin({ email, password }) {
	try {
		const credentials = await signInWithEmailAndPassword(auth, email, password);

		if (credentials?.user) {
			return {
				data: {
					displayName: credentials.user.displayName,
					email: credentials.user.email,
					id: credentials.user.uid,
					image: credentials.user.photoURL,
					phone: credentials.user.phoneNumber,
				},
			};
		}

		return {
			error: {
				message: 'Unable to login with provided credentials',
			},
		};
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}

// Logout user
export async function logout() {
	try {
		await signOut(auth);
		return { data: { message: 'Signed out successfully!' } };
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}

// Update/Change user password
export async function changePassword({ password }) {
	try {
		if (auth.currentUser) {
			await updatePassword(auth.currentUser, password);
			return {
				data: {
					message: 'Password updated successfully!',
				},
			};
		} else {
			return {
				error: {
					message: 'Authentication credentials were not provided!',
				},
			};
		}
	} catch (error) {
		return {
			error: handleError(error),
		};
	}
}
