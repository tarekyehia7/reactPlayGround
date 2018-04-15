import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import chat from './chatReducer';
import chatHistory from './chatHistoryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    chat,
    chatHistory,
    ajaxCallsInProgress
});

export default rootReducer;