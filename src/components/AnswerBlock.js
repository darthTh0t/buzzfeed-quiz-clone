import { React, useState, useContext, useEffect } from "react";
import Answers from "./Answers";
import options from "../data/options.json";
import QuestionContext from "../context/QuestionContext";

const AnswerBlock = () => {
	const answerOptions = Object.keys(options.content).map(
		(key) => options.content[key]
	);
	const optionCtx = useContext(QuestionContext);

	const [currentOption, setCurrentOption] = useState(0);

	useEffect(() => {
		setCurrentOption((prevCount) => optionCtx.questionCtx.qID);
	}, [optionCtx.questionCtx.qID]);

	return (
		<>
			{answerOptions[currentOption]?.map((optionItem) => (
				<Answers
					text={optionItem.answerText}
					key={optionItem.id}
					image={optionItem.answerImage}
				/>
			))}
		</>
	);
};

export default AnswerBlock;
