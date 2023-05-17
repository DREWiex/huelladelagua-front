import { useEffect, useState } from 'react';
import { QuizQuestion1, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5 } from './components';
import { Wavify } from '../components';
import { changeWaveSize } from '../helpers';
import { QuizQuestion6 } from './components/QuizQuestion6';
import { useSelector } from 'react-redux';


export const Quiz = () => {

  const [page, setPage] = useState(1);

  const nextPage = () => {
    const newPage = page + 1
    setPage(newPage)
}

  const { liters, answers } = useSelector(state => state.quiz);


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

  };

  

  useEffect(() => {

    changeWaveSize(liters); // pasar como argumento el estado "litros"

  }, [liters]); // la dependencia será el estado "litros"


  return (
    <>

      <h1>
        Quiz
      </h1>

      <section id='quiz'>
        {/* No se me ocurre como hacerlo mas escalable */}
        {page == 1 && <QuizQuestion1 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 2 && <QuizQuestion2 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 3 && <QuizQuestion3 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 4 && <QuizQuestion4 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 5 && <QuizQuestion5 page={page} setPage={setPage} nextPage={nextPage} />}

        {page == 6 && <QuizQuestion6 page={page} setPage={setPage} nextPage={nextPage} />}

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