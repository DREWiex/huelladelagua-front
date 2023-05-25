import { consulta } from "../../helpers/backFetch";
import { setEmailRequestState } from "../slices/productSlice";



export const productPromotion = (body) => {
    return async (dispatch, getState) => {
        dispatch(setEmailRequestState('loading'));
        console.log('paso por el thunk')
        try {
            const resp = await consulta('emailandsub', 'post', body)
            const petition = await resp.json()
            console.log(petition)
            if (petition.ok) {
                dispatch(setEmailRequestState('successfull'));
            } else {
                dispatch(setEmailRequestState('failed'));
            }
        } catch (error) {
            dispatch(setEmailRequestState('failed'));
        }
    }
}