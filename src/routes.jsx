import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import pageRoutes from './config/routes';

// Error Page
import Error from './pages/error';
import NotFound from './pages/not-found';

import Home from './pages';
import Login from './pages/account/login';
import Register from './pages/account/register';

const routes = [
	{
		path: pageRoutes.HOME_PAGE,
		element: <Home />,
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
