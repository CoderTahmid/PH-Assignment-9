import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const navigation = useNavigate();
	const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
	const errorToast = errorMsg => toast.error(errorMsg);
	const successToast = toastMsg => toast.success(toastMsg);
	const navigate = useNavigate();

    const handleRegisterBtn = (e) => {
        e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photoURL.value;
		const password = e.target.password.value;

		createNewUser(email, password)
			.then((res) => {
				setUser(res);
				successToast("Registration Successful");
				updateUserProfile({displayName: name, photoURL: photo})
					.then(() => {
						navigate("/");
					})
			})
			.catch((err) => {
				if (err == "FirebaseError: Firebase: Error (auth/email-already-in-use).") {
					errorToast("Try with a different email");
				} else {
					errorToast("Error occured, look the console for the error type");
					console.error(err);
				}
			})

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
						<form onSubmit={handleRegisterBtn} className="fieldset">
							<label className="label">Name</label>
							<input name='name' type="text" className="input" placeholder="Name" />

							<label className="label">Email</label>
							<input name='email' type="email" className="input" placeholder="Email" />

							<label className="label">Photo URL</label>
							<input name='photoURL' type="text" className="input" placeholder="Photo URL" />

							<label className="label">Password</label>
							<input name='password' type="password" className="input" placeholder="Password" />

							<div>
								<a className="link link-hover">Forgot password?</a>
							</div>
							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
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
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;