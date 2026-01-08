import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import LessonCard from "../components/LessonCard";
import {useState} from "react";
import WhenToSayModal from "../components/WhenToSayModal";

const Lesson = () => {
	const [modalData, setModalData] = useState();

	const {lesson_no} = useParams();
	const lessons = useLoaderData();
	const navigate = useNavigate();
	return (
		<>
			<div className="mt-5">
				<h1 className="text-center text-3xl font-black mb-7 text-[#7678ED] lg:text-5xl">Welome to lesson {lesson_no}</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-7 mb-7">{lessons.map((lesson) => lesson.lesson_no == lesson_no && <LessonCard setModalData={setModalData} lesson={lesson}></LessonCard>)}</div>
				<div onClick={() => navigate("/start-learning")} className="my-4 flex justify-center items-center">
					<button className="btn w-[90%] lg:w-[200px] lg:h-12 lg:text-[15px]  md:w-[220px] h-11 bg-[#F7B801] text-[14px] font-semibold rounded-xl">Back to Lesson</button>
				</div>
			</div>
			<dialog id="my_modal_1" className="modal">
				{modalData && <WhenToSayModal {...modalData}></WhenToSayModal>}
			</dialog>
		</>
	);
};

export default Lesson;
