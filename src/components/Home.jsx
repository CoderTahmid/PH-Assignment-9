import React from "react";
import HomeBanner from "./HomeBanner";
import About from "./About";
import SuccessSection from "./SuccessSection";
import HowItWorks from "./HowItWorks";

const Home = () => {
	return (
		<>
			<HomeBanner></HomeBanner>
            <About></About>
			<SuccessSection></SuccessSection>
			<HowItWorks></HowItWorks>
		</>
	);
};

export default Home;
