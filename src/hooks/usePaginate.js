/**
 * Hook: avanzar a la siguiente pregunta o volver a la anterior según el botón al que haga click el usuario.
 * @function usePaginate
 * @param {Number} page Recibe el estado que almacena el nro. de la página actual del cuestionario
 * @param {Function} setPage Recibe la función que actualiza el estado 'page'
 * @param {Boolean} done Recibe 'true' si el usuario ha respondido la pregunta y 'false' en el caso contrario.
 * @returns {Function}
 */
export const usePaginate = (page, setPage, done) => {

    /**
     * Avanzar o retroceder en las páginas de las preguntas del cuestionario.
     * @function handlePaginate
     * @param {Object} ev Recibe el evento del botón.
     */
    const handlePaginate = (ev) => {

        switch (ev.target.id) {

            case 'next':
                if (page < 15) done && setPage(page + 1);
                break;

            case 'prev':
                if (page > 1) setPage(page - 1);
                break;

        };

    };

    return { handlePaginate };

};