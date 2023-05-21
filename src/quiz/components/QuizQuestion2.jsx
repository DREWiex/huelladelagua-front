import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../../store/slices/quizSlice';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { useState } from 'react';

export const QuizQuestion2 = () => {

    const { count } = useSelector((state) => state.quiz);

    const [person, setPerson] = useState(0);

    const dispatch = useDispatch();

    const { question, description, answers, img } = findQuestion(questions, 2);


    const handleCount = ({ target }) => {

        let conteo = 0;

        switch (target.id) {

            case 'sumar':
                setPerson(conteo += 1);
                break;

            case 'restar':
                if(conteo > 0) setPerson(conteo -= 1);
                break;

        };

        console.log(person)

        dispatch(setAnswer2({ person }));

    };


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <p> {description} </p>

                    <div className='hidden'>

                        <img
                            src={img}
                            alt="Una familia feliz"
                            title="Una familia feliz"
                        />

                    </div>

                </header>

                <section className='quiz2-container'>

                    <button onClick={handleCount}>

                        <img id="restar" src="/src/assets/icons/menos.svg" alt="" />

                    </button>

                    <div className='flex'>

                        {/* {
                            count.map((item, index) => (

                                <img
                                    key={index}
                                    src="/src/assets/icons/persona.svg"
                                    alt="Icono de persona"
                                    title='Icono de persona'
                                />

                            ))
                        } */}

                    </div>

                    <button onClick={handleCount}>

                        <img id="sumar" src="/src/assets/icons/mas.svg" alt="" />

                    </button>

                </section>

            </div>

        </>

    );

};