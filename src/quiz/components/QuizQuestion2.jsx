import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';

export const QuizQuestion2 = () => {

    const { count } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();

    const { question, description, icons } = findQuestion(questions, 2);


    const handleCount = (ev) => {

        dispatch(setAnswer2({ sign: ev.target.id }));

    };


    return (

        <>

            <h2> {question} </h2>

            <p> {description} </p>

            <div className='flex'>

                {
                    count.map((item, index) => (

                        <img
                            key={index}
                            src={icons[0]}
                            alt="Ícono de persona"
                            title='Ícono de persona'
                        />

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