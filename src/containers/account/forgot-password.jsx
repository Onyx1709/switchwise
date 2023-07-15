import { Button, Input } from 'antd';

function ForgotPassword() {
	return (
		<div className="max-w-[400px] mx-auto p-6">
			{/* Logo */}
			<div className="h-[21px] mx-auto w-[120px] md:h-[32px] md:w-[181px]">
				<img
					className="h-full w-full md:hidden"
					src="/images/mobile-login-switchwise.png"
					alt="SwitchWise"
				/>
				<img
					className="hidden h-full w-full md:block"
					src="/images/desktop-login-switchwise.png"
					alt="SwitchWise"
				/>
			</div>
			{/* Logo */}

			<div className="bg-gray-50 my-4 rounded-lg p-6 shadow-lg">
				<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
					Forgot Password?
				</h2>
				<p className="font-medium leading-6 my-3 px-2 text-center text-secondary-500 text-sm">
					Enter your registered email address to receive your password reset
					instructions.
				</p>
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
					<div className="my-3 py-2">
						<Button
							block
							htmlType="submit"
							size="large"
							shape="round"
							type="primary"
						>
							<span className="px-4 text-sm">Continue</span>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;
