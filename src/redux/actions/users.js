import {
    UPDATE_RESPONSES,
    CLEAR_RESPONSES,
    SELECT_EVENT,
    SHOOT_VIDEO,
    GET_ALL_EVENTS,
    GET_USER_CREDENTIALS,
    SELECT_ACCOUNT_TYPE,
    LOAD_EVENTS
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

export const getUserCredentials = payload => ({
    type: GET_USER_CREDENTIALS,
    payload
})

export const selectAccountType = payload => ({
    type: SELECT_ACCOUNT_TYPE,
    payload
})