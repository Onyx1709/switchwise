import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Page() {
	return (
		<div>
			<h1 className="text-center text-blue-500">Login Page</h1>
			<Link to="/">
				<Button type="primary">Go to HOME Page</Button>
			</Link>
		</div>
	);
}

export default Page;
