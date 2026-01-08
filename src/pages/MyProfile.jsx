import React, {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
	const {user} = useContext(AuthContext);
    const navigate = useNavigate();

	return (
		<div className="w-[90%] border border-gray-300 rounded-2xl flex justify-center flex-col items-center mx-auto my-8 p-3 shadow-xl">
			<h1 className="text-3xl font-black mb-4 text-center">Welcome, {user.displayName}</h1>
			<div className="rounded-full border-4 border-[#7678ED] p-1 mb-4">
				<img className="w-[120px] h-[120px] rounded-full" src={user.photoURL} alt="" />
			</div>
			<p className="text-xl">
				<b>Name: </b>
				{user.displayName}
			</p>
			<p className="text-xl mb-4">
				<b>Email: </b>
				{user.email}
			</p>
			<div className="mb-4" onClick={() => navigate("/update-profile")}>
				<a className="btn bg-[#F7B801] shadow-none border-none">Update profile</a>
			</div>
		</div>
	);
};

export default MyProfile;
