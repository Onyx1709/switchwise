import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useActionData } from 'react-router-dom';

import routes from '../../config/routes';
import { setData } from '../../store/features/auth';

function Profile() {
	const action = useActionData();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.auth.data);

	const [form, setForm] = React.useState(() => ({
		email: data?.email || '',
		full_name: data?.displayName || '',
	}));

	React.useEffect(() => {
		if (action?.data) {
			dispatch(setData(action.data));
		}
	}, [action, dispatch]);

	return (
		<>
			{action?.error && (
				<div className="my-3">
					<Alert message={action.error.message} showIcon type="error" />
				</div>
			)}
			<Form method="post" action={routes.SETTINGS_PAGE}>
				<div className="border-2 border-solid border-secondary-500 cursor-pointer duration-500 flex h-14 items-center justify-center mx-auto my-4 relative rounded-full w-14 active:relative active:top-[2px] hover:scale-105">
					<span className="text-2xl text-secondary-500">
						<UserOutlined />
					</span>
					<span className="absolute bg-white bottom-0 flex h-5 items-center justify-center right-0 rounded-full text-xs text-secondary-500 w-5">
						<CameraOutlined />
					</span>
				</div>

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
						onChange={({ target: { value } }) => {
							setForm((prevState) => ({
								...prevState,
								full_name: value,
							}));
						}}
						value={form.full_name}
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
						onChange={({ target: { value } }) => {
							setForm((prevState) => ({
								...prevState,
								email: value,
							}));
						}}
						value={form.email}
					/>
				</div>

				<div className="my-5">
					<Button
						block
						htmlType="submit"
						name="profile"
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

export default Profile;
