import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import CheckAuth from './layout/protections/check-auth';
import router from './routes';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#1DA1F2',
					},
				}}
			>
				<ErrorBoundary>
					<CheckAuth>
						<RouterProvider router={router} />
					</CheckAuth>
				</ErrorBoundary>
			</ConfigProvider>
		</Provider>
	);
}

export default App;
