import React from 'react';
import { useNavigate } from 'react-router-dom';

import routes from '../config/routes';
import { logout } from '../firebase/auth';

function useLogout() {
	const [loading, setLoading] = React.useState(false);

	const navigate = useNavigate();

	const handleLogout = React.useCallback(async () => {
		try {
			setLoading(true);
			const { error } = await logout();
			if (error) window.alert(error.message);
			else navigate(routes.HOME_PAGE);
		} catch (error) {
			window.alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [navigate]);

	return {
		loading,
		logout: handleLogout,
	};
}

export default useLogout;
