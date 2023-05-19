import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer9 } from '../../store/slices/quizSlice';

export const QuizQuestion9 = ({ nextPage }) => {

    const { liters } = useSelector(state => state.quiz);

    const dispatch = useDispatch();

    const { question, description, answers } = findQuestion(questions, 9); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función

    const handleAnswer = ({ target }) => {

        const answer = target.value; // 'value' de la respuesta del usuario

        const ltr = target.dataset.liters; // convertir 'string' en 'number' para poder sumar y no encadenar
        const lrtParse= Math.trunc(ltr)

        dispatch(setAnswer9({ answer, lrtParse }));
       

        nextPage();

    };


    return (

        <>

            <h2> {question} </h2>

            <div className='flex'>
          
          <div className='flex flex-colum ml-3 blue  circulo'>
          <img src="/src/icons/reciclaAgua.svg" className='white' alt=""/>
              <p> {description[0]} </p>
          </div>

          <div className='flex flex-colum ml-3'>
          <img src="/src/icons/reciclajePapel.svg" alt=""/>
              <p> {description[1]} </p>
          </div>

          

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