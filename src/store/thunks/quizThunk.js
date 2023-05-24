import { consulta } from "../../helpers/backFetch"
import { setDataPredictions, setDataRequestState, setRequestState } from "../slices/quizSlice"



export const sendMyData = (answers) => {

    return async (dispatch, getState) => {

        dispatch(setRequestState('loading'))

        try {
            const resp = await consulta('saveQuestionnaire', 'post', answers)
            const petition = await resp.json()
            console.log(petition)
            if (petition.ok) {
                dispatch(setRequestState('complete'))
            } else {
                dispatch(setRequestState('failed'))
            }
        } catch (error) {
            dispatch(setRequestState('failed'))
        }
    }
}

export const getFeedBack = (answers) => {
    const body = {...answers}

    return async (dispatch, getState) => {

        try {
            const petition = await consulta('feedbackdata', 'post', body)
            const resp = await petition.json()
            console.log(resp)
            if (petition.ok) {
                dispatch(setDataRequestState('successfull'))
                dispatch(setDataPredictions(resp.data))
            } else {
                dispatch(setDataRequestState('failed'))
            }
        } catch (error) {
            dispatch(setDataRequestState('failed'))
        }
    }
} 