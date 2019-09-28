import {
    ADD_QUESTION,
    REMOVE_QUESTION,
    MODIFY_QUESTION,
    GET_CLIENT_CREDENTIALS
} from '../types'

const initState = {
    questionList: [],
    clientName: ''
}

const ClientReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_QUESTION:
            return Object.assign({
                questionList: state.questionList.push(action.payload)
            })
        case REMOVE_QUESTION:
            return Object.assign({}, state, {
                questionList: state.questionList.filter(questionObject => {
                    return questionObject.question !== action.payload.question
                })
            })
        case MODIFY_QUESTION:
            const index = action.payload.index;
            return Object.assign({}, state, {
                questionList: state.questionList.splice(index, 1, action.payload)
            })
        case GET_CLIENT_CREDENTIALS:
            return Object.assign({}, state, {
                clientName: action.payload
            })
        default:
            return state;
    }
}

export default ClientReducer;