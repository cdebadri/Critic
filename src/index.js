import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Router';
import {Provider} from 'redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
