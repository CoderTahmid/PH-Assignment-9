import React from "react";
import CountUp from "react-countup";
import { FaBook, FaUsers } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";

const SuccessSection = () => {
	return (
		<div className="w-[90%] mx-auto grid gap-6 p-5 grid-cols-1 md:grid-cols-2 bg-linear-to-r from-[#3D348B] to-[#7678ED] rounded-2xl mb-18">
			<div className="bg-white/10 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-[200px] flex flex-col items-center justify-center text-center">
				<div className="h-16 w-16 justify-center items-center rounded-full bg-[#F7B801] p-4 mb-3">
					<FaUsers className="h-full w-full text-[#3D348B]"></FaUsers>
				</div>
				<p className="font-semibold text-[13px] lg:text-[14px] text-white uppercase">Total Users</p>
				<p className="text-[28px] font-bold text-[#F7B801] shadow-5xl md:text-[34px]">
					<CountUp end={1400} duration={5}></CountUp>
				</p>
			</div>
			<div className="bg-white/10 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-[200px] flex flex-col items-center justify-center text-center">
				<div className="h-16 w-16 justify-center items-center rounded-full bg-[#F7B801] p-4 mb-3">
					<FaBook className="h-full w-full text-[#3D348B]"></FaBook>
				</div>
				<p className="font-semibold text-[13px] lg:text-[14px] text-white uppercase">Lessons</p>
				<p className="text-[28px] font-bold text-[#F7B801] shadow-5xl md:text-[34px]">
					<CountUp end={400} duration={5}></CountUp>
				</p>
			</div>
			<div className="bg-white/10 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-[200px] flex flex-col items-center justify-center text-center">
				<div className="h-16 w-16 justify-center items-center rounded-full bg-[#F7B801] p-4 mb-3">
					<LuLanguages className="h-full w-full text-[#3D348B]"></LuLanguages>
				</div>
				<p className="font-semibold text-[13px] lg:text-[14px] text-white uppercase">Vocabulary</p>
				<p className="text-[28px] font-bold text-[#F7B801] shadow-5xl md:text-[34px]">
					<CountUp end={14000} duration={5}></CountUp>
				</p>
			</div>
			<div className="bg-white/10 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-[200px] flex flex-col items-center justify-center text-center">
				<div className="h-16 w-16 justify-center items-center rounded-full bg-[#F7B801] p-4 mb-3">
					<GiTeacher className="h-full w-full text-[#3D348B]"></GiTeacher>
				</div>
				<p className="font-semibold text-[13px] lg:text-[14px] text-white uppercase">Tutorials</p>
				<p className="text-[28px] font-bold text-[#F7B801] shadow-5xl md:text-[34px]">
					<CountUp end={200} duration={5}></CountUp>
				</p>
			</div>
		</div>
	);
};

export default SuccessSection;
