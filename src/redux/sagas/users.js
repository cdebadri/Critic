import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
    GET_ALL_EVENTS,
    LOAD_EVENTS
} from '../types';

function* getAllEvents() {
    try {
        const events = yield call();
        yield put({ type: LOAD_EVENTS, events })
    } catch (error) {
        //an action for handling failure
    }
}

export default function* watcher() {
    yield takeLatest(GET_ALL_EVENTS, getAllEvents);
}