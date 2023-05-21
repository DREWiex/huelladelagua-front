import { questions } from '../data/questions'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer6 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';


export const QuizQuestion6 = ({ nextPage }) => {

  //const { answers } = useSelector((state) => state.quiz)

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 6);


  const handlePaginate = () => {

    console.log('Botón múltiple')

  }; //!FUNC-HANDLEPAGINATE


  const handleTimes = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer6({ answer, liters, pixels }));

    nextPage();

  }; //!FUNC-HANDLETIMES


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2> {question} </h2>

          <div className='hidden'>

            <img
              src={img}
              alt="Una madre utilizando la lavadora con su hija"
              title="Una madre utilizando la lavadora con su hija"
            />

          </div>

        </header>

        <section>

          <nav>

            {
              description.map(item => (

                <div key={item.text}>

                  <button onClick={handlePaginate}>

                    <img
                      src={item.icon}
                      alt={item.text}
                      title={item.text}
                    />

                  </button>

                  <p> {item.text} </p>

                </div>

              ))
            }

          </nav>

          {
            answers.map(item => (

              <div key={item.answer_id}>

                <button
                  id={item.answer_id}
                  data-liters={item.liters}
                  data-pixels={item.pixels}
                  value={item.answer}
                  onClick={handleTimes}
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

      {/* <button
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
        </button> */}

    </>

  );

};