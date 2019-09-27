import {
    GET_USER_CREDENTIALS,
    GET_ALL_EVENTS,
    LOAD_EVENTS,
    SELECT_EVENT,
    SELECT_ACCOUNT_TYPE
} from '../types'

const initState = {
    events = [],
    userName = '',
    email = '',
    accountType: '',
    selectedEventId = 0
}

export default UserReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ALL_EVENTS:
            return state;
        case LOAD_EVENTS:
            return Object.assign({}, state, {
                events: action.payload
            })
        case GET_USER_CREDENTIALS:
            return Object.assign({}, state, {
                userName: action.payload.userName,
                email: action.payload.email
            })
        case SELECT_ACCOUNT_TYPE:
            return Object.assign({}, state, {
                accountType: action.payload
            })
        default:
            return state;
    }
} 