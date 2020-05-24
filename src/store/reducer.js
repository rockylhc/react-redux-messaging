import { combineReducers } from 'redux';
import * as actions from './actionTypes';

const initialState = {
    username: null,
    userid: null,
    activeUsers: [],
    messages: [],
    modal: false,
}
function reducer (state= initialState, action) {
    switch (action.type){
        case actions.ENTER_CHAT:
            return { ...state, ...action.username }
        case actions.JOINED_CHAT:
            return {
                ...state,
                userid: action.id,
                username: action.id,
                activeUsers: [...state.activeUsers, ...action.users]
            }
        case actions.NEW_USER:
            return { ...state, activeUsers: action.users }
        case actions.NEW_NICKNAME:
            return { ...state,
                activeUsers: state.activeUsers.map(cur =>{
                    if(cur === action.old){
                        return action.username
                    }
                    return cur;
                })
            }
        case actions.BROADCAST_NICKNAME:
            return { ...state,
                username: action.username,
                activeUsers: state.activeUsers.map(cur =>{
                    if(cur === action.old){
                        return action.username
                    }
                    return cur;
                })
            }
        case actions.MODAL_VISIBILITY:
            return { ...state, modal: action.modal }
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