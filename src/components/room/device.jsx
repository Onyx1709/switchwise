/* eslint-disable react/prop-types */
import { Switch } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Bars, Bulb, FanIcon, GateIcon, SocketIcon, WaterIcon } from './icons';
import { toggleDeviceState } from '../../store/features/rooms';

const classes =
	'border-2 border-solid border-primary-500 duration-300 flex flex-col h-full items-center justify-between px-4 py-3 rounded-md shadow-lg transition-all transform';
const activeClasses = 'bg-primary-500 text-gray-100';
const inactiveClasses = 'bg-transparent text-primary-500';

function Icon({ name, ...props }) {
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
			<Component {...props} />
		</span>
	);
}

function Device({ id, icon, roomId, name, state = 'off' }) {
	const dispatch = useDispatch();

	const active = React.useMemo(() => state === 'on', [state]);

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
					checked={state === 'on'}
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
