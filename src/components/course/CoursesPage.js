import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/CourseAction';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={this.props.courses} />
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

