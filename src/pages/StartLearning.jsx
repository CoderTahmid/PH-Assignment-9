import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const StartLearning = () => {
	const navigate = useNavigate();
	const {user} = useContext(AuthContext);

	const handleViewMoreBtn = () => {
		user ? navigate("/tutorials") : navigate("/login");
	}

	const handleClick = (num) => {
		navigate(`lesson/lesson-${num}`);
	};

	return (
		<>
			<div className="w-[95%] mx-auto">
				<h1 className="mx-auto lg:mb-3 lg:text-[40px] lg:font-extrabold text-[26px] font-bold text-center mb-2 mt-4 md:mb-2.5 md:text-[32px]">Let’s Learn</h1>
				<p className="text-[14px] lg:mb-10 lg:text-[18px] md:text-[16px] md:mb-8 text-center font-normal text-[#7678ED] mb-6 ">Start your journey with structured lessons and guided tutorials</p>
				<div className="my-6 lg:space-y-5 lg:text-[17px] lg:font-semibold space-y-3 md:space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
					<div onClick={() => handleClick(1)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 1
					</div>
					<div onClick={() => handleClick(2)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 2
					</div>
					<div onClick={() => handleClick(3)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 3
					</div>
					<div onClick={() => handleClick(4)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 4
					</div>
					<div onClick={() => handleClick(5)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 5
					</div>
					<div onClick={() => handleClick(6)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 6
					</div>
					<div onClick={() => handleClick(7)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 7
					</div>
					<div onClick={() => handleClick(8)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 8
					</div>
					<div onClick={() => handleClick(9)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 9
					</div>
					<div onClick={() => handleClick(10)} className="bg-[#3D348B] lg:h-20 lg:p-5 md:rounded-[14px] md:p-[18px] md:h-[72px] text-white p-4 h-16 border border-[#E5E7EB] font-semibold hover:bg-[#7678ED] rounded-xl justify-center items-center flex w-[70%] mx-auto hover:cursor-pointer">
						Lesson 10
					</div>
				</div>
				<div className="mt-8 lg:p-8 lg:bg-[#F7B801] lg:rounded-[20px] lg:mb-8 bg-[#F7B801] md:p-6 md:mt-10 p-4 rounded-2xl flex justify-center items-center">
					<iframe className="mx-auto  rounded-2xl w-full" width="560" height="315" src="https://www.youtube.com/embed/xg60VxyK-9I?si=wu9QOhbBFmDTZbZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div onClick={handleViewMoreBtn} className="my-4 flex justify-center items-center">
					<button className="btn w-full lg:w-[200px] lg:h-12 lg:text-[15px]  md:w-[220px] h-11 bg-[#F35B04] text-[14px] font-semibold rounded-xl">View more</button>
				</div>
			</div>
		</>
	);
};

export default StartLearning;
