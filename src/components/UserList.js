import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EditIcon from './EditIcon';
import styled from 'styled-components';
import { openModal } from '../store/actions';
const ListBox = styled.div`
    background: #fefefe;
    border-right: 1px solid #c2c2c2;
    padding: 1rem;
    width: 100%;
`

const NameList = styled.div`
    border-bottom: 1px solid #c2c2c2;
    padding: 1rem;
`

const EditButton = styled.button`
    width: 50px;
    background: transparent;
    border: 0;
`


function UserList(){
    const username = useSelector(state => state.username)
    const allUsers = useSelector(state => state.activeUsers)
    const dispatch = useDispatch()
    const showModel =() => {
        dispatch(openModal())
    }

    return (
        <ListBox>
            <NameList>
                {username} (You)
                <EditButton onClick={showModel}><EditIcon /></EditButton>
            </NameList>

            { allUsers.map((name, i)=>{
                return (
                    (username !== name) &&
                    <NameList key={i}>{name}</NameList>
                )
            }) }
        </ListBox>
    )
}

export default UserList;