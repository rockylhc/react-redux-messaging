import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import SocketClient from '../services/socketClient';
import middleware from './middleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const socketClient = new SocketClient()

const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware(socketClient))))
export default store;