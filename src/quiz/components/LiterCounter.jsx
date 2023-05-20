import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const LiterCounter = () => {

  const { liters } = useSelector((state) => state.quiz);

  const [totalLiters, setTotalLiters] = useState(0);


  useEffect(() => {

    let totalLitersCalc = 0;

    for (let key in liters) {

      totalLitersCalc += Number(liters[key]);

    };

    setTotalLiters(totalLitersCalc);

  }, [liters]);


  return (

    <div className='liter-counter'>

      <h3 className='uppercase white'> Huella del agua </h3>

      <div>

        <p className='darkest-blue rem2'> {totalLiters.toFixed(2)} </p> {/* .toFixed(2) para limitar a 2 el número de decimales */}

        <p className='uppercase white'> Litros al día </p>

      </div>

    </div>

  );

};