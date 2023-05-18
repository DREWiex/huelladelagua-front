import React from 'react'
import { findQuestion } from '../../helpers'
import { questions } from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer15 } from '../../store/slices/quizSlice';

export const Quizquestion15 = ({page, setPage, nextPage}) => {

    const { answers, liters } = useSelector((state) => state.quiz);

    const {question, description, answers:resp} = findQuestion(questions, 15);

    const dispatch = useDispatch();

    const handleTimes = ({target}) => {

        const newLtr = liters + Number(target.dataset.liters)
  
          dispatch(setAnswer15({answer:target.id, liters:newLtr}))
      }
  return (
    <>
    <h2>
        {question}
    </h2>

    <p>
        {description}
    </p>

    <button
     id='-10' disabled={answers.quiz15 == '-10' ? true : false} onClick={handleTimes} data-liters={resp[0].liters}
     >
        {resp[0].answer}  
    </button>

    <button
     id='10-40' disabled={answers.quiz15 == '10-40' ? true : false} onClick={handleTimes} data-liters={resp[1].liters}
     >
        {resp[1].answer}  
    </button>

    <button
     id='+40' disabled={answers.quiz15 == '+40' ? true : false} onClick={handleTimes} data-liters={resp[2].liters}
     >
        {resp[2].answer}  
    </button>

    <button
     id='nidea' disabled={answers.quiz15 == 'nidea' ? true : false} onClick={handleTimes} data-liters={resp[3].liters}
     >
        {resp[3].answer}  
    </button>
    </>
  )
}
