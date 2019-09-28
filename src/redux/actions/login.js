import {
    LOGIN,
    SIGNUP
} from '../types'

export const loginAction = (accountType, username, password) => ({
    type: LOGIN,
    accountType,
    username,
    password
})

export const signUpAction = (accountType, username, password) => ({
    type: SIGNUP,
    accountType,
    username,
    password
})
