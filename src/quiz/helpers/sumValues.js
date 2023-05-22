/**
 * Sumar o restar todas las propiedades del estado recibido por argumento.
 * @function sumValues
 * @param {Object} values Recibe una propiedad del 'initialState' del 'quizSlice'.
 * @returns {Number} La suma total de las propiedades del estado.
 */
export const sumValues = (values) => {

    let count = 0;

    for (let key in values) {
  
      count += values[key];
  
    };
  
    return count;
  
  };