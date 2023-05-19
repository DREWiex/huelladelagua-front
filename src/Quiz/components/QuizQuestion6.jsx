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

      const newLtr = target.dataset.liters;

        dispatch(setAnswer6({answer:target.value, liters:newLtr}))

        nextPage()
    }

   
  return (
    <>
    <h2>
        {question}
    </h2>

        <div className='flex'>
          
            <div className='flex flex-colum ml-3 blue circulo'>
            <img src="/src/icons/lavadora.svg" className='white' alt=""/>
                <p> {description[0]} </p>
            </div>

            <div className='flex flex-colum ml-3'>
            <img src="/src/icons/lavavajillas.svg" alt=""/>
                <p> {description[1]} </p>
            </div>

            <div className='flex flex-colum ml-3'>
            <img src="/src/icons/Eco.svg" alt=""/>
                <p> {description[2]} </p>
            </div>

        </div>

    <button
     id='-3' 
     value={resp[0].answer}
     disabled={answers.quiz6 == '-3' ? true : false} 
     onClick={handleTimes} 
     data-liters={resp[0].liters}
     >
        {resp[0].answer} 
    </button>

    <button
     id='3-5' 
     value={resp[1].answer}
     disabled={answers.quiz6 == '3-5' ? true : false} 
     onClick={handleTimes} data-liters={resp[1].liters}
     >
        {resp[1].answer} 
    </button>

    <button
     id='+5' 
     value={resp[2].answer}
     disabled={answers.quiz6 == '+5' ? true : false} 
     onClick={handleTimes} 
     data-liters={resp[2].liters}
     >
        {resp[2].answer}  
    </button>
    </>
  )
}
