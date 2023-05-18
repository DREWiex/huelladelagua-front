import { useDispatch, useSelector } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer4 } from '../../store/slices/quizSlice';

export const QuizQuestion4 = ({ nextPage }) => {

  const { liters } = useSelector(state => state.quiz);

  const dispatch = useDispatch();

  const { question, description, answers } = findQuestion(questions, 4); 
  
  const handleAnswer = ({ target }) => {

    const answer = target.value; 

    const ltr = liters + Number(target.dataset.liters); 

    dispatch(setAnswer4({ answer, ltr }));

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
