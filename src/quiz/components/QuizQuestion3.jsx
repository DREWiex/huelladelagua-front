import { useDispatch, useSelector } from 'react-redux';
import { questions } from '../data/questions';
import { findQuestion } from '../../helpers';
import { setAnswer3 } from '../../store/slices/quizSlice';

export const QuizQuestion3 = ({ nextPage }) => {

  const { question, description, answers } = findQuestion(questions, 3);

  const { answers: resp } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  const provinciasEspana = answers[0].answer;


  const handleSubmit = (ev) => {

    ev.preventDefault();

  };


  const handleProvinces = ({ target }) => {

    dispatch(setAnswer3({ province: target.value }));

    nextPage();

  };


  return (

    <>

      <h2> {question} </h2>

      <p> {description} </p>

      <form onSubmit={handleSubmit}>

        <select onChange={handleProvinces}>

          {

            provinciasEspana.map((item) => (

              <option key={item}> {item} </option>

            ))

          }

        </select>

      </form>

      {
        resp.quiz3 != '' && <p> Tu elección actual es: {resp.quiz3} </p>
      }

    </>

  );

};