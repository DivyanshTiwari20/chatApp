import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
	return (
		<div className='mt-auto'>
			{/* Just display the logout icon without any functionality */}
			<BiLogOut className='w-6 h-6 text-white cursor-pointer' />
		</div>
	);
};

export default LogoutButton;
