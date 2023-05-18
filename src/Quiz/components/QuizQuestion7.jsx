import React from 'react'
import { findQuestion } from '../../helpers'
import { questions } from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer7 } from '../../store/slices/quizSlice';

export const QuizQuestion7 = ({nextPage}) => {


    const { answers, liters } = useSelector((state) => state.quiz)

    const { question, description, answers: resp } = findQuestion(questions, 7);

    const dispatch = useDispatch();
    
    const handleTimes = ({target}) => {

        const newLtr = target.dataset.liters
  
          dispatch(setAnswer7({answer:target.value, liters:newLtr}))
          nextPage()
      }

    return (
        <>
            <h2>
                {question}
            </h2>

            <p>
                ¿Y tu lavavajillas?
                ¿Cúantas veces se pone en marcha?
            </p>

            <button
                id='1'
                onClick={handleTimes} 
                value={resp[0].answer}
                data-liters={resp[0].liters}
                disabled={answers.quiz7 == '1' ? true : false}
            >
                {resp[0].answer}
            </button>

            <button
                id='3-5' 
                onClick={handleTimes} 
                value={resp[1].answer}
                data-liters={resp[1].liters}
                disabled={answers.quiz7 == '3-5' ? true : false}
            >
                {resp[1].answer}
            </button>

            <button
                id='mano' 
                onClick={handleTimes} 
                value={resp[2].answer}
                data-liters={resp[2].liters}
                disabled={answers.quiz7 == 'mano' ? true : false}
            >
                {resp[2].answer}
            </button>

        </>
    )
}
