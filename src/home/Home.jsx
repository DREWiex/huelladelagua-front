import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../layouts/NavBar';
import { getFeedBack, sendMyData } from '../store/thunks/quizThunk';

export const Home = () => {



  return (

    <>

      <NavBar />

      <h1> Home </h1>

      
    </>

  );

};