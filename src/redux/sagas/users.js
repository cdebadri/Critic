import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
    GET_ALL_EVENTS,
    LOAD_EVENTS,
    GET_QUESTIONS,
    LOAD_QUESTIONS,
    SUBMIT_SURVEY,
    GET_USER_CREDENTIALS,
    SELECT_ACCOUNT_TYPE
} from '../types';

const getSelectedEvent = state => state.selectedEventId

function* getAllEvents() {
    try {
        const events = yield call();
        yield put({ type: LOAD_EVENTS, events })
    } catch (error) {
        //an action for handling failure
    }
}

function* getQuestions() {
    try {
        const questionList = yield call();
        yield put({ type: LOAD_QUESTIONS, questionList })
    } catch(error) {
        //an action for handling failure
    }
}

function* submitSurvey({ payload }) {
    try {
        const eventId = yield select(getSelectedEvent);
        payload.client = eventId;
        yield call();
    } catch(error) {
        //an action to handle error handler
    }
}

function* getUserCredentials({ payload }) {
    try {
        const response = yield call();
        if(response == 'success') {
            yield put({ type: SELECT_ACCOUNT_TYPE, payload });
            yield put({ GET_USER_CREDENTIALS, payload });
        }
    } catch(error) {
        //an action for error
    }
}

export default function* watcher() {
    yield takeLatest(GET_USER_CREDENTIALS, getUserCredentials);
    yield takeLatest(GET_ALL_EVENTS, getAllEvents);
    yield takeLatest(GET_QUESTIONS, getQuestions);
    yield takeLatest(SUBMIT_SURVEY, submitSurvey);
}