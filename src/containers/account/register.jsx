import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Checkbox, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Link, useActionData } from 'react-router-dom';

import routes from '../../config/routes';
import { login } from '../../store/features/auth';

function Register() {
	const action = useActionData();
	const dispatch = useDispatch();

	const { data, error } = React.useMemo(() => {
		const value = {
			data: undefined,
			error: undefined,
		};
		if (action?.data) value.data = action.data;
		if (action?.error) value.error = action.error;
		return value;
	}, [action]);

	React.useEffect(() => {
		if (data) dispatch(login(data));
	}, [data, dispatch]);

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Sign Up
			</h2>
			{error && (
				<div>
					<Alert message={error.message} showIcon type="error" />
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
				<h3 className="font-medium text-center text-secondary-500">OR</h3>
				<div className="my-5">
					<Button
						block
						className="border-0 bg-secondary-500 hover:border-0 hover:bg-secondary-400"
						htmlType="button"
						size="large"
						shape="round"
						title="Log In with Gmail"
					>
						<span className="inline-block text-sm text-gray-100">
							<img
								className="h-[16px] mr-2 w-[16px]"
								src="/images/logos_google-icon.png"
								alt=""
							/>
							Sign Up with Gmail
						</span>
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
