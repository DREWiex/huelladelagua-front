/**
 * Buscar el objeto que coincida con el ID que recibe por argumento.
 * @function findQuestion
 * @param {Array} questions Recibe un array de objetos con los datos de las preguntas del cuestionario.
 * @param {Number} id ID del objeto del array.
 * @returns Un objeto que coincide con el que tiene el ID que recibe por argumento.
 */
export const findQuestion = (questions, id) => {

    return questions.find(item => item.question_id == id);
    
};