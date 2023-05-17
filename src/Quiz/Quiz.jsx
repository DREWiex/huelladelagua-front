import { useEffect, useState } from 'react';
import { QuizQuestion1, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5 } from './components';
import { Wavify } from '../components';
import { changeWaveSize } from '../helpers';
import { useSelector } from 'react-redux';

export const Quiz = () => {

  const [page, setPage] = useState(1);

  const { liters, answers } = useSelector(state => state.quiz);

  console.log(answers)

  const handlerPaginate = (ev) => {

    let newPage;

    switch (ev.target.id) {

      case 'after':
        newPage = page + 1;
        if (newPage <= 5) setPage(newPage); // el 5 se cambiará por 15 o por las preguntas totales que tenga.
        break;

      case 'before':
        newPage = page - 1;
        if (newPage >= 1) setPage(newPage);
        break;

    };

  };

  useEffect(() => {

    console.log('ENTRO')

    changeWaveSize(liters); // pasar como argumento el estado "litros"

  }, [liters]); // la dependencia será el estado "litros"


  return (
    <>

      <h1>
        Quiz
      </h1>

      <section id='quiz'>
        {/* No se me ocurre como hacerlo mas escalable */}
        {page == 1 && <QuizQuestion1 page={page} setPage={setPage} />}

        {page == 2 && <QuizQuestion2 page={page} setPage={setPage} />}

        {page == 3 && <QuizQuestion3 page={page} setPage={setPage} />}

        {page == 4 && <QuizQuestion4 page={page} setPage={setPage} />}

        {page == 5 && <QuizQuestion5 page={page} setPage={setPage} />}

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