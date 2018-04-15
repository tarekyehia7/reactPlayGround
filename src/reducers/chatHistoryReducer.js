import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatHistoryReducer(state = initialState.chatHistory, action){
    switch(action.type){
        case types.LOAD_CHAT_HISTORY_SUCCESS:
            return action.chatHistory;

        case types.CREATE_CHAT_HISTORY_SUCCESS:
            return [...state, Object.assign({}, action.chatHistory)];

        default:
            return state;
    }
}