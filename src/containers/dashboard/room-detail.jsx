import { useParams } from 'react-router-dom';

import Device from '../../components/room/device';
import rooms from '../../firebase/rooms';
import NotFound from '../../pages/not-found';

function RoomDetail() {
	const { id } = useParams();

	const room = rooms.data.find((room) => room.id === id);

	if (!room) return <NotFound />;

	return (
		<div className="w-full">
			<div className="h-[225px] mb-3 w-full sm:h-[250px] md:h-[275px] lg:h-[300px]">
				<img
					className={`h-full w-full ${room.desktop ? 'md:hidden' : ''}`}
					src={room.image}
					alt={room.name}
				/>
				{room.desktop && (
					<img
						className="hidden h-full w-full md:inline"
						src={room.desktop}
						alt={room.name}
					/>
				)}
			</div>
			<div className="my-2 py-2">
				<h4 className="font-semibold my-4 text-secondary-500 text-sm md:text-base">
					Turn devices ON/OFF using the toggle.
				</h4>
				<div className="gap-x-4 gap-y-8 grid grid-cols-2 my-3 sm:gap-x-6 md:gap-x-8 md:grid-cols-3">
					{room.devices.map((device, index) => (
						<Device key={index} roomId={room.id} {...device} />
					))}
				</div>
			</div>
		</div>
	);
}

export default RoomDetail;
