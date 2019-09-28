import { call, put, takeLatest } from 'redux-saga/effects';
import {
    SIGNUP,
    SIGNUP_CALL
} from '../types';

function* signUpSaga(action) {
    try {
        console.log("inside sign up saga");
        // const events = yield call();
        yield put({ 
            type: SIGNUP_CALL, 
            username: action.username,
            accountType: action.accountType
        })
    } catch (error) {
        //an action for handling failure
    }
}

export default function* watcher() {
    yield takeLatest(SIGNUP, signUpSaga);
}