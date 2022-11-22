import React, { useContext, useState, useEffect, useMemo } from "react"
// import { useNavigate } from "react-router-dom"
import AnswerContext from "../context/AnswerContext"
import QuestionContext from "../context/QuestionContext"

const Buttons = () => {
	const btnHandler = useContext(QuestionContext)
	const disableState = useContext(AnswerContext)
	// const navigate = useNavigate()
	const nextBtnState = useMemo(() => {
		return {
			btnText: "NEXT",
			btnColor: "btn-accent",
		}
	}, [])
	const [nextBtn, setNextBtn] = useState(nextBtnState)

	useEffect(() => {
		if (btnHandler.questionCtx.qID >= 3) {
			setNextBtn({
				...nextBtnState,
				btnText: "SUBMIT",
				btnColor: "btn-success",
			})
		} else {
			setNextBtn({
				...nextBtnState,
				btnText: "NEXT",
				btnColor: "btn-primary",
			})
		}
	}, [nextBtnState, btnHandler.questionCtx.qID])

	//btnHandler functions
	// const prevClickHandler = () => {
	// 	btnHandler.updatePrevQuestion()
	// }
	const nextClickHandler = () => {
		btnHandler.updateNextQuestion()
	}

	return (
		<div className="flex flex-row justify-center">
			{/* <button
				className="btn backdrop-blur-md bg-slate-600 rounded-full xl:w-48 md:w-44 text-slate-50 text-lg border-0"
				disabled={btnHandler.questionCtx.qID <= 0}
				onClick={prevClickHandler}>
				Previous
			</button> */}
			<button
				className={`btn rounded-full xl:w-48 md:w-44 text-slate-300 hover:text-slate-50 text-lg ${nextBtn.btnColor}`}
				onClick={nextClickHandler}
				disabled={disableState.isAnswerNotSelected}>
				{nextBtn.btnText}
			</button>
		</div>
	)
}

export default Buttons
