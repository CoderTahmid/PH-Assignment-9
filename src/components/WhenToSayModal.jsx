import React from "react";

const WhenToSayModal = ({word, meaning, when_to_say, example}) => {
	return (
		<div className="modal-box max-w-xl rounded-2xl p-0 overflow-hidden">
			<div className="bg-[#3D348B] px-6 py-4">
				<h3 className="text-2xl font-bold text-white tracking-wide">{word}</h3>
				<p className="text-sm text-[#F7B801] italic mt-1">meaning: {meaning}</p>
			</div>

			<div className="px-6 py-5 space-y-5 text-gray-700">
				<div>
					<h4 className="text-sm font-semibold text-[#3D348B] uppercase tracking-wide mb-1">When to Say</h4>
					<p className="leading-relaxed">{when_to_say}</p>
				</div>

				<div className="h-px bg-gray-200"></div>

				<div>
					<h4 className="text-sm font-semibold text-[#3D348B] uppercase tracking-wide mb-1">Example</h4>
					<p className="leading-relaxed text-gray-600">
						<i>{example}</i>
					</p>
				</div>
			</div>

			<div className="px-6 py-4 bg-gray-50 flex justify-end">
				<form method="dialog">
					<button className="btn rounded-full border-none bg-[#F18701] text-white hover:bg-[#F35B04] transition">Close</button>
				</form>
			</div>
		</div>
	);
};

export default WhenToSayModal;
