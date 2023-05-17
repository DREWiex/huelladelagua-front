import {quizSlice} from './slices/quizSlice'
import { configureStore } from '@reduxjs/toolkit'


 const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer
    },
  })
  
  
  
  export default store;