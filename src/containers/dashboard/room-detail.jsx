import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Device from '../../components/room/device';
import NotFound from '../../pages/not-found';

function RoomDetail() {
	const { id } = useParams();

	const room = useSelector((state) =>
		state.rooms.data.find((room) => room.id === id)
	);

	if (!room) return <NotFound />;

	return (
		<div className="w-full">
			<div className="h-[225px] mb-3 w-full sm:h-[250px] md:h-[275px] lg:h-[300px]">
				<img className="h-full w-full" src={room.image} alt={room.name} />
			</div>
			<div className="my-2 py-2">
				<h4 className="font-semibold my-4 text-secondary-500 text-sm md:text-base">
					Turn devices ON/OFF using the toggle.
				</h4>
				<div className="gap-8 grid grid-cols-2 my-3 md:grid-cols-3">
					{room.devices.map((device, index) => (
						<Device key={index} roomId={room.id} {...device} />
					))}
				</div>
			</div>
		</div>
	);
}

export default RoomDetail;
