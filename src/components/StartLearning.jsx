import React from "react";
import greetingImg from "../assets/GreetingWithPeople.jpg";
import travelImg from "../assets/travellingImg.webp";
import dailyLife from "../assets/dailyMorningLife.webp";
import conversationImg from "../assets/conversation.jpg";

const StartLearning = () => {
	return (
		<div className="w-[95%] mx-auto text-center bg-white/80 mb-15 border border-[#E5E7EB] rounded-2xl p-4">
			<h1 className="text-[#3D348B] text-[18px] font-semibold md:text-[20px] md:font-bold">Start Learning Today</h1>
			<h2>Pick a lesson that matches your level and goals.</h2>
			<p>From beginner basics to practical phrases, each lesson is built to help you grow your German vocabulary step by step.</p>
			<div className="space-y-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{/* card 1 */}
				<div className="card bg-base-100 mx-auto drop-shadow-xl h-[400px]">
					<div
						className=" h-[200px] w-full bg-center bg-cover rounded-tr-2xl rounded-tl-2xl"
						style={{
							backgroundImage: `url('${greetingImg}')`,
						}}
					></div>
					<div className="card-body text-left">
						<h2 className="card-title">A1 Basics: Greetings & Introductions</h2>
						<p className="text-[#4B5563] text-[14px] md:text-[15px]">Learn how to say hello, introduce yourself, and use simple polite expressions in German.</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">Beginner</div>
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">Easy</div>
						</div>
					</div>
				</div>
				{/* card 2 */}
				<div className="card bg-base-100 mx-auto drop-shadow-xl h-[400px]">
					<div
						className=" h-[200px] w-full bg-center bg-cover rounded-tr-2xl rounded-tl-2xl"
						style={{
							backgroundImage: `url('${travelImg}')`,
						}}
					></div>
					<div className="card-body text-left">
						<h2 className="card-title">Travel Essentials</h2>
						<p className="text-[#4B5563] text-[14px] md:text-[15px]">Useful phrases for airports, trains, hotels, and asking for directions while traveling in Germany.</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">Beginner</div>
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">Medium</div>
						</div>
					</div>
				</div>
				{/* card 3 */}
				<div className="card bg-base-100 mx-auto drop-shadow-xl h-[400px]">
					<div
						className=" h-[200px] w-full bg-center bg-cover rounded-tr-2xl rounded-tl-2xl"
						style={{
							backgroundImage: `url('${dailyLife}')`,
						}}
					></div>
					<div className="card-body text-left">
						<h2 className="card-title">Daily Life & Routine</h2>
						<p className="text-[#4B5563] text-[14px] md:text-[15px]">Talk about your day, your schedule, and everyday activities using common German verbs and nouns.</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">A2 Level</div>
						</div>
					</div>
				</div>
				{/* card 4 */}
				<div className="card bg-base-100 mx-auto drop-shadow-xl h-[400px]">
					<div
						className=" h-[200px] w-full bg-center bg-cover rounded-tr-2xl rounded-tl-2xl"
						style={{
							backgroundImage: `url('${conversationImg}')`,
						}}
					></div>
					<div className="card-body text-left">
						<h2 className="card-title">Conversations & Questions</h2>
						<p className="text-[#4B5563] text-[14px] md:text-[15px]">Practice simple conversations, asking and answering questions, and expressing your opinions in German.</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline bg-[#F7B801] border-none text-[#3D348B] text-[12px] md:text-[13px]">Intermediate</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StartLearning;
