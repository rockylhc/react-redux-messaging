import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { actions as appActions } from './appSlice';

const messagesSlice = createSlice({
    name: 'messages',
    initialState: [],
    reducers:{},
    extraReducers: {
        [ appActions.gotMessage.type ]: (state, {payload})=>{
            if( payload && payload.type ){
                switch(payload.notification) {
                    case 'system':
                        state.push({
                            id: uuid(),
                            from: payload.notification,
                            type: payload.type,
                            content: payload.userid
                        })
                        break;
                    case 'user':
                        state.push({
                            id: uuid(),
                            ...payload
                        })
                        break;
                }
            }
        },
        [ appActions.sentMessage.type ]: (state, {payload})=>{
            if( payload && payload.type ){
                state.push({
                    id: uuid(),
                    ...payload
                })
            }
        }
    }
});

export const { actions, reducer } = messagesSlice;
export default reducer