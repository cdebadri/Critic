import UserWatcher from '../redux/sagas/users';
import ClientWatcher from './redux/sagas/clients';
import loginWatcher from '../redux/sagas/login'
import signUpWatcher from '../redux/sagas/signUp'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        UserWatcher(),
        ClientWatcher(),
        loginWatcher(),
        signUpWatcher(),
    ])
}