import { useSelector } from "react-redux";
import '../styles/NavBarQuiz.css';

export const NavBarQuiz = ({ page, setPage }) => {

    const { currentPage } = useSelector(state => state.quiz);

    const handlerPaginate = (ev) => {

        let newPage;

        switch (ev.target.id) {

            case 'next':
                newPage = page + 1;
                if (newPage <= 15) setPage(newPage);
                break;

            case 'prev':
                newPage = page - 1;
                if (newPage >= 1) setPage(newPage);
                break;

        };

    };


    return (

        <>

            <nav className="nav-quiz">

                {
                    page != 16 && page != 1 && // el botón 'anterior' no se mostrará cuando el usuario esté en la primera pregunta
                    <button onClick={handlerPaginate}>
                        <img id='prev' src="/src/assets/icons/Flecha Left.svg" alt="Botón retroceder" />
                    </button>
                }

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

                {
                    page == currentPage ? '' : page != 16 &&
                    <button onClick={handlerPaginate}>
                        <img id='next' src="/src/assets/icons/Flecha Right.svg" alt="Botón avanzar" />
                    </button>
                }

            </nav>

        </>

    );

};