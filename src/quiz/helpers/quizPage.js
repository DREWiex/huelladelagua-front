/**
 * Calcular el nro. de página a enseñar al usuario teniendo en cuenta las preguntas múltiples para que se interpreten como una sola.
 * @function quizPage
 * @param {Number} page Recibe el nro. de página real del cuestionario.
 * @returns {Number} Devuelve el nro. de página "no real" para situar al usuario.
 */
export const quizPage = (page) => {

    let currentPage = page;

        switch (page) {

            case 7:
                currentPage = 6;
                break;

            case 8:
                currentPage = 6;
                break;

            case 9:
                currentPage = 7;
                break;

            case 10:
                currentPage = 7;
                break;

            case 11:
                currentPage = 8;
                break;

            case 12:
                currentPage = 9;
                break;

            case 13:
                currentPage = 10;
                break;

            case 14:
                currentPage = 11;
                break;

            case 15:
                currentPage = 12;
                break;

        };

        return currentPage;

};