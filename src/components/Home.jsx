import React from "react";
import HomeBanner from "./HomeBanner";
import About from "./About";
import SuccessSection from "./SuccessSection";
import HowItWorks from "./HowItWorks";
import StartLearning from "./startLearning";

const Home = () => {
	return (
		<>
			<HomeBanner></HomeBanner>
            <About></About>
			<SuccessSection></SuccessSection>
			<HowItWorks></HowItWorks>
			<StartLearning></StartLearning>
		</>
	);
};

export default Home;
