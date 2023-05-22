import { useSelector } from 'react-redux';
import { usePaginate } from '../../hooks';
import { useEffect, useState } from 'react';
import { isQuestionAnswered, quizPage } from '../helpers';

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

                    <div>

                        {/* a excepción de la primera, hasta que la pregunta anterior a la actual no esté respondida, la acción 'setPage' del evento 'onClick' no va a realizar su función */}

                        <div className="rectangle" onClick={() => { setPage(1) }}> {/* page 1 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz1 && setPage(2) }}> {/* page 2 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz2 && setPage(3) }}> {/* page 3 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz3 && setPage(4) }}> {/* page 4 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz4 && setPage(5) }}> {/* page 5 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz5 && setPage(6) }}> {/* page 6 */} </div> {/* pregunta múltiple */}
                        <div className="rectangle" onClick={() => { answers.quiz6 && setPage(9) }}> {/* page 9 */} </div> {/* pregunta múltiple */}
                        <div className="rectangle" onClick={() => { answers.quiz9 && setPage(11) }}> {/* page 11 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz11 && setPage(12) }}> {/* page 12 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz12 && setPage(13) }}> {/* page 13 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz13 && setPage(14) }}> {/* page 14 */} </div>
                        <div className="rectangle" onClick={() => { answers.quiz14 && setPage(15) }}> {/* page 15 */} </div>

                    </div>

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