import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer4 } from '../../store/slices/quizSlice';

export const QuizQuestion4 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 4);


  const handleAnswer = ({ target }) => {

    dispatch(setAnswer4({ answer: target.value }));

    nextPage();

  };


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div className='hidden'>

            <img
              src={`${import.meta.env.VITE_URL_BASE}${img}`}
              alt="Varias personas alrededor de una imagen de la Tierra"
              title="Varias personas alrededor de una imagen de la Tierra"
            />

          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div key={item.answer_id}>

                <button
                  id={item.answer_id}
                  value={item.answer}
                  onClick={handleAnswer}
                >

                  <img
                    src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                    alt="Icono"
                    title="Icono"
                  />

                  {item.answer} {/* valor que recibirá el endpoint */}

                </button>

              </div>

            ))
          }

        </section>

      </div>

    </>

  );

};