import { React, useContext, useEffect, useMemo, useState } from "react"
import AnswerContext from "../context/AnswerContext"
import "./styles/Answers.css"

const Answers = (props) => {
	//stylise the answerBox to make it visually appealing
	const answerBox = useMemo(() => {
		return {
			backgroundImage: `url(${props.image})`,
			backgroundSize: `cover`,
			backgroundPosition: `center`,
		}
	}, [props.image])

	//useContext to keep answer details to be accessed by btns
	const { setFinalAnswer, setIsAnswerNotSelected } = useContext(AnswerContext)
	const [isSelected, setIsSelected] = useState(false)

	const answerHandler = () => {
		setFinalAnswer((prevAns) => [...prevAns, props.text])
		setIsSelected((prevState) => !prevState)
	}

	useEffect(() => {
		setIsAnswerNotSelected(!isSelected)
	}, [setIsAnswerNotSelected, isSelected])

	return (
		<>
			{props.text && <div
				className={`mx-2 h-24 rounded-md hover:drop-shadow-md ${
					isSelected ? "isSelectedStyle" : "isNotSelectedStyle"
				}`}
				onClick={answerHandler}
				style={answerBox}>
				<h1
					className={`text-center text-black w-full h-full ${
						!isSelected ? "notSelectedAnswerText" : "selectedAnswerText"
					}`}>
					{props.text}
				</h1>
			</div>}
		</>
	)
}

export default Answers
