import React from 'react';

import { logout } from '../firebase/auth';

function useLogout() {
	const [loading, setLoading] = React.useState(false);

	const handleLogout = React.useCallback(async () => {
		try {
			setLoading(true);
			const { error } = await logout();
			if (error) window.alert(error.message);
		} catch (error) {
			window.alert(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return {
		loading,
		logout: handleLogout,
	};
}

export default useLogout;
