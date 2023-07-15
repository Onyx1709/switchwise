import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Page() {
	return (
		<div>
			<h1>Page Not FOUND</h1>
			<Link to="/">
				<Button>Go to home page</Button>
			</Link>
		</div>
	);
}

export default Page;
