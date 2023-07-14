import { createBrowserRouter } from 'react-router-dom';

// Error Page
import Error from './pages/error';

import Home from './pages';
import Login from './pages/account/login';

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/account/login/',
		element: <Login />,
	},
	{
		path: '*',
		element: <>Not Found</>,
	},
];

const erroredRoutes = routes.map((route) => ({
	...route,
	errorElement: <Error />,
}));

const router = createBrowserRouter(erroredRoutes);

export default router;
