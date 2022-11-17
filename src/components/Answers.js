import { React, useCallback, useContext } from "react"
import AnswerContext from "../context/AnswerContext"
import "./styles/Answers.css"

const Answers = ({ text, image }) => {
	//stylise the answerBox to make it visually appealing
	const answerBox = {
		backgroundImage: `url(${image})`,
		backgroundSize: `cover`,
		cursor: `pointer`,
		backgroundPosition: `center`,
	}

	//useContext to keep answer details to be accessed by btns
	const answerCtx = useContext(AnswerContext)
	const answerHandler = useCallback(() => answerCtx.setFinalAnswer(prevAns => [...prevAns, text]), [answerCtx, text])

	return (
		<div
			className="mx-2 h-24 rounded-md hover:drop-shadow-md"
			onClick={answerHandler}
			style={answerBox}>
			<h1 className="text-center text-fuchsia-400 w-full h-full answerText">
				{text}
			</h1>
		</div>
	)
}

export default Answers
