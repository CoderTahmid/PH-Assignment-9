import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
		<div className="flex justify-center items-center text-red-500 text-6xl mt-40 flex-col">
			Error 404
			<div className="mb-4" onClick={() => navigate("/")}>
				<a className="btn bg-[#F7B801] shadow-none border-none">Back to home page</a>
			</div>
		</div>
	);
};

export default ErrorPage;