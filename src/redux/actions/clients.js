import {
    ADD_QUESTION,
    REMOVE_QUESTION,
    MODIFY_QUESTION,
    GET_CLIENT_CREDENTIALS
} from '../types';

export const addQuestionAction = payload => ({
    type: ADD_QUESTION,
    payload
})

export const removeQuestionAction = payload => ({
    type: REMOVE_QUESTION,
    payload
})

export const modifyQuestionAction = payload => ({
    type: MODIFY_QUESTION,
    payload
})

export const getClientCredentialsAction = payload => ({
    type: GET_CLIENT_CREDENTIALS,
    payload
})