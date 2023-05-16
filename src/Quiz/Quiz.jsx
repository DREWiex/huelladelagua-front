import React, { useState } from 'react'
import { QuizQuestion1 } from './QuizQuestion1';
import { QuizQuestion2 } from './QuizQuestion2';
import { QuizQuestion3 } from './QuizQuestion3';
import { QuizQuestion4 } from './QuizQuestion4';
import { QuizQuestion5 } from './QuizQuestion5';

export const Quiz = () => {

  const [page, setPage] = useState(1)

  const handlePage = (ev) => {

    
      let newPage;

      switch (ev.target.id) {
        case 'after':
          newPage = page + 1;
          if (newPage <= 5 ) setPage(newPage) // el 5 se cambiará por 15 o por las preguntas totales que tenga.
          break;
        case 'before':
          newPage = page - 1;
          if (newPage >= 1 ) setPage(newPage)
          break;
      }

    


  }


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

      <button id='before' onClick={handlePage}>
        Anterior
      </button>

      <button id='after' onClick={handlePage}>
        Siguiente
      </button>

    </>
  )
}
