import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connectSocket } from '../store/appSlice';
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

const Sidebar = styled.div`
    display: flex;
    flex-basis: 10rem;
`

const Container = styled.div`
    display: flex;
    height: 100%;
    flex-grow: 1;
    flex-flow: column wrap;
`

function Chatroom() {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(connectSocket())
    },[])

   return(
    <ChatroomFrame>
        <Sidebar>
            <UserList />
        </Sidebar>
        <Container>
            <MessageThread />
            <MessageInput />
        </Container>
        <ChangeNickNameModel />
    </ChatroomFrame>
   );
}

export default Chatroom;