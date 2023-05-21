import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { useDispatch } from 'react-redux';
import { setAnswer7 } from '../../store/slices/quizSlice';

export const QuizQuestion7 = ({ nextPage }) => {

    const dispatch = useDispatch();

    const { question, description, answers, img } = findQuestion(questions, 7);


    const handlePaginate = () => {

        console.log('Botón múltiple')

    }; //!FUNC-HANDLEPAGINATE


    const handleTimes = ({ target }) => {

        const answer = target.value; // la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

        dispatch(setAnswer7({ answer, liters, pixels }));

        nextPage();

    }; //!FUNC-HANDLETIMES


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <div className='hidden'>

                        <img
                            src={img}
                            alt="Friegaplatos lleno de vajilla sucia"
                            title="Friegaplatos lleno de vajilla sucia"
                        />

                    </div>

                </header>

                <section>

                    <nav>

                        {
                            description.map(item => (

                                <div key={item.text}>

                                    <button
                                        className={`${item.icon_bg_color}`}
                                        onClick={handlePaginate}
                                    >

                                        <img
                                            src={item.icon}
                                            alt={item.text}
                                            title={item.text}
                                        />

                                    </button>

                                    <p> {item.text} </p>

                                </div>

                            ))
                        }

                    </nav>

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
                                        src={item.icon}
                                        alt="Icono"
                                        title="Icono"
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