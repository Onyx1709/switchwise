import { Alert, Tabs } from 'antd';
import React from 'react';
import { useActionData } from 'react-router-dom';

import { ChangePassword, Profile } from '../../components/settings';

const items = [
	{
		key: 'profile',
		label: 'Profile',
		children: <Profile />,
	},
	{
		key: 'password',
		label: 'Change Password',
		children: <ChangePassword />,
	},
];

function Settings() {
	const [error, setError] = React.useState(null);

	const action = useActionData();

	React.useEffect(() => {
		if (action?.error) setError(action.error.message);
	}, [action]);

	return (
		<div>
			<h3 className="font-semibold my-3 text-center text-secondary-500 text-base md:text-lg lg:text-left">
				Settings
			</h3>

			{error && (
				<div className="max-w-[400px] my-3 lg:max-w-[350px]">
					<Alert
						closable
						message={error}
						onClose={() => setError(null)}
						showIcon
						type="error"
					/>
				</div>
			)}

			<div className="max-w-[400px] mx-auto p-6 lg:max-w-[350px] lg:mx-0 lg:px-0 lg:py-2">
				<Tabs defaultActiveKey="profile" items={items} />
			</div>
		</div>
	);
}

export default Settings;
