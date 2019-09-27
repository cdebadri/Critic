import {
    LOGIN
} from '../types'

export const loginAction = (username) => ({
    type: LOGIN,
    username
})
