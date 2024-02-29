import React, { useState } from 'react'
import QUESTIONS from '../questions'

const Quiz = () => {

    
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    console.log("current index: " + activeQuestionIndex);

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5)

    const lengthof = QUESTIONS[QUESTIONS.length - 1]
    console.log("length of array");
    console.log(lengthof)

    console.log("current element: " + QUESTIONS[activeQuestionIndex].id);

  return (
    <div id='quiz'>
    <div id='question'>

    
    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    <ul id='answers'>
    {shuffledAnswers.map((ans, index) => {
        return <li className='answer' key={index} > <button>{ans}</button></li>
    })}
    </ul>

    {
        QUESTIONS[activeQuestionIndex].id === "q7" ? <button>submit</button> :  <button onClick={() => {
        setUserAnswers(userAnswers + 1)
    }}>click</button>
    }
    </div>
    </div>
  )
}

export default Quiz
