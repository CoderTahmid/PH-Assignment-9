import { useContext } from "react";
import {FaGoogle} from "react-icons/fa6";
import {useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
	const navigation = useNavigate();
	const {userSignIn, setUser} = useContext(AuthContext);
	const navigate = useNavigate();
	const successToast = (msg) => toast.success(msg);
	const errorToast = (msg) => toast.error(msg);
	const location = useLocation();

	const handleLoginBtn = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		userSignIn(email, password)
			.then((res) => {
				setUser(res.user);
				successToast("Login successful!");
				navigate(location.state ? location.state : "/");
			})
			.catch((err) => {
				errorToast("Failed to login");
				console.log(err);
			})
	};

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Log in to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<form onSubmit={handleLoginBtn} className="fieldset">
							<label className="label">Email</label>
							<input name="email" type="email" className="input" placeholder="Email" />

							<label className="label">Password</label>
							<input name="password" type="password" className="input" placeholder="Password" />

							<div onClick={() => navigate("/forget-password")}>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
								Login
							</button>
							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
								Login with Google <FaGoogle></FaGoogle>{" "}
							</button>
							<p>
								New here? Click to{" "}
								<u className="hover:cursor-pointer" onClick={() => navigation("/register")}>
									register
								</u>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
