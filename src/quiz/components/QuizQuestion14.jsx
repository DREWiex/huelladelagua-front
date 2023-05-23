import { useDispatch } from 'react-redux';
import { findQuestion } from '../../helpers';
import { questions } from '../data/questions';
import { setAnswer14 } from '../../store/slices/quizSlice';
import { useForm } from '../../hooks/useForm';

export const QuizQuestion14 = ({ nextPage }) => {

    const { form, handleChange } = useForm();

    const dispatch = useDispatch();

    const { category, question, description, img } = findQuestion(questions, 14); // destructuración de las propiedades 'category', 'question', 'description', 'answers' e 'img' del objeto que devuelve la función


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const pixelsMax = 500; // nro. máximo de píxeles para que la ola no rebase la pantalla

        const litersMax = 11616.85; // nro. máximo de litros calculado en base a la respuesta con mayor consumo de cada pregunta (ref. media de m² para hacer el cálculo = 250)

        const { jardin } = form; // 'value' de la respuesta del usuario (m² del jardín)

        const answer = Number(jardin); // convertir 'string' a 'number' para que coincida con el tipo de dato que recibe el endpoint de DS

        const liters = answer * 6; // m² * 6 para calcular litros/día

        const euros = Math.round(answer * 1.91); // m² * 1,91 (dato calculado por los compañeros de Data Science) para calcular euros por cada litro al día

        const pixels = Math.round(((answer * 6) * pixelsMax) / litersMax); // (m² * 6) calcular cuántos píxeles sube la ola

        dispatch(setAnswer14({ answer, liters, euros, pixels }));

        nextPage() // avanza a la siguiente pregunta automáticamente

    };


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <p> {description[0]} </p>

                    <div>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Dos personas regando una planta sembrada junto a un árbol"
                            title="Dos personas regando una planta sembrada junto a un árbol"
                        />

                    </div>

                </header>

                <form onSubmit={handleSubmit}>

                    <input
                        type="number"
                        name={category}
                        placeholder={description[1]}
                        min='0'
                        onChange={handleChange}
                    />

                    <input
                        className="submit"
                        type="submit"
                        value="Continuar"
                        disabled={!form ? true : false} // no se habilita el botón continuar hasta que el usuario no introduce un valor
                    />

                </form>

            </div>

        </>

    );

};