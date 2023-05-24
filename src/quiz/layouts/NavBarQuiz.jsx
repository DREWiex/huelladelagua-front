import { useSelector } from 'react-redux';
import { usePaginate } from '../../hooks';
import { useEffect, useState } from 'react';
import { isQuestionAnswered, quizPage } from '../helpers';
import { Rectangles } from './components';

export const NavBarQuiz = ({ page, setPage }) => {

    const [currentPage, setCurrentPage] = useState(0); // Almacena la paginación modificada en función de las preguntas múltiples.

    const [done, setDone] = useState(false); // Almacena el valor que devuelve el helper 'isQuestionAnswered'.
    

    const { answers } = useSelector(state => state.quiz);

    const { handlePaginate } = usePaginate(page, setPage, done);


    useEffect(() => {

        const pagination = quizPage(page); // Paginación modificada en función de las preguntas múltiples.

        setCurrentPage(pagination);

        const value = isQuestionAnswered(page, answers); // Comprobar si la pregunta ha sido respondida o no.

        setDone(value);

    }, [page]);


    return (

        <>

            <nav className="nav-quiz">

                <button onClick={handlePaginate}>

                    <img
                        id="prev"
                        src={`${import.meta.env.VITE_URL_BASE}/assets/icons/arrow-left.svg`}
                        alt="Botón retroceder"
                        title="Botón retroceder"
                    />

                </button>

                <div className='nav-quiz-pagination'>

                    <Rectangles page={page} setPage={setPage} />

                    <p> {currentPage} / 12 </p>

                </div>

                <button onClick={handlePaginate}>

                    <img
                        id='next'
                        src={`${import.meta.env.VITE_URL_BASE}/assets/icons/arrow-right.svg`}
                        alt="Botón avanzar"
                        title="Botón avanzar"
                    />

                </button>

            </nav>

        </>

    );

};