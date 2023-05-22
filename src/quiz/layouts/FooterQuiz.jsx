import { useEffect } from "react";
import { LiterCounter, Wavify } from "../components";
import { useSelector } from "react-redux";
import { changeWaveSize, sumValues } from "../helpers";

export const FooterQuiz = () => {

  const { pixels } = useSelector(state => state.quiz);

  useEffect(() => {

    const totalPixels = sumValues(pixels); // suma los valores acumulados del estado 'pixels'

    changeWaveSize(totalPixels); // aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

  }, [pixels]); // se activa cada vez que se modifica el estado 'pixels'


  return (

    <footer className="footer-quiz">

      <LiterCounter />

      <Wavify />

    </footer>

  );

};