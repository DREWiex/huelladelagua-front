import React from 'react'
import {questions} from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer6 } from '../../store/slices/quizSlice';


export const QuizQuestion6 = ({page, setPage, nextPage}) => {

    const { answers } = useSelector((state) => state.quiz)

    const dispatch = useDispatch();

    const handleTimes = ({target}) => {

        dispatch(setAnswer6(target.id))
        nextPage()
    }

  return (
    <>
    <h2>
        {questions[5].question}
    </h2>

    <button
     id='-3' disabled={answers.quiz6 == '-3' ? true : false} onClick={handleTimes} data-liters={questions[5].answers[0].liters}
     >
        {questions[5].answers[0].answer} 
    </button>

    <button
     id='3-5' disabled={answers.quiz6 == '3-5' ? true : false} onClick={handleTimes} data-liters={questions[5].answers[1].liters}
     >
        {questions[5].answers[1].answer} 
    </button>

    <button
     id='+5' disabled={answers.quiz6 == '+5' ? true : false} onClick={handleTimes} data-liters={questions[5].answers[2].liters}
     >
        {questions[5].answers[2].answer}  
    </button>
    </>
  )
}
