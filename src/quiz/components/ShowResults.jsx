import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedBack, sendMyData } from '../../store/thunks/quizThunk';

export const ShowResults = () => {

  const { answers, backRequestState, dataRequestState, dataRequest } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  console.log(answers)
  console.log(dataRequest)
  
  useEffect(()=>{
    dispatch(sendMyData(answers))
    dispatch(getFeedBack(answers))
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
        <>
        <p>
          Error al enviar el questionario
        </p>
        <button onClick={() => dispatch(sendMyData(answers))}>
        Volver a enviar
        </button>
        </>
      }

      {/* petición de predicciones: */}
      {
        dataRequestState == 'failed' &&
        <p>
          Fallo al obtener las predicciones
        </p>
      }
      {
        dataRequestState == 'successfull' &&
        <p>
          eres un {dataRequest}
        </p>
      }
    </div>
  )
}
