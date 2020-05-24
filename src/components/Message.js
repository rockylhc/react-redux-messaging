import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';


const SpeechBubble = styled.div`
    margin: .3rem;
    margin-left: ${props => (props.left ? 'auto' : '.3rem')};
    padding: .25rem;
    border: 1px solid #c2c2c2;
    display: flex;
    width: max-content;
    flex-direction: column;
    max-width: 400px;
`

const UserLabel = styled.h5`
    margin: .5rem;
    font-style: italic;  
`
const MessageStyle = styled.p`
    margin: .5rem; 
`


function Message(props){
    const { content, from } = props
    const userid = useSelector(state => state.userid)
    return (
        <SpeechBubble left={from === userid}>
            {from !== userid && <UserLabel>{userid}:</UserLabel>}
            <MessageStyle>{ content }</MessageStyle>
        </SpeechBubble>
    )
}

export default Message;