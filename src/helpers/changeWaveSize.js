
/**
 * Modifica el valor del tamaño de las olas y el relleno de las mismas.
 * @function changeWaveSize
 * @param {Number} value Recibe el valor según la respuesta que elige el usuario en el cuestionario.
 */
export const changeWaveSize = (value) => {

    const firstWave = document.querySelector('.first-wave'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'first-wave'
    const secondWave = document.querySelector('.second-wave'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'second-wave'
    const waveFill = document.querySelector('.wave-fill'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'wave-fill'

    firstWave.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el que recibe la función por argumento

    secondWave.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el que recibe la función por argumento

    waveFill.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el que recibe la función por argumento

};