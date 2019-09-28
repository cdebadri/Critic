import {
    GET_USER_CREDENTIALS,
    GET_ALL_EVENTS,
    LOAD_EVENTS,
    SELECT_EVENT,
    SELECT_ACCOUNT_TYPE,
    GET_QUESTIONS,
    LOAD_QUESTIONS,
    SUBMIT_SURVEY
} from '../types'

const initState = {
    questionList: [],
    events: [],
    userName: '',
    accountType: '',
    selectedEventId: ''
}

const UserReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ALL_EVENTS:
            return state;
        case LOAD_EVENTS:
            return Object.assign({}, state, {
                events: action.payload
            })
        case GET_USER_CREDENTIALS:
            return Object.assign({}, state, {
                userName: action.payload
            })
        case SELECT_ACCOUNT_TYPE:
            return Object.assign({}, state, {
                accountType: action.payload
            })
        case LOAD_QUESTIONS:
            return Object.assign({}, state, {
                questionList: action.payload
            })
        case GET_QUESTIONS:
            return state;
        case SELECT_EVENT:
            return Object.assign({}, state, {
                selectedEventId: action.payload
            })                              
        case SUBMIT_SURVEY:
            return state;
        default:
            return state;
    }
}

export default UserReducer;