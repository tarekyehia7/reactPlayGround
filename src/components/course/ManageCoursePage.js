import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseAction from '../../actions/CourseAction';

class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
            <div>
                <h1>Manage Course</h1>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    //course: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CourseAction, dispatch)
    };
}

function mapStateToProps(state, OwnProps){
    return{
            state: state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

