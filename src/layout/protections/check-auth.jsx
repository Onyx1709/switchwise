import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { auth } from '../../firebase';
import { login, logout } from '../../store/features/auth';

function CheckAuth() {
	const [loading, setLoading] = React.useState(true);

	const dispatch = useDispatch();

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user)
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						id: user.uid,
						image: user.photoURL,
						phone: user.phoneNumber,
					})
				);
			else dispatch(logout());

			setLoading(false);
		});
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;

	return <Outlet />;
}

export default CheckAuth;
