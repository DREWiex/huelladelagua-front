import { questions } from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer6 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';


export const QuizQuestion6 = ({ nextPage }) => {

  const { answers } = useSelector((state) => state.quiz)

  const { question, description, answers: resp, icons } = findQuestion(questions, 6)

  const dispatch = useDispatch();


  const handleTimes = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer6({ answer, liters, pixels }));

    nextPage();

  };


  return (

    <>

      <h2>
        {question}
      </h2>

      <div>

        <div>
          <img src={icons[0]} alt={description[0]} title={description[0]} />
          <p> {description[0]} </p>
        </div>

        <div>
          <img src={icons[1]} alt={description[1]} title={description[1]} />
          <p> {description[1]} </p>
        </div>

        <div>
          <img src={icons[2]} alt={description[2]} title={description[2]} />
          <p> {description[2]} </p>
        </div>

      </div>

      <button
        id='-3'
        value={resp[0].answer}
        data-liters={resp[0].liters}
        data-pixels={resp[0].pixels}
        disabled={answers.quiz6 == '-3' ? true : false}
        onClick={handleTimes}
      >
        {resp[0].answer}
      </button>

      <button
        id='3-5'
        value={resp[1].answer}
        data-liters={resp[1].liters}
        data-pixels={resp[1].pixels}
        disabled={answers.quiz6 == '3-5' ? true : false}
        onClick={handleTimes}
      >
        {resp[1].answer}
      </button>

      <button
        id='+5'
        value={resp[2].answer}
        data-liters={resp[2].liters}
        data-pixels={resp[2].pixels}
        disabled={answers.quiz6 == '+5' ? true : false}
        onClick={handleTimes}
      >
        {resp[2].answer}
      </button>

    </>

  );

};