import React, {useEffect} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from "../store/appSlice";

const ModalBox = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(40vw, 40%);
    width: 300px;
    height: 150px;
    border: 1px solid #c2c2c2;
    padding: 1rem;
    display: ${props => (props.show ? 'block' : 'none')};
    text-align:center;
`

const InputStyle = styled.input`
    padding: .25rem;
    border: 0;
    border-bottom: 1px solid #c2c2c2;
    line-height: 0;
    flex: 1;
    width: 80%;
    margin: 0 auto .5rem;
    display:block;
    &:focus{
        outline:0;
        box-shadow: 0;
    }
`

const ButtonStyle = styled.button`
    margin-left: auto;
    margin-right: 0;
    background: #3f3f3f;
    background: ${props => (props.secondary ? '#888888' : '#3f3f3f')};
    color: #fff;
    width:50%;
    padding: .5rem;
`

function ChangeNickNameModel(){
    let input;
    const dispatch = useDispatch();
    const modalState = useSelector( state=> state.app.modal);
    const username = useSelector(state => state.app.userid)

    const CloseModal = () =>{
        input.value = ''
        dispatch(toggleModal(false))
    }

    const ProceedChangeNickname = () =>{
        if (!input.value.trim()) {
            return
        }
        dispatch(changeNickName({old:username, username: input.value, type:'nickname'}))
        CloseModal()
    }

    return (
        <ModalBox show={modalState}>
            <h4>Please type your nickname and click OK</h4>
            <InputStyle type='text' ref={node => (input = node)} />
            <div>
                <ButtonStyle secondary onClick={CloseModal}>Cancel</ButtonStyle>
                <ButtonStyle onClick={ProceedChangeNickname}>OK</ButtonStyle>
            </div>

        </ModalBox>
    )

}

export default ChangeNickNameModel;