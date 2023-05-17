import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: {
            quiz1:'',

            quiz3:'',


            quiz6:'',
        },
        count: 0,
        liters: 0,
    },

    reducers: {
        setAnswer1: (state, action) => {
            
            state.answers.quiz1 = action.payload.ageRange
        },
        setAnswer3: (state, action) => {

            state.answers.quiz3 = action.payload.province        
        },
        setAnswer6: (state, action) => {
            
            state.answers.quiz6 = action.payload
        }
    }

})

export const { setAnswer1, setAnswer3, setAnswer6 } = quizSlice.actions