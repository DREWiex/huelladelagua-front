import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { questions } from '../data/questions';
import { findQuestion } from '../../helpers';
import { setAnswer3 } from '../../store/slices/quizSlice';
import { useForm } from '../../hooks/useForm';


export const QuizQuestion3 = ({nextPage}) => {

  const { question, description, answers } = findQuestion(questions, 3); 

  const initialState = useSelector(state => state.quiz);

  const dispatch = useDispatch();

  const provinciasEspana = answers[0].answer

  const handleSubmit = (ev) => {

    ev.preventDefault();

    nextPage() 

};


  const handleProvinces = ({target}) => {

    dispatch(setAnswer3({province: target.value}));
    
  }

  return (
    
    <>

      <h2> {question} </h2>

      <p> {description} </p>



    <form
          onSubmit={handleSubmit}
            >

            <select onChange={handleProvinces }> 
                {
       

       provinciasEspana.map((item)=> ( 
                <option key={item}>{item}</option> 
             ))

        
          
               }
               </select>
               

                <input
                    type="submit"
                    value="Continuar"
                     disabled={!initialState.answers.quiz3 ? true : false} 
                />

            </form>
    
    </>
  )
}
