import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { TbChecklist } from 'react-icons/tb';

const HowItWorks = () => {
    return (
		<div className="w-[90%] mx-auto text-center bg-[#F9FAFB] p-4 rounded-2xl mb-18">
			<h1 className="text-[#3D348B] text-2xl md:text-[32px] font-bold mb-2">How It Works</h1>
			<h3 className="text-[#7678ED] text-[20px] font-semibold mb-2">Start learning German in just three simple steps.</h3>
			<p className="text-[#2C2C2C] text-[17px] mb-2">Create your account, pick a lesson, and start practicing real-life German vocabulary with guided examples and pronunciation support. Learning stays simple, structured, and motivating.</p>
			<div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-7 w-[85%] md:w-full lg:w-[85%] mx-auto">
				{/* card 1 */}
				<div className="flex p-4 flex-col justify-center items-center rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]">
					<div className="h-14 w-14 flex justify-center items-center">
						<FaUserCircle className="h-9 w-9 text-[#F35B04]"></FaUserCircle>
					</div>
					<h1 className="text-[#3D348B] font-bold text-[18px] md:text-[20px]">Create your account</h1>
					<p className="text-[14px] md:text-[15px]">Sign up using your email to save your progress, track your learning, and access all lessons anytime.</p>
				</div>
				{/* card 2 */}
				<div className="flex p-4 flex-col justify-center items-center rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]">
					<div className="h-14 w-14 flex justify-center items-center">
						<TbChecklist className="h-9 w-9 text-[#F35B04]"></TbChecklist>
					</div>
					<h1 className="text-[#3D348B] font-bold text-[18px] md:text-[20px]">Choose your lesson</h1>
					<p className="text-[14px] md:text-[15px]">Browse lessons by topic, difficulty, or level—from basic greetings to travel phrases and everyday conversations.</p>
				</div>
				{/* card 3 */}
				<div className="flex p-4 flex-col justify-center items-center rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]">
					<div className="h-14 w-14 flex justify-center items-center">
						<GiProgression className="h-9 w-9 text-[#F35B04]"></GiProgression>
					</div>
					<h1 className="text-[#3D348B] font-bold text-[18px] md:text-[20px]">Practice and track your progress</h1>
					<p className="text-[14px] md:text-[15px]">Practice vocabulary with examples, see how many words you’ve learned, and come back anytime to review and improve.</p>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;