const loginReducer = (state = '', action) => {
    switch(action.type){
        case 'LOGIN': 
        console.log('login reducer active');
        return {
            username: action.username
        }
        default:
            return state
    }
}

export default loginReducer;