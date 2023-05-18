import React from 'react'
import {questions} from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer6 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';


export const QuizQuestion6 = ({page, setPage, nextPage}) => {

    const { answers, liters } = useSelector((state) => state.quiz)

    const {question, description, answers:resp} = findQuestion(questions, 6)

    const dispatch = useDispatch();

    const handleTimes = ({target}) => {

      const newLtr = liters + Number(target.dataset.liters)

        dispatch(setAnswer6({answer:target.id, liters:newLtr}))
        nextPage()
    }

  return (
    <>
    <h2>
        {question}
    </h2>

    <button
     id='-3' disabled={answers.quiz6 == '-3' ? true : false} onClick={handleTimes} data-liters={resp[0].liters}
     >
        {resp[0].answer} 
    </button>

    <button
     id='3-5' disabled={answers.quiz6 == '3-5' ? true : false} onClick={handleTimes} data-liters={resp[1].liters}
     >
        {resp[1].answer} 
    </button>

    <button
     id='+5' disabled={answers.quiz6 == '+5' ? true : false} onClick={handleTimes} data-liters={resp[2].liters}
     >
        {resp[2].answer}  
    </button>
    </>
  )
}
