import { FaGoogle } from "react-icons/fa6";

const Login = () => {

    const handleLoginBtn = (e) => {
        e.preventDefault();
    }

    return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Log in to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<fieldset className="fieldset">
							<label className="label">Email</label>
							<input type="email" className="input" placeholder="Email" />
							<label className="label">Password</label>
							<input type="password" className="input" placeholder="Password" />
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button onClick={handleLoginBtn} className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">Login</button>
							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">Login with Google <FaGoogle></FaGoogle> </button>
                            <p>New here? Click to <u>register</u></p>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;