const rooms = [
	{
		image: '/images/living-room.png',
		name: 'Living Room',
		numberOfDevices: 3,
	},
	{
		image: '/images/bedroom-1.png',
		name: 'Bedroom 1',
		numberOfDevices: 2,
	},
	{
		image: '/images/bedroom-2.png',
		name: 'Bedroom 2',
		numberOfDevices: 2,
	},
	{
		image: '/images/others-1.png',
		name: 'Others',
		numberOfDevices: 3,
	},
];

function Dashboard() {
	return (
		<div className="w-full">
			<div className="h-[225px] mb-3 w-full">
				<img
					className="h-full w-full"
					src="/images/dashboard-desktop.png"
					alt="deashboard"
				/>
			</div>
			<div className="my-2 py-2">
				<h4 className="font-semibold my-4 text-secondary-500 text-sm md:text-base">
					Pick a zone you wish to control.
				</h4>
				<div className="gap-8 grid grid-cols-1 my-3 sm:grid-cols-2 lg:grid-cols-3">
					{rooms.map((room, index) => (
						<div
							className="bg-white cursor-pointer duration-500 rounded-md shadow-lg transform hover:scale-105"
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
								<h5 className="font-medium text-sm tracking-wide md:text-base">
									{room.name}
								</h5>
								<p className="font-medium text-sm md:text-base">
									{room.numberOfDevices} <small>devices</small>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
