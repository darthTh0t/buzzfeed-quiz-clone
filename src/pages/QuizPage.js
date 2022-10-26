import React from 'react'
import { QuestionBlock, AnswerBlock, Buttons } from '../components'
import SectionState from '../context/SectionState'
import './styles/QuizPage.css'

const QuizPage = () => {
  return (
    <div className='root__el'>
      <div className="image__bg"></div>
      <div className="quiz__el flex flex-col border-4 rounded-xl p-4 border-teal-200">
          <SectionState>
            <QuestionBlock />
            <AnswerBlock />
            <Buttons />
          </SectionState>
      </div>
    </div>
  )
}

export default QuizPage