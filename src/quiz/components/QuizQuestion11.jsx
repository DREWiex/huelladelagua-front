import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer11 } from '../../store/slices/quizSlice';

export const QuizQuestion11 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 11);


  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer11({ answer, liters, pixels }));

    nextPage(); // avanza a la siguiente pregunta automáticamente una vez el usuario responde a la pregunta

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
              alt="Un padre cocinando con su hijo"
              title="Un padre cocinando con su hijo" />

          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div
                key={item.answer_id}
              >

                <button
                  id={item.answer_id}
                  data-liters={item.liters}
                  data-pixels={item.pixels}
                  value={item.answer}
                  onClick={handleAnswer}
                >

                  <img
                    src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                    alt="Icono carne"
                    title="Icono carne"
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