import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import StartLearning from "../components/startLearning";
import Tutorials from "../components/Tutorials";
import AboutUs from "../components/AboutUs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/start-learning",
				element: <StartLearning></StartLearning>,
			},
			{
				path: "/tutorials",
				element: <Tutorials></Tutorials>,
			},
			{
				path: "/about-us",
				element: <AboutUs></AboutUs>
			},
		],
	},
]);

export default router;
