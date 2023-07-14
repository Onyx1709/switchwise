import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<ConfigProvider
				theme={{
					token: {
						colorBgPrimary: '1A1A1A',
					},
				}}
			>
				<RouterProvider router={router} />
			</ConfigProvider>
		</Provider>
	);
}

export default App;
