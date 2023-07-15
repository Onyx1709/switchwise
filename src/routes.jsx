import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import pageRoutes from './config/routes';

// Error Page
import Error from './pages/error';
import NotFound from './pages/not-found';

// Layout
import DashboardLayout from './layout/dashboard';

// Auth
import Home from './pages';
import Authentication from './pages/account/authentication';
import ForgotPassword from './pages/account/forgot-password';
import Login from './pages/account/login';
import Register from './pages/account/register';

// Dashboard
import Dashboard from './pages/dashboard';

const routes = [
	{
		path: pageRoutes.HOME_PAGE,
		element: <Home />,
	},
	{
		path: pageRoutes.AUTHENTICATION_PAGE,
		element: <Authentication />,
	},
	{
		path: pageRoutes.FORGOT_PASSWORD_PAGE,
		element: <ForgotPassword />,
	},
	{
		path: pageRoutes.LOGIN_PAGE,
		element: <Login />,
	},
	{
		path: pageRoutes.REGISTER_PAGE,
		element: <Register />,
	},
	{
		path: pageRoutes.DASHBOARD_PAGE,
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				path: pageRoutes.DASHBOARD_PAGE,
				element: <Dashboard />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

// Added errorElement for all pages
const erroredRoutes = routes.map((route) => ({
	...route,
	element: (
		<>
			{route.element}
			<ScrollRestoration />
		</>
	),
	errorElement: <Error />,
}));

const router = createBrowserRouter(erroredRoutes);

export default router;
