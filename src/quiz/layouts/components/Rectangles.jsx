import { useSelector } from "react-redux";

export const Rectangles = ({ page, setPage }) => {

    const { answers } = useSelector(state => state.quiz);


    return (

        <div>

            {
                page == 1 ? (
                    <div className="rectangle current-page-color" onClick={() => { setPage(1) }}> {/* page 1 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { setPage(1) }}> {/* page 1 */} </div>
                )
            }

            {
                page < 2 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz1 && setPage(2) }}> {/* page 2 */} </div>
                ) : page == 2 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz1 && setPage(2) }}> {/* page 2 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz1 && setPage(2) }}> {/* page 2 */} </div>
                )
            }

            { // Como 'answers.quiz2' siempre es 'true', ya que se inicializa en 1 y puede avanzar sin modificar la respuesta, no permitimos que avance hasta la tercera pregunta (page 3) hasta que la primera no haya sido respondida
                page < 3 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz1 && setPage(3) }}> {/* page 3 */} </div>
                ) : page == 3 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz1 && setPage(3) }}> {/* page 3 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz1 && setPage(3) }}> {/* page 3 */} </div>
                )
            }

            {
                page < 4 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz3 && setPage(4) }}> {/* page 4 */} </div>
                ) : page == 4 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz3 && setPage(4) }}> {/* page 4 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz3 && setPage(4) }}> {/* page 4 */} </div>
                )
            }

            {
                page < 5 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz4 && setPage(5) }}> {/* page 5 */} </div>
                ) : page == 5 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz4 && setPage(5) }}> {/* page 5 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz4 && setPage(5) }}> {/* page 5 */} </div>
                )
            }

            { // Pregunta múltiple.
                page < 6 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz5 && setPage(6) }}> {/* page 6 */} </div>
                ) : page == 6 || page == 7 || (page == 8) ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz5 && setPage(6) }}> {/* page 6 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz5 && setPage(6) }}> {/* page 6 */} </div>
                )
            }

            { // Pregunta múltiple.
                page < 9 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz6 && setPage(9) }}> {/* page 7 */} </div>
                ) : page == 9 || page == 10 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz6 && setPage(9) }}> {/* page 7 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz6 && setPage(9) }}> {/* page 7 */} </div>
                )
            }

            {
                page < 11 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz9 && setPage(11) }}> {/* page 8 */} </div>
                ) : page == 11 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz9 && setPage(11) }}> {/* page 8 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz9 && setPage(11) }}> {/* page 8 */} </div>
                )
            }

            {
                page < 12 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz11 && setPage(12) }}> {/* page 9 */} </div>
                ) : page == 12 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz11 && setPage(12) }}> {/* page 9 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz11 && setPage(12) }}> {/* page 9 */} </div>
                )
            }

            {
                page < 13 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz12 && setPage(13) }}> {/* page 10 */} </div>
                ) : page == 13 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz12 && setPage(13) }}> {/* page 10 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz12 && setPage(13) }}> {/* page 10 */} </div>
                )
            }

            {
                page < 14 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz13 && setPage(14) }}> {/* page 11 */} </div>
                ) : page == 14 ? (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz13 && setPage(14) }}> {/* page 11 */} </div>
                ) : (
                    <div className="rectangle prev-page-color" onClick={() => { answers.quiz13 && setPage(14) }}> {/* page 11 */} </div>
                )
            }

            {
                page < 15 ? (
                    <div className="rectangle next-page-color" onClick={() => { answers.quiz14 && setPage(15) }}> {/* page 12 */} </div>
                ) : (
                    <div className="rectangle current-page-color" onClick={() => { answers.quiz14 && setPage(15) }}> {/* page 12 */} </div>
                )
            }

        </div>

    );

};