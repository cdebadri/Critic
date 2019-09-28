import { call, put, takeLatest } from 'redux-saga/effects';
import {
    LOGIN,
    LOGIN_CALL
} from '../types';

function* loginSaga(action) {
    try {
        yield console.log("login saga");
        // const events = yield call();
        yield put({ 
            type: LOGIN_CALL, 
            username: action.username,
            accountType: action.accountType 
        })
    } catch (error) {
        //an action for handling failure
    }
}

export default function* watcher() {
    yield takeLatest(LOGIN, loginSaga);
}