import { Tabs } from 'antd';
import React from 'react';

import { ChangePassword, Profile } from '../../components/settings';

function Settings() {
	const [active, setActive] = React.useState('1');

	const items = [
		{
			key: 'profile',
			label: 'Profile',
			children: <Profile active={active === 'profile'} />,
		},
		{
			key: 'password',
			label: 'Change Password',
			children: <ChangePassword active={active === 'password'} />,
		},
	];

	return (
		<div>
			<h3 className="font-semibold my-3 text-center text-secondary-500 text-base md:text-lg lg:text-left">
				Settings
			</h3>

			<div className="max-w-[400px] mx-auto p-6 lg:max-w-[300px] lg:mx-0 lg:px-0 lg:py-2">
				<Tabs
					defaultActiveKey={active}
					items={items}
					onChange={(key) => setActive(key)}
				/>
			</div>
		</div>
	);
}

export default Settings;
