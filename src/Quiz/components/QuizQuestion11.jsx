import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer11} from '../../store/slices/quizSlice';

export const QuizQuestion11 = ({ nextPage }) => {

  const { liters } = useSelector(state => state.quiz);

  const dispatch = useDispatch();

  const { question, description, answers } = findQuestion(questions, 11); 

  
  const handleAnswer = ({ target }) => {

    const answer = target.value; 

    const ltr = liters + Number(target.dataset.liters); 
    
    const lrtParse= Math.trunc(ltr)

    dispatch(setAnswer11({ answer, lrtParse }));

    

    nextPage() 
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