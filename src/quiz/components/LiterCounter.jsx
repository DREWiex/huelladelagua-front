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

    <footer>

      {totalLiters.toFixed(2)} litros/día {/* .toFixed(2) para limitar a 2 el número de decimales */}

    </footer>

  );

};