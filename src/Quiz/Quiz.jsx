import { useEffect, useState } from 'react';
import { QuizQuestion1, QuizQuestion10, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5, QuizQuestion9 } from './components';
import { Wavify } from '../components';
import { changeWaveSize } from '../helpers';
import { QuizQuestion6 } from './components/QuizQuestion6';
import { useSelector } from 'react-redux';

export const Quiz = () => {

  // ESTADOS

  const { liters, answers } = useSelector(state => state.quiz);

  console.log(answers);

  const [ page, setPage ] = useState(1);

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

      <section id='quiz'>

        {page == 1 && <QuizQuestion1 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 2 && <QuizQuestion2 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 3 && <QuizQuestion3 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 4 && <QuizQuestion4 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 5 && <QuizQuestion5 nextPage={nextPage} />}

        {page == 6 && <QuizQuestion6 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 9 && <QuizQuestion9 nextPage={nextPage} />}

        {page == 10 && <QuizQuestion10 nextPage={nextPage} />}

      </section>

      <button id='before' onClick={handlerPaginate}>
        Anterior
      </button>

      <button id='after' onClick={handlerPaginate}>
        Siguiente
      </button>

      <Wavify />

    </>

  );

};