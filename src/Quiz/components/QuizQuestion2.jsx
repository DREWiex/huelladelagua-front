import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../../store/slices/quizSlice';
import { Icono } from '../Icono';


export const QuizQuestion2 = () => {
    //ésto se haría con un useSelector en redux, en vez de un useState, para que así se guardara al cambiar de página

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.quiz)
    
    const handleCount = (ev) => {
        

        dispatch(setAnswer2({sign: ev.target.id}))
    
    }

    
    return (

        <>

            <h1>¿Cuantas personas forman parte de tu hogar?</h1>

            {count.map((item,index) => (

                <Icono key={index} />
            
            ))}
            

            <button id='sumar' onClick={handleCount}>
                +
            </button>
            <button id='restar' onClick={handleCount}>
                --
            </button>
        </>

    );
};