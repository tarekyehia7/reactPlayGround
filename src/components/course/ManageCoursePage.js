import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseAction from '../../actions/CourseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render(){
        return(
                <CourseForm 
                    allAuthors={this.props.authors} 
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CourseAction, dispatch)
    };
}

function mapStateToProps(state, OwnProps){
    let course = {id: '', watchHref: '', title: '', authorId: '', Length: '', category: ''};
    const authorsFormattedForDropDown = state.authors.map(author =>{
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return{
            state: course,
            authors: authorsFormattedForDropDown
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

