import { Button } from 'antd';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';

function ForgotPasswordSuccess() {
	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Reset Successful
			</h2>
			<div className="flex justify-center h-full py-3 w-full">
				<div className="h-full max-h-[215px] max-w-[200px] w-full">
					<img
						className="h-full w-full"
						src="/images/hand_holding_phone.png"
						alt=""
					/>
				</div>
			</div>
			<p className="font-medium leading-6 my-3 px-2 text-center text-secondary-500 text-sm">
				Follow the instructions sent to your email to reset your password.
			</p>
			<div className="my-3 py-2">
				<Link to={routes.LOGIN_PAGE}>
					<Button
						block
						htmlType="submit"
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Back to Login</span>
					</Button>
				</Link>
			</div>
		</>
	);
}

export default ForgotPasswordSuccess;
