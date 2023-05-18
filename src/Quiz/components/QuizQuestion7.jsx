import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer7 } from '../../store/slices/quizSlice';

export const QuizQuestion7 = ({ nextPage }) => {

    const { answers } = useSelector((state) => state.quiz)

    const { question, description, answers: resp } = findQuestion(questions, 7);

    const dispatch = useDispatch();

    const handleTimes = ({ target }) => {

        const answer = target.value; // la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario
    
        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario
    
        dispatch(setAnswer7({ answer, liters, pixels }));

        nextPage();

    };


    return (

        <>

            <h2>
                {question}
            </h2>

            <button
                id='1'
                value={resp[0].answer}
                data-liters={resp[0].liters}
                data-pixels={resp[0].pixels}
                disabled={answers.quiz7 == '1' ? true : false}
                onClick={handleTimes}
            >
                {resp[0].answer}
            </button>

            <button
                id='3-5'
                value={resp[1].answer}
                data-liters={resp[1].liters}
                data-pixels={resp[1].pixels}
                disabled={answers.quiz7 == '3-5' ? true : false}
                onClick={handleTimes}
            >
                {resp[1].answer}
            </button>

            <button
                id='mano'
                value={resp[2].answer}
                data-liters={resp[2].liters}
                data-pixels={resp[2].pixels}
                disabled={answers.quiz7 == 'mano' ? true : false}
                onClick={handleTimes}
            >
                {resp[2].answer}
            </button>

        </>

    );

};