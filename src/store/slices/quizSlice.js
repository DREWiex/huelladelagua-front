import { createSlice } from '@reduxjs/toolkit';
import { setCurrentPage } from '../../helpers';

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: {
            quiz1: undefined,
            quiz2: 1,
            quiz3: undefined,
            quiz4: undefined,
            quiz5: undefined,
            quiz6: undefined,
            quiz7: undefined,
            quiz8: undefined,
            quiz9: undefined,
            quiz10: undefined,
            quiz11: undefined,
            quiz12: undefined,
            quiz13: undefined,
            quiz14: undefined,
            quiz15: undefined
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

        euros: {
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

        currentPage: 1,
        quiz2Validate: false,
        quiz14Validate: false,
        count: ['*'],
        backRequestState:'',
        dataRequestState:'',
        dataRequest:''
    },


    reducers: {
        setAnswer1: (state, action) => {
            state.answers.quiz1 = action.payload.ageRange;
            state.currentPage = setCurrentPage(2, state.quiz2Validate, state.currentPage);
        },

        setAnswer2: (state, action) => {

            switch (action.payload.sign) {

                case 'sumar':
                    state.count.length < 15 ? state.count.push('*') : null;
                    state.answers.quiz2 < 15 ? state.answers.quiz2 = state.answers.quiz2 + 1 : null;
                    break;

                case 'restar':
                    state.count.length > 1 ? state.count.pop() : null;
                    state.answers.quiz2 > 1 ? state.answers.quiz2 = state.answers.quiz2 - 1 : null;
                    break;
            };

            state.currentPage = setCurrentPage(3, state.answers.quiz3, state.currentPage);
        },

        setAnswer3: (state, action) => {
            state.answers.quiz3 = action.payload.province;
            state.currentPage = setCurrentPage(4, state.answers.quiz4, state.currentPage);
        },

        setAnswer4: (state, { payload }) => {
            state.answers.quiz4 = payload.answer;
            state.currentPage = setCurrentPage(5, state.answers.quiz5, state.currentPage);
        },

        setAnswer5: (state, { payload }) => {
            state.liters.quiz5 = 0;
            state.euros.quiz6 = 0;
            state.pixels.quiz5 = 0;
            state.answers.quiz5 = payload.answer;
            state.liters.quiz5 = payload.liters;
            state.euros.quiz5 = payload.euros;
            state.pixels.quiz5 = payload.pixels;
            state.currentPage = setCurrentPage(6, state.answers.quiz6, state.currentPage);
        },

        setAnswer6: (state, action) => {
            state.liters.quiz6 = 0;
            state.euros.quiz6 = 0;
            state.pixels.quiz6 = 0;
            state.answers.quiz6 = action.payload.answer;
            state.liters.quiz6 = action.payload.liters;
            state.euros.quiz6 = action.payload.euros;
            state.pixels.quiz6 = action.payload.pixels;
            state.currentPage = setCurrentPage(7, state.answers.quiz7, state.currentPage);
        },

        setAnswer7: (state, action) => {
            state.liters.quiz7 = 0;
            state.euros.quiz7 = 0;
            state.pixels.quiz7 = 0;
            state.answers.quiz7 = action.payload.answer;
            state.liters.quiz7 = action.payload.liters;
            state.euros.quiz7 = action.payload.euros;
            state.pixels.quiz7 = action.payload.pixels;
            state.currentPage = setCurrentPage(8, state.answers.quiz8, state.currentPage);
        },

        setAnswer8: (state, action) => {
            state.liters.quiz8 = 0;
            state.euros.quiz8 = 0;
            state.pixels.quiz8 = 0;
            state.answers.quiz8 = action.payload.answer;
            state.liters.quiz8 = action.payload.liters;
            state.euros.quiz8 = action.payload.euros;
            state.pixels.quiz8 = action.payload.pixels;
            state.currentPage = setCurrentPage(9, state.answers.quiz9, state.currentPage);
        },

        setAnswer9: (state, { payload }) => {
            state.liters.quiz9 = 0;
            state.euros.quiz9 = 0;
            state.pixels.quiz9 = 0;
            state.answers.quiz9 = payload.answer;
            state.liters.quiz9 = payload.liters;
            state.euros.quiz9 = payload.euros;
            state.pixels.quiz9 = payload.pixels;
            state.currentPage = setCurrentPage(10, state.answers.quiz10, state.currentPage);
        },

        setAnswer10: (state, { payload }) => {
            state.liters.quiz10 = 0;
            state.euros.quiz10 = 0;
            state.pixels.quiz10 = 0;
            state.answers.quiz10 = payload.answer;
            state.liters.quiz10 = payload.liters;
            state.euros.quiz10 = payload.euros;
            state.pixels.quiz10 = payload.pixels;
            state.currentPage = setCurrentPage(11, state.answers.quiz11, state.currentPage);
        },

        setAnswer11: (state, { payload }) => {
            state.liters.quiz11 = 0;
            state.euros.quiz11 = 0;
            state.pixels.quiz11 = 0;
            state.answers.quiz11 = payload.answer;
            state.liters.quiz11 = payload.liters;
            state.euros.quiz11 = payload.euros;
            state.pixels.quiz11 = payload.pixels;
            state.currentPage = setCurrentPage(12, state.answers.quiz12, state.currentPage);
        },

        setAnswer12: (state, { payload }) => {
            state.liters.quiz12 = 0;
            state.euros.quiz12 = 0;
            state.pixels.quiz12 = 0;
            state.answers.quiz12 = payload.answer;
            state.liters.quiz12 = payload.liters;
            state.euros.quiz12 = payload.euros;
            state.pixels.quiz12 = payload.pixels;
            state.currentPage = setCurrentPage(13, state.answers.quiz13, state.currentPage);
        },

        setAnswer13: (state, { payload }) => {
            state.liters.quiz13 = 0;
            state.euros.quiz13 = 0;
            state.pixels.quiz13 = 0;
            state.answers.quiz13 = payload.answer;
            state.liters.quiz13 = payload.liters;
            state.euros.quiz13 = payload.euros;
            state.pixels.quiz13 = payload.pixels;
            state.currentPage = setCurrentPage(14, state.quiz14Validate, state.currentPage);
        },

        setAnswer14: (state, { payload }) => {
            state.liters.quiz14 = 0;
            state.euros.quiz14 = 0;
            state.pixels.quiz14 = 0;
            state.answers.quiz14 = payload.answer;
            state.liters.quiz14 = payload.liters;
            state.euros.quiz14 = payload.euros;
            state.pixels.quiz14 = payload.pixels;
            state.currentPage = setCurrentPage(15, state.answers.quiz15, state.currentPage);
        },

        setAnswer15: (state, action) => {
            state.answers.quiz15 = action.payload.answer;
            state.currentPage = setCurrentPage(16, state.answers.quiz13, state.currentPage);
        },
        setRequestState: (state, action) => {
            state.backRequestState = action.payload
        },
        setDataPredictions: (state, action) => {
            state.dataRequest = action.payload
            console.log(state.dataRequest)
        },
        setDataRequestState: (state, action) => {
            state.dataRequestState = action.payload
            console.log(state.dataRequestState)
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
    setAnswer15,
    setRequestState,
    setDataPredictions,
    setDataRequestState
} = quizSlice.actions;