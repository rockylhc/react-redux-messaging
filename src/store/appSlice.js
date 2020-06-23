import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        username: null,
        userid: 'undefined',
        messages: [],
        modal: false,
    },
    reducers:{
        enterChat: {
            reducer: (state, { payload }) => {
                return {...state, ...payload}
            },
            prepare: (state) => {
                return {payload:{ userid: uuid() }}
            }
        }
    }
})
export const { actions, reducer } = appSlice;
export const { enterChat } = actions;
export default reducer;
