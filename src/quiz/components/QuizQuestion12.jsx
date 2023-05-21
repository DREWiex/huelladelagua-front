import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer12 } from '../../store/slices/quizSlice';

export const QuizQuestion12 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 12); // destructuración de las propiedades 'question', 'description', 'answers' e 'img' del objeto que devuelve la función


  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer12({ answer, liters, pixels }));

    nextPage() // avanza a la siguiente pregunta automáticamente

  };


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div className='hidden'>

            <img
              src={img}
              alt="Una familia en un coche"
              title="Una familia en un coche"
            />

          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div key={item.answer_id}>

                <button
                  id={item.answer_id}
                  data-liters={item.liters}
                  data-pixels={item.pixels}
                  value={item.answer}
                  onClick={handleAnswer}
                >

                  <img
                    src={item.icon}
                    alt="Icono coche"
                    title="Icono coche"
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