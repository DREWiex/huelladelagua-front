import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: [],
        count: 0,
        liters: 0
    },

    reducers: {
        setAnswer1: (state, action) => {
            
            let newCount;

            switch (action.payload.sign) {
                case 'sumar':
                    newCount = state.count + 1
                    state.count = newCount
                    break;
                case 'restar':
                    newCount = state.count - 1
                    state.count = newCount
                    break;
            }
        }
    }

})

export const { setAnswer1 } = quizSlice.actions