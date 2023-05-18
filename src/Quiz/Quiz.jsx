import { useEffect, useState } from 'react';
import { LiterCounter, QuizQuestion1, QuizQuestion10, QuizQuestion11, QuizQuestion12, QuizQuestion13, QuizQuestion14, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5, QuizQuestion6, QuizQuestion7, QuizQuestion8, QuizQuestion9, Quizquestion15 } from './components';
import { Wavify } from '../components';
import { changeWaveSize } from '../helpers';
import { useSelector } from 'react-redux';

export const Quiz = () => {

  // ESTADOS

  const { liters, answers } = useSelector(state => state.quiz);

  console.log(answers)

  const [page, setPage] = useState(1);

  // FUNCIONES

  const nextPage = () => setPage(page + 1); // avanzar a la siguiente pregunta


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

        {page == 1 && <QuizQuestion1 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 2 && <QuizQuestion2 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 3 && <QuizQuestion3 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 4 && <QuizQuestion4 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 5 && <QuizQuestion5 nextPage={nextPage} />}

        {page == 6 && <QuizQuestion6 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 7 && <QuizQuestion7 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 8 && <QuizQuestion8 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 9 && <QuizQuestion9 nextPage={nextPage} />}

        {page == 10 && <QuizQuestion10 nextPage={nextPage} />}

        {page == 11 && <QuizQuestion11 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 12 && <QuizQuestion12 nextPage={nextPage} />}

        {page == 13 && <QuizQuestion13 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 14 && <QuizQuestion14 nextPage={nextPage} />}

        {page == 15 && <Quizquestion15 page={page} setPage={setPage} nextPage={nextPage} />}


      </section>

         
      <LiterCounter />
        

      <button id='before' onClick={handlerPaginate}>
        Anterior
      </button>

      <button id='after'  onClick={handlerPaginate}>
        Siguiente
      </button>

         
      <Wavify />

        
    </>

  );

};