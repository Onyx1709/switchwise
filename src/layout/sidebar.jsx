import {
	LeftSquareOutlined,
	CloseOutlined,
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../config/routes';

const sidebarStyle =
	'bg-white duration-1000 h-full ml-auto overflow-y-auto shadow-lg transform w-3/5 md:px-2 md:w-1/3 lg:px-0 lg:py-6 lg:translate-x-0 lg:w-full xl:py-7';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setVisible, visible }, ref) => {
	const links = React.useMemo(
		() => [
			{
				icon: LeftSquareOutlined,
				title: 'Home',
				href: routes.DASHBOARD_PAGE,
			},
			{
				icon: HomeOutlined,
				title: 'Rooms',
				links: [
					{
						title: 'ROOM 1',
						href: routes.SETTINGS_PAGE,
					},
				],
			},
			{
				icon: SettingOutlined,
				title: 'Settings',
				href: routes.SETTINGS_PAGE,
			},
		],
		[]
	);

	return (
		<nav
			className={`${
				visible ? 'opacity-100 z-100' : 'opacity-0 z-[-100]'
			} duration-500 fixed h-full left-0 top-0 overflow-x-hidden w-full lg:bg-gray-100 lg:opacity-100 lg:shadow-lg lg:w-1/6 lg:z-0`}
			ref={ref}
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.2)',
			}}
		>
			<div
				className={`${
					visible ? 'translate-x-0' : 'translate-x-full'
				} ${sidebarStyle}`}
			>
				<div className="flex items-center justify-between px-4 py-5">
					<span
						className="cursor-pointer text-color-primary text-lg"
						onClick={() => setVisible(false)}
					>
						<CloseOutlined />
					</span>
					<span className="cursor-pointer text-color-primary text-lg">
						<UserOutlined />
					</span>
				</div>
				<div className="mt-3">
					{links.map(({ href, title, icon: Icon }, index) => {
						return (
							<Link
								className="cursor-pointer flex font-semibold items-center no-underline p-4 text-secondary-500 text-sm hover:bg-primary-500 hover:text-gray-100"
								key={index}
								href={href || '#'}
								onClick={visible ? () => setVisible(false) : undefined}
							>
								<span className="mr-2">
									<Icon />
								</span>
								<span className="">{title}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

Sidebar.displayName = 'Sidebar';

const Component = React.forwardRef(Sidebar);

export default Component;
