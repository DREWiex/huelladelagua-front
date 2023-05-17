import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: [],
        count: 0,
        liters: 0,
        ageRange:''
    },

    reducers: {
        setAnswer1: (state, action) => {
            
            state.ageRange = action.payload.ageRange
        }
    }

})

export const { setAnswer1 } = quizSlice.actions