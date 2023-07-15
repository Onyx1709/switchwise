import { BarsOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar';
import useOutsideClick from '../hooks/useOutsideClick';

function Layout() {
	const menu = useOutsideClick();

	return (
		<div className="overflow-x-hidden w-full">
			<div className="bg-gray-100 flex items-center justify-between p-4 md:px-6 md:py-3 lg:hidden">
				{/* Logo */}
				<div>
					<div className="h-[21px] mx-auto w-[120px] md:h-[32px] md:w-[181px]">
						<img
							className="h-full w-full md:hidden"
							src="/images/mobile-login-switchwise.png"
							alt="SwitchWise"
						/>
						<img
							className="hidden h-full w-full md:block"
							src="/images/desktop-login-switchwise.png"
							alt="SwitchWise"
						/>
					</div>
				</div>
				{/* Logo */}

				<span
					className="cursor-pointer text-color-primary text-lg"
					ref={menu.buttonRef}
					onClick={() => menu.setVisible(true)}
				>
					<BarsOutlined />
				</span>
			</div>
			<div className="flex">
				<Sidebar
					setVisible={menu.setVisible}
					visible={menu.visible}
					ref={menu.ref}
				/>

				<div className="h-full min-h-screen w-full lg:ml-auto lg:w-5/6">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;
