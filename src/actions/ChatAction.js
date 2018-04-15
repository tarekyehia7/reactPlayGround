import * as types from './actionTypes';
import ChatApi from '../api/mockChatApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusAction';

export function loadChatSuccess(chat){
    return { type: types.LOAD_CHAT_SUCCESS, chat};
}

export function loadChatHistorySuccess(chatHistory){
    return { type: types.LOAD_CHAT_HISTORY_SUCCESS, chatHistory};
}

export function createChatSuccess(chat){
    return {type: types.CREATE_CHAT_SUCCESS, chat};
}

export function createChatHistorySuccess(chatHistory){
    return {type: types.CREATE_CHAT_HISTORY_SUCCESS, chatHistory};
}

export function updateChatSuccess(chat){
    return {type: types.UPDATE_CHAT_SUCCESS, chat};
}


export function loadChat(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return ChatApi.getAllChat().then(chat => {
            dispatch(loadChatSuccess(chat));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadNextChat(chat, BtnId){
    return function(dispatch, getSatate){
        dispatch(beginAjaxCall());
        return ChatApi.getNextButton(BtnId).then(chat => {
            dispatch(createChatSuccess(chat));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadChatHistory(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return ChatApi.getAllChat().then(chatHistory => {
            dispatch(loadChatHistorySuccess(chatHistory));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveChat(chat){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return ChatApi.saveChat(chat).then(savedChat => {
            chat.id ? dispatch(updateChatSuccess(savedChat)) :
            dispatch(createChatHistorySuccess(savedChat));
        }).catch(error =>{
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}