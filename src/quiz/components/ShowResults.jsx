import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendMyData } from '../../store/thunks/quizThunk';

export const ShowResults = () => {

  const { answers, backRequestState } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(sendMyData(answers))
  },[])
  
  return (
    <div>
      {
        backRequestState == 'complete' &&
        <p>
          Questionario enviado con éxito
        </p>
      }
      {
        backRequestState == 'loading' &&
        <p>
          cargando...
        </p>
      }
      {
        backRequestState == 'failed' &&
        <p>
          Error al enviar el questionario
        </p>
      }
    </div>
  )
}
