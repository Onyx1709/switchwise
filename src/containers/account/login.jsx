import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';
import Layout from '../../layout/auth';

function Login() {
	return (
		<Layout title="Log In">
			<form>
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
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Log In</span>
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
							Log In with Gmail
						</span>
					</Button>
				</div>
			</form>
			<p className="font-medium my-5 text-center text-secondary-500 text-sm">
				New to SwitchWise?{' '}
				<Link to={routes.REGISTER_PAGE}>
					<Button type="link">Sign Up</Button>
				</Link>
			</p>
		</Layout>
	);
}

export default Login;
