import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userEnter, otherUserJoin } from '../store/actions';
import UserList from './UserList';
import MessageThread from './MessageThread';
import MessageInput from './MessageInput';
import styled from 'styled-components';
import ChangeNickNameModel from './ChangeNickNameModel';

const ChatroomFrame = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-grow: 1;
`

const Left = styled.div`
    display: flex;
    flex-basis: 10rem;
`

const Right = styled.div`
    display: flex;
    height: 100%;
    flex-grow: 1;
    flex-flow: column wrap;
`


function Chatroom() {
    const [ userMessage, setUserMessage ] = useState('')
    const [ msgIndex, setMsgIndex ] = useState(0);
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(userEnter())
    },[])
    return (
        <ChatroomFrame>
            <Left>
                <UserList />
            </Left>
            <Right>
                <MessageThread />
                <MessageInput />
            </Right>
            <ChangeNickNameModel />
        </ChatroomFrame>
    )
}

export default Chatroom;