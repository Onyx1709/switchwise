function Login() {
	return (
		<div className="container mx-auto">
			<div className="h-[21px] mx-auto w-[120px] md:h-[48px] md:w-[282px]">
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
	);
}

export default Login;
