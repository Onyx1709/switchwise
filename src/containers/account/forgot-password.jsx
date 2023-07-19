import { Alert, Button, Input } from 'antd';
import { Form, useActionData } from 'react-router-dom';

import routes from '../../config/routes';

function ForgotPassword() {
	const action = useActionData();

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Forgot Password?
			</h2>
			{action?.error && (
				<div>
					<Alert message={action.error.message} showIcon type="error" />
				</div>
			)}
			<p className="font-medium leading-6 my-3 px-2 text-center text-secondary-500 text-sm">
				Enter your registered email address to receive your password reset
				instructions.
			</p>
			<Form method="post" action={routes.FORGOT_PASSWORD_PAGE}>
				<div className="my-5">
					<label
						className="block font-medium my-1 text-xs text-secondary-400"
						htmlFor="email"
					>
						Email Address
					</label>
					<Input
						allowClear
						className="border-secondary-500 rounded-3xl"
						id="email"
						name="email"
						placeholder="johndoe@gmail.com"
						shape=""
						size="large"
						// status="error"
						type="email"
					/>
				</div>
				<div className="my-3 py-2">
					<Button
						block
						htmlType="submit"
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Continue</span>
					</Button>
				</div>
			</Form>
		</>
	);
}

export default ForgotPassword;
