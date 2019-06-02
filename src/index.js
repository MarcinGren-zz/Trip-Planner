import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app'
import GlobalStyle from './global-style'
import rootReducer from './reducers/root-reducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store} >
    <GlobalStyle />
    <App />
  </Provider >,
  document.querySelector('#container')
)