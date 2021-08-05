import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Global.scss'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import user from './reducers/user'

import { ModalProvider } from './components/GlobalModal/GlobalModal'

const store = createStore(combineReducers({ user }))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

