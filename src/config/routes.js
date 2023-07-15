export const HOME_PAGE = '/';

// Auth
export const AUTHENTICATION_PAGE = '/account/authentication/';
export const FORGOT_PASSWORD_PAGE = '/account/forgot-password/';
export const LOGIN_PAGE = '/account/login';
export const REGISTER_PAGE = '/account/register';

// Dashboard
export const DASHBOARD_PAGE = '/dashboard/';
export const ROOM_PAGE = (id) => '/dashboard/rooms/' + id + '/';
export const SETTINGS_PAGE = '/dashboard/settings/';

const routes = {
	// Auth
	AUTHENTICATION_PAGE,
	FORGOT_PASSWORD_PAGE,
	HOME_PAGE,
	LOGIN_PAGE,
	REGISTER_PAGE,

	// Dashboard
	DASHBOARD_PAGE,
	SETTINGS_PAGE,
	ROOM_PAGE,
};

export default routes;
