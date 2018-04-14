import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseAction from '../../actions/CourseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state ={
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render(){
        return(
                <CourseForm 
                    allAuthors={[]} 
                    course={this.state.course}
                    errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CourseAction, dispatch)
    };
}

function mapStateToProps(state, OwnProps){
    let course = {id: '', watchHref: '', title: '', authorId: '', Length: '', category: ''};
    return{
            state: course
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

