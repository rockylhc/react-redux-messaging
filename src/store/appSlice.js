import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const connectSocket = createAsyncThunk(
    'app/connectApp',
    async (data, { dispatch }) => {
        await dispatch({
            type: 'socket',
            types: enterChat.type,
            promise: socket => socket.connect()
        })
        .then(response => {
            return response;
        })

        dispatch(listenBroadcast( (msg)=>{
            return dispatch({type: gotMessage.type, ...msg})
        }))
    }
)

export const broadcastMessage = createAsyncThunk(
    'app/pingApp',
    async (data, { dispatch }) => {
        await dispatch({
            type: 'socket',
            types: sentMessage.type,
            promise: socket => socket.emit('broadcast', data)
        })
        .then(response => {
            return response;
        })
    }
)

export const listenBroadcast = (msg) => {
    return {
        type: 'socket',
        types: gotMessage.type,
        promise: socket => socket.on('message', msg)
    }
}


const appSlice = createSlice({
    name: 'app',
    initialState: {
        username: 'Anonymous',
        userid: null,
        messages: [],
        modal: false,
        loading: false,
        mint: true,
    },
    reducers:{
        enterChat: (state,  { payload } ) => {
            state.userid = payload.userid;
        },
        toggleModal:{
            reducer: (state, { payload }) => {
                state.modal = payload
            },
            prepare: state=> {
                return { payload: {id:'foo', state }}
            }
        },
        sentMessage: (state, { payload }) =>{},
        gotMessage:(state, { payload }) => {}
    },
    extraReducers:{
        [ connectSocket.pending ]: (state, action) => {
            state.loading = true;
        },
        [ connectSocket.fulfilled ]: (state, action) => {
            state.loading = false;
        }
    }
})
export const { actions, reducer } = appSlice;
export const { enterChat, toggleModal, sentMessage, gotMessage } = actions;
export default reducer;
