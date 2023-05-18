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
            quiz9: '',
            quiz10: '',
            quiz11: '',
            quiz12: '',
            quiz13: '',
            quiz14: 0, // m²
            quiz15: ''
        },

        liters: {
            quiz5: 0,
            quiz6: 0,
            quiz7: 0,
            quiz8: 0,
            quiz9: 0,
            quiz10: 0,
            quiz11: 0,
            quiz12: 0,
            quiz13: 0,
            quiz14: 0,
        },

        pixels: {
            quiz5: 0,
            quiz6: 0,
            quiz7: 0,
            quiz8: 0,
            quiz9: 0,
            quiz10: 0,
            quiz11: 0,
            quiz12: 0,
            quiz13: 0,
            quiz14: 0,
        },

        count: ['*'],
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
            };

        },

        setAnswer3: (state, action) => {

            state.answers.quiz3 = action.payload.province

        },

        setAnswer4: (state, { payload }) => {

            state.answers.quiz4 = payload.answer

        },

        setAnswer5: (state, { payload }) => {
            state.liters.quiz5 = 0,
                state.pixels.quiz5 = 0,
                state.answers.quiz5 = payload.answer,
                state.liters.quiz5 = payload.liters,
                state.pixels.quiz5 = payload.pixels
        },

        setAnswer6: (state, action) => {
            state.liters.quiz6 = 0,
                state.pixels.quiz6 = 0,
                state.answers.quiz6 = action.payload.answer
            state.liters.quiz6 = action.payload.liters
            state.pixels.quiz6 = action.payload.pixels
        },

        setAnswer7: (state, action) => {
            state.liters.quiz7 = 0,
                state.pixels.quiz7 = 0,
                state.answers.quiz7 = action.payload.answer
            state.liters.quiz7 = action.payload.liters
            state.pixels.quiz7 = action.payload.pixels
        },

        setAnswer8: (state, action) => {
            state.liters.quiz8 = 0,
                state.pixels.quiz8 = 0,
                state.answers.quiz8 = action.payload.answer
            state.liters.quiz8 = action.payload.liters
            state.pixels.quiz8 = action.payload.pixels
        },

        setAnswer9: (state, { payload }) => {
            state.liters.quiz9 = 0,
                state.pixels.quiz9 = 0,
                state.answers.quiz9 = payload.answer,
                state.liters.quiz9 = payload.liters,
                state.pixels.quiz9 = payload.pixels
        },

        setAnswer10: (state, { payload }) => {
            state.liters.quiz10 = 0,
            state.pixels.quiz10 = 0,
            state.answers.quiz10 = payload.answer,
            state.liters.quiz10 = payload.liters,
            state.pixels.quiz10 = payload.pixels
        },

        setAnswer11: (state, { payload }) => {
            state.liters.quiz11 = 0,
            state.pixels.quiz11 = 0,
            state.answers.quiz11 = payload.answer,
            state.liters.quiz11 = payload.liters,
            state.pixels.quiz11 = payload.pixels
        },

        setAnswer12: (state, { payload }) => {
            state.liters.quiz12 = 0,
                state.pixels.quiz12 = 0,
                state.answers.quiz12 = payload.answer,
                state.liters.quiz12 = payload.ltr,
                state.pixels.quiz12 = payload.pixels
        },

        setAnswer13: (state, { payload }) => {

            state.answers.quiz13 = payload.answer

        },

        setAnswer14: (state, { payload }) => {
            state.liters.quiz14 = 0, // reinicia el estado en caso de que el usuario vuelva a la pregunta
                state.pixels.quiz14 = 0, // reinicia el estado en caso de que el usuario vuelva a la pregunta
                state.answers.quiz14 = payload.answer,
                state.liters.quiz14 = payload.liters,
                state.pixels.quiz14 = payload.pixels
        },

        setAnswer15: (state, action) => {
            state.answers.quiz15 = action.payload.answer
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
    setAnswer9,
    setAnswer10,
    setAnswer11,
    setAnswer12,
    setAnswer13,
    setAnswer14,
    setAnswer15
} = quizSlice.actions;