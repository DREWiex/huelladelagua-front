import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../../store/slices/quizSlice';
import { Icono } from '../../components';

export const QuizQuestion2 = ({ nextPage }) => {

    const { count } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();


    const handleCount = (ev) => {

        dispatch(setAnswer2({ sign: ev.target.id }))

    };


    return (

        <>

            <h1>¿Cuantas personas forman parte de tu hogar?</h1>

            <div className='flex'>

                {
                    count.map((item, index) => (

                        <Icono className='ml-3' key={index} />

                    ))
                }

            </div>


            <button id='sumar' onClick={handleCount}>
                +
            </button>

            <button id='restar' onClick={handleCount}>
                -
            </button>

        </>

    );
};