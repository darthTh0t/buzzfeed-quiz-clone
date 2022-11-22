import { React, useContext } from 'react'
import QuestionContext from '../context/QuestionContext'

const Questions = () => {

  const newContext = useContext(QuestionContext)
  return (
    <>
      <h1 className='text-4xl text-zinc-50 py-10 sm:max-md:text-xl'>{ newContext.questionCtx.questionTxt }</h1>
    </>
  )
}

export default Questions