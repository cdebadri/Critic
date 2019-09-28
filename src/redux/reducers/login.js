import {
    LOGIN_CALL,
    SIGNUP_CALL
} from '../types'

const initialState = {
    username: '',
    accountType: ''
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_CALL: 
        console.log('login reducer active');
        return {
            username: action.username,
            accountType: action.accountType
        }
        case SIGNUP_CALL: 
        console.log('signup reducer active');
        return {
            username: action.username,
            accountType: action.accountType
        }
        default:
            return state;
    }
}

export default loginReducer;