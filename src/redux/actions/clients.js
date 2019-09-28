import {
    ADD_QUESTION,
    REMOVE_QUESTION,
    MODIFY_QUESTION
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