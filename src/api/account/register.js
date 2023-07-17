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

			// Update displayName in profile info with fullName
			await updateProfileInfo({
				displayName: data.displayName,
			});

			// Remove the password
			delete data.password;

			return {
				data: {
					...data,
					...response,
				},
			};
		}
	} catch (error) {
		return {
			error: {
				message: error.message,
			},
		};
	}
}
