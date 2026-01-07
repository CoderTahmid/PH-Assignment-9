import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

	const navigate = useNavigate();
	const {user, userLogout} = useContext(AuthContext);
	const handleLogout = () => {
		userLogout()
	}

	return (
		<div className="navbar bg-[#7678ED] shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{" "}
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
						</svg>
					</div>
					<ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<NavLink to={`/`}>Home</NavLink>
						</li>
						<li>
							<NavLink to={`/start-learning`}>Start learning</NavLink>
						</li>
						<li>
							<NavLink to={`/tutorials`}>Tutorials</NavLink>
						</li>
						<li>
							<NavLink to={`/about-us`}>About us</NavLink>
						</li>
					</ul>
				</div>
				<div className="flex justify-center items-center text-2xl">
					<img fillRule="evenodd" clipRule="evenodd" className="fill-current" width="40" height="40" src={logo} alt="" />
					<p className="font-bold text-[16px] md:text-xl">Lingo Bingo</p>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<NavLink to={`/`}>Home</NavLink>
					</li>
					<li>
						<NavLink to={`/start-learning`}>Start learning</NavLink>
					</li>
					<li>
						<NavLink to={`/tutorials`}>Tutorials</NavLink>
					</li>
					<li>
						<NavLink to={`/about-us`}>About us</NavLink>
					</li>
				</ul>
			</div>
			{user ? (
				<div className="navbar-end space-x-2.5">
					<p>Welcome {user.displayName}</p>
					<div onClick={handleLogout}>
						<a className="btn bg-[#F7B801] shadow-none border-none">Logout</a>
					</div>
				</div>
			) : (
				<div className="navbar-end" onClick={() => navigate("/login")}>
					<a className="btn bg-[#F7B801] shadow-none border-none">Login</a>
				</div>
			)}
		</div>
	);
};

export default Navbar;
