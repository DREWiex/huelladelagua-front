import { useDispatch } from 'react-redux';
import { questions } from '../data/questions';
import { findQuestion } from '../../helpers';
import { setAnswer3 } from '../../store/slices/quizSlice';

export const QuizQuestion3 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 3);

  const provinciasEspana = answers[0].answer;


  const handleSubmit = (ev) => {

    ev.preventDefault();

  }; //!FUNC-HANDLESUBMIT


  const handleProvinces = ({ target }) => {

    dispatch(setAnswer3({ province: target.value }));

    nextPage();

  }; //!FUNC-HANDLEPROVINCES


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div className='hidden'>

            <img
              src={img}
              alt="Un hombre de pie frente a un mapamundi"
              title="Un hombre de pie frente a un mapamundi"
            />

          </div>

        </header>

        <form onSubmit={handleSubmit}>

          <select onChange={handleProvinces}>

            {
              provinciasEspana.map((item) => (

                <option
                  key={item}>
                  {item}
                </option>

              ))
            }

          </select>

        </form>

      </div>

    </>

  );

};