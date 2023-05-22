import { consulta } from "../../helpers/backFetch"
import { setRequestState } from "../slices/quizSlice"



export const sendMyData = (answers) => {

    return async (dispatch, getState) => {

        dispatch(setRequestState('loading'))

        try {
            const resp = await consulta('saveQuestionnaire', 'post', answers)
            const petition = await resp.json()

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