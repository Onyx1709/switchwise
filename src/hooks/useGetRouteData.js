import React from 'react';

import { getRouteData } from '../firebase/database';

function useGetRouteData({ id, onError }) {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	const handleLoad = React.useCallback(
		({ error, data }) => {
			if (data) setData(data);
			if (error) setError(error);

			if (loading) setLoading(false);
		},
		[loading]
	);

	React.useEffect(() => {
		getRouteData({
			route: id,
			onError: (error) => {
				handleLoad({ error });
				if (onError) onError(error);
			},
			onSuccess: (data) => handleLoad({ data }),
		});
	}, [id, onError, handleLoad]);

	return {
		loading,
		error,
		data,
	};
}

export default useGetRouteData;
