import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Input } from 'antd';
import React from 'react';

import { emailPasswordSignUp } from '../../firebase/auth';

function Register() {
	const formRef = React.useRef(null);
	const [error, setError] = React.useState(null);

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Sign Up
			</h2>
			{error && (
				<div>
					<Alert message={error} showIcon type="error" />
				</div>
			)}
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					if (formRef.current) {
						emailPasswordSignUp({
							email: formRef.current.email.value,
							password: formRef.current.password.value,
						})
							.then(() => {
								window.alert('Account created successfully!');
							})
							.catch((error) => {
								setError(error.message);
							});
					}
				}}
			>
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
			</form>
		</>
	);
}

export default Register;
