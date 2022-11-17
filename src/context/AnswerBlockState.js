import { React, useState } from "react"
import AnswerContext from "./AnswerContext"

const AnswerBlockState = (props) => {
	const [finalAnswer, setFinalAnswer] = useState([])
	return (
		<AnswerContext.Provider value={{ setFinalAnswer, finalAnswer }}>
			{props.children}
		</AnswerContext.Provider>
	)
}

export default AnswerBlockState
