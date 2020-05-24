import React from 'react';
import { broadcastMessage } from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const InputBar = styled.form`
    margin: auto 0 0;
    padding: 1rem;
    border-top: 1px solid #c2c2c2;
    display: flex;
    justify-content: space-around;
    height: 2rem;
`
const InputStyle = styled.input`
    padding: .25rem;
    border: 0;
    border-bottom: 1px solid #c2c2c2;
    line-height: 0;
    flex: 1;
    &:focus{
        outline:0;
        box-shadow: 0;
    }
`
const SubmitButtonStyle = styled.button`
    margin-left: auto;
    margin-right: 0;
    background: #3f3f3f;
    color:#fff;
`

function MessageInput(){
    let input
    const dispatch = useDispatch()
    const user = useSelector(state => state.userid)
    const emitMessage = (e) =>{
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(broadcastMessage({content: input.value, user }))
        input.value = ''
    }

    return (
        <InputBar onSubmit={emitMessage}>
            <InputStyle ref={node => (input = node)} />
            <SubmitButtonStyle type='submit'>Send</SubmitButtonStyle>
        </InputBar>

    )
}

export default MessageInput;