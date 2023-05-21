import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer9 } from '../../store/slices/quizSlice';

export const QuizQuestion9 = ({ nextPage }) => {

    const dispatch = useDispatch();

    const { question, description, answers, img } = findQuestion(questions, 9); // destructuración de las propiedades 'question', 'description', 'answers' e 'img' del objeto que devuelve la función


    const handlePaginate = () => {

        console.log('Botón múltiple')
    
      }; //!FUNC-HANDLEPAGINATE


    const handleAnswer = ({ target }) => {

        const answer = target.value; // 'value' de la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

        dispatch(setAnswer9({ answer, liters, pixels }));

        nextPage();

    };


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <div className='hidden'>

                        <img
                            src={img}
                            alt="Una madre utilizando la lavadora con su hija"
                            title="Una madre utilizando la lavadora con su hija"
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
                                    onClick={handleAnswer}
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