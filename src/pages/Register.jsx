import { FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigation = useNavigate();

    const handleRegisterBtn = (e) => {
        e.preventDefault();
    }

    return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Register to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<fieldset className="fieldset">
							<label className="label">Name</label>
							<input type="email" className="input" placeholder="Name" />
							<label className="label">Email</label>
							<input type="email" className="input" placeholder="Email" />
							<label className="label">Photo URL</label>
							<input type="password" className="input" placeholder="Photo URL" />
							<label className="label">Password</label>
							<input type="password" className="input" placeholder="Password" />
							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button onClick={handleRegisterBtn} className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
								Register
							</button>
							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
								Register with Google <FaGoogle></FaGoogle>{" "}
							</button>
							<p>
								Already have an account? click to{" "}
								<u className="hover:cursor-pointer" onClick={() => navigation("/login")}>
									login
								</u>
							</p>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;