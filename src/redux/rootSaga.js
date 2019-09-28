import UserWatcher from '../redux/sagas/users';
import ClientWatcher from './redux/sagas/clients';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        UserWatcher(),
        ClientWatcher
    ])
}