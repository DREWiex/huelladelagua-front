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

            <nav>

                {
                    page != 16 && page != 1 && // el botón 'anterior' no se mostrará cuando el usuario esté en la primera pregunta
                    <button onClick={handlerPaginate}>
                        <img id='prev' src="/src/assets/icons/Flecha Left.svg" alt="Botón retroceder" />
                    </button>
                }

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