import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import routes from '../../config/routes';

function Authenticated() {
	const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

	const { pathname } = useLocation();

	if (isLoading) return <>Loading...</>;

	if (!isAuthenticated)
		return (
			<Navigate
				to={routes.LOGIN_PAGE_URL + '?next=' + pathname}
				state={{ next: pathname }}
			/>
		);

	return <Outlet />;
}

export default Authenticated;
