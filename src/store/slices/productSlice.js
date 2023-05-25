import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({

    name: 'product',

    initialState: {
        email:'',
        suscription:false,
        emailRequestState:''
    },


    reducers: {
        setEmailRequestState: (state, action) => {
            state.emailRequestState = action.payload

        }

    }

});

export const {
    setEmailRequestState
} = productSlice.actions;