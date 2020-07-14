import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from './EditIcon';
import styled from 'styled-components';
import { toggleModal } from '../store/appSlice';
import { v4 as uuid } from 'uuid';
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
    const currentuser = useSelector(state => state.app)
    const allUsers = useSelector(state => state.users.list)
    const dispatch = useDispatch()

    const showModel =() => {
        dispatch(toggleModal(true))
    }

    return (
        <ListBox>
            <NameList>
                {currentuser.username} ({currentuser.userid})
                <EditButton onClick={showModel}>
                    <EditIcon />
                </EditButton>
            </NameList>

            { allUsers.length > 0 && allUsers.map( ( userid ) => {
                return (
                    (currentuser.userid !== userid) &&
                    <NameList key={userid}>{userid}</NameList>
                )
            }) }
        </ListBox>
    )
}

export default UserList;