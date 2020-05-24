import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userEnter, otherUserJoin } from '../store/actions';
import UserList from './UserList';
import MessageThread from './MessageThread';
import MessageInput from './MessageInput';
import styled from 'styled-components';

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
    const userid = useSelector(state => state.userid)
    const currentUsers = useSelector(state => state.activeUsers)
    const emitMessage = () =>{
        setMsgIndex(msgIndex+1);
        setUserMessage('foo')

    }

    useEffect(()=> {
        dispatch(userEnter())
        //dispatch(otherUserJoin())
    },[])
    return (
        <ChatroomFrame>
            <h1>{userid} {currentUsers.length}</h1>
            {/*<button onClick={emitMessage}>foo +1</button>*/}
            <Left>
                <UserList />
            </Left>
            <Right>
                <MessageThread />
                <MessageInput />
            </Right>
        </ChatroomFrame>
    )
}

export default Chatroom;