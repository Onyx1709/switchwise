import { useParams } from 'react-router-dom';

function RoomDetail() {
	const { id } = useParams();

	return <div>Detail Page ROOM ID {id}</div>;
}

export default RoomDetail;
