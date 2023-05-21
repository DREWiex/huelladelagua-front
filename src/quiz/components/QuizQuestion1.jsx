import { useDispatch, useSelector } from 'react-redux';
import { setAnswer1 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';

export const QuizQuestion1 = ({ nextPage }) => {

  //const { answers } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 1);


  const handleAgeRange = ({ target }) => {

    dispatch(setAnswer1({ ageRange: target.value }));

    nextPage();

  };


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div className='hidden'>
            <img src={img} alt="Familia" title="Familia" />
          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div
                key={item.answer_id}
                className='quiz-btn'
              >

                <div>
                  <img src={item.icon} alt="Icono persona" title="Icono persona" />
                </div>

                <button
                  id={item.answer_id}
                  value={item.answer}
                  onClick={handleAgeRange}
                >
                  {item.answer}
                </button>

              </div>

            ))
          }

        </section>

      </div>

      {/* { // Ésto es por si el usuario decide cambiar su opción mas adelante
        answers.quiz1 != '' &&
        <p>
          Tu elección actual es de {answers.quiz1}
        </p>
      } */}

    </>

  );

};