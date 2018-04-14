import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/CourseAction';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

function mapStateToProps(state, OwnProps){
    return{
            courses: state.courses
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);