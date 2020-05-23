import { combineReducers } from 'redux';
import * as actions from './actionTypes';

const initialState = {
    username: 'anonymous',
    userid: null
}


function reducer (state= initialState, action) {
    switch (action.type){
        case actions.ENTER_CHAT:
            return { ...state, ...action.user }
        case actions.CHANGE_NICKNAME:
            return { ...state, ...action.user }
        case actions.BROADCAST_MESSAGE:
            return { ...state, ...action.user }
        case actions.QUIT_CHAT:
            return { ...state, ...action.user }
        default:
            return state;
    }
}

export default reducer;