import { useEffect, useState } from "react";
import { changeWaveSize } from "../helpers";

export const FormDePalo = () => {

    const [count, setCount] = useState(0);


    const handleSubmit = (ev) => {

        ev.preventDefault();

    };

    const handleClick = ({ target }) => {

        // cada respuesta del usuario sumará al estado ('count') el valor ('target.value' –litros de agua–) asignado a la misma
        setCount(count + Number(target.value)); // 'target.value' es un 'string', por eso hay que convertirlo a 'number', ya que de no hacerlo encadena y no suma

    };

    useEffect(() => {

        changeWaveSize(count); // invoca la función que modifica el tamaño de las olas y el relleno

    }, [count]); // se invocará la función cada vez que el estado 'count' se modifique


    return (

        <>

            <form onSubmit={ handleSubmit }>

                <button value="0" onClick={ handleClick }> 0px </button>

                <button value="20" onClick={ handleClick }> 20px </button>

                <button value="50" onClick={ handleClick }> 50px </button>

                <button value="100" onClick={ handleClick }> 100px </button>

            </form>

        </>

    );

};