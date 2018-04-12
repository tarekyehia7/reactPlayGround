import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    return(){
        <div className="jumbotron">
            <h1>Home Page</h1>
            <p>React, Redux and React Router presentation</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
        </div>
    }
};

export default HomePage