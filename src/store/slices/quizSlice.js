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


            quiz9: '',
            quiz10: '',
            quiz12: ''
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
            };

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

            state.answers.quiz6 = action.payload

        },

        setAnswer9: (state, { payload }) => {

            state.answers.quiz9 = payload.answer,
            state.liters = payload.ltr

        },

        setAnswer10: (state, { payload }) => {

            state.answers.quiz10 = payload.answer,
            state.liters = payload.ltr

        },

        setAnswer12: (state, { payload }) => {

            state.answers.quiz12 = payload.answer,
            state.liters = payload.ltr

        },

    }

});

export const {
    setAnswer1,
    setAnswer2,
    setAnswer3,
    setAnswer4,
    setAnswer5,
    setAnswer6,
    setAnswer9,
    setAnswer10,
    setAnswer12
} = quizSlice.actions;