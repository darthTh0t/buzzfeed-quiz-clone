import React, { useContext, useState, useEffect } from "react"
import QuestionContext from "../context/QuestionContext"

const Buttons = () => {
	const btnHandler = useContext(QuestionContext)
	const nextBtnState = {
		btnText: "NEXT",
		btnColor: "btn-accent",
	}
	const [nextBtn, setNextBtn] = useState(nextBtnState)

	useEffect(() => {
		if (btnHandler.questionCtx.qID >= 3) {
			setNextBtn({
				btnText: "SUBMIT",
				btnColor: "btn-success",
			})
		} else {
			setNextBtn({
				btnText: "NEXT",
				btnColor: "btn-primary",
			})
		}
	}, [btnHandler.questionCtx.qID])

	//btnHandler functions
	const prevClickHandler = () => {
		btnHandler.updatePrevQuestion()
	}
	const nextClickHandler = () => {
		btnHandler.updateNextQuestion()
	}

	return (
		<div className="flex flex-row justify-between">
			<button
				className="btn backdrop-blur-md bg-slate-600 rounded-full xl:w-48 md:w-44 text-slate-50 text-lg border-0"
				disabled={btnHandler.questionCtx.qID <= 0}
				onClick={prevClickHandler}>
				Previous
			</button>
			<button
				className={`btn rounded-full xl:w-48 md:w-44 text-slate-300 hover:text-slate-50 text-lg ${nextBtn.btnColor}`}
				onClick={nextClickHandler}>
				{nextBtn.btnText}
			</button>
		</div>
	)
}

export default Buttons
