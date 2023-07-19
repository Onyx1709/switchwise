import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Input } from 'antd';
import React from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

import routes from '../../config/routes';

function Login() {
	const action = useActionData();
	const { state } = useNavigation();

	const loading = React.useMemo(
		() => state === 'submitting' || state === 'loading',
		[state]
	);

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Log In
			</h2>
			{action?.error && (
				<div>
					<Alert message={action.error.message} showIcon type="error" />
				</div>
			)}
			<Form method="post" action={routes.LOGIN_PAGE}>
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
						disabled={loading}
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
						disabled={loading}
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
					<Link to={routes.FORGOT_PASSWORD_PAGE}>
						<Button htmlType="button" type="link">
							<span className="text-primary-500">Forgot Password?</span>
						</Button>
					</Link>
				</div>
				<div className="my-5">
					<Button
						block
						htmlType="submit"
						name="submit"
						loading={loading}
						disabled={loading}
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Log In</span>
					</Button>
				</div>
			</Form>
		</>
	);
}

export default Login;
