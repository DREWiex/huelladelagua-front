import { useEffect, useState } from 'react';
import { QuizQuestion1, QuizQuestion10, QuizQuestion11, QuizQuestion12, QuizQuestion13, QuizQuestion14, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5, QuizQuestion9 } from './components';
import { Wavify } from '../components';
import { changeWaveSize } from '../helpers';
import { QuizQuestion6 } from './components/QuizQuestion6';
import { useSelector } from 'react-redux';
import { QuizQuestion7 } from './components/QuizQuestion7';
import { QuizQuestion8 } from './components/QuizQuestion8';
import { Quizquestion15 } from './components/Quizquestion15';
import { LiterCounter } from './components/LiterCounter';
import { ShowResults } from './components/ShowResults';

export const Quiz = () => {

  // ESTADOS

  const { liters, answers, pageValidate, currentPage } = useSelector(state => state.quiz);
  console.log(pageValidate)
  

  const [ page, setPage ] = useState(1);

  // FUNCIONES

  const nextPage = () => setPage(page + 1); // avanzar a la siguiente pregunta
  console.log(page, currentPage)

  const handlerPaginate = (ev) => {

    let newPage;

    switch (ev.target.id) {

      case 'after':
        newPage = page + 1;
        if (newPage <= 15) setPage(newPage);
        break;

      case 'before':
        newPage = page - 1;
        if (newPage >= 1) setPage(newPage);
        break;

    };

  }; //!FUNC-HANDLERPAGINATE


  useEffect(() => {

    changeWaveSize(liters); // aumenta el tamaño de la ola con cada cambio

  }, [liters]); // se activa cada vez que se modifica el estado "liters"


  return (
    <>

      <h1>
        Quiz
      </h1>


      <section id='quiz' className='grid'>
        {/* No se me ocurre como hacerlo mas escalable */}

        {page == 1 && <QuizQuestion1 nextPage={nextPage} />}

        {page == 2 && <QuizQuestion2 nextPage={nextPage} />}

        {page == 3 && <QuizQuestion3 nextPage={nextPage} />}

        {page == 4 && <QuizQuestion4 nextPage={nextPage} />}

        {page == 5 && <QuizQuestion5 nextPage={nextPage} />}

        {page == 6 && <QuizQuestion6 nextPage={nextPage} />}

        {page == 7 && <QuizQuestion7 nextPage={nextPage} />}

        {page == 8 && <QuizQuestion8 nextPage={nextPage} />}

        {page == 9 && <QuizQuestion9 nextPage={nextPage} />}

        {page == 10 && <QuizQuestion10 nextPage={nextPage} />}
        
        {page == 11 && <QuizQuestion11 nextPage={nextPage} />}

        {page == 12 && <QuizQuestion12 nextPage={nextPage} />}
        
        {page == 13 && <QuizQuestion13 nextPage={nextPage} />}
        
        {page == 14 && <QuizQuestion14 nextPage={nextPage} />}
        
        {page == 15 && <Quizquestion15 nextPage={nextPage} />}

        {page == 16 && <ShowResults/>}
        
 
      </section>
    
      <LiterCounter/>

      <button 
      id='before' 
      onClick={handlerPaginate}>
        Anterior
      </button>
      
      {
        page == currentPage ?
        ''
        :

        <button 
      id='after' 
      onClick={handlerPaginate}
      >
        Siguiente
      </button>
      }
      

      

      <Wavify />

    </>

  );

};