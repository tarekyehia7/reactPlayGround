import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import store from './store/configureStore';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import these css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);