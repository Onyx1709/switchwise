import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Page() {
	return (
		<div>
			<Link to="/">
				<Button>Go to home page</Button>
			</Link>
		</div>
	);
}

export default Page;
