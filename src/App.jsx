import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

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
				<CheckAuth>
					<RouterProvider router={router} />
				</CheckAuth>
			</ConfigProvider>
		</Provider>
	);
}

export default App;
