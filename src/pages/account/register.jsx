import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Page() {
	return (
		<div>
			<h1>Register Page</h1>
			<Link to="/account/login">
				<Button type="primary">Login</Button>
			</Link>
		</div>
	);
}

export default Page;
