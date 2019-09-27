import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootSaga, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
