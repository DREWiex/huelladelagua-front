import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer1 } from '../../store/slices/quizSlice';


export const QuizQuestion2 = () => {
    //ésto se haría con un useSelector en redux, en vez de un useState, para que así se guardara al cambiar de página

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.quiz)
    
    const handleCount = (ev) => {
        

    }

    return (
        <>
            <h1>
                Contador: {count}
            </h1>

            <button id='sumar' onClick={handleCount}>
                sumar
            </button>
            <button id='restar' onClick={handleCount}>
                restar
            </button>
        </>

    );
};