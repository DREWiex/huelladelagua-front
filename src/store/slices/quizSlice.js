import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: {
            quiz1:'',

            quiz3:'',

            quiz5:''
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

        setAnswer5: (state, { payload }) => {
            state.answers.quiz5 = payload.answer,
            state.answers.liters = payload.ltr
        }
    }

})

export const { setAnswer1, setAnswer3, setAnswer5 } = quizSlice.actions