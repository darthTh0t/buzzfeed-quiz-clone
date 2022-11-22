import { React, useState } from "react"
import AnswerContext from "./AnswerContext"

const AnswerBlockState = (props) => {
	const [finalAnswer, setFinalAnswer] = useState([])
	const [isAnswerNotSelected, setIsAnswerNotSelected] = useState(true)
	return (
		<AnswerContext.Provider value={{ setFinalAnswer, finalAnswer, isAnswerNotSelected, setIsAnswerNotSelected }}>
			{props.children}
		</AnswerContext.Provider>
	)
}

export default AnswerBlockState
