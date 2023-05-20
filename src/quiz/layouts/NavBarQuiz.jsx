import { usePaginate } from '../../hooks';
import '../styles/NavBarQuiz.css';

export const NavBarQuiz = ({ page, setPage }) => {


    const { handlePaginate } = usePaginate(page, setPage);


    return (

        <>

            <nav className="nav-quiz">

                <button onClick={handlePaginate}>
                    <img id='prev' src="/src/assets/icons/Flecha Left.svg" alt="Botón retroceder" />
                </button>

                <div className="flex">

                    <div className="rectangle"> {/* page 1 */} </div>
                    <div className="rectangle"> {/* page 2 */} </div>
                    <div className="rectangle"> {/* page 3 */} </div>
                    <div className="rectangle"> {/* page 4 */} </div>
                    <div className="rectangle"> {/* page 5 */} </div>
                    <div className="rectangle"> {/* page 6 */} </div>
                    <div className="rectangle"> {/* page 7 */} </div>
                    <div className="rectangle"> {/* page 8 */} </div>
                    <div className="rectangle"> {/* page 9 */} </div>
                    <div className="rectangle"> {/* page 10 */} </div>
                    <div className="rectangle"> {/* page 11 */} </div>
                    <div className="rectangle"> {/* page 12 */} </div>

                </div>

                <button onClick={handlePaginate}>
                    <img id='next' src="/src/assets/icons/Flecha Right.svg" alt="Botón avanzar" />
                </button>

            </nav>

        </>

    );

};