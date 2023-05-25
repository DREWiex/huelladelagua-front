/**
 * Modifica el valor del tamaño de las olas y el relleno de las mismas.
 * @function changeWaveSize
 * @param {Number} value Recibe el valor según la respuesta que elige el usuario en el cuestionario.
 */
export const changeWaveSize = (value) => {

    const firstWave = document.querySelector('.first-wave'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'first-wave'
    firstWave.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el valor que recibe la función por argumento

    const secondWave = document.querySelector('.second-wave'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'second-wave'
    secondWave.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el valor que recibe la función por argumento

    const waveFill = document.querySelector('.wave-fill'); // devuelve el primer (y, en este caso, único) div que contiene la clase 'wave-fill'
    waveFill.style.setProperty('--size-wave', `${value}px`); // modifica el valor de la variable CSS '--size-wave' con el valor que recibe la función por argumento

    //document.documentElement.style.setProperty('--size-wave', `${value}px`);

};