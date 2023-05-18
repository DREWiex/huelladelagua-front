import { Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'
import { ProductDetail } from '../productDetail/ProductDetail'
import { Quiz } from '../quiz/Quiz';

export const Router = () => {


  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<ProductDetail />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>

  );

};