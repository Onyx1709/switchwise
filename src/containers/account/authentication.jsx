import { Button, Input } from 'antd';
import React from 'react';

function Authentication() {
	const ref1 = React.useRef(null);
	const ref2 = React.useRef(null);
	const ref3 = React.useRef(null);
	const ref4 = React.useRef(null);

	const focusInput = React.useCallback((id) => {
		switch (id) {
			case 1:
				if (ref1.current)
					ref1.current.focus({
						cursor: 'end',
					});
				break;
			case 2:
				if (ref2.current)
					ref2.current.focus({
						cursor: 'end',
					});
				break;
			case 3:
				if (ref3.current)
					ref3.current.focus({
						cursor: 'end',
					});
				break;
			case 4:
				if (ref4.current)
					ref4.current.focus({
						cursor: 'end',
					});
				break;
			default:
				break;
		}
	}, []);

	const handleChange = React.useCallback(
		(inputId, value) => {
			// If string is empty and in the input id is not 1 then select the previous input
			if (value.toString().trim() === '' && inputId > 1) {
				const prevId = inputId - 1;
				focusInput(prevId);
			}
			// check if the inputId is less than 4 and the value is not empty then seldct the next input
			else if (value.toString().trim() !== '' && inputId < 4) {
				const nextId = inputId + 1;
				focusInput(nextId);
			}
		},
		[focusInput]
	);

	return (
		<>
			<h2 className="font-semibold my-3 text-center text-lg text-secondary-500 md:text-xl">
				Authentication
			</h2>
			<p className="font-medium leading-6 my-3 px-2 text-center text-secondary-500 text-sm">
				Enter the authentcation code provided to you by the admin
			</p>
			<form className="py-4">
				<div className="flex items-center justify-between">
					<div className="px-3">
						<Input
							className="border-secondary-500 font-medium py-2 text-center text-2xl"
							placeholder="-"
							onChange={({ target: { value } }) => {
								handleChange(1, value);
							}}
							maxLength={1}
							ref={ref1}
						/>
					</div>
					<div className="px-3">
						<Input
							className="border-secondary-500 font-medium py-2 text-center text-2xl"
							placeholder="-"
							onChange={({ target: { value } }) => {
								handleChange(2, value);
							}}
							maxLength={1}
							ref={ref2}
						/>
					</div>
					<div className="px-3">
						<Input
							className="border-secondary-500 font-medium py-2 text-center text-2xl"
							placeholder="-"
							onChange={({ target: { value } }) => {
								handleChange(3, value);
							}}
							maxLength={1}
							ref={ref3}
						/>
					</div>
					<div className="px-3">
						<Input
							className="border-secondary-500 font-medium py-2 text-center text-2xl"
							placeholder="-"
							onChange={({ target: { value } }) => {
								handleChange(4, value);
							}}
							onKeyDown={(e) => {
								console.log(e);
							}}
							maxLength={1}
							ref={ref4}
						/>
					</div>
				</div>
				<div className="my-3 py-2">
					<Button
						block
						htmlType="submit"
						size="large"
						shape="round"
						type="primary"
					>
						<span className="px-4 text-sm">Authenticate</span>
					</Button>
				</div>
			</form>
		</>
	);
}

export default Authentication;
