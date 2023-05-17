import React from 'react'

export const QuizQuestion1 = ({page, setPage}) => {

    //Ésto es por si queremos avanzar automáticamente, o por si queremos poner un botón para avanzar dentro del
    //componente
    const nextPage = () => {
        const newPage = page + 1
        setPage(newPage)
    }

  return (
    <button onClick={nextPage}>
        Avanzar
    </button>
  )
}
