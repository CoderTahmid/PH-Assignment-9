import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {toast} from "react-toastify";
import { LoginFormContext } from "../provider/LoginFormDataProvider";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
	const {resetPassword} = useContext(AuthContext);
	const {loginFormEmail} = useContext(LoginFormContext);
	const successToast = (msg) => toast.success(msg);
	const errorToast = (msg) => toast.error(msg);
	const navigate = useNavigate();

	const handleResetPasswordBtn = (e) => {
		e.preventDefault();
		const email = e.target.email.value;

		resetPassword(email)
			.then(() => {
				successToast("An email was sent to your mail, don't forget to check the spam folder!");
				window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox", "_blank");
				navigate('/login');
			})
			.catch((err) => {
				errorToast("Ops! and error occured");
				// console.error(err);
			})
	};

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Reset your password!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Log in to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<form onSubmit={handleResetPasswordBtn} className="fieldset">
							<label className="label">Email</label>
							<input name="email" type="email" className="input" placeholder="Email" value={loginFormEmail && loginFormEmail} />

							<button type="submit" className="bg-[#F7B801] border-none text-black btn btn-neutral mt-4 flex justify-center items-center">
								Reset your password
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
