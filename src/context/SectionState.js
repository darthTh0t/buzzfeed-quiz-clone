import { React, useState, useEffect } from "react";
import QuestionContext from "./QuestionContext";
import questions from "../data/questions.json";
import { useNavigate } from "react-router-dom";

// set questions from json to an array of 4 elements
const newQuestions = Object.values(questions.content).map(
	val => val.question
);

const SectionState = (props) => {

	//useState for Question state
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const newQuestionsArr = {
		qID: 0,
		questionTxt: newQuestions[currentQuestion],
	}
	const [questionCtx, setQuestionCtx] = useState(newQuestionsArr);
	const navigate = useNavigate()

	//useEffect for immedite rendering of questions
	useEffect(() => {
		setQuestionCtx(prevState => ({
			...prevState,
			qID: currentQuestion,
			questionTxt: newQuestions[currentQuestion], 
		}));
		
	}, [currentQuestion]);

	const updateNextQuestion = () => {
		if (!(currentQuestion >= newQuestions.length)) {
			setCurrentQuestion((nextCurrentQuestion) => nextCurrentQuestion + 1);
		}
		else{
			navigate('/result')
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
