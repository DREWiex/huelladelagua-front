import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer10 } from '../../store/slices/quizSlice';

export const QuizQuestion10 = ({ nextPage }) => {

    const { liters } = useSelector(state => state.quiz);

    const dispatch = useDispatch();

    const { question, description, answers } = findQuestion(questions, 10); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función

    const handleAnswer = ({ target }) => {

        const answer = target.value; // 'value' de la respuesta del usuario

        const ltr = target.dataset.liters; // convertir 'string' en 'number' para poder sumar y no encadenar
    
        const lrtParse= Math.trunc(ltr)

        dispatch(setAnswer10({ answer, lrtParse }));
         

        nextPage();

    };


    return (

        <>

            <h2> {question} </h2>

            <div className='flex flex-colum ml-3  circulo'>
          <img src="/src/icons/reciclaAgua.svg" className='white' alt=""/>
              <p> {description[0]} </p>
          </div>

          <div className='flex flex-colum blue ml-3'>
          <img src="/src/icons/reciclajePapel.svg" alt=""/>
              <p> {description[1]} </p>
          </div>


            {
                answers.map(item => (

                    <button
                        key={item.answer_id}
                        data-liters={item.liters}
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