import { React, useState, useContext, useEffect } from "react"
import Answers from "./Answers"
import options from "../data/options.json"
import QuestionContext from "../context/QuestionContext"

const AnswerBlock = () => {
	const optionCtx = useContext(QuestionContext)

	//mapping content into a new array of arrays
	const answerOptions = Object.keys(options.content).map(
		(key) => options.content[key]
	)

	// state for changing option and rendering it immediately
	const [currentOption, setCurrentOption] = useState(0)
	useEffect(() => {
		setCurrentOption((prevCount) => optionCtx.questionCtx.qID)
	}, [optionCtx.questionCtx.qID])

	return (
		<>
			<div className="grid grid-cols-3 h-30 my-6">
				{answerOptions[currentOption]?.map((optionItem) => (
					<Answers
						text={optionItem.answerText}
						key={optionItem.id}
						image={optionItem.answerImage}
					/>
				))}
			</div>
		</>
	)
}

export default AnswerBlock
