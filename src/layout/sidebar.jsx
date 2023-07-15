import React from 'react';

import routes from '../config/routes';

const sidebarStyle =
	'absolute bg-primary-500 duration-1000 h-full overflow-y-auto transform top-16 w-3/4 z-50 sm:top-14 md:px-2 md:w-1/3 lg:fixed lg:px-0 lg:py-6 lg:top-0 lg:translate-x-0 lg:w-1/6 xl:py-7';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setVisible, visible }, ref) => {
	const links = React.useMemo(
		() => [
			{
				icon: () => <></>,
				title: 'dashboard',
				href: routes.DASHBOARD_PAGE,
			},
			{
				icon: () => <></>,
				title: 'file manager',
				href: routes.ROOMS_PAGE,
			},
		],
		[]
	);

	return (
		<nav
			ref={ref}
			className={`${
				visible ? 'translate-x-0' : '-translate-x-full'
			} ${sidebarStyle}`}
		>
			<div className="mt-3">
				{links.map(({ href, title, icon: Icon }, index) => {
					return (
						<a key={index} href={href} onClick={() => setVisible(false)}>
							<Icon /> {title}
						</a>
					);
				})}
			</div>
		</nav>
	);
};

Sidebar.displayName = 'Sidebar';

const Component = React.forwardRef(Sidebar);

export default Component;
