import userWatcher from '../redux/sagas/users';
import loginWatcher from '../redux/sagas/login'
import signUpWatcher from '../redux/sagas/signUp'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        userWatcher(),
        loginWatcher(),
        signUpWatcher(),
    ])
}