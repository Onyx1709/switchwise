import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';

function Register() {
	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Sign Up
			</h2>
			<form>
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
					<Checkbox>
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
			</form>
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
