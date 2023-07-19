/* eslint-disable react/prop-types */
import { Switch } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Bars, Bulb, FanIcon, GateIcon, SocketIcon, WaterIcon } from './icons';
import useGetRouteData from '../../hooks/useGetRouteData';
// import useSetRouteData from '../../hooks/useSetRouteData';
import { useNotificationContext } from '../../store/contexts';
import { toggleDeviceState } from '../../store/features/rooms';

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

function Device({ id, icon, roomId, name }) {
	const dispatch = useDispatch();
	const { api } = useNotificationContext();

	const { data } = useGetRouteData({
		id,
		onError(error) {
			api.error({
				message: 'Error at switch ' + id,
				description: error.message,
			});
		},
	});

	const active = React.useMemo(() => data?.value === 1, [data]);

	console.log(id, data?.value);

	// const action = useSetRouteData({ id });

	// console.log('DATA :>> ', data);

	// console.log('ACTION :>> ', action);

	const handleToggle = React.useCallback(
		(checked) => {
			const payload = {
				id,
				roomId,
				state: checked ? 'on' : 'off',
			};
			dispatch(toggleDeviceState(payload));
		},
		[dispatch, id, roomId]
	);

	return (
		<div className={`${active ? activeClasses : inactiveClasses} ${classes}`}>
			<div className="flex justify-end mb-1 w-full">
				<Switch
					className={active ? 'active-device' : undefined}
					onChange={handleToggle}
					checked={active}
				/>
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
