import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Page() {
	return (
		<div>
			<h1 className="text-center text-blue-500">Home Page</h1>
			<Link to="/account/login">
				<Button type="primary">Go to LOGIN Page</Button>
			</Link>
		</div>
	);
}

export default Page;
