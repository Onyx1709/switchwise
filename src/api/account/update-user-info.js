import { changePassword, updateProfileInfo } from '../../firebase/auth';

export default async function passwordChange({ request }) {
	try {
		// Get the data from the request if request method is POST
		// and the submit name field of change password was found
		const form = await request.formData();
		// Handle password change

		if (request.method === 'POST' && form.get('password') !== undefined) {
			// Get the data from the form
			const data = {
				password1: form.get('password1'),
				password2: form.get('password2'),
			};

			// Verify that password1 === password 2 && it's at least 6 chars
			if (data.password1.trim() !== data.password2.trim())
				throw new Error('Passwords do not match.');
			else if (data.password1.trim().length < 6)
				throw new Error('Password must be at least six characters long.');

			// Change user password
			const response = await changePassword({
				password: data.password1.trim(),
			});

			// Check if there is an error in the response and throw it
			if (response.error) throw new Error(response.error.message);

			return {
				data: {
					for: 'password',
					message: 'Password was updated successfully!',
				},
			};
		}

		if (request.method === 'PUT' && form.get('profile') !== undefined) {
			// Get the data from the form
			const data = {
				displayName: form.get('full_name'),
				email: form.get('email'),
			};

			// Verify the email and displayName
			if (!data.displayName) throw new Error('Full name is required!');
			if (!data.email) throw new Error('Email address is required!');

			// Update profile info
			const response = await updateProfileInfo(data);

			// Check if there is an error in the response and throw it
			if (response.error) throw new Error(response.error.message);

			return {
				data: {
					...data,
					for: 'profile',
					message: 'Profile was updated successfully!',
				},
			};
		}
		return {
			error: {
				message: 'API route was not found.',
			},
		};
	} catch (error) {
		return {
			error: {
				message: error.message,
			},
		};
	}
}
