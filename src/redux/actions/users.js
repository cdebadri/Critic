import {
    UPDATE_RESPONSES,
    CLEAR_RESPONSES,
    SELECT_EVENT,
    SHOOT_VIDEO,
} from '../types'

export const updateResponsesAction = (payload) => ({
    type: UPDATE_RESPONSES,
    payload
})

export const clearResponsesAction = (payload) => ({
    type: CLEAR_RESPONSES,
    payload
})
