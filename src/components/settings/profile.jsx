import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

function Profile() {
	return (
		<form>
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
					htmlFor="nickName"
				>
					Nick name
				</label>
				<Input
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="nickName"
					name="nickName"
					placeholder="TheJohnDoe"
					size="large"
					// status="error"
					type="text"
				/>
			</div>
			<div className="my-5">
				<label
					className="block font-medium my-1 text-xs text-secondary-400"
					htmlFor="fullName"
				>
					Full name
				</label>
				<Input
					allowClear
					className="border-secondary-500 rounded-3xl"
					id="fullName"
					name="fullName"
					placeholder="johndoe@gmail.com"
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

export default Profile;
