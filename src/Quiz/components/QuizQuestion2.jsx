import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icono } from '../../components';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer2 } from '../../store/slices/quizSlice';

export const QuizQuestion2 = () => {
    //ésto se haría con un useSelector en redux, en vez de un useState, para que así se guardara al cambiar de página

    const dispatch = useDispatch();
    const { question, description, answers } = findQuestion(questions, 2); 
    const { count } = useSelector((state) => state.quiz)
    
    const handleCount = (ev) => {
        

        dispatch(setAnswer2({sign: ev.target.id}))
    
    }

    
    return (

        <>

           
      <h2> {question} </h2>

        <p> {description} </p>

            <div className='flex'>
                
            {count.map((item,index) => (

                <img className='white' key={index} src="/src/icons/persona.svg" alt="" />
            
            ))}
            </div>
            

            <button id='sumar' onClick={handleCount}>
                +
            </button>
            <button id='restar' onClick={handleCount}>
                --
            </button>
        </>

    );
};