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

                    <div className="rectangle" onClick={() => { setPage(1) }}> {/* page 1 */} </div>
                    <div className="rectangle" onClick={() => { setPage(2) }}> {/* page 2 */} </div>
                    <div className="rectangle" onClick={() => { setPage(3) }}> {/* page 3 */} </div>
                    <div className="rectangle" onClick={() => { setPage(4) }}> {/* page 4 */} </div>
                    <div className="rectangle" onClick={() => { setPage(5) }}> {/* page 5 */} </div>
                    <div className="rectangle" onClick={() => { setPage(6) }}> {/* page 6 */} </div>
                    <div className="rectangle" onClick={() => { setPage(9) }}> {/* page 9 */} </div>
                    <div className="rectangle" onClick={() => { setPage(11) }}> {/* page 11 */} </div>
                    <div className="rectangle" onClick={() => { setPage(12) }}> {/* page 12 */} </div>
                    <div className="rectangle" onClick={() => { setPage(13) }}> {/* page 13 */} </div>
                    <div className="rectangle" onClick={() => { setPage(14) }}> {/* page 14 */} </div>
                    <div className="rectangle" onClick={() => { setPage(15) }}> {/* page 15 */} </div>

                </div>

                <button onClick={handlePaginate}>
                    <img id='next' src="/src/assets/icons/Flecha Right.svg" alt="Botón avanzar" />
                </button>

            </nav>

        </>

    );

};