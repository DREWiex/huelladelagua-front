import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';

export const QuizQuestion2 = () => {

    const { count } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();

    const { question, description, icons, img } = findQuestion(questions, 2);


    const handleCount = (ev) => {

        dispatch(setAnswer2({ sign: ev.target.id }));

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
                            alt="Una familia feliz"
                            title="Una familia feliz"
                        />

                    </div>

                </header>

                <section className='quiz2-container'>

                    <div>

                        <button onClick={handleCount}>

                            <img
                                id="restar"
                                src={`${import.meta.env.VITE_URL_BASE}/assets/icons/menos.svg`}
                                alt="Signo menos"
                                title="Signo menos"
                            />

                        </button>

                        {
                            count.map((item, index) => (

                                <div>

                                    <img
                                        key={index}
                                        src={icons[0]}
                                        alt="Icono de persona"
                                        title='Icono de persona'
                                    />

                                </div>

                            ))
                        }

                        <button onClick={handleCount}>

                            <img
                                id="sumar"
                                src={`${import.meta.env.VITE_URL_BASE}/assets/icons/mas.svg`}
                                alt="Signo más"
                                title="Signo más"
                            />

                        </button>

                    </div>

                </section>

            </div>

        </>

    );

};