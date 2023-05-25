import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from '../home/Home'
import { ProductDetail } from '../productDetail/ProductDetail'
import { Quiz } from '../quiz/Quiz';
import { Footer } from '../layouts';

export const AppRouter = () => {


    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<ProductDetail />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/footer' element={<Footer />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

    );

};