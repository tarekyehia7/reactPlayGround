import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action){
    switch(action.type){
        case types.LOAD_CHAT_SUCCESS:
            return action.chat;
        
        case types.CREATE_CHAT_SUCCESS:
            return [...state, Object.assign({}, action.chat)];

        case types.UPDATE_CHAT_SUCCESS:
            return [...state.filter(chat => chat.id !== action.chat.id), Object.assign({}, action.chat)];
        
        default:
            return state;
    }
}