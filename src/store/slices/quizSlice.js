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
            quiz11: '',
            quiz13: '',
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

            state.answers.quiz6 = action.payload

        },
        setAnswer11: (state, action) => {

            state.answers.quiz11 = action.payload

        },
        setAnswer13: (state, action) => {

            state.answers.quiz13 = action.payload

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
    setAnswer11,
    setAnswer13
} = quizSlice.actions;