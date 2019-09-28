import {
    UPDATE_RESPONSES,
    CLEAR_RESPONSES,
    SELECT_EVENT,
    SHOOT_VIDEO,
    GET_ALL_EVENTS,
    GET_USER_CREDENTIALS,
    SELECT_ACCOUNT_TYPE,
    LOAD_EVENTS,
    GET_QUESTIONS,
    LOAD_QUESTIONS,
    SUBMIT_SURVEY
} from '../types'

export const updateResponsesAction = (payload) => ({
    type: UPDATE_RESPONSES,
    payload
})

export const clearResponsesAction = (payload) => ({
    type: CLEAR_RESPONSES,
    payload
})

export const getAlleventsAction = () => ({
    type: GET_ALL_EVENTS
})

export const loadEventsAction = (payload) => ({
    type: LOAD_EVENTS,
    payload
})

export const getUserCredentialsAction = payload => ({
    type: GET_USER_CREDENTIALS,
    payload
})

export const selectAccountTypeAction = payload => ({
    type: SELECT_ACCOUNT_TYPE,
    payload
})

export const getQuestionListAction = () => ({
    type: GET_QUESTIONS
})

export const loadQuestionListAction = (payload) => ({
    type: LOAD_QUESTIONS,
    payload
})

export const selectEventAction = payload => ({
    type: SELECT_EVENT,
    payload
})

export const submitSurveyAction = payload => ({
    type: SUBMIT_SURVEY,
    payload
})