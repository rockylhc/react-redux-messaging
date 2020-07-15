import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { actions as appActions } from './appSlice';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers:{},
    extraReducers: {
        [ appActions.enterChat.type ]: (state, {payload})=>{
            if( payload && payload.users ){
                state.list = payload.users;
            }
        },
        [ appActions.gotMessage.type ]: (state, {payload})=>{
            if( payload && payload.users ){
                state.list = payload.users;
            }
        }
    }
});

export const { actions, reducer } = usersSlice;
export default reducer