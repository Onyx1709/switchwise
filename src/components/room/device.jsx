/* eslint-disable react/prop-types */
import { Skeleton, Switch, Spin } from 'antd';
import React from 'react';

import { Bars, Bulb, FanIcon, GateIcon, SocketIcon, WaterIcon } from './icons';
import useGetRouteData from '../../hooks/useGetRouteData';
import useSetRouteData from '../../hooks/useSetRouteData';
import { useNotificationContext } from '../../store/contexts';

const classes =
	'border-2 border-solid border-primary-500 duration-300 flex flex-col h-full items-center justify-between px-4 py-3 rounded-md shadow-lg transition-all transform';
const activeClasses = 'bg-primary-500 text-gray-100';
const inactiveClasses = 'bg-transparent text-primary-500';

function Icon({ active, name, ...props }) {
	const Component =
		name === 'bulb'
			? Bulb
			: name === 'gate'
			? GateIcon
			: name === 'fan'
			? FanIcon
			: name === 'socket'
			? SocketIcon
			: name === 'water'
			? WaterIcon
			: Bars;

	return (
		<span className="text-5xl lg:text-7xl">
			<Component active={name !== 'bulb' ? active : undefined} {...props} />
		</span>
	);
}

function Device({ id, icon, name }) {
	const { api } = useNotificationContext();

	const { data, loading: dataLoading } = useGetRouteData({
		id,
		onError(error) {
			api.error({
				message: `Error at ${name} switch!`,
				description: error.message,
			});
		},
	});

	const { mutate: toggle, loading: toggleLoading } = useSetRouteData({
		id,
		name,
		onError(error) {
			api.error({
				message: `Toggle error at ${name} switch`,
				description: error.message,
			});
		},
	});

	const active = React.useMemo(() => data === "1", [data]);

	const handleToggle = React.useCallback(
		(checked) => {
			toggle({ value: checked ? "1" : "0" });
		},
		[toggle]
	);

	if (dataLoading) return <Skeleton active={dataLoading} />;

	return (
		<div className={`${active ? activeClasses : inactiveClasses} ${classes}`}>
			<div className="flex justify-end mb-1 w-full">
				<Spin spinning={toggleLoading} size="small" delay={500}>
					<Switch
						className={active ? 'active-device' : undefined}
						onChange={handleToggle}
						checked={active}
					/>
				</Spin>
			</div>
			<div className="flex justify-center my-3 w-full">
				<Icon active={active} name={icon} />
			</div>
			<h5
				className={`${
					active ? 'text-gray-100' : 'text-primary-500'
				} capitalize mt-1 text-sm w-full`}
			>
				{name}
			</h5>
		</div>
	);
}

export default Device;
