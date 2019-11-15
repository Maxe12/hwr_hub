const defaultState = () => {
    return {};
}

export default Userdata = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            state = { ...state, email: action.payload };
            return state;
        case 'GET_USERDATA':
            return state;
        case 'CREATE_USER':
            //action.payload is an object with all attributes for user
            state = {
                ...state,
                first: action.payload.first,
                last: action.payload.last,
                email: action.payload.email, 
                dozent: 0, //can be hardcoded app is only for students 
                matrknr: action.payload.matrknr, 
                pw: action.payload.pw, 
                studies: action.payload.studies, 
                universityId: 1808 //also hardcode = current id for HWR in database
            }
            //here insert user into database?
        case 'REMOVE_USERDATA':
            state = {};
            return state;
        default:
            return state;
    }
}