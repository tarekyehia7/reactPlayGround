import React from 'react';
import Route, { IndexRoute } from 'react-router';
import App from 'App.js';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </Route>
);