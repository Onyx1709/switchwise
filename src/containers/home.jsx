import { Button } from 'antd';
import { Link } from 'react-router-dom';

import routes from '../config/routes';

function Home() {
	return (
		<div className="container mx-auto">
			{/* Header */}
			<div className="flex justify-center p-4 w-full md:justify-between">
				<div className="h-[21px] w-[120px] md:h-[48px] md:w-[282px]">
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
				<div className="hidden md:flex md:items-center">
					<div className="mx-4">
						<Link className="w-full" to={routes.LOGIN_PAGE}>
							<Button block shape="round" size="large" type="default">
								<span className="inline-block px-4 text-sm">Log In</span>
							</Button>
						</Link>
					</div>
					<div>
						<Link className="w-full" to={routes.REGISTER_PAGE}>
							<Button block shape="round" size="large" type="primary">
								<span className="inline-block px-4 text-sm">Sign Up</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
			{/* Header */}

			<div className="p-4 w-full md:flex md:flex-row-reverse md:items-center md:justify-between">
				{/* Man Holding Phone Image */}
				<div className="h-[250px] rounded-md w-full md:h-[400px] md:max-w-[450px] md:w-1/2">
					<img
						className="h-full rounded-md w-full md:hidden"
						src="/images/login-mobile-screen-man-using-smartphone-his-automated-home.png"
						alt="Phone"
					/>
					<img
						className="hidden h-full rounded-md w-full md:block"
						src="/images/login-desktop-screen-man-using-smartphone-his-automated-home.png"
						alt="Phone"
					/>
				</div>
				{/* Man Holding Phone Image */}

				{/* Introduction */}
				<div className="my-3 w-full md:pr-4 md:w-1/2">
					<h1 className="text-center text-secondary-500 text-lg md:font-semibold md:leading-10 md:text-3xl md:text-left lg:leading-normal lg:text-4xl">
						Stay in control of your appliances,{' '}
						<span className="text-primary-500">anywhere</span> in the world.
					</h1>
					<p className="my-2 text-center text-secondary-500 text-sm md:my-4 md:text-left lg:font-medium lg:leading-8 lg:text-base">
						Introducing our innovate smart switcing app that puts you in control
						of your home like never before. Say hello to simplicity and
						effective switching services
					</p>
					<div className="flex justify-center my-3 md:justify-start">
						<Link className="hidden md:inline" to={routes.REGISTER_PAGE}>
							<Button size="large" shape="round" type="primary">
								<span className="px-4 text-sm">Get Started</span>
							</Button>
						</Link>
						<Link className="mx-2 md:hidden" to={routes.REGISTER_PAGE}>
							<Button size="large" shape="round" type="primary">
								<span className="px-4 text-sm">Sign Up</span>
							</Button>
						</Link>
						<Link
							className="inline-block mx-2 md:hidden"
							to={routes.LOGIN_PAGE}
						>
							<Button size="large" shape="round" type="default">
								<span className="px-4 text-sm">Login</span>
							</Button>
						</Link>
					</div>
				</div>
				{/* Introduction */}
			</div>
		</div>
	);
}

export default Home;
