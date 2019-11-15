import { REMOVE_USERDATA, GET_USERDATA, ADD_EMAIL } from './ActionType';

/**
 * 
 * @todo Place API Calls in here
 */
export const addEmail = email => ({
    type: ADD_EMAIL,
    payload: email
})

export const removeUserdata = () => ({
    type: REMOVE_USERDATA
})

export const getUserData = () => ({
    type: GET_USERDATA
})