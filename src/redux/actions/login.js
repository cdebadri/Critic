import {
    LOGIN
} from '../types'

export const loginAction = (accountType, username, password) => ({
    type: LOGIN,
    accountType,
    username,
    password
})
