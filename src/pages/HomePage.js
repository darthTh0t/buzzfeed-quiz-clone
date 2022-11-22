import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/HomePage.css'
// eslint-disable-next-line
import * as sbutton from 'sbuttons'

const HomePage = () => {

  let btnClassName = 'sbtn next-arrow-btn purple-btn'
  const nextPage = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const toggleActive = (isActive) => {
    if(!isActive) {
      setIsActive(true)
    }
    else {
      setIsActive(false)
    }
  }
  
  useEffect(() => {
    setTimeout(toggleActive, 1300)
  }, [])
  
  return (
    <>
      <div className='image__bg'></div>
      <div className='top__el'>
        <h1 className = { `${isActive === false ? '' : 'text__transition'} sm:max-md:text-xl md:text-5xl py-3`}>What Character from "The Boys" Is Likely To Date You?</h1>
        <button className={`${isActive === false ? btnClassName : btnClassName += ' btn__transition'} hover:bg-purple-700`} onClick={() => nextPage('/quiz')} >Let's Go!</button>
      </div>
    </>
  )
}

export default HomePage