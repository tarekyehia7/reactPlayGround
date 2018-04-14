import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
    return { type: types.LOAD_COURSE_SUCCESS, authors};
}

export function loadAuthors(){
    return function(dispatch){
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}