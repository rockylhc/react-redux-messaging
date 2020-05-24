import * as types from './actionTypes';
import * as actions from './actionTypes';

export const userEntered = () => {
    return {
        type: 'socket',
        types: [null, actions.JOINED_CHAT],
        promise: socket => socket.connect()
    }
}

export const updateMessage = (data) => {

    return {
        type: actions.BROADCAST_MESSAGE,
        ...data
    }
}

export const sentMessage = (data) => {
    return {
        type: 'socket',
        types: [null, actions.BROADCAST_MESSAGE],
        promise: socket => socket.emit('chat', data)
    }
}

export const retrieveMessage = (msgAction) => {
    return {
        type: 'socket',
        types: [null, actions.NEW_MESSAGE],
        promise: socket => socket.on('broadcast', msgAction)
    }
}

export const newUserNotification = (msgAction) => {
    return {
        type: 'socket',
        types: [null, actions.NEW_USER],
        promise: socket => socket.on('newcomer', msgAction)
    }
}

export const userEnter = () => {
    return dispatch => {
        const newMessage = message => {
            return dispatch({type: actions.NEW_MESSAGE, ...message})
        }
        const newUser = user => {
            return dispatch({type: actions.NEW_USER, ...user})
        }
        dispatch(userEntered())
            .then(()=> dispatch(retrieveMessage(newMessage)))
            .then(()=> dispatch(newUserNotification(newUser)))

    }
}

export const otherUserJoin = () => {
    return dispatch => {
        const newUser = user => {
            return dispatch({type: actions.NEW_USER, ...user})
        }
        return dispatch(newUserNotification(newUser))
    }
}


export const broadcastMessage = (data) => {
    return dispatch => {
        dispatch(sentMessage(data))
        dispatch(updateMessage(data))
    }
}

