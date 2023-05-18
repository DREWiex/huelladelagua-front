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

    <div>

      {totalLiters} litros/día

    </div>

  );

};