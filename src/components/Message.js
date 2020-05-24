import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';


const SpeechBubble = styled.div`
    margin-left: ${props => (props.left ? 'auto' : '0')};
    padding: .25rem;
    border: 1px solid #c2c2c2;
    display: flex;
    width: min-content;
`

function Message(props){
    const { content, from } = props
    const userid = useSelector(state => state.userid)
    return (
        <SpeechBubble left={from === userid}>
            { content }
        </SpeechBubble>
    )
}

export default Message;