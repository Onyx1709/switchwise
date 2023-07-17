// import { onAuthStateChanged } from 'firebase/auth';
// import React from 'react';
// import { useDispatch } from 'react-redux';

// import { auth } from '../../firebase';
// import { login, logout } from '../../store/features/auth';

function CheckAuth({ children }) {
	// const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user)
	// 			dispatch(
	// 				login({
	// 					displayName: user.displayName,
	// 					email: user.email,
	// 					id: user.uid,
	// 					image: user.photoURL,
	// 					phone: user.phoneNumber,
	// 				})
	// 			);
	// 		else dispatch(logout());

	// 		setLoading(false);
	// 	});
	// }, [dispatch]);

	return children;
}

export default CheckAuth;
