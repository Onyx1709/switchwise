import { Tabs } from 'antd';

import { ChangePassword, Profile } from '../../components/settings';

const items = [
	{
		key: '1',
		label: 'Profile',
		children: <Profile />,
	},
	{
		key: '2',
		label: 'Change Password',
		children: <ChangePassword />,
	},
];

function Settings() {
	return (
		<div className="lg:px-6">
			<h3 className="font-semibold my-3 text-center text-secondary-500 text-base md:text-lg lg:text-left">
				Settings
			</h3>

			<div className="max-w-[400px] mx-auto p-6 lg:max-w-[300px] lg:mx-0 lg:px-0 lg:py-2">
				<Tabs defaultActiveKey="1" items={items} />
			</div>
		</div>
	);
}

export default Settings;
