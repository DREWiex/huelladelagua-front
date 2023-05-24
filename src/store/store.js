import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizSlice';
import { productSlice } from './slices/productSlice';
import { challengeSlice } from './slices/challengesSlice';

export const store = configureStore({

  reducer: {
    quiz: quizSlice.reducer,
    product: productSlice.reducer,
    challenges: challengeSlice.reducer
  },

});