import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
    CREATE_SURVEY
} from '../types';

function* createSurvey({ payload }) {
    
}

export default function* watcher() {
    yield takeLatest(CREATE_SURVEY, createSurvey);
}
