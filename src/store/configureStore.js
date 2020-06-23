import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import SocketClient from '../services/socketClient';
import middleware from './middleware';
import logger from 'redux-logger'
const socketClient = new SocketClient()

// const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware(socketClient))))

const store = configureStore({
    reducer: rootReducer,
    middleware: [middleware(socketClient), ...getDefaultMiddleware().concat(logger)]
})
export default store;