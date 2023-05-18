import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: {
            quiz1: '',
            quiz2: 1,
            quiz3: '',
            quiz4: '',
            quiz5: '',
            quiz6: '',
            quiz7: '',
            quiz8: '',






            quiz15: '',
        },
        count: ['*'],
        liters: 0,
    },

    reducers: {
        setAnswer1: (state, action) => {

            state.answers.quiz1 = action.payload.ageRange
        },

        setAnswer2: (state, action) => {

            switch (action.payload.sign) {

                case 'sumar':
                    state.count.push('*')

                    state.answers.quiz2 = state.answers.quiz2 + 1

                    break;
                case 'restar':
                    state.count.pop()
                    state.answers.quiz2 = state.answers.quiz2 - 1
                    break;
            }

        },

        setAnswer3: (state, action) => {

            state.answers.quiz3 = action.payload.province
        },

        setAnswer4: (state, action) => {

            state.answers.quiz4 = action.payload

        },

        setAnswer5: (state, { payload }) => {

            state.answers.quiz5 = payload.answer,
                state.liters = payload.ltr

        },

        setAnswer6: (state, action) => {

            state.answers.quiz6 = action.payload.answer
            state.liters = action.payload.liters

        },
        setAnswer7: (state, action) => {
            state.answers.quiz7 = action.payload.answer
            state.liters = action.payload.liters
        },
        setAnswer8: (state, action) => {
            state.answers.quiz8 = action.payload.answer
            state.liters = action.payload.liters
        },
        setAnswer15: (state, action) => {
            state.answers.quiz15 = action.payload.answer
            state.liters = action.payload.liters
        }

    }

});

export const {
    setAnswer1,
    setAnswer2,
    setAnswer3,
    setAnswer4,
    setAnswer5,
    setAnswer6,
    setAnswer7,
    setAnswer8,
    setAnswer15
} = quizSlice.actions;