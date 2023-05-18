import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import {questions} from '../data/questions'
import { setAnswer8 } from '../../store/slices/quizSlice';

export const QuizQuestion8 = ({page, setPage, nextPage}) => {

    const { answers, liters } = useSelector((state) => state.quiz);

    const {question, description, answers:resp} = findQuestion(questions, 8);

    const dispatch = useDispatch();

    const handleTimes = ({target}) => {

        const newLtr =  target.dataset.liters
  
          dispatch(setAnswer8({answer:target.value, liters:newLtr}))
          nextPage()
      }
  return (
    <>
    <h2>
        {question}
    </h2>

    <p>
        ¿Usas la función ECO en tus electrodomésticos?
    </p>

    <button
     id='siempre' 
     value={resp[0].answer}
     disabled={answers.quiz8 == 'siempre' ? true : false} 
     onClick={handleTimes} 
     data-liters={resp[0].liters}
     >
        {resp[0].answer} 
    </button>

    <button
     id='aveces' 
     value={resp[1].answer}
     disabled={answers.quiz8 == 'aveces' ? true : false} 
     onClick={handleTimes} 
     data-liters={resp[1].liters}
     >
        {resp[1].answer} 
    </button>

    <button
     id='no' 
     value={resp[2].answer}
     disabled={answers.quiz8 == 'no' ? true : false} 
     onClick={handleTimes} data-liters={resp[2].liters}
     >
        {resp[2].answer} 
    </button>
    </>
  )
}