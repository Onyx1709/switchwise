import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROOM_PAGE } from '../../config/routes';

function Dashboard() {
	const rooms = useSelector((state) => state.rooms.data);

	return (
		<div className="w-full">
			<div className="h-[225px] mb-3 w-full sm:h-[250px] md:h-[275px] lg:h-[300px]">
				<img
					className="h-full w-full lg:hidden"
					src="/images/dashboard-mobile.jpg"
					alt="dashboard"
				/>
				<img
					className="hidden h-full w-full lg:inline"
					src="/images/dashboard-desktop.jpg"
					alt="dashboard"
				/>
			</div>
			<div className="my-2 py-2">
				<h4 className="font-semibold my-4 text-secondary-500 text-sm md:text-base">
					Pick a zone you wish to control.
				</h4>
				<div className="gap-8 grid grid-cols-1 my-3 sm:grid-cols-2 lg:grid-cols-3">
					{rooms.map((room, index) => (
						<Link
							className="bg-white cursor-pointer duration-500 no-underline rounded-md shadow-lg transform hover:scale-105"
							to={ROOM_PAGE(room.id)}
							key={index}
						>
							<div className="h-40 rounded-t-md w-full">
								<img
									className="h-full rounded-t-md w-full"
									src={room.image}
									alt={room.name}
								/>
							</div>
							<div className="flex items-center justify-between px-4 py-2 text-primary-500">
								<h5 className="font-medium m-0 p-0 text-sm tracking-wide md:text-base">
									{room.name}
								</h5>
								<p className="font-medium m-0 p-0 text-sm md:text-base">
									{room.devices.length}{' '}
									<small className="m-0 p-0">devices</small>
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
