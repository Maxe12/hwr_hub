export default Userdata = (state={}, action) => {
    switch(action.type){
        case 'ADD_USERNAME': 
            state = {...state, username: action.payload};
            console.log(state);
            return state;
        case 'GET_USERDATA': 
            return state;
        case 'REMOVE_USERDATA': 
            state = {};
            return state;
        //later you can get userdata from it and store it in this state item...
        default: 
            return state;
    }
}