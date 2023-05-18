import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer5 } from '../../store/slices/quizSlice';

export const QuizQuestion5 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers } = findQuestion(questions, 5); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función

  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer5({ answer, liters, pixels }));

    nextPage() // avanza a la siguiente pregunta automáticamente

  };


  return (

    <>

      <h2> {question} </h2>

      <p> {description} </p>

      {
        answers.map(item => (

          <button className='boton'
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