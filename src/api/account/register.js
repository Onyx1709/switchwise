import { emailPasswordSignUp, updateProfileInfo } from '../../firebase/auth';

export default async function register({ request }) {
	try {
		// Get the data from the request if request method is POST
		// and the submit name field was found
		const form = await request.formData();
		if (request.method === 'POST' && form.get('submit') !== undefined) {
			// Get the data from the form
			const data = {
				displayName: form.get('full_name'),
				email: form.get('email'),
				password: form.get('password'),
				acceptTerms: form.get('accept_terms'),
			};

			// Verify that the use accepted the terms
			if (!data.acceptTerms || data.acceptTerms !== 'on')
				throw new Error(
					'The terms and conditions must be accepted for allowed usage of this system.'
				);

			// Create user
			const response = await emailPasswordSignUp({
				email: data.email,
				password: data.password,
			});

			// Check if there is an error in the response and throw it
			if (response.error) throw new Error(response.error.message);

			// Update displayName in profile info with fullName
			const updateResponse = await updateProfileInfo({
				displayName: data.displayName,
			});

			// Check if there is an error in the update response and throw it
			if (updateResponse.error) throw new Error(updateResponse.error.message);

			// Remove the password
			delete data.password;

			return {
				data: {
					...data,
					...response,
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
