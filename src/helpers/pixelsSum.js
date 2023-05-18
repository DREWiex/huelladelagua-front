
/**
 * Sumar o restar todas las propiedades del estado 'pixels'.
 * @function pixelsSum
 * @param {Object} pixels Recibe el estado 'pixels' del quizSlice.
 * @returns {Number} Total de píxeles que modificará el tamaño del componente Wavify (animación de la ola).
 */
export const pixelsSum = (pixels) => {

  let count = 0;

  for (let key in pixels) {

    count += pixels[key];

  };

  return count;

};