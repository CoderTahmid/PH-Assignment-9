import React from "react";
import HomeBanner from "./HomeBanner";
import About from "./About";
import SuccessSection from "./SuccessSection";

const Home = () => {
	return (
		<>
			<HomeBanner></HomeBanner>
            <About></About>
			<SuccessSection></SuccessSection>
		</>
	);
};

export default Home;
