
export const usePaginate = (page, setPage) => {

    /**
     * Avanzar o retroceder en las páginas de las preguntas del cuestionario.
     * @function handlePaginate
     * @param {Object} ev Recibe el evento del botón.
     */
    const handlePaginate = (ev) => {

        switch (ev.target.id) {

            case 'next':
                if (page < 15) setPage(page + 1);
                break;

            case 'prev':
                if (page > 1) setPage(page - 1);
                break;

        };

    };


    return { handlePaginate };

};