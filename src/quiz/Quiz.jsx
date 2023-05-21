import { useState } from 'react';
import { IntroQuiz, QuizQuestion1, QuizQuestion10, QuizQuestion11, QuizQuestion12, QuizQuestion13, QuizQuestion14, QuizQuestion15, QuizQuestion2, QuizQuestion3, QuizQuestion4, QuizQuestion5, QuizQuestion6, QuizQuestion7, QuizQuestion8, QuizQuestion9, ShowResults } from './components';
import { FooterQuiz, HeaderQuiz, NavBarQuiz } from './layouts';
//import './styles/Quiz.css';
import './styles/QQ13.css';

export const Quiz = () => {

  const [page, setPage] = useState(0); // empieza en 0 para que el primer componente que cargue sea la introducción

  const nextPage = () => setPage(page + 1); // avanzar a la siguiente pregunta


  return (

    <>

      <HeaderQuiz />

      {
        page > 0 && page < 16 && <NavBarQuiz page={page} setPage={setPage} />
      }

      <main className='main-quiz'>

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

      </main>

      <FooterQuiz page={page} />

    </>

  );

};