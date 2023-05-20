import { useEffect } from "react";
import { Wavify } from "../../components";
import { LiterCounter } from "../components";
import { changeWaveSize, pixelsSum } from "../../helpers";
import { useSelector } from "react-redux";

export const FooterQuiz = ({ page }) => {

  const { pixels } = useSelector(state => state.quiz);

  useEffect(() => {

    const totalPixels = pixelsSum(pixels); // suma los valores acumulados del estado 'pixels'

    changeWaveSize(totalPixels); // aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

  }, [pixels]); // se activa cada vez que se modifica el estado 'pixels'


  return (

    <footer className="footer-quiz">

      {
        page > 0 && page < 16 && <LiterCounter /> // solo se renderizará en las preguntas
      }

      <Wavify /> {/* se renderizará en todo momento mientras el componente Quiz esté montado */}

    </footer>

  );

};