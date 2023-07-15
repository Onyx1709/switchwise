/* eslint-disable react/prop-types */
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

const activeLinkClasses = 'bg-primary-500 text-gray-100 tracking-widest';
const inactiveLinkClasses =
	'duration-500 text-secondary-500 transform transition hover:bg-primary-500 hover:text-gray-100 hover:tracking-widest';

const DefaultIcon = () => <></>;

export function SimpleLink({
	href = '#',
	icon: Icon = DefaultIcon,
	onClick,
	title,
}) {
	const value = useMatch(href);
	const isActive = React.useMemo(() => value !== null, [value]);

	return (
		<Link
			className={`${
				isActive ? activeLinkClasses : inactiveLinkClasses
			} cursor-pointer flex font-semibold items-center no-underline p-4 rounded-sm text-sm`}
			to={href}
			onClick={onClick}
		>
			<span className="mr-2">
				<Icon />
			</span>
			<span className="">{title}</span>
		</Link>
	);
}

export function ListItemLink({ onClick, href, title }) {
	const activeLinkClasses = 'bg-primary-50 text-primary-500 tracking-widest';
	const inactiveLinkClasses =
		'duration-500 text-secondary-500 transform transition hover:bg-primary-50 hover:text-primary-500 hover:tracking-widest';

	const isActive = useMatch(href);

	return (
		<Link
			className={`${
				isActive ? activeLinkClasses : inactiveLinkClasses
			} cursor-pointer flex font-semibold items-center no-underline px-6 py-3 rounded-sm text-sm`}
			to={href}
			onClick={onClick}
		>
			<span className="">{title}</span>
		</Link>
	);
}

export function ListLink({ icon: Icon, onClick, links, title }) {
	const [visible, setVisible] = React.useState(false);

	const { pathname } = useLocation();

	const isActive = React.useMemo(() => {
		const _pathname =
			pathname !== '/' && !pathname.endsWith('/') ? pathname + '/' : pathname;

		const active1 = links.filter(({ href }) => href === _pathname)[0];
		const active2 = links.filter(
			({ href }) =>
				href && href !== '/' && _pathname !== '/' && _pathname.startsWith(href)
		)[0];

		return active1 || active2 ? true : false;
	}, [links, pathname]);

	return (
		<div>
			<div
				onClick={() => setVisible(!visible)}
				className={`${
					isActive ? activeLinkClasses : inactiveLinkClasses
				} cursor-pointer flex font-semibold items-center justify-between no-underline p-4 rounded-sm text-sm`}
			>
				<div className="flex items-center">
					<span className="mr-2">
						<Icon />
					</span>
					<span className="">{title}</span>
				</div>
				<div>
					{visible ? (
						<CaretDownOutlined className="text-xs" />
					) : (
						<CaretRightOutlined className="text-tiny" />
					)}
				</div>
			</div>
			<div
				className={`${
					visible ? 'block opacity-100 visible' : 'hidden invisible opacity-0'
				} duration-500 px-3 transform transition-all`}
			>
				{links.map((props, index) => (
					<ListItemLink key={index} onClick={onClick} {...props} />
				))}
			</div>
		</div>
	);
}
