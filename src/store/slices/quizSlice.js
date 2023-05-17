import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: [],
        count: 0,
        liters: 0,
        ageRange:'',
        province:'',
    },

    reducers: {
        setAnswer1: (state, action) => {
            
            state.ageRange = action.payload.ageRange
        },
        setAnswer3: (state, action) => {
            state.province = action.payload.province
            
        }
    }

})

export const { setAnswer1, setAnswer3 } = quizSlice.actions