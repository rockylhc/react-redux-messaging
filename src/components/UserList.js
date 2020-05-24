import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const ListBox = styled.div`
    background: #fefefe;
    border-right: 1px solid #c2c2c2;
    padding: 1rem;
    width: 100%;
`

function UserList(){
    const username = useSelector(state => state.username)
    return (
        <ListBox>
            {username}
        </ListBox>
    )
}

export default UserList;