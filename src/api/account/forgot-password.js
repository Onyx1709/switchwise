import { resetPassword } from '../../firebase/auth';

export default async function forgotPassword({ request }) {
	try {
		// Get the form data from the request
		const form = await request.formData();
		const data = {
			email: form.get('email'),
			submit: form.get('submit'),
		};

		// Check if it's a POST request and submit field is not undefined
		if (request.method === 'POST' && data.submit !== 'undefined') {
			// check the email field was passed
			if (!data.email) throw new Error('Email address is required!');

			// rest the password
			await resetPassword({ email: data.email });

			return {
				data: {
					message: 'Password email sent!',
				},
			};
		}

		return {
			error: {
				message: 'API route was not found!',
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
