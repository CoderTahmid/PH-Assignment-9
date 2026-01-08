import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
    const navigate = useNavigate();
    return (
		<div className="border flex-col w-[90%] border-gray-300 space-y-6 mx-auto my-5 p-3 flex justify-center items-center text-center rounded-2xl">
			<h1 className="text-3xl font-bold">Here are some tutorials for you, you may find these helpful</h1>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/xg60VxyK-9I?si=_F-QAh0UlDHTDuAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/mNX1wpIQ4Uk" title="Learn German A1 in 25 Minutes Step by Step (Crash Course For Beginners)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/0p4RCJ8P5ko" title="Complete German Language Beginners Course – Learn A1 Level German" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/OxJAp2LsAx0" title="Learn German on your own | KKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/sDTCuXvSNFw" title="German A1 in just 72 Minutes: A step-by-step crash course for absolute beginners!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				<iframe className="rounded-2xl" src="https://www.youtube.com/embed/r9os9Q6t6Xc" title="Learn German For Beginners 🇩🇪 The Complete Course (Level A.1) | Get Germanized" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
			<div onClick={() => navigate("/start-learning")} className="my-4 flex justify-center items-center">
				<button className="btn w-full lg:w-[200px] lg:h-12 lg:text-[15px]  md:w-[220px] h-11 bg-[#F7B801] text-[14px] font-semibold rounded-xl">Learn Vocabularies</button>
			</div>
		</div>
	);
};

export default Tutorials;