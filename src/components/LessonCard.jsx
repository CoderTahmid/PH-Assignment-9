import {FaVolumeUp} from "react-icons/fa";

const LessonCard = ({lesson, setModalData}) => {
	const {word, pronunciation, part_of_speech, meaning, difficulty, when_to_say, example} = lesson;

	let colorForDifficultyLevel = "p";
	if (difficulty === "easy") {
		colorForDifficultyLevel = "bg-green-400";
	} else if (difficulty === "medium") {
		colorForDifficultyLevel = "bg-yellow-400 ";
	} else if (difficulty === "difficult") {
		colorForDifficultyLevel = "bg-red-400";
	}

	const handleModalClick = (word, meaning, when_to_say, example) => {
		setModalData({word, meaning, when_to_say, example});
		document.getElementById("my_modal_1").showModal();
	};

	const pronounceWord = (word) => {
		const utterance = new SpeechSynthesisUtterance(word);
		utterance.lang = "de-DE"; 
		window.speechSynthesis.speak(utterance);
	};

	return (
		<>
			<div className="relative max-w-md rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
				<div className={`absolute left-0 top-0 h-full w-2 ${colorForDifficultyLevel}`}></div>

				<div className="pl-6 pr-5 py-5 space-y-4">
					<div className="flex items-start justify-between">
						<div>
							<h2 className="text-2xl font-bold text-[#3D348B]">{word}</h2>
							<p className="text-sm text-gray-500 italic">
								/{pronunciation}/ · {part_of_speech}
							</p>
						</div>

						<span className="badge badge-outline text-xs uppercase tracking-wide">{difficulty}</span>
					</div>

					<p className="text-gray-700 leading-relaxed">{meaning}</p>

					<div className="h-px bg-gray-200"></div>

					<div className="flex items-center justify-between">
						<button onClick={() => pronounceWord(word)} className="flex items-center gap-2 text-sm text-[#7678ED] hover:text-[#3D348B] transition hover:cursor-pointer">
							<FaVolumeUp />
							Pronunciation
						</button>
						<button onClick={() => handleModalClick(word, meaning, when_to_say, example)} className="btn btn-sm rounded-full border-none bg-[#F18701] text-white hover:bg-[#F35B04] transition">
							When to Say
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default LessonCard;
