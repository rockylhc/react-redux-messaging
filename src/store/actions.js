import * as types from './actionTypes';
import io from 'socket.io-client';

export const userEntered = (user) => {
    return { }
    //return { type: types.LOGIN_SUCCESS, user }
}

export const userEnter = (user) => {
    return dispatch => {
        socket.on('init', res =>{
            console.log(res)
        })
        // dispatch(userLoggedIn(response))

    }
}
