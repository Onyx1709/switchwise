import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Checkbox, Input } from 'antd';
import { Form, Link, useActionData } from 'react-router-dom';

import routes from '../../config/routes';

function Register() {
	const action = useActionData();

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Sign Up
			</h2>
			{action?.error && (
				<div>
					<Alert message={action.error.message} showIcon type="error" />
				</div>
			)}
			<Form method="post" action={routes.REGISTER_PAGE}>
				<div className="my-5">
					<label
						className="block font-medium my-1 text-xs text-secondary-400"
						htmlFor="full_name"
					>
						Full name
					</label>
					<Input
						allowClear
						className="border-secondary-500 rounded-3xl"
						id="full_name"
						name="full_name"
						placeholder="John Doe"
						size="large"
						// status="error"
						type="text"
					/>
				</div>
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
				<div className="my-5">
					<label
						className="block font-medium my-1 text-xs text-secondary-400"
						htmlFor="password"
					>
						Password
					</label>
					<Input.Password
						allowClear
						className="border-secondary-500 rounded-3xl"
						id="password"
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
						name="password"
						placeholder="**********"
						shape="round"
						size="large"
						// type="password"
					/>
				</div>
				<div className="text-right">
					<Checkbox name="accept_terms">
						I agree to the{' '}
						<Link className="text-primary-500" to="#">
							terms and conditions,
						</Link>{' '}
						as well as the{' '}
						<Link className="text-primary-500" to="#">
							privacy policy
						</Link>{' '}
						of this service.
					</Checkbox>
				</div>
				<div className="my-5">
					<Button
						block
						htmlType="submit"
						name="submit"
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Sign Up</span>
					</Button>
				</div>
			</Form>
			<p className="font-medium my-5 text-center text-secondary-500 text-sm">
				Already have an account?{' '}
				<Link to={routes.LOGIN_PAGE}>
					<Button type="link">
						<span>Log In</span>
					</Button>
				</Link>
			</p>
		</>
	);
}

export default Register;
