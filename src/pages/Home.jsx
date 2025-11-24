import About from "../components/About";
import HomeBanner from "../components/HomeBanner";
import HowItWorks from "../components/HowItWorks";
import StartLearningToday from "../components/StartLearningToday";
import SuccessSection from "../components/SuccessSection";

const Home = () => {
	return (
		<>
            <HomeBanner></HomeBanner>
            <About></About>
            <SuccessSection></SuccessSection>
            <HowItWorks></HowItWorks>
            <StartLearningToday></StartLearningToday>
		</>
	);
};

export default Home;
