import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer10 } from '../../store/slices/quizSlice';

export const QuizQuestion10 = ({ nextPage }) => {

    const dispatch = useDispatch();

    const { question, description, answers } = findQuestion(questions, 10); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función

    const handleAnswer = ({ target }) => {

        const answer = target.value; // 'value' de la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario
        
        dispatch(setAnswer10({ answer, liters, pixels }));    

        nextPage();

    };


    return (

        <>

            <h2> {question} </h2>

            <div>
                <p>(imagen)</p>
                <p> {description[0]} </p>
            </div>

            <div>
                <p>(imagen)</p>
                <p> {description[1]} </p>
            </div>

            {
                answers.map(item => (

                    <button
                        key={item.answer_id}
                        data-liters={item.liters}
                        data-pixels={item.pixels}
                        value={item.answer}
                        onClick={handleAnswer}
                    >
                        {item.answer}
                    </button>

                ))
            }

        </>

    );

};