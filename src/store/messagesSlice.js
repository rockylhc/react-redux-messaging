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
                state.push({
                    from: payload.notification,
                    type: payload.type,
                    content: payload.userid
                })
            }
        }
    }
});

export const { actions, reducer } = messagesSlice;
export default reducer