import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { useDispatch } from 'react-redux';
import { setAnswer15 } from '../../store/slices/quizSlice';

export const QuizQuestion15 = ({ nextPage }) => {

    const { question, description, answers, img } = findQuestion(questions, 15);

    const dispatch = useDispatch();


    const handleTimes = ({ target }) => {

        dispatch(setAnswer15({ answer: target.value }));

        nextPage(); //! avanzar a la siguiente 'page' para que renderice el componente 'ShowResults' (¿botón finalizar?)

    };


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <p> {description} </p>

                    <div className='hidden'>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Un hombre pensativo sentado junto a unas monedas"
                            title="Un hombre pensativo sentado junto a unas monedas"
                        />

                    </div>

                </header>

                <section>

                    {
                        answers.map(item => (

                            <div key={item.answer_id}>

                                <button
                                    id={item.answer_id}
                                    data-liters={item.liters}
                                    data-pixels={item.pixels}
                                    value={item.answer}
                                    onClick={handleTimes}
                                >

                                    <img
                                        src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                                        alt="Icono mascotas"
                                        title="Icono mascotas"
                                    />

                                    {item.answer} {/* valor que recibirá el endpoint */}

                                </button>

                            </div>

                        ))
                    }

                </section>

            </div>

        </>

    );

};