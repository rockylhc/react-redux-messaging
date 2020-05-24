import React from 'react';
import ReactDOM from 'react-dom';
import Chatroom from './components/Chatroom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html,body, #root {
    height:100vh;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`
ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
          <Chatroom />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
