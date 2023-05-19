import { useEffect, useState } from 'react';
import { IntroQuiz, LiterCounter, QuizQuestion1, QuizQuestion10, QuizQuestion11, QuizQuestion12, QuizQuestion13, QuizQuestion14, QuizQuestion15, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5, QuizQuestion6, QuizQuestion7, QuizQuestion8, QuizQuestion9, ShowResults } from './components';
import { Wavify } from '../components';
import { changeWaveSize, pixelsSum } from '../helpers';
import { useSelector } from 'react-redux';
import './styles/Quiz.css';

export const Quiz = () => {

  // ESTADOS

  const { pixels, currentPage } = useSelector(state => state.quiz);

  const [page, setPage] = useState(0);


  // FUNCIONES

  const nextPage = () => setPage(page + 1); // avanzar a la siguiente pregunta

  const handlerPaginate = (ev) => {

    let newPage;

    switch (ev.target.id) {

      case 'next':
        newPage = page + 1;
        if (newPage <= 15) setPage(newPage);
        break;

      case 'prev':
        newPage = page - 1;
        if (newPage >= 1) setPage(newPage);
        break;

    };

  }; //!FUNC-HANDLERPAGINATE


  useEffect(() => {

    const totalPixels = pixelsSum(pixels); // suma los valores acumulados del estado 'pixels'

    changeWaveSize(totalPixels); // aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

  }, [pixels]); // se activa cada vez que se modifica el estado 'pixels'


  return (
    <>

      <main>

        <h1> Quiz </h1>


        <section id='quiz'>

          {page == 0 && <IntroQuiz nextPage={nextPage} />}

          {page == 1 && <QuizQuestion1 nextPage={nextPage} />}

          {page == 2 && <QuizQuestion2 />}

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

          {page == 15 && <QuizQuestion15 nextPage={nextPage} />}

          {page == 16 && <ShowResults />}

        </section>


        <LiterCounter />

        {
          page != 16 && page != 1 && // el botón 'anterior' no se mostrará cuando el usuario esté en la primera pregunta
          <button id='prev' onClick={handlerPaginate}>
            Anterior
          </button>
        }

        {
          page == currentPage ? '' : page != 16 &&
            <button id='next' onClick={handlerPaginate}>
              Siguiente
            </button>
        }

        <Wavify />

      </main>

    </>

  );

};