import { changeWaveSize } from "../helpers";

export const FormDePalo = ({ count, setCount }) => {

    const handleClick = ({ target }) => {

        setCount(count + Number(target.value));

        changeWaveSize(count);

    };

    const handleSubmit = (ev) => {

        ev.preventDefault();

    };


    return (

        <>

            <form onSubmit={ handleSubmit }>

                <button value="0" onClick={ handleClick }> 0px </button>

                <button value="20" onClick={ handleClick }> 20px </button>

                <button value="50" onClick={ handleClick }> 50px </button>

                <button value="100" onClick={ handleClick }> 100px </button>

                <input type="submit" />

            </form>

        </>

    );

};