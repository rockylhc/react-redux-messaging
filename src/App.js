import React from 'react';

import store from './store/configureStore';
import { Provider } from 'react-redux';
import Chatroom from './components/Chatroom';

function App() {
    return (
        <Provider store={store}>
            <Chatroom />
        </Provider>

    );
}
export default App;
