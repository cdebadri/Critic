import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Router';
import {Provider} from 'react-redux';
import store from './redux/store';
import Login from './containers/LoginContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './containers/signUpContainer';
import Analytics from './components/analytics'

ReactDOM.render(
    <Provider store={store}>
        <Analytics />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
