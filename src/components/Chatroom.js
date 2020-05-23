import { useDispatch, useSelector } from 'react-redux';
import { userEnter} from '../store/actions';
import io from 'socket.io-client';

function Chatroom() {
    const dispatch = useDispatch()
    const appState = useSelector(state => state)
    dispatch(userEnter)
    return (<>
        This is chatroom
    </>)
}

export default Chatroom;