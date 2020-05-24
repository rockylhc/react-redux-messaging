import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Message from './Message';
import styled from 'styled-components';

const MessageThreadStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-flow: column wrap;
    flex: 1;
    min-height: 0;
    justify-content: flex-end;
`
const Scrollable = styled.div`
    flex: 1;
    overflow-y: auto;
    width: 100%;
    
`

function MessageThread(){
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)

    return (
        <MessageThreadStyle>
            <Scrollable>

            {messages.length > 0 && messages.map((obj, i) => {
                return obj &&
                    <Message key={i} content={obj.content} from={obj.user} />
                }
            )}
            </Scrollable>
        </MessageThreadStyle>
    )
}

export default MessageThread;