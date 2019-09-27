import userReducer from './users';
import loginReducer from './login'
import {combineReducers} from 'redux';

export default combineReducers({
    userReducer,
    loginReducer
})