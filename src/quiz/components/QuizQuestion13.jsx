import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer13 } from '../../store/slices/quizSlice';

export const QuizQuestion13 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 13);


  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const euros = Number(target.dataset.euros); // gasto medido en euros por consumo litros/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer13({ answer, liters, euros, pixels }));

    nextPage();

  };


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div>

            <img
              src={`${import.meta.env.VITE_URL_BASE}${img}`}
              alt="Un hombre paseando a tres perros"
              title="Un hombre paseando a tres perros"
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
                  data-euros={item.euros}
                  data-pixels={item.pixels}
                  value={item.answer}
                  onClick={handleAnswer}
                >

                  <img
                    src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                    alt="Icono mascotas"
                    title="Icono mascotas"
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