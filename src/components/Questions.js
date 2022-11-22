import { React, useContext } from 'react'
import QuestionContext from '../context/QuestionContext'

const Questions = () => {

  const { questionCtx } = useContext(QuestionContext)
  return (
    <>
      {<h1 className='text-4xl py-10 sm:max-md:text-xl' style={{ color: `white` }}>{ questionCtx.questionTxt }</h1>}
    </>
  )
}

export default Questions