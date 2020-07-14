import appReducer from './appSlice';
import userReducer from './usersSlice';
import messageReducer from './messagesSlice';
export default ({app: appReducer, users: userReducer, messages: messageReducer });