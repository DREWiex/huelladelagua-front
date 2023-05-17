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



        },
        count: ['*'],
        liters: 0
    },

    reducers: {

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

        setAnswer4: (state, action) => {
            
            state.answers.quiz4 = action.payload
        
    }   
    }
    

})

export const { setAnswer2,setAnswer4} = quizSlice.actions