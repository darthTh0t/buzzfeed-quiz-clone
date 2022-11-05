import { React, useState, useEffect } from "react";
import QuestionContext from "./QuestionContext";
import questions from "../data/questions.json";

const SectionState = (props) => {
	// set questions from json to an array of 4 elements
	const newQuestions = Object.keys(questions.content).map(
		(key) => questions.content[key].question
	);

	//useState for Question state
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const newState = {
		qID: 0,
		questionTxt: newQuestions[currentQuestion],
	};
	const [questionCtx, setQuestionCtx] = useState(newState);

	//useEffect for immedite rendering of questions
	useEffect(() => {
		setQuestionCtx(() => ({
			qID: currentQuestion,
			questionTxt: newQuestions[currentQuestion],
		}));
		//eslint-disable-next-line
	}, [currentQuestion]);

	const updateNextQuestion = () => {
		if (currentQuestion > newQuestions.length) {
			console.log("no more questions");
		} else {
			setCurrentQuestion((nextCurrentQuestion) => nextCurrentQuestion + 1);
		}
	};

	const updatePrevQuestion = () => {
		if (currentQuestion <= 0) {
			console.log(`No more questions`);
		} else {
			setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
		}
	};

	return (
		<QuestionContext.Provider
			value={{ questionCtx, updateNextQuestion, updatePrevQuestion }}>
			{props.children}
		</QuestionContext.Provider>
	);
};

export default SectionState;
