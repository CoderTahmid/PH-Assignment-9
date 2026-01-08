import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const {updateUserProfile} = useContext(AuthContext);
    const successToast = (msg) => toast.success(msg);
    const errorToast = (msg) => toast.error(msg);

    const handleUpdateInformationBtn = (e) => {
        e.preventDefault();
        const userName = e.target.name.value;
        const userPhoto = e.target.photoURL.value;

        updateUserProfile({displayName: userName, photoURL: userPhoto})
            .then(() => {
                successToast("Profile updated!");
                navigate("/my-profile");
            })
            .catch(() => {
                errorToast("Failed to update your profile");
            })
    }

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Update your profile here!</h1>
					<p className="py-6">Access your German vocabulary lessons and continue learning with Lingo Bingo. Register to save your progress, practice new words, and improve your German communication skills step by step.</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<form onSubmit={handleUpdateInformationBtn} className="fieldset">
							<label className="label">Name</label>
							<input name="name" type="text" className="input" placeholder="Name" />

							<label className="label">Photo URL</label>
							<input name="photoURL" type="text" className="input" placeholder="Photo URL" />

							<button className=" bg-[#F7B801] border-none text-black btn btn-neutral mt-4">Update Information</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;
