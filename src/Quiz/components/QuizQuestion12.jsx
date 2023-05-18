import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer12 } from '../../store/slices/quizSlice';

export const QuizQuestion12 = ({ nextPage }) => {

    const { liters } = useSelector(state => state.quiz);

    const dispatch = useDispatch();
  
    const { question, description, answers } = findQuestion(questions, 12); // destructuración de las propiedades 'question', 'description' y 'answers' del objeto que devuelve la función
  
    const handleAnswer = ({ target }) => {
  
      const answer = target.value; // 'value' de la respuesta del usuario
  
      const ltr = target.dataset.liters ; // convertir 'string' en 'number' para poder sumar y no encadenar
  
      dispatch(setAnswer12({ answer, ltr }));
  
      nextPage() // avanza a la siguiente pregunta automáticamente
  
    };
  
  
    return (
  
      <>
  
        <h2> {question} </h2>
  
        <p> {description} </p>
  
        {
          answers.map(item => (
  
            <button
              key={item.answer_id}
              data-liters={item.liters}
              value={item.answer}
              onClick={handleAnswer}
            >
              {item.answer}
            </button>
  
          ))
        }
  
      </>
  
    );
  
  };