import germanBook from "../assets/GemanLanguageBook.png";

const About = () => {
	return (
		<div className="w-[95%] mx-auto mb-15 bg-[#F9FAFB] rounded-2xl">
			<div className="grid grid-cols-1 lg:grid-cols-2 p-5">
				<div>
					<h1 className="text-[30px] mb-3 md:text-[40px] md:mb-6 font-bold w-full md:w-[80%] text-[#3D348B]">Learn German the Smarter Way</h1>
					<h3 className="md:text-[24px] md:mb-4 text-[20px] font-semibold mb-3 text-[#7678ED] ">Build your vocabulary with easy, structured, and interactive lessons.</h3>
					<p className="text-[#3d348bb0] px-4 mb-4 md:text-[17px]">Our mission is to make learning German vocabulary simple, engaging, and effective. Whether you're starting out or expanding your skills, our platform helps you learn new words through clear pronunciations, real-life examples, and themed lessons. Bite-sized sessions, personalized difficulty, and practical usage tips help you retain vocabulary — one word at a time.</p>
				</div>
				{/* <img src={germanBook} alt="" className="rounded-2xl" /> */}
				<div
					className="h-[300px] mx-auto w-[300px] md:h-[400px] md:w-[400px] bg-center bg-cover rounded-2xl"
					style={{
						backgroundImage: `url('${germanBook}')`,
					}}
				></div>
			</div>
		</div>
	);
};

export default About;
