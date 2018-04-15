import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { loadCourses } from './actions/CourseAction';
import { loadAuthors } from './actions/authorAction';
import routes from './routes';
import './styles/styles.css'; //Webpack can import these css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);