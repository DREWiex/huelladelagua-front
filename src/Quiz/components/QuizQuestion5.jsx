import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer5 } from '../../store/slices/quizSlice';

export const QuizQuestion5 = () => {

  const { liters } = useSelector(state => state.quiz);

  const dispatch = useDispatch();

  const { question, description, answers } = findQuestion(questions, 5); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función

  const handleAnswer = ({ target }) => {

    const answer = target.value; // 'value' de la respuesta del usuario

    const ltr = liters + Number(target.dataset.liters); // convertir 'string' en 'number' para poder sumar y no encadenar

    dispatch(setAnswer5({ answer, ltr }));

  };


  return (

    <>

      <h2> {question} </h2>

      <p> {description} </p>

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