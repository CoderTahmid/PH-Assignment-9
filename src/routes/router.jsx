import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../components/Tutorials";
import AboutUs from "../components/AboutUs";
import Home from "../pages/home";
import Login from "../pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
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
			{
				path: "/login",
				element: <Login></Login>
			}
		],
	},
]);

export default router;
