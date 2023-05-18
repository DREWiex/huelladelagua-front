import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer15 } from '../../store/slices/quizSlice';

export const Quizquestion15 = ({ nextPage }) => {

    const { answers } = useSelector((state) => state.quiz);

    const { question, description, answers: resp } = findQuestion(questions, 15);

    const dispatch = useDispatch();


    const handleTimes = ({ target }) => {

        dispatch(setAnswer15({ answer: target.value }));

    };


    return (
        <>
        
            <h2>
                {question}
            </h2>

            <p>
                {description}
            </p>

            <button
                id='-10'
                value={resp[0].answer}
                disabled={answers.quiz15 == resp[0].answer ? true : false}
                onClick={handleTimes}
                data-liters={resp[0].liters}
            >
                {resp[0].answer}
            </button>

            <button
                id='10-40'
                value={resp[1].answer}
                disabled={answers.quiz15 == resp[1].answer ? true : false}
                onClick={handleTimes}
                data-liters={resp[1].liters}
            >
                {resp[1].answer}
            </button>

            <button
                id='+40'
                value={resp[2].answer}
                disabled={answers.quiz15 == resp[2].answer ? true : false}
                onClick={handleTimes}
                data-liters={resp[2].liters}
            >
                {resp[2].answer}
            </button>

            <button
                id='nidea'
                value={resp[3].answer}
                disabled={answers.quiz15 == resp[3].answer ? true : false}
                onClick={handleTimes}
                data-liters={resp[3].liters}
            >
                {resp[3].answer}
            </button>

        </>

    );

};