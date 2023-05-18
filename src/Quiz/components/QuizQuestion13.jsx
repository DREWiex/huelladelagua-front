import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer13 } from '../../store/slices/quizSlice';

export const QuizQuestion13 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers } = findQuestion(questions, 13); 


  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer13({ answer, liters, pixels }));

    nextPage();

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