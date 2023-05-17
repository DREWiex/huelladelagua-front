import React from 'react'
import { useDispatch } from 'react-redux';
import { setAnswer3 } from '../../store/slices/quizSlice';

export const QuizQuestion3 = () => {

  const dispatch = useDispatch();
  const provinciasEspana = [
    'A coruña',
    'Álava',
    'Albacete',
    'Alicante',
    'Almería',
    'Asturias',
    'Ávila',
    'Badajoz',
    'Barcelona',
    'Burgos',
    'Cáceres',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'Ciudad Real',
    'Córdoba',
    'Cuenca',
    'Gerona',
    'Granada',
    'Guadalajara',
    'Guipúzcoa',
    'Huelva',
    'Huesca',
    'Islas Baleares',
    'Jaén',
    'La Coruña',
    'La Rioja',
    'Las Palmas',
    'León',
    'Lérida',
    'Lugo',
    'Madrid',
    'Málaga',
    'Murcia',
    'Navarra',
    'Orense',
    'Palencia',
    'Pontevedra',
    'Salamanca',
    'Santa Cruz de Tenerife',
    'Segovia',
    'Sevilla',
    'Soria',
    'Tarragona',
    'Teruel',
    'Toledo',
    'Valencia',
    'Valladolid',
    'Vizcaya',
    'Zamora',
    'Zaragoza'
  ];

  const handleProvinces = ({target}) => {
    console.log(target.value)
    dispatch(setAnswer3({province: target.value}))
    
  }

  return (
    <>
    <h1>
      En qué provincia vives ?
    </h1>

    <p>
      El consumo varía según la zona donde vivas.
    </p>
    <select onChange={handleProvinces}> 
      {
        provinciasEspana.map((item)=> (
          <option key={item}>{item}</option>
        ))
      }
    </select>
    </>
  )
}
