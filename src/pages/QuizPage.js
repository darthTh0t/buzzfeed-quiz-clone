import React from "react"
import { QuestionBlock, AnswerBlock, Buttons } from "../components"
import { SectionState, AnswerBlockState } from "../context"
import "./styles/QuizPage.css"

const QuizPage = () => {
	return (
		<div className="root__el">
			<div className="image__bg"></div>
			<div className="quiz__el flex flex-col border-4 rounded-xl p-6 border-teal-200">
				<SectionState>
					<QuestionBlock />
					<AnswerBlockState>
						<AnswerBlock />
						<Buttons />
					</AnswerBlockState>
				</SectionState>
			</div>
		</div>
	)
}

export default QuizPage
