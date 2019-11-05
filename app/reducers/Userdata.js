/**
 * @todo check if it works!
 */
const defaultState = () =>{
    return {};
}

export default Userdata = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USERNAME':
            state = { ...state, username: action.payload };
            return state;
        case 'GET_USERDATA':
            return state;
        case 'REMOVE_USERDATA':
            state = {};
            return state;
        default:
            return state;
    }
}