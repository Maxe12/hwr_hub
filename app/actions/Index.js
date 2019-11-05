import { ADD_USERNAME, REMOVE_USERDATA, GET_USERDATA } from './ActionType';

/**
 * 
 * @todo Test this block!
 */
export const addUsername = username => ({
    type: ADD_USERNAME,
    payload: username
})

export const removeUserdata = () => ({
    type: REMOVE_USERDATA
})

export const getUserData = () => ({
    type: GET_USERDATA
})