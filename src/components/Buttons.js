import React, { useContext } from 'react'
import QuestionContext from '../context/QuestionContext'

const Buttons = () => {
  
    const example = useContext(QuestionContext)
    
    const prevClickHandler = () => {
        example.updatePrevQuestion()
    }
    
    const nextClickHandler = () => {
        example.updateNextQuestion()
    }
  
    return (
    <div className='flex flex-row justify-between'>
        <button className='btn backdrop-blur-md bg-slate-600 rounded-full xl:w-48 md:w-44 text-slate-50' disabled={example.questionCtx.qID <= 0} onClick={ prevClickHandler }>Prev</button>
        <button className='btn btn-accent rounded-full xl:w-48 md:w-44' disabled={example.questionCtx.qID >= 3} onClick={ nextClickHandler }>Next</button>
    </div>
  )
}

export default Buttons