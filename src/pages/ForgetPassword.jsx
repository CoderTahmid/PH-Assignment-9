import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const {user, resetPassword} = useContext(AuthContext);
    const successToast = (msg) => toast.success(msg);

    const handleResetPasswordBtn = () => {
        successToast("An email was sent to your mail, don't forget to check the spam folder!");
        resetPassword();
    }

    return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Reset your password!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Log in to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<form id="forget-pass-form" className="fieldset">
							<label className="label">Email</label>
							<input name="email" value={user ? user.email : ` `} type="email" className="input" placeholder="Email" />

							<a onClick={handleResetPasswordBtn} href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="bg-[#F7B801] border-none text-black btn btn-neutral mt-4">
								Reset your password
							</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;