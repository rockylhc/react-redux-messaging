import { combineReducers } from 'redux';
import * as actions from './actionTypes';

const initialState = {
    username: 'anonymous',
    userid: null,
    activeUsers: [],
    messages: [{content:'hahaha', user:'djdjdjdj'}]
}
function reducer (state= initialState, action) {
    switch (action.type){
        case actions.ENTER_CHAT:
            return { ...state, ...action.username }
        case actions.JOINED_CHAT:
            return { ...state, userid: action.id }
        case actions.NEW_USER:
            console.log(action)
            return { ...state, activeUsers:[...state.activeUsers, action.users] }
        case actions.CHANGE_NICKNAME:
            return { ...state, ...action.username }
        case actions.BROADCAST_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {content: action.content, user: action.user}]
            }
        case actions.NEW_MESSAGE:
            return {...state, messages: [...state.messages, {content: action.content, user: action.user}]}
        case actions.QUIT_CHAT:
            return { ...state, ...action.username }
        default:
            return state;
    }
}


export default reducer;