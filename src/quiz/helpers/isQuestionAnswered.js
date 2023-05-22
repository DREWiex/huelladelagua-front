/**
 * Comprobar si la pregunta ya ha sido respondida o no.
 * @function isQuestionAnswered
 * @param {Number} page Recibe la página actual del cuestionario.
 * @param {Object} answers Recibe las respuestas del cuestionario.
 * @returns {Boolean} Devuelve 'true' si la pregunta ya ha sido respondida y 'false' en el caso contrario.
 */
export const isQuestionAnswered = (page, answers) => {

    const propertyName = `quiz${page}`; // String con el nombre de la propiedad en función de la página actual del cuestionario.

    let done;

    if(answers.hasOwnProperty(propertyName)){ // Comprueba si existe la propiedad en el objeto 'answers'.
    
        done = answers[propertyName] != undefined ? true : false; // Si es 'undefined', la pregunta no ha sido respondida, y viceversa.

    };

    return done;

};