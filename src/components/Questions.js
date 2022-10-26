import { React, useContext } from 'react'
import './styles/Questions.css'
import QuestionContext from '../context/QuestionContext'

const Questions = () => {

  const newContext = useContext(QuestionContext)
  return (
    <>
      <h1 className='text-4xl text-zinc-50 py-10'>{ newContext.questionCtx.questionTxt }</h1>
    </>
  )
}

export default Questions