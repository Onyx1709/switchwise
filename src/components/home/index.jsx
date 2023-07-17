import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';
import useLogout from '../../hooks/useLogout';

export function NavButtons() {
	const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
	const { logout: handleLogout, loading: logoutLoading } = useLogout();

	if (isLoading) return <>Loading...</>;

	if (!isAuthenticated)
		return (
			<div className="hidden md:flex md:items-center">
				<div className="mx-4">
					<Link className="w-full" to={routes.LOGIN_PAGE}>
						<Button block shape="round" size="large" type="default">
							<span className="inline-block px-4 text-sm">Log In</span>
						</Button>
					</Link>
				</div>
				<div>
					<Link className="w-full" to={routes.REGISTER_PAGE}>
						<Button block shape="round" size="large" type="primary">
							<span className="inline-block px-4 text-sm">Sign Up</span>
						</Button>
					</Link>
				</div>
			</div>
		);

	return (
		<div className="hidden md:flex md:items-center">
			<div className="mx-4">
				<Link className="w-full" to={routes.DASHBOARD_PAGE}>
					<Button
						block
						disabled={logoutLoading}
						shape="round"
						size="large"
						type="primary"
					>
						<span className="inline-block px-4 text-sm">Dashboard</span>
					</Button>
				</Link>
			</div>
			<div>
				<span className="w-full" to={routes.REGISTER_PAGE}>
					<Button
						block
						onClick={handleLogout}
						disabled={logoutLoading}
						loading={logoutLoading}
						shape="round"
						size="large"
						type="default"
					>
						<span className="inline-block px-4 text-sm">Sign Out</span>
					</Button>
				</span>
			</div>
		</div>
	);
}

export function HomeButtons() {
	const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
	const { logout: handleLogout, loading: logoutLoading } = useLogout();

	if (isLoading) return <>Loading...</>;

	if (!isAuthenticated)
		return (
			<div className="flex justify-center my-3 md:justify-start">
				<Link className="hidden md:inline" to={routes.REGISTER_PAGE}>
					<Button size="large" shape="round" type="primary">
						<span className="px-4 text-sm">Get Started</span>
					</Button>
				</Link>
				<Link className="mx-2 md:hidden" to={routes.REGISTER_PAGE}>
					<Button size="large" shape="round" type="primary">
						<span className="px-4 text-sm">Sign Up</span>
					</Button>
				</Link>
				<Link className="inline-block mx-2 md:hidden" to={routes.LOGIN_PAGE}>
					<Button size="large" shape="round" type="default">
						<span className="px-4 text-sm">Login</span>
					</Button>
				</Link>
			</div>
		);

	return (
		<div className="flex justify-center my-3 md:justify-start">
			<Link className="hidden md:inline" to={routes.DASHBOARD_PAGE}>
				<Button size="large" shape="round" type="primary">
					<span className="px-4 text-sm">Get Started</span>
				</Button>
			</Link>
			<Link className="mx-2 md:hidden" to={routes.DASHBOARD_PAGE}>
				<Button size="large" shape="round" type="primary">
					<span className="px-4 text-sm">Dashboard</span>
				</Button>
			</Link>
			<span className="inline-block mx-2 md:hidden" onClick={handleLogout}>
				<Button
					disabled={logoutLoading}
					loading={logoutLoading}
					size="large"
					shape="round"
					type="default"
				>
					<span className="px-4 text-sm">Sign Out</span>
				</Button>
			</span>
		</div>
	);
}
