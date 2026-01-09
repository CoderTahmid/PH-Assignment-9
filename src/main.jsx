import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import LoginFormDataProvider from "./provider/LoginFormDataProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<LoginFormDataProvider>
				<RouterProvider router={router} />
			</LoginFormDataProvider>
		</AuthProvider>
	</StrictMode>
);
