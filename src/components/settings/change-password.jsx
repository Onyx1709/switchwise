import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Alert, Button, Input } from 'antd';
import React from 'react';
import { Form, useActionData } from 'react-router-dom';

import routes from '../../config/routes';

function ChangePassword() {
	const [form, setForm] = React.useState({
		password1: '',
		password2: '',
	});
	const [error, setError] = React.useState(null);

	const action = useActionData();

	React.useEffect(() => {
		if (action?.data?.message) {
			setForm({
				password1: '',
				password2: '',
			});
		}
		if (action?.error) setError(action.error.message);
	}, [action]);

	return (
		<>
			{error && (
				<div className="my-3">
					<Alert
						closable
						message={error}
						onClose={() => setError(null)}
						showIcon
						type="error"
					/>
				</div>
			)}
			<Form className="w-full" method="post" action={routes.SETTINGS_PAGE}>
				<div className="my-5">
					<label
						className="block font-medium my-1 text-xs text-secondary-400"
						htmlFor="password1"
					>
						New Password
					</label>
					<Input.Password
						value={form.password1}
						onChange={({ target: { value } }) => {
							setForm((prevState) => ({
								...prevState,
								password1: value,
							}));
						}}
						allowClear
						className="border-secondary-500 rounded-3xl"
						id="password1"
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
						name="password1"
						placeholder="**********"
						shape="round"
						size="large"
						// type="password"
					/>
				</div>
				<div className="my-5">
					<label
						className="block font-medium my-1 text-xs text-secondary-400"
						htmlFor="password2"
					>
						Re-enter New Password
					</label>
					<Input.Password
						value={form.password2}
						onChange={({ target: { value } }) => {
							setForm((prevState) => ({
								...prevState,
								password2: value,
							}));
						}}
						allowClear
						className="border-secondary-500 rounded-3xl"
						id="password2"
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
						name="password2"
						placeholder="**********"
						shape="round"
						size="large"
						// type="password"
					/>
				</div>
				<div className="my-5">
					<Button
						block
						name="password"
						htmlType="submit"
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Update</span>
					</Button>
				</div>
			</Form>
		</>
	);
}

export default ChangePassword;
