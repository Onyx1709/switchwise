import { BarsOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar';
import useOutsideClick from '../hooks/useOutsideClick';

function Layout() {
	const menu = useOutsideClick();

	return (
		<div className="overflow-x-hidden w-full">
			<div className="bg-gray-100">
				<div className="flex items-center justify-between p-4 sm:max-w-[580px] sm:mx-auto md:max-w-[768px] md:px-6 md:py-3 lg:hidden">
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
						className="cursor-pointer duration-300 text-color-primary text-lg transform transition hover:scale-105"
						ref={menu.buttonRef}
						onClick={() => menu.setVisible(true)}
					>
						<BarsOutlined />
					</span>
				</div>
			</div>
			<div className="flex">
				<Sidebar
					setVisible={menu.setVisible}
					visible={menu.visible}
					ref={menu.ref}
				/>

				<div className="h-full min-h-screen p-4 w-full sm:max-w-[580px] sm:mx-auto md:max-w-[768px] md:px-6 md:py-3 lg:max-w-none lg:ml-auto lg:mr-0 lg:px-12 lg:w-4/5">
					<div className="hidden items-center justify-between my-3 lg:flex">
						<h3 className="font-semibold text-base text-secondary-500">
							Welcome, TheJohnDoe
						</h3>
						<div className="flex items center">
							<span className="cursor-pointer duration-500 font-semibold mx-4 text-secondary-500 text-lg transform hover:scale-105">
								<BellOutlined />
							</span>
							<span className="cursor-pointer duration-500 font-semibold ml-4 text-secondary-500 text-lg transform hover:scale-105">
								<UserOutlined />
							</span>
						</div>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;
