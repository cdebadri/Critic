import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
    CREATE_SURVEY,
    GET_CLIENT_CREDENTIALS,
    SELECT_ACCOUNT_TYPE
} from '../types';

const getClientName = state => state.clientName;

function* createSurvey({ payload }) {
    try {
        const clientName = yield select(getClientName);
        payload.client = clientName;
        yield call();
    } catch(error) {
        //error action
    }
}

function* getClientCredentials({ payload }) {
    try {
        const response = yield call();
        if(response == 'success') {
            yield put({ type: SELECT_ACCOUNT_TYPE, payload });
            yield put({ type: GET_CLIENT_CREDENTIALS, payload });
        }
    } catch(error) {
        //error action
    }
}

export default function* watcher() {
    yield takeLatest(GET_CLIENT_CREDENTIALS, getClientCredentials);
    yield takeLatest(CREATE_SURVEY, createSurvey);
}
