import userWatcher from '../redux/sagas/users';
import { all } from 'redux-saga/effects';

export default function rootSaga() {
    yield all([
        userWatcher(),
    ])
}