export default Userdata = (state={}, action) => {
    switch(action.type){
        case 'ADD_USERNAME': 
            state.username = action.username;
            return state;
        case 'REMOVE_USERDATA': 
            state = {};
            return state;
        //later you can get userdata from it and store it in this state item...
        default: 
            return state;
    }
}