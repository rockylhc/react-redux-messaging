import * as types from './actionTypes';
import * as actions from './actionTypes';

export const userEntered = () => {
    return {
        type: 'socket',
        types: [null, actions.JOINED_CHAT],
        promise: socket => socket.connect()
    }
}

export const updateNickName = (data) => {
    return {
        type: actions.BROADCAST_NICKNAME,
        ...data
    }
}
export const sentNickName = (data) => {
    return {
        type: 'socket',
        types: [null, actions.BROADCAST_NICKNAME],
        promise: socket => socket.emit('nickname', data)
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

export const listenNickNameEvent = (msgAction) => {
    return {
        type: 'socket',
        types: [null, actions.NEW_NICKNAME],
        promise: socket => socket.on('nickname', msgAction)
    }
}


export const modalClosed = (data) => {
    return {
        type: actions.MODAL_VISIBILITY,
        modal: false
    }
}
export const closeModal = (data) =>  dispatch => dispatch(modalClosed(data))
export const modalShow = (data) => {
    return {
        type: actions.MODAL_VISIBILITY,
        modal: true
    }
}
export const openModal = (data) =>  dispatch => dispatch(modalShow(data))

export const userEnter = () => {
    return dispatch => {
        const newMessage = message => {
            return dispatch({type: actions.NEW_MESSAGE, ...message})
        }
        const newUser = user => {
            return dispatch({type: actions.NEW_USER, ...user})
        }
        const newName = user => {
            return dispatch({type: actions.NEW_NICKNAME, ...user})
        }
        dispatch(userEntered())
            .then(()=> dispatch(retrieveMessage(newMessage)))
            .then(()=> dispatch(newUserNotification(newUser)))
            .then(()=> dispatch(listenNickNameEvent(newName)))

    }
}

export const broadcastMessage = (data) => {
    return dispatch => {
        dispatch(sentMessage(data))
        dispatch(updateMessage(data))
    }
}

export const broadcastNickname = (data) => {
    return dispatch => {
        dispatch(sentNickName(data))
        dispatch(updateNickName(data))
    }
}


