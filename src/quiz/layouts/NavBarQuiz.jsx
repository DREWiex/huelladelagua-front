import '../styles/NavBarQuiz.css';

export const NavBarQuiz = ({ page, setPage }) => {


    const handlerPaginate = (ev) => {

        switch (ev.target.id) {

            case 'next':
                if (page < 15) setPage(page + 1);
                break;

            case 'prev':
                if (page > 1) setPage(page - 1);
                break;

        };

    };


    return (

        <>

            <nav className="nav-quiz">

                <button onClick={handlerPaginate}>
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

                <button onClick={handlerPaginate}>
                    <img id='next' src="/src/assets/icons/Flecha Right.svg" alt="Botón avanzar" />
                </button>

            </nav>

        </>

    );

};