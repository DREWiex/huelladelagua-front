
import  {useDispatch,useSelector}  from 'react-redux';


import { setAnswer4 } from '../../store/slices/quizSlice';


export const QuizQuestion4 = () => {

  const dispatch = useDispatch();
 

  const handleAnswer = ({ target }) => {

  const answer = target.value; 

  dispatch(setAnswer4({ answer }));

};




  return (

    <div>
      <h1>¿De cual de estos temas te interesaria saber mas?</h1>


      <button
            key= 'ahorro'
            value='Ahorra agua'
            onClick={handleAnswer}
          >
            Ahorra agua
          </button>
    </div>
  )
}
