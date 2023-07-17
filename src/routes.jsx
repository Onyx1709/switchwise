import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import pageRoutes from './config/routes';

// Error Page
import Error from './pages/error';
import NotFound from './pages/not-found';

// Layout
import AuthLayout from './layout/auth';
import DashboardLayout from './layout/dashboard';

// Layout protection
import { Authenticated, NotAuthenticated } from './layout/protections';

// Auth
import Home from './pages';
import Authentication from './pages/account/authentication';
import ForgotPassword from './pages/account/forgot-password';
import Login from './pages/account/login';
import Register from './pages/account/register';

// Dashboard
import Dashboard from './pages/dashboard';
import RoomDetail from './pages/dashboard/rooms/detail';
import Settings from './pages/dashboard/settings';

// APIs
import login from './api/account/login';
import register from './api/account/register';

const routes = [
	{
		index: true,
		path: pageRoutes.HOME_PAGE,
		element: (
			<>
				<Home />
				<ScrollRestoration />
			</>
		),
		errorElement: <Error />,
	},
	{
		path: pageRoutes.AUTH_BASE_PAGE,
		element: (
			<>
				<AuthLayout />
				<ScrollRestoration />
			</>
		),
		children: [
			{
				path: pageRoutes.AUTH_BASE_PAGE,
				element: <NotAuthenticated />,
				children: [
					{
						path: pageRoutes.FORGOT_PASSWORD_PAGE,
						element: <ForgotPassword />,
					},
					{
						action: login,
						path: pageRoutes.LOGIN_PAGE,
						element: <Login />,
					},
					{
						action: register,
						path: pageRoutes.REGISTER_PAGE,
						element: <Register />,
					},
				],
			},
			{
				element: <Authenticated />,
				path: pageRoutes.AUTHENTICATION_PAGE,
				children: [
					{
						index: true,
						path: '',
						element: <Authentication />,
					},
				],
			},
		],
		errorElement: <Error />,
	},
	{
		path: pageRoutes.DASHBOARD_PAGE,
		element: (
			<>
				<Authenticated />
				<ScrollRestoration />
			</>
		),
		children: [
			{
				path: pageRoutes.DASHBOARD_PAGE,
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						path: '',
						element: <Dashboard />,
					},
					{
						path: pageRoutes.ROOM_PAGE(':id'),
						element: <RoomDetail />,
					},
					{
						path: pageRoutes.SETTINGS_PAGE,
						element: <Settings />,
					},
				],
			},
		],
		errorElement: <Error />,
	},

	{
		path: '*',
		element: <NotFound />,
	},
];

const router = createBrowserRouter(routes);

export default router;
