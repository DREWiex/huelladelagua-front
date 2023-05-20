import { useDispatch, useSelector } from 'react-redux';
import { setAnswer1 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';

export const QuizQuestion1 = ({ nextPage }) => {

  //const { answers } = useSelector((state) => state.quiz);

  const { question, description, answers } = findQuestion(questions, 1);

  const dispatch = useDispatch();


  const handleAgeRange = (ev) => {

    dispatch(setAnswer1({ ageRange: ev.target.value }));

    nextPage();

  };


  return (

    <>

      <div className='quiz-container'>

        <header>

          <h2>
            {question}
          </h2>

          <p>
            {description}
          </p>

          <div className='hidden'>
            (Aquí va una imagen)
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

      {/* <button
        id='-18'
        value={resp[0].answer}
        onClick={handleAgeRange}
      >
        {resp[0].answer}
      </button>

      <button
        id='18-35'
        value={resp[1].answer}
        onClick={handleAgeRange}
      >
        {resp[1].answer}
      </button>

      <button
        id='36-65'
        value={resp[2].answer}
        onClick={handleAgeRange}
      >
        {resp[2].answer}
      </button>

      <button
        id='+65'
        value={resp[3].answer}
        onClick={handleAgeRange}
      >
        {resp[3].answer}
      </button> */}

      {/* { // Ésto es por si el usuario decide cambiar su opción mas adelante
        answers.quiz1 != '' &&
        <p>
          Tu elección actual es de {answers.quiz1}
        </p>
      } */}

    </>

  );

};