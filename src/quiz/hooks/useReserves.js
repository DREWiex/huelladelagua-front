import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setEcoMode, setMeatLess, setRecycle, setShowerLess, setSmartBlue, setWashMachine, setWaterReUse } from '../../store/slices/challengesSlice';

export const useReserve = () => {

  const [polIsChecked, setPolIsChecked] = useState(false);
  const [susIsChecked, setSusIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleButton = (ev) => {
    const reserveDiv = document.querySelector('#reserve')
    reserveDiv.classList.toggle('hiddenReserve')
  }

  const handlePoliticyCheckBoxChange = ({ target }) => {

    setPolIsChecked(target.checked)
  }

  const handleSuscriptionCheckBoxChange = ({ target }) => {

    setSusIsChecked(target.checked)
  }

  const addChallenge = ({ target }) => {

    switch (target.id) {
      case 'smartBlue':
        dispatch(setSmartBlue())
        break;
      case 'meatLess':
        dispatch(setMeatLess())
        break;
      case 'ecoMode':
        dispatch(setEcoMode())
        break;
      case 'showerLess':
        dispatch(setShowerLess())
        break;
      case 'washMachine':
        dispatch(setWashMachine())
        break;
      case 'waterReUse':
        dispatch(setWaterReUse())
        break;
      case 'recycle':
        dispatch(setRecycle())
        break;

    }
  }

  return {
    handleButton,
    handlePoliticyCheckBoxChange,
    handleSuscriptionCheckBoxChange,
    polIsChecked,
    susIsChecked,
    addChallenge
  }
}
