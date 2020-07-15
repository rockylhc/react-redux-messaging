import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const SpeechBubble = styled.div`
    margin: .3rem;
    margin-left: ${props => (props.position == 'right' ?  '.3rem' : 'auto')};
    margin-right: ${props => (props.position == 'center' ? 'auto' : '')};
    padding: .25rem;
    border: ${props => (props.position == 'center' ? '0' : '1px')} solid #c2c2c2;
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
    color: ${props => (props.notification ? '#9d9d9d': '#000')};
    font-size: ${props => (props.notification ? '.75rem': '1rem')}
`


function Message(props){
    const { content, from, type } = props
    const userid = useSelector(state => state.app.userid)

    return (
        <SpeechBubble
            position={from ==='system' ? 'center' : from === userid ? 'left' : 'right'}>
            {from !== 'system' && <UserLabel>{ from }:</UserLabel> }
            <MessageStyle notification={ from ==='system' }>
                { from === 'system' ?
                    `${ content } has ${type === 'join'?'joined':'quit'}`
                    :
                 content
                }
            </MessageStyle>
        </SpeechBubble>
    )
}

export default Message;