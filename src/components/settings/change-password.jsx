import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';

function ChangePassword() {
	return (
		<form className="w-full">
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="currentPassword"
				>
					Current Password
				</label>
				<Input.Password
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="currentPassword"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					name="currentPassword"
					placeholder="**********"
					shape="round"
					size="large"
					// type="password"
				/>
			</div>
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="newPassword"
				>
					New Password
				</label>
				<Input.Password
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="newPassword"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					name="newPassword"
					placeholder="**********"
					shape="round"
					size="large"
					// type="password"
				/>
			</div>
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="newPassword2"
				>
					Re-enter New Password
				</label>
				<Input.Password
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="newPassword2"
					iconRender={(visible) =>
						visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
					}
					name="newPassword2"
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
					size="large"
					shape="round"
					type="primary"
				>
					<span className="px-4 text-sm">Update</span>
				</Button>
			</div>
		</form>
	);
}

export default ChangePassword;
