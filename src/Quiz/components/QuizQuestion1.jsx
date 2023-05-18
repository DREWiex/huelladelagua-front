import { useDispatch, useSelector } from 'react-redux';
import { setAnswer1 } from '../../store/slices/quizSlice';

export const QuizQuestion1 = ({ page, setPage, nextPage }) => {
  
    const { answers, liters } = useSelector((state) => state.quiz)

    const dispatch = useDispatch();
    //Ésto es por si queremos avanzar automáticamente, o por si queremos poner un botón para avanzar dentro del
    //componente

    const handleAgeRange = (ev) => {
      dispatch(setAnswer1({ageRange: ev.target.id}));
      nextPage()
    }

    

  return (
    <>
    <h1>
    Cúal es tu rango de edad
    </h1>

    <p>
      Este dato es 100% anónimo
    </p>

    <form  >

      <button className='boton' id='-18' onClick={handleAgeRange}>
        Menor de 18
      </button>

      <button className='boton' id='18-35' onClick={handleAgeRange}>
        Entre 18 y 35
      </button>

      <button className='boton' id='36-65' onClick={handleAgeRange}>
        Entre 36 y 65
      </button>

      <button  id='+65' onClick={handleAgeRange}>
        Mayor de 65
      </button>

    </form>

    { // Ésto es por si el usuario decide cambiar su opción mas adelante
      answers.quiz1 != '' &&
      <p>
        Tu elección actual es de {answers.quiz1}
      </p>
    }
   
    </>

  );

};